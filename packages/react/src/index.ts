export * from './components';
export { useBreakpointValue, useTheme } from './hooks';
export * from './primitives';

export * as components from './components';
export * as primitives from './primitives';

/**
 * Re-export public APIs from `@aws-amplify/ui`
 */
export {
  defaultTheme,
  defaultDarkModeOverride,
  createTheme,
  translations,
} from '@aws-amplify/ui';
export type { Theme } from '@aws-amplify/ui';
