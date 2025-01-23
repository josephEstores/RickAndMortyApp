import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Character } from '../../api/api';
import { styles } from './CharacterCard.styles';

interface CharacterCardProps {
  character: Character;
  navigation: any;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, navigation }) => {
  return (
    <View style={styles.card} key={character.id}>
      <Pressable onPress={() => navigation.navigate('CharacterDetails', { character })}>
        <Image source={{ uri: character.image }} style={styles.image} />
      </Pressable>
      <Text style={styles.name}>{character.name}</Text>
    </View>
  );
};

export default CharacterCard;
