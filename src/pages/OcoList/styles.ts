import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import Constants from "expo-constants";

const { width } = Dimensions.get("window");

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "space-between",
  },
})`
  background: #f5f6fa;
`;

export const Content = styled.View`
  margin-top: -36px;
`;

export const ExpandBarContainer = styled.TouchableOpacity``;

export const ExpandBar = styled(LinearGradient).attrs({
  colors: ["#f5f6fa", "#fff"],
})`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  padding: 13px 0;
`;

export const ListContainer = styled.View`
  background: #fff;
  padding: 20px 20px 0;
`;


export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  background: #f5f6fa;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 6px;
`;

export const AvatarContainer = styled.View`
  width: 60;
  height: 60;
  flex-direction: row;
  align-items: center;
`;


export const ItemTextContainer = styled.View`
  flex-direction: column;  
  flex: 1; 
  margin-left: 5;
`;

export const ButtonsContainer = styled.View`
flex-direction: row-reverse;
align-items: flex-end;
border-bottom-width: 1;
border-bottom-color: #CCC;
padding-bottom: 10;
margin-top: 10;
`;

export const Subactivity = styled.Text` 
  color: #4b4e5c;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15;
  line-height: 20;
`;

export const Localization = styled.Text`
  color: #6a6e81;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12;
  line-height: 20;
`;

export const ShoppingButtonInfo = styled.View`
  margin-left: 1px;
  flex: 1;
  flex-direction: row;
`;


export const ButtonsInRow = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
`;

export const LifeStyleMenuTitle = styled.Text`
  margin-top: 8px;
  font-size: 13px;
  color: #4b4e5c;
`;

export const Separator = styled.View`
  height: 1px;
  background: #f5f6fa;
  margin-left: 20px;
`;

export const Footer = styled.View`
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
