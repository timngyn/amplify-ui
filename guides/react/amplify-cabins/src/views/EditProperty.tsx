import {
  View,
  TextField,
  Card,
  Flex,
  FieldGroupIcon,
  Button,
} from '@aws-amplify/ui-react';

import { BiBed, BiDollar } from 'react-icons/bi';

export default function EditProperty() {
  return (
    <View as="form">
      <Card maxWidth="800px" margin="auto">
        <Flex direction="column">
          <TextField label="Name"></TextField>
          <Flex>
            <TextField label="Thumbnail path" width="50%"></TextField>
            <TextField label="Thumbnail alt text" width="50%"></TextField>
          </Flex>
          <TextField
            label="Beds"
            type="number"
            innerStartComponent={
              <FieldGroupIcon>
                <BiBed />
              </FieldGroupIcon>
            }
          ></TextField>
          <TextField
            label="Rate"
            type="number"
            innerStartComponent={
              <FieldGroupIcon>
                <BiDollar />
              </FieldGroupIcon>
            }
          ></TextField>
          <View textAlign="center">
            <Button variation="primary">Save property</Button>
          </View>
        </Flex>
      </Card>
    </View>
  );
}
