import React, { useState } from "react";
import { Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { add } from "react-native-reanimated";
import {
  cond,
  eq,
  Extrapolate,
  set,
  useCode,
  useValue,
} from "react-native-reanimated";
import {
  snapPoint,
  timing,
  usePanGestureHandler,
} from "react-native-redash/lib/module/v1";
import SVGLoader from "../../components/SVGLoader";

import { useAuth } from "../../contexts/auth";

import CustomIcon from "../../components/CustomIcon";

import {
  FFooter,
  FooterButton,
  FooterButtonContainer,
  FooterButtonText,
  FooterDescription,
  FooterLeftSide,
  FooterRightSide,
  FooterTitle
} from "./styles";

const { width } = Dimensions.get("window");

const Footer: React.FC = ({navigation}) => {
  const [balanceIsVisible, setBalanceIsVisible] = useState(true);

  const snapPoints = [-width - 20, (-width - 20) / 2, 0];

  const {
    gestureHandler,
    state,
    translation,
    velocity,
  } = usePanGestureHandler();

  const accountInfoTranslateX = useValue(0);
  const accountInfoOffsetX = useValue(0);
  const to = snapPoint(accountInfoTranslateX, velocity.x, snapPoints);

  const { signOut } = useAuth();

  useCode(
    () => [
      cond(
        eq(state, State.ACTIVE),
        set(accountInfoTranslateX, add(accountInfoOffsetX, translation.x))
      ),
      cond(eq(state, State.END), [
        set(accountInfoTranslateX, timing({ from: accountInfoTranslateX, to })),
        set(accountInfoOffsetX, accountInfoTranslateX),
      ]),
    ],
    []
  );

  return (
    <FFooter>
          <FooterLeftSide>
            <FooterTitle>Rodapé da Ocorrências</FooterTitle>
            <FooterDescription>
              Ajeitar Texto de acordo com o tema!
            </FooterDescription>
            <FooterButtonContainer onPress={() => {navigation.navigate('Home')}}>
              <FooterButton>
                <FooterButtonText>Menu Principal</FooterButtonText>
              </FooterButton>
            </FooterButtonContainer>
          </FooterLeftSide>
          <FooterRightSide>
            <SVGLoader name="footer_share" width={155} height={152} />
          </FooterRightSide>
    </FFooter>
  );
};

export default Footer;
