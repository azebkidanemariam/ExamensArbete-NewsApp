import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Image, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { color } from "../../styles/baseStyles";


/* const ImgSrc = require('../assets/HistoryPageHero.png') */
const imageUrl =
  "https://images.unsplash.com/photo-1640702149643-d172d1463fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyNHw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60";
/*   const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80'; */
const Music: React.FC = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
      <View style={[StyleSheet.absoluteFill, { justifyContent: "center" }]}>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={"9b81mWYIyTo"}
          onChangeState={onStateChange}
        />
        
        <View style={styles.button}>
          <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        </View>
      </View>
    </View>
  );
};
export default Music;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: color.lightgreen,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: "center",
    padding: 10,
  },
});
