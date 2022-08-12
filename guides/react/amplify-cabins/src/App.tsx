import { ScrollView, Grid, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { theme } from './theme';

import Header from './components/Header';
import Properties from './views/Properties';
import Login from './views/Login';
import EditProperty from './views/EditProperty';
import Theme from './views/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid gap="zero" templateRows="auto 1fr" height="100%">
        <Header />
        <ScrollView>
          <Theme />
          <Properties />
          <EditProperty />
          <Login />
        </ScrollView>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
