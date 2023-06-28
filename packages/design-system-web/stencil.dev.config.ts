import { Config } from '@stencil/core';
import { stencilBasicConfig } from './.build/stencil/stencil.basic.config';

export const config: Config = {
  ...stencilBasicConfig,
  tsconfig: './tsconfig.dev.json',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
