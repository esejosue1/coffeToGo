import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeAreaComponent = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: rgb(207, 182, 164);
`;
