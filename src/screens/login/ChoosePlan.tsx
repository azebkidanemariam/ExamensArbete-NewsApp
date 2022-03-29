import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ListRenderItem,
  Image,
} from "react-native";
import React, { useContext } from "react";
import { ContentContext } from "../../contexts/content/ContentContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { Plan } from "../../contexts/content/types";
import Button from "../../components/Button";
import globalStyles from "../../styles/styles";

const ChoosePlan: React.FC = () => {
  const { plans } = useContext(ContentContext)!;
  const renderPlans: ListRenderItem<Plan> = ({ item }) => (
    <SafeAreaView style={styles.planCard}>
      <View style={styles.planCardText}>
        <Text style={styles.planCardTitle}>{item.fields.title}</Text>
        <View style={styles.planCardDescription}>
          {item.fields.descriptionList.map((text) => (
            <Text style={styles.planCardText} key={text}>{text}</Text>
          ))}
        </View>
        <View style={styles.planCardDivider}></View>
        <View style={styles.planCardUspList}>
          {item.fields.uspList.map((text) => (
            <View style={styles.planCardUspRow} key={text}>
              <Image
                style={styles.planCardIcon}
                source={require("../../../assets/favicon.png")}
              />
              <Text style={styles.planCardText}>{text}</Text>
            </View>
          ))}
        </View>
      </View>
      <Button
        text="STARTA 30 DAGAR FRITT"
        onPress={() => handleChoosePlan(item.fields.title)}
      />
    </SafeAreaView>
  );

  const handleChoosePlan = (plan: string) => {
    console.log(plan);
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={plans}
        keyExtractor={(item) => item.sys.id}
        renderItem={renderPlans}
      />
    </View>
  );
};

export default ChoosePlan;

const styles = StyleSheet.create({
  planCard: {
    backgroundColor: "white",
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  planCardText: {
marginBottom:2,

  },
  planCardTitle: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  planCardIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  planCardDivider: {
    borderBottomColor: "#D1D0D2",
    marginBottom: 20,
    height: 20,
    borderBottomWidth: 1,
  },
  planCardDescription: {
    paddingHorizontal: 30,
  },
  planCardUspList: {
    paddingHorizontal: 30,
  },
  planCardUspRow: {
    flex: 1, 
    flexDirection: "row",
    marginBottom:5, 
  }
});