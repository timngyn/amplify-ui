import {
  Button,
  Card,
  Icon,
  View,
  Flex,
  Link,
  useAuthenticator,
} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

import Logo from './Logo';

export default function Header() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);

  const navigate = useNavigate();
  function logOut() {
    signOut();
    navigate('/login');
  }

  return (
    <View boxShadow="small" position="relative">
      <Card maxWidth="1100px" margin="0 auto">
        <Flex alignItems="center">
          <Link href="/" aria-label="Amplify Cabins">
            <Icon as={Logo}></Icon>
          </Link>
          <View marginLeft="auto">
            {route === 'authenticated' ? (
              <Flex alignItems="center">
                <Button onClick={() => navigate('/login')} size="small">
                  Admin
                </Button>
                <Button size="small" variation="link" onClick={() => logOut()}>
                  Sign out
                </Button>
              </Flex>
            ) : (
              <Button onClick={() => navigate('/login')} size="small">
                Sign in
              </Button>
            )}
          </View>
        </Flex>
      </Card>
    </View>
  );
}
