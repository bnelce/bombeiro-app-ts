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
  height: ${height * 0.24}px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
`;

export const AccountInfo = styled(Animated.View)`
  position: absolute;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSide = styled(Animated.View)``;

export const AccountBalanceLabel = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const AccountBalanceRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AccountBalance = styled.View`
  flex-direction: row;
`;

export const AccountBalanceCurrency = styled.Text`
  margin-right: 3px;
  font-size: 20px;
  color: #fff;
`;

export const AccountBalanceValue = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

export const VisibilityToggle = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const AccountBalanceInfo = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const RightSide = styled(Animated.View)``;

export const Avatar = styled.TouchableOpacity`
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const Initials = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #ff500f;
`;

export const SideIndicator = styled.View`
  flex-direction: row;
  margin-top: 18px;
`;

export const ActiveIndicator = styled(Animated.View)`
  position: absolute;
`;

export const LeftEmptyIndicator = styled.View`
  margin-right: 5px;
`;

export const RightEmptyIndicator = styled.View``;

export const FFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0 0 20px;
`;

export const FooterLeftSide = styled.View`
  padding-bottom: 20px;
  justify-content: space-between;
  flex: 1;
`;

export const FooterTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #4b4e5c;
`;

export const FooterDescription = styled.Text`
  font-size: 16px;
  color: #8c91a9;
`;

export const FooterButtonContainer = styled.TouchableOpacity``;

export const FooterButton = styled(LinearGradient).attrs({
  colors: ["#ff500f", "#ff8700"],
  end: [0.6, 1],
})`
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 4px;
  align-self: flex-start;
`;

export const FooterButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const FooterRightSide = styled.View`
  align-self: flex-end;
`;

