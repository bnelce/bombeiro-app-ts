import React, { useRef, useState } from "react";
import { ScrollView } from "react-native";
import SVGLoader from "../../components/SVGLoader";
import HeaderNav from "../../components/HeaderNav";

import {
  Container,
  Content,
  ExpandBarContainer,
  ExpandBar,
  Buttons,
  ShoppingButton,
  ShoppingButtonInfo,
  ShoppingButtonTitle,
  ShoppingButtonDescription,
  RightArrow,
  ButtonsInRow,
  InterTravelButton,
  InterTravelButtonTitle,
  InterTravelButtonDescription,
  ShellBoxButton,
  ShellBoxButtonTitle,
  ShellBoxButtonDescription,
  LifeStyleMenuItem,
  LifeStyleMenuImage,
  LifeStyleMenuTitle,
  Separator,
  BottomCards,
  SupportCard,
  SupportCardInfo,
  SupportAvatarContainer,
  SupportAvatar,
  SupportQuestion,
  SupportQuestionFirstLine,
  SupportQuestionSecondLine,
  SupportCardButton,
  ISafeCard,
  ISafeCardGenerate,
  ISafeCardButton,
  ISafeCardGenerateText,
  Footer,
  FooterLeftSide,
  FooterTitle,
  FooterDescription,
  FooterButtonContainer,
  FooterButton,
  FooterButtonText,
  FooterRightSide,
} from "./styles";


interface Props {
  navigation: void;
}

const CodeMenu: React.FC<Props> = ({ navigation }) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  function handleScrollToTop() {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
      <HeaderNav 
        title="Códigos Operacionais"
        subtitle="Códigos para comunicações via rádio"
        navigation={navigation}
      />
      <Content>        
        <Buttons>
          <ShoppingButton onPress={() => {navigation.navigate('Home')}}>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>Código Q</ShoppingButtonTitle>
              <ShoppingButtonDescription>
                Aproveite todos os produtos com cashback!
              </ShoppingButtonDescription>
            </ShoppingButtonInfo>            
          </ShoppingButton>
          <ShoppingButton onPress={() => {navigation.navigate('Home')}}>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>Código S</ShoppingButtonTitle>
              <ShoppingButtonDescription>
                Aproveite todos os produtos com cashback!
              </ShoppingButtonDescription>
            </ShoppingButtonInfo>            
          </ShoppingButton>
          <ShoppingButton onPress={() => {navigation.navigate('Home')}}>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>Código Numérico</ShoppingButtonTitle>
              <ShoppingButtonDescription>
                Aproveite todos os produtos com cashback!
              </ShoppingButtonDescription>
            </ShoppingButtonInfo>            
          </ShoppingButton>
        </Buttons>        
        <Separator />
         <Footer>
          <FooterLeftSide>
            <FooterTitle>Rodapé CodeMenu</FooterTitle>
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
        </Footer>
      </Content>
    </Container>
  );
};

export default CodeMenu;
