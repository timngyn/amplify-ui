import {
  View,
  Card,
  Heading,
  Flex,
  Rating,
  Button,
} from '@aws-amplify/ui-react';

export default function Theme() {
  return (
    <View>
      <Card maxWidth="800px" margin="auto">
        <Flex direction="column">
          <Heading level={2}>Greens</Heading>
          <Flex>
            <Box color="green.10"></Box>
            <Box color="green.20"></Box>
            <Box color="green.40"></Box>
            <Box color="green.60"></Box>
            <Box color="green.80"></Box>
            <Box color="green.90"></Box>
            <Box color="green.100"></Box>
          </Flex>
          <Heading level={2}>Teals</Heading>
          <Flex>
            <Box color="teal.10"></Box>
            <Box color="teal.20"></Box>
            <Box color="teal.40"></Box>
            <Box color="teal.60"></Box>
            <Box color="teal.80"></Box>
            <Box color="teal.90"></Box>
            <Box color="teal.100"></Box>
          </Flex>
          <Heading level={2}>Orange</Heading>
          <Flex>
            <Box color="orange.10"></Box>
            <Box color="orange.20"></Box>
            <Box color="orange.40"></Box>
            <Box color="orange.60"></Box>
            <Box color="orange.80"></Box>
            <Box color="orange.90"></Box>
            <Box color="orange.100"></Box>
          </Flex>
          <Heading level={2}>Red</Heading>
          <Flex>
            <Box color="red.10"></Box>
            <Box color="red.20"></Box>
            <Box color="red.40"></Box>
            <Box color="red.60"></Box>
            <Box color="red.80"></Box>
            <Box color="red.90"></Box>
            <Box color="red.100"></Box>
          </Flex>
          <Heading level={2}>Rating</Heading>
          <Rating value={3}></Rating>
          <Heading level={2}>Buttons</Heading>
          <Flex>
            <Button variation="primary">Primary</Button>{' '}
            <Button>Default</Button>
          </Flex>
        </Flex>
      </Card>
    </View>
  );
}

interface BoxProps {
  color: string;
}
export function Box({ color }: BoxProps) {
  return <View width="30px" height="30px" backgroundColor={color}></View>;
}
