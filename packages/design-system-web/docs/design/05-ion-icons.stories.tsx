import { h } from '@stencil/core';
import { stencilWrapper } from '../../.storybook/lib/stencilWrapper';

export default {
  title: 'Design/Ion Icons',
  parameters: {
    previewTabs: {
      'docs': { hidden: true },
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    options: { showPanel: true },
  },
};

const html1 = `<ion-icon name="happy-outline"></ion-icon>`;

const html2 = `<ion-icon name="happy-outline" size="large"></ion-icon>`;

const html3 = `<ion-icon name="heart" color="danger"></ion-icon>`;

export const IonIcons = stencilWrapper(
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>Ion Icons</h1>
        <p class="lead">This page is about the ion icon usage of this documentation.</p>
        <p>Inserting icons is simple:</p>
        <p>
          <geov-code language="html" code={html1}></geov-code>
        </p>
        <p>This will display: <ion-icon name="happy-outline"></ion-icon></p>
        <p>For a list of all available icons, see <a href='https://ionic.io/ionicons' target='_blank'>ionic.io/ionicons</a>.</p>
        <p class="lead">Advanced icons</p>
        <p>We can adjust the icons by adding attributes:</p>
        <p>Size: small or large</p>
        <p>
          <geov-code language="html" code={html2}></geov-code>
        </p>
        <p>This will display: <ion-icon name="happy-outline" size="large"></ion-icon></p>
        <p>Color: we can choose icon colors. For values, see <a href="?path=/story/design-theme-generator--theme-generator" target="_self">here</a>.</p>
        <p>
          <geov-code language="html" code={html3}></geov-code>
        </p>
        <p>This will display: <ion-icon name="heart" color="danger"></ion-icon></p>

      </ion-grid>
    </ion-content>
  </ion-app>,
);
