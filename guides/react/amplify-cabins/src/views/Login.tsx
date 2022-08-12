import { Flex, View, Authenticator } from '@aws-amplify/ui-react';

export default function Login() {
  return (
    <Flex direction="column" height="100%">
      <View margin="auto">
        <Authenticator></Authenticator>
      </View>
    </Flex>
  );
}
