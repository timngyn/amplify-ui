import { Card, Icon, View, Flex, Link, Button } from '@aws-amplify/ui-react';

import Logo from './Logo';

export default function Header() {
  return (
    <View>
      <Card maxWidth="1100px" margin="0 auto">
        <Flex alignItems="center">
          <Link href="/" aria-label="Amplify Cabins">
            <Icon as={Logo}></Icon>
          </Link>
          <View marginLeft="auto">
            <Button>Sign in</Button>
          </View>
        </Flex>
      </Card>
    </View>
  );
}
