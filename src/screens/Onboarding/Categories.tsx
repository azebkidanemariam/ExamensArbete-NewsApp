import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { ContentContext } from "../../contexts/content/ContentContext";
import { UserContext } from "../../contexts/user/UserContext";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { Category } from "../../contexts/content/types";
import CategoryList from "./CategoryList";
import styles from "./styles";
import Header from "../../components/Header";

const SelectCategories: React.FC = () => {
  const { categories } = useContext(ContentContext)!;
  const { setCategories } = useContext(UserContext)!;
  const [selected, setSelected] = useState<string[]>([]);
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (categories.length) {
      setFilteredCategories(categories);
    }
  }, [categories]);

  useEffect(() => {
    setFilteredCategories(
      categories.filter((category) =>
        category.fields.title
          .toLowerCase()
          .startsWith(searchPhrase.toLowerCase())
      )
    );
  }, [searchPhrase]);

  const toggleSelected = (entryId: string) => {
    if (selected.includes(entryId)) {
      setSelected(selected.filter((id) => id !== entryId));
    } else {
      setSelected([...selected, entryId]);
    }
  };

  const handleSubmit = () => {
    setCategories(selected);
  };

  return (
      
    <View style={styles.container}>
        <Header text="Categories" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Vad gillar du att läsa om?</Text>
        <Logo width={90} height={45} />
      </View>
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Kändisar, mode mm"
          placeholderTextColor="#706F70"
          onChangeText={(phrase) => setSearchPhrase(phrase)}
        />
        <CategoryList
          selected={selected}
          filteredCategories={filteredCategories}
          categories={categories}
          toggleSelected={toggleSelected}
        />
        <Button
          onPress={handleSubmit}
          text="TA MIG VIDARE"
          disabled={selected.length < 3}
        />
      </View>
    </View>
  );
};

export default SelectCategories;