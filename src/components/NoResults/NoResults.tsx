import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './NoResults.styles';

const NoResults: React.FC<{ message: string }> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default NoResults;
