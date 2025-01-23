import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Text } from 'react-native';
import { fetchCharacters, Character } from '../../api/api';
import CharacterCard from '@/components/CharacterCard/CharacterCard';
import { styles } from './HomeScreen.styles';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);


  const loadCharacters = async (page: number, name: string = '') => {
    if (loading) return; // Prevent duplicate requests
    setLoading(true);
    try {
      const data = await fetchCharacters(page, name);
      setCharacters((prevState) => [...prevState, ...data.results]);
    } catch (error) {
      console.error("No results found", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounce logic: Update `debouncedQuery` only after user stops typing for 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setCharacters([]);
    }, 1000); // 1000ms = 1 second

    return () => clearTimeout(timer); // Cleanup timeout on re-render
  }, [searchQuery]);

  useEffect(() => {
    loadCharacters(page, debouncedQuery);
  }, [page, debouncedQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    if (!loading) setPage((prevPage) => prevPage + 1);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search characters..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <CharacterCard character={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <Text>Loading...</Text> : null}
      />
    </View>
  );
};

export default HomeScreen;
