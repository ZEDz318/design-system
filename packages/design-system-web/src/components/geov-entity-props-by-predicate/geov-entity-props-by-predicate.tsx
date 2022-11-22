import { Component, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { GeovPaginatorCustomEvent } from '../../components';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import { PageEvent } from '../geov-paginator/geov-paginator';
import { regexReplace } from '../../lib/regexReplace';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';
import { FetchResponse } from '../../lib/FetchResponse';

const qrOutgoingProps = (predicateId: string, objectId: string, pageSize: number, offset: number) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT DISTINCT ?entity ?entityLabel ?entityType ?entityTypeLabel ?dt
WHERE {
  geov:${objectId} <${predicateId}> ?entity .
  OPTIONAL {?entity rdfs:label ?entityLabel .}
  OPTIONAL {?entity rdf:type ?entityType . OPTIONAL {?entityType rdfs:label ?entityTypeLabel .}}
  BIND (datatype(?entity) AS ?dt) .
}
LIMIT ${pageSize} OFFSET ${offset}
`;

const qrIncomingProps = (predicateId: string, objectId: string, pageSize: number, offset: number) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT DISTINCT ?entity ?entityLabel ?entityType ?entityTypeLabel ?dt
WHERE {
  ?entity <${predicateId}> geov:${objectId} .
  OPTIONAL {?entity rdfs:label ?entityLabel .}
  OPTIONAL {?entity rdf:type ?entityType . OPTIONAL {?entityType rdfs:label ?entityTypeLabel .}}
}
LIMIT ${pageSize} OFFSET ${offset}
`;

interface Bindings {
  entity: SparqlBinding;
  entityLabel?: SparqlBinding;
  entityType?: SparqlBinding;
  entityTypeLabel?: SparqlBinding;
  dt?: SparqlBinding;
  count: SparqlBinding;
}

export interface GeovEntityPropsByPredicateData extends FetchResponse {
  entities?: Bindings[];
  error?: boolean;
}

@Component({
  tag: 'geov-entity-props-by-predicate',
  styleUrl: 'geov-entity-props-by-predicate.css',
  shadow: true,
})
export class GeovEntityPropsByPredicate {
  /**
   * declares an _ssrId property that is reflected as attribute
   */
  @Prop({ reflect: true }) _ssrId?: string;
  /**
   * declares data as state
   */
  @State() data?: GeovEntityPropsByPredicateData;
  /**
   * entityId
   * ID number of entity, e.g. 'iXXX'
   */
  @Prop() entityId: string;
  /**
   * sparqlEndpoint
   * URL of the sparql endpoint
   */
  @Prop() sparqlEndpoint: string;
  /**
   * isOutgoing
   * determine if this property is outgoing or incoming
   */
  @Prop() isOutgoing: boolean;
  /**
   * totalCount
   * Total number of entity from this property
   */
  @Prop() totalCount: number;
  /**
   * pageSize
   * Page size if too many resultat for a property, default 10
   */
  @Prop() pageSize = 10;
  /**
   * language
   * prints the label with the language or english, if not found, e.g. 'en'
   */
  @Prop() language: string;
  /**
   * predicateUri
   * URI of the predicate
   */
  @Prop() predicateUri: string;
  /**
   * predicateLabel
   * Label of the predicate
   */
  @Prop() predicateLabel?: string;
  /**
   * uriRegex
   * Optional regex with capturing groups to transform
   * the uri into the desired url. To use together
   * with uriReplace.
   */
  @Prop() uriRegex?: string;
  /**
   * uriReplace
   * String used to replace the uriRegex.
   *
   * Example (pseudo code):
   * const uriRegex = (http:\/\/geovistory.org\/)(.*)
   * const uriReplace = "http://dev.geovistory.org/resource/$2?p=123"
   * http://geovistory.org/resource/i54321 => http://dev.geovistory.org/resource/54321?p=123
   */
  @Prop() uriReplace?: string;
  /**
   * pageIndex
   * Index of the page. By default: 0 = First page.
   */
  @State() pageIndex = 0;
  /**
   * entities
   * Binding of resultats from query
   */
  @State() entities: Bindings[];
  /**
   * pageChanged
   * Listener of change page
   */
  @Event() pageChanged: EventEmitter<PageEvent>;

  /*
   * assigns an id to the component
   */
  constructor() {
    setSSRId(this);
  }

  async componentWillLoad() {
    /**
     * try to get data from ssr
     */
    this.data = getSSRData(this._ssrId);

    // if no data found, fetchData
    if (!this.data) {
      // set data to loading (in immutable way)
      this.data = { loading: true };

      await this.pageReload()
        .then(d => {
          this.data = d;
          setSSRData(this._ssrId, d);
          return d;
        })
        .catch(d => {
          this.data = d;
          return d;
        });
    }
    this.pageReload();
  }

  changePage(pageEvent: GeovPaginatorCustomEvent<PageEvent>) {
    this.pageIndex = pageEvent.detail.pageIndex;
    this.data = { loading: true };
    this.pageReload()
      .then(d => {
        this.data = d;
        setSSRData(this._ssrId, d);
        return d;
      })
      .catch(d => {
        this.data = d;
        return d;
      });
  }

  async pageReload(): Promise<GeovEntityPropsByPredicateData> {
    let qr: string;
    if (this.isOutgoing) {
      qr = qrOutgoingProps(this.predicateUri, this.entityId, this.pageSize, this.pageIndex);
    } else {
      qr = qrIncomingProps(this.predicateUri, this.entityId, this.pageSize, this.pageIndex);
    }
    return sparqlJson<Bindings>(this.sparqlEndpoint, qr)
      .then(res => {
        return {
          entities: res?.results?.bindings,
          loading: false,
        };
      })
      .catch(_ => {
        return {
          error: true,
          loading: false,
        };
      });
  }

  render() {
    return (
      <Host>
        <ion-list lines="none">
          {/* Header */}
          <ion-item color="light">
            <ion-label>
              {this.predicateLabel} {this.totalCount && this.totalCount > this.pageSize ? '(' + this.totalCount + ')' : ''}
            </ion-label>
          </ion-item>

          {/* List */}
          {this.data?.entities?.map(entity => this.renderItem(entity))}

          {/* Paginator */}
          {this.totalCount && this.totalCount > 1 && this.renderPaginator()}
        </ion-list>
        <slot></slot>
      </Host>
    );
  }

  private renderItem(item: Bindings): JSX.Element {
    const isUri = item.entity.type === 'uri';
    if (isUri) {
      const regex = this.uriRegex;
      const replace = this.uriReplace;
      const url = regexReplace(item.entity.value, regex, replace);
      return <ion-item href={url}> {this.renderUri(item)} </ion-item>;
    }
    return <ion-item> {this.renderLiteral(item)}</ion-item>;
  }

  private renderUri(item: Bindings) {
    const klass = item.entityType?.value;

    switch (klass) {
      case 'http://www.w3.org/2006/time#DateTimeDescription':
        return this.renderDateTimeDescription(item);

      // here you can add more class-specific renderings

      default:
        return this.renderGenericEntity(item);
    }
  }

  private renderGenericEntity(item: Bindings) {
    return (
      <ion-label>
        <h2>{item.entityLabel?.value || '(no label)'}</h2>
        <p>{item.entityTypeLabel?.value}</p>
      </ion-label>
    );
  }

  private renderDateTimeDescription(item: Bindings) {
    return (
      <ion-label>
        <h2>
          <geov-display-time-datetimedescription
            entityId={item.entity?.value.replace('http://geovistory.org/resource/', '')}
            sparqlEndpoint={this.sparqlEndpoint}
          ></geov-display-time-datetimedescription>
        </h2>
        <p>DateTimeDescription</p>
      </ion-label>
    );
  }

  private renderLiteral(item: Bindings) {
    const dataType = item.dt?.value;

    switch (dataType) {
      case 'http://www.opengis.net/ont/geosparql#wktLiteral':
        return this.renderWktLiteral(item);
      case 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString':
        return this.renderLangStringLiteral(item);
      default:
        return this.renderXsdStringLiteral(item);
    }
  }

  private renderWktLiteral(item: Bindings) {
    return (
      <ion-label>
        <geov-display-geosparql-wktliteral value={item.entity?.value}></geov-display-geosparql-wktliteral>
      </ion-label>
    );
  }
  private renderXsdStringLiteral(item: Bindings) {
    return <ion-label>{item.entity.value}</ion-label>;
  }
  private renderLangStringLiteral(item: Bindings) {
    return (
      <ion-label>
        <h2>{item.entity.value}</h2>
        <p>@{item.entity?.['xml:lang']}</p>
      </ion-label>
    );
  }

  private renderPaginator(): JSX.Element {
    return (
      <ion-item lines="none">
        {this.totalCount > this.pageSize && ( // If there are exactly or less than 'pageSize' lines, no paginator is needed
          <geov-paginator length={this.totalCount} pageSize={this.pageSize} pageIndex={this.pageIndex} onPageChanged={ev => this.changePage(ev)}></geov-paginator>
        )}
      </ion-item>
    );
  }
}
