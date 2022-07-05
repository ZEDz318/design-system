import { defineCustomElements } from '../loader'

defineCustomElements()

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Welcome',
        'Design', ['Overview', 'Layout', 'Theming', 'Theme Generator', 'Theme Generator Color'],
        'Contributing'
      ],
    },
  },
}
