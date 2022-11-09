export interface SparqlRes<T> {
  results?: {
    bindings?: T[];
  };
}
export interface SparqlBinding<T> {
  value: T;
}
export async function sparqlJson<T>(url: string, query: string): Promise<SparqlRes<T>> {
  const params = new URLSearchParams({ query: query });
  const res = await fetch(`${url}?${params}`, {
    method: 'GET',
    headers: {
      Accept: 'application/sparql-results+json',
    },
    redirect: 'follow',
  });
  return res.json() as Promise<SparqlRes<T>>;
}
