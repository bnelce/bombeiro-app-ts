import React, { useRef, useState } from "react";
import { ScrollView, View } from "react-native";

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

const CodeS: React.FC<Props> = ({ navigation }) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  function handleScrollToTop() {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }

  return (
    <View style={{flex:1}}>
    
     
    <View style={{marginTop:30  }}>
        
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-6660984130044244/7058801940"  
          setTestDeviceIDAsync
          servePersonalizedAds  
          onDidFailToReceiveAdWithError={ (err)=>  console.log} />
         
     </View>

    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
       <HeaderNav 
        title="Numeral ONU"
        subtitle=""
        navigation={navigation} 
        image="emblema"
      />

      <Content>
        <Buttons>
          <TextContainer>
            <ShoppingButtonInfo>
              <Title>Numeral ONU</Title>
              <Article>
              Código ONU ou Número ONU para produtos químicos é o número de série de 4 ou mais dígitos gravados como chassis nas embalagens maiores que 5kg , dado ao artigo ou substância química, de acordo com o sistema das Nações Unidas
              </Article>
               
            </ShoppingButtonInfo>
          </TextContainer>
        </Buttons>

        <Buttons>
          <TextContainer>
            <ShoppingButtonInfo>
            <Subtitle>	Classe 1 – Explosivos	</Subtitle>
            <Article>	Subclasse 1.1 Substâncias e artefatos com risco de explosão  em massa;	</Article>
            <Article>	Subclasse 1.2 Substâncias e artefatos com risco de projeção;	</Article>
            <Article>	Subclasse 1.3 Substâncias e artefatos com risco predominante de fogo;	</Article>
            <Article>	Subclasse 1.4 Substâncias e artefatos que não representam risco significativo;	</Article>
            <Article>	Subclasse 1.5 Substâncias pouco sensíveis;	</Article>
            <Article>	Subclasse 1.6 Substâncias extremamente insensíveis.	</Article>
            
            <Subtitle>	Classe 2 – Gases	</Subtitle>
            <Article>	Subclasse 2.1 Gases inflamáveis;	</Article>
            <Article>	Subclasse 2.2 Gases comprimidos não tóxicos e não inflamáveis;	</Article>
            <Article>	Subclasse 2.3 Gases tóxicos por inalação.	</Article>
            
            <Subtitle>	Classe 3 – Líquidos inflamáveis	</Subtitle>
            <Article>	Classe 4 – Sólidos inflamáveis; Substâncias auto-reagentes e explosivos sólidos insensibilizados	</Article>
            <Article>	Subclasse 4.1Sólidos inflamáveis;	</Article>
            <Article>	Subclasse 4.2 Substâncias passíveis de combustão espontânea;	</Article>
            <Article>	Subclasse 4.3 Substâncias que, em contato com a água, emitem gases inflamáveis.	</Article>
            
            <Subtitle>	Classe 5 – Substâncias Oxidantes e Peróxidos Orgânicos.	</Subtitle>
            <Article>	Subclasse 5.1 Substâncias Oxidantes;	</Article>
            <Article>	Subclasse 5.2 Peróxidos Orgânicos.	</Article>
            
            <Subtitle>	Classe 6 – Substâncias Tóxicas e Substâncias Infectantes.	</Subtitle>
            <Article>	Subclasse 6.1 Substâncias Tóxicas;	</Article>
            <Article>	Subclasse 6.2 Substâncias Infectantes.	</Article>
            
            <Subtitle>	Classe 7 – Substâncias Radioativas	</Subtitle>
            
            <Subtitle>	Classe 8 – Substâncias Corrosivas	</Subtitle>
            
            <Subtitle>	Classe 9 – Substâncias Perigosas Diversas	</Subtitle>

               
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

export default CodeS;
