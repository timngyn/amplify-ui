import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import ReactDOM from 'react-dom/client';

import App from './App';

import '@aws-amplify/ui-react/styles.css';
import './index.css';

import { theme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
