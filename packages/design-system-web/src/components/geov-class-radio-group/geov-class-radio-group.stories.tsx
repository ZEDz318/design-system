import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Explorer/Filters/Class Radio Group',
    tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};
export const ClassSelectCheckedOnInit = stencilWrapper(
  <geov-class-radio-group
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
    preferredItems={['uri1', 'uri2']}
    uriPrefix={''}
    onSelectionChanged={e => {
      console.log(e.detail.value);
    }}
  ></geov-class-radio-group>,
);
