import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { defineCustomElement } from '../../../dist/components/geov-class-select-popup';
defineCustomElement();
export default {
  title: 'Data Components/Explorer/Filters/Class Select Popup',
};
export const ClassSelectInitVal = stencilWrapper(
  <geov-class-select-popup
    initValue={{
      classLabel: 'Class 1',
      classUri: 'uri1',
      instanceCount: 98443,
    }}
    items={[
      {
        classLabel: 'Class 1',
        classUri: 'uri1',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 2',
        classUri: 'uri2',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 3',
        classUri: 'uri3',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 4',
        classUri: 'uri4',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 5',
        classUri: 'uri5',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 6',
        classUri: 'uri6',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 7',
        classUri: 'uri7',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 8',
        classUri: 'uri8',
        instanceCount: 98443,
      },
    ]}
    onSelectionChanged={e => {
      console.log(e.detail.value);
    }}
  ></geov-class-select-popup>,
);
export const ClassSelectNoInitVal = stencilWrapper(
  <geov-class-select-popup
    items={[
      {
        classLabel: 'Class 1',
        classUri: 'uri1',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 2',
        classUri: 'uri2',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 3',
        classUri: 'uri3',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 4',
        classUri: 'uri4',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 5',
        classUri: 'uri5',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 6',
        classUri: 'uri6',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 7',
        classUri: 'uri7',
        instanceCount: 98443,
      },
      {
        classLabel: 'Class 8',
        classUri: 'uri8',
        instanceCount: 98443,
      },
    ]}
    onSelectionChanged={e => {
      console.log(e.detail.value);
    }}
  ></geov-class-select-popup>,
);
