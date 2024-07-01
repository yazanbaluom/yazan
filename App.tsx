import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigation from './Routes/Nav';
import AppProvider from './Store/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <View style={styles.container}>
        <MainNavigation />
      </View>
    </AppProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
