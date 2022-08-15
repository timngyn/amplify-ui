import {
  View,
  TextField,
  Card,
  Flex,
  FieldGroupIcon,
  Button,
} from '@aws-amplify/ui-react';
import { BiBed, BiDollar } from 'react-icons/bi';

import Layout from '../components/Layout';

export default function EditProperty() {
  return (
    <Layout>
      <View as="form">
        <Card maxWidth="800px" margin="auto">
          <Flex direction="column">
            <TextField label="Name"></TextField>
            <Flex>
              <TextField label="Thumbnail path" width="50%"></TextField>
              <TextField label="Thumbnail alt text" width="50%"></TextField>
            </Flex>
            <Flex>
              <TextField
                label="Beds"
                type="number"
                width="50%"
                innerStartComponent={
                  <FieldGroupIcon>
                    <BiBed />
                  </FieldGroupIcon>
                }
              ></TextField>
              <TextField
                label="Rate"
                type="number"
                width="50%"
                innerStartComponent={
                  <FieldGroupIcon>
                    <BiDollar />
                  </FieldGroupIcon>
                }
              ></TextField>
            </Flex>
            <View textAlign="center">
              <Button variation="primary">Save property</Button>
            </View>
          </Flex>
        </Card>
      </View>
    </Layout>
  );
}
