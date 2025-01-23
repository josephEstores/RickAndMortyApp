import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './CharacterDetailsScreen.styles';

interface CharacterDetailsProps {
  route: any;
}

const CharacterDetailsScreen: React.FC<CharacterDetailsProps> = ({ route }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Species: {character.species}</Text>
      <Text>Gender: {character.gender}</Text>
      <Text>Location: {character.location.name}</Text>
    </View>
  );
};

export default CharacterDetailsScreen;
