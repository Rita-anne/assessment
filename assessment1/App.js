import React from 'react';
import { View, StyleSheet } from 'react-native';
import CurrencyConverter from '...assessment1/..assessment1/.assessment1/ass';

const App = () => {
  return (
    <View style={styles.container}>
<CurrencyConverter/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;