import React, { useRef, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Linking, FlatList } from "react-native";

import SVGLoader from "../../components/SVGLoader";
import HeaderNav from "../../components/HeaderNav";

import { Feather as Icon } from '@expo/vector-icons';

import {
  Container,
  Content,
  Buttons,
  ShoppingButtonInfo,
  Title,
  Subtitle,
  Article,
  Separator,
  Footer,
  FooterLeftSide,
  FooterTitle,
  FooterDescription,
  FooterButtonContainer,
  FooterButton,
  FooterButtonText,
  FooterRightSide,
  TextContainer,
  ViewLinksLaw,
} from "./styles";

// ADMOB 
import {
  AdMobBanner,
  AdMobInterstitial,
  setTestDeviceIDAsync
  
  } from 'expo-ads-admob';
   

  ///

  //itens da flatlist

  
const items = [
   
  {
    id:1,
    title:  'LEI Nº 11.901',
    subtitle: "Dispõe sobre a Profissão de Bombeiro Civil",
    url: "http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l11901.htm",
  }, 

  {
    id:2,
    title:  'NBR 14608',
    subtitle: "Bombeiro civil ― Requisitos e procedimentos",
    url: "https://sinproquim.org.br/docs/14608.pdf",
  }, 

  {
    id:3,
    title:  'NBR 15219',
    subtitle: "Plano de emergência contra incêndio — Requisitos e procedimentos",
    url: "https://sinproquim.org.br/docs/Projeto%20de%20Revisao%20ABNT%20NBR%2015219.pdf",
  }, 

  {
    id:4,
    title:  'NBR 14276',
    subtitle: "Brigada de emergências de incêndio",
    url: "http://cipa.iqsc.usp.br/files/2016/05/NBR-14276-Brigada-de-Inc%C3%AAndio.pdf",
  }, 

  {
    id:5,
    title:  'NBR 14276',
    subtitle: "Brigada de emergências de incêndio",
    url: "http://cipa.iqsc.usp.br/files/2016/05/NBR-14276-Brigada-de-Inc%C3%AAndio.pdf",
  }, 


];

  //



interface Props {
  navigation: void;
}

const Laws: React.FC<Props> = ({ navigation }) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  function handleScrollToTop() {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
      {/* <HeaderNav /> */}

    <View>
         
         <AdMobBanner
           bannerSize="fullBanner"
           adUnitID="ca-app-pub-6660984130044244/7058801940"  
           setTestDeviceIDAsync
           servePersonalizedAds  
           onDidFailToReceiveAdWithError={ (err)=>  console.log} />
          <Text>{`\n`}</Text>
       </View>


      <Content>


      <FlatList
          data={items}
          keyExtractor={midias =>String(items.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item:items})=>(
                   
          <Buttons>
            <TextContainer>
              <ShoppingButtonInfo>
                <TouchableOpacity  onPress={() => Linking.openURL(items.url) }> 
                  <ViewLinksLaw>
                    <Title>
                      {items.title}{`\n`}
                      <Subtitle>{items.subtitle}</Subtitle>
                    </Title>
                    <Icon name="search" size={22} color="black" />
                  </ViewLinksLaw>
                  </TouchableOpacity>
                </ShoppingButtonInfo>
              </TextContainer>
          </Buttons> 
                  
               )}
           
           />  

  
        <Separator />
        <Footer>
          <FooterLeftSide>
            <FooterTitle>Rodapé da Legislação</FooterTitle>
            <FooterDescription>
              Ajeitar Texto de acordo com o tema!
            </FooterDescription>
            <FooterButtonContainer onPress={() => {navigation.navigate('Home')}}>
              <FooterButton>
                <FooterButtonText>Menu Principal</FooterButtonText>
              </FooterButton>
            </FooterButtonContainer>
          </FooterLeftSide>
          <FooterRightSide marginRight={20} marginBottom={30} >
            <SVGLoader name="book" width={60} height={60} />
          </FooterRightSide>
        </Footer>
      </Content>
    </Container>
  );
};

export default Laws;
