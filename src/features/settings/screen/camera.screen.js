import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";
const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
    }
  };
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
        ratio={"16:9"}
      />
    </TouchableOpacity>
  );
};
