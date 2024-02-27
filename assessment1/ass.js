import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CurrencyConverter = () => {
  const [usdAmount, setUsdAmount] = useState('');
  const [equivalentRwf, setEquivalentRwf] = useState('');

  const convertIntoRwf = () => {
    const exchangeRate = 1300;

    const rwf = usdAmount * exchangeRate;
    setEquivalentRwf(rwf.toFixed(3));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Amount in Dollars:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={usdAmount}
        onChangeText={(text) => setUsdAmount(text)}/>
        <Button title="Convert" onPress={convertIntoRwf} />

      {equivalentRwf !== '' && (
        <Text style={styles.result}>
          Equivalent in Rwandan Francs: {equivalentRwf} RWF
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: 200,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default CurrencyConverter;

