import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Design Components/Carousel',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const Carousel = stencilWrapper(
  <geov-carousel
    style={{ height: '400px', maxWidth: '600px' }}
    images={[
      'https://www.geovistory.org/carousel-1_maquette-lugdunum.jpg',
      'https://www.geovistory.org/carousel-2_tapisserie-bayeux.jpg',
      'https://www.geovistory.org/carousel-3_vitrail.jpg',
      'https://www.geovistory.org/carousel-4_astrolabe-arabe.jpg',
      'https://www.geovistory.org/carousel-5_quetzalcoatl.jpg',
      'https://www.geovistory.org/carousel-6_bronzes-benin.jpg',
      'https://www.geovistory.org/carousel-7_carte-amerique.jpg',
      'https://www.geovistory.org/carousel-8_assemble-vizille.jpg',
      'https://www.geovistory.org/carousel-9_acte-deces.jpg',
      'https://www.geovistory.org/carousel-10_guerre-russo-japonaise.jpg',
      'https://www.geovistory.org/carousel-11_congret-musique.jpg',
      'https://www.geovistory.org/carousel-12_toronto.jpg',
    ]}
  ></geov-carousel>,
);
