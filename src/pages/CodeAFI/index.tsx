import React, { useRef, useState } from "react";
import { ScrollView,View } from "react-native";

import SVGLoader from "../../components/SVGLoader";
import HeaderNav from "../../components/HeaderNav";

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
} from "./styles";


// ADMOB 
import {
  AdMobBanner,
  AdMobInterstitial,
  setTestDeviceIDAsync
  
  } from 'expo-ads-admob';

  ///



interface Props {
  navigation: void;
}

const CodeAFI: React.FC<Props> = ({ navigation }) => {

  const scrollViewRef = useRef<ScrollView>(null);

  return (

    <View style={{flex:1}}>
    
     
    {/* <View style={{marginTop:30  }}>
        
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-6660984130044244/7058801940"  
          setTestDeviceIDAsync
          servePersonalizedAds  
          onDidFailToReceiveAdWithError={ (err)=>  console.log} />
         
     </View> */}
     
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
       <HeaderNav 
        title={`Alfabeto Fonético\n Internacional`}
        subtitle={` `}
        navigation={navigation}
        image="emblema"

      />
      <Content>
        <Buttons>
          <TextContainer>
            <ShoppingButtonInfo>
              <Title>Alfabeto Fonético Internacional</Title>
              <Article>	  A     Alpha       AL – FA	</Article>
              <Article>	  B     Bravo       BRA – VO	</Article>
              <Article>	  C     Charlie     CHAR – LIE	</Article>
              <Article>	  D     Delta       DEL – TA	</Article>
              <Article>	  E     Echo        E – CHO	</Article>
              <Article>	  F     Foxtrot     FOX – TROT	</Article>
              <Article>	  G     Golf        GOLFE	</Article>
              <Article>	  H     Hotel       HO – TEL	</Article>
              <Article>	  I     Indian      IN – DI – AN	</Article>
              <Article>	  J     Juliet      JU – LI – ETE	</Article>
              <Article>	  K     Kilo        KI – LO	</Article>
              <Article>	  L     Lima        LI – MA	</Article>
              <Article>	  M     Mike        MAI – QUE	</Article>
              <Article>	  N     November    NO – VEM – BER	</Article>
              <Article>	  O     Oscar       OS – CAR	</Article>
              <Article>	  P     Papa        PA – PA	</Article>
              <Article>	  Q     Québec      QUE – BE – QUE	</Article>
              <Article>	  R     Romeu       RO – MEU	</Article>
              <Article>	  S     Sierra      SI –E – RRA	</Article>
              <Article>	  T     Tango       TAN – GO	</Article>
              <Article>   U     Uniform     U- NI- FOR- ME	</Article>
              <Article>	  V     Victor      VIC – TOR	</Article>
              <Article>	  W     Whiskey     WHIS – KEY	</Article>
              <Article>	  X     X Ray       EX- REY	</Article>
              <Article>	  Y     Yankee      IAN – QUI	</Article>
              <Article>	  Z     Zulu        ZU – LU	</Article>

              <View style={{width:'100%', marginLeft:-20   }}>
                
                <AdMobBanner
                style={{marginTop:20, marginBottom:20}}
                  bannerSize="mediumRectangle"
                  adUnitID="ca-app-pub-6660984130044244/7058801940"  
                  setTestDeviceIDAsync
                  servePersonalizedAds  
                  onDidFailToReceiveAdWithError={ (err)=>  console.log} />
                
            </View>

                    
            </ShoppingButtonInfo>
          </TextContainer>
        </Buttons>
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
          <FooterRightSide>
            <SVGLoader name="footer_share" width={155} height={152} />
          </FooterRightSide>
        </Footer>
      </Content>
    </Container>
    </View>
  );
};

export default CodeAFI;
