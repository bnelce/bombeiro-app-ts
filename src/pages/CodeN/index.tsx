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

const CodeN: React.FC<Props> = ({ navigation }) => {
  

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
        title="Código Númerico"
        subtitle="Códigos para comunicações via rádio"
        navigation={navigation}
        image="emblema"

      />
       
      <Content>

      


        <Buttons>
          <TextContainer>
            <ShoppingButtonInfo>
              <Title>NUMÉRICO SEQUENCIAL</Title>              
              <Article>0 - Negativo</Article>
              <Article>1 - Primeiro</Article>              
              <Article>2 - Segundo</Article>              
              <Article>3 - Terceiro</Article>              
              <Article>4 - Quarto</Article>              
              <Article>5 - Quinto</Article>              
              <Article>6 - Sexto</Article>              
              <Article>7 - Sétimo</Article>              
              <Article>8 - Oitavo</Article>              
              <Article>9 - Nono</Article>              
            </ShoppingButtonInfo>
          </TextContainer>
        </Buttons>

        <Buttons>
          <TextContainer>
            <ShoppingButtonInfo>
            <Title>	Número por extenso e pronúncia </Title>
            <Article>	 0      Zero      ZE – RO	</Article>
            <Article>	 1      Uno       U – NO	</Article>
            <Article>	 2      Dois      DO – IS	</Article>
            <Article>	 3      Três      TRE – IS	</Article>
            <Article>	 4      Quatro    QUA – TRO	</Article>
            <Article>	 5      Cinco     CIN – CO	</Article>
            <Article>	 6      Seis      MEIA - DÚZIA	</Article>
            <Article>	 7      Sete      SE – TE	</Article>
            <Article>	 8      Oito      OI – TO	</Article>
            <Article>  9      Nono      NO- VE</Article> 

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
          <FooterRightSide margin={20}>
            <SVGLoader name="bmcodn" width={155} height={152} />
          </FooterRightSide>
        </Footer>
      </Content>
      
    </Container>
    </View>
  );
};

export default CodeN;
