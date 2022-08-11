import { AppRegistry } from 'react-native';
import App from './App';
import StorybookUIRoot from './storybook';
import { name as appName } from './app.json';

const isStorybook = true;

AppRegistry.registerComponent(appName, () =>
  isStorybook ? StorybookUIRoot : App
);
