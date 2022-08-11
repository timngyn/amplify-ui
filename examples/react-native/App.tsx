import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StorybookUIRoot from './storybook';

const App = () => {
  const isStorybook = true;

  if (isStorybook) {
    return <StorybookUIRoot />;
  }

  return (
    <View style={style.container}>
      <Text>Hello World! This is sugar2code! Wooo</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default App;
