import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  Flex,
  View,
  Authenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react';

import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout>
      <Flex direction="column" height="100%">
        <View margin="auto">Authenticator goes here</View>
      </Flex>
    </Layout>
  );
}
