import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

const { height } = Dimensions.get("window");

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Container = styled(LinearGradient).attrs({
  colors: ["#ff500f", "#ff8700"],
  end: [1.5, 1.5],
})`
  padding: ${20 + statusBarHeight}px 20px 0;
  height: ${height * 0.21}px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
`;

export const AccountInfo = styled(Animated.View)`
  position: absolute;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const InfoContainer = styled.View`
  flex-direction: column;  
  margin-left: 10px;
`;

export const BackContainer = styled.TouchableOpacity`
  flex-direction: column;
  height: 32px;
  justify-content: center;
  align-items: center;

`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

export const Subtitle = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const Avatar = styled.TouchableOpacity`
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
 
`;
