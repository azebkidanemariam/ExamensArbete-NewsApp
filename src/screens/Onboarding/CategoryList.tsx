import { Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { Category } from "../../contexts/content/types";

interface CategoryListProps {
  selected: string[];
  filteredCategories: Category[];
  categories: Category[];
  toggleSelected: (entryId: string) => void;
}

const CategoryList = (props: CategoryListProps) => {
  return (
    <ScrollView contentContainerStyle={styles.categoryContainer}>
      {props.categories.length
        ? props.filteredCategories.map((category) => {
            const isActive = props.selected.includes(category.sys.id);
            return (
              <Pressable
                style={[
                  styles.button,
                  isActive ? styles.active : styles.inactive,
                ]}
                key={category.sys.id}
                onPress={() => props.toggleSelected(category.sys.id)}
              >
                <View style={styles.textWrapper}>
                  <Text
                    style={
                      isActive
                        ? styles.delimiterActive
                        : styles.delimiterInactive
                    }
                  >
                    {isActive ? "-" : "+"}
                  </Text>
                  <Text
                    style={[isActive ? styles.textActive : styles.textInactive]}
                  >
                    {category.fields.title}
                  </Text>
                </View>
              </Pressable>
            );
          })
        : null}
    </ScrollView>
  );
};

export default CategoryList;