import React, { useRef, useState } from "react";
import { ScrollView,View,Text } from "react-native";

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


// ADMOB  $$$
import {
  AdMobBanner,
  AdMobInterstitial,
  setTestDeviceIDAsync
  
  } from 'expo-ads-admob';

  ///

  

interface Props {
  navigation: void;
}

const CodeQ: React.FC<Props> = ({ navigation }) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  function handleScrollToTop() {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
       <HeaderNav 
        title="Código Q"
        subtitle="Código britânico para comunicações via"
        navigation={navigation}
      />

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
        <Buttons>
          <TextContainer>
            <ShoppingButtonInfo>
              <Title>Código Q.</Title>
              <Subtitle>Código britânico para comunicações via rádio.</Subtitle>
              <Article>
              QAP:	Está na escuta?	Permaneça na escuta ou estou na escuta.
              </Article>
              <Article>
              QAM: Qual é a condição meteorológica?	Aqui a condição meteorológia é ….
              </Article>
              <Article>QRA:	Qual o nome operador? -	O meu nome é …</Article>
              <Article>
              QRB:	A qual distância aproximada você está da minha estação?	A distância aproximada entre nossas estações é… milhas náuticas (ou quilômetros).
              </Article>
              <Article>QRC:	Que organização particular (ou administração estadual) liquida as contas de sua estação?	A liquidação das contas da minha estação está sob o encargo da organização particular… (ou da administração estadual…)</Article>
              <Article>QRD:	Aonde vai e de onde vem?	Vou a… e venho de…</Article>
              <Article>QRE:	A que horas pensa chegar a… (ou estar sobre…) (lugar)	Penso chegar a…(lugar) (ou estar sobre…) às… horas.</Article>
              <Article>QRG:	Qual é minha frequência exata (ou frequência exata de…)?	Sua frequência exata (ou frequência exata de…) é… kHz (ou… MHz).</Article>
              <Article>QRH:	Minha frequência varia?	Sua frequência varia.</Article>
              <Article>QRI:	Como é a tonalidade de minha estação?	A tonalidade de sua estação é: Boa; Variável; Ruim</Article>
            
              <Article>QRJ:	Quantas chamadas radiotelefônicas você tem para despachar?	Eu tenho … chamadas radiotelefônicas para despachar.</Article>
              <Article>QRK:	Qual a clareza dos meus sinais (ou de…) ?	A clareza de seus sinais (ou dos sinais de) é: Ruim; Pobre; Razoável; Boa; Excelente.</Article>
              <Article>QRL:	Você está ocupado?	Estou ocupado (ou ocupado com…).Favor não interferir</Article>
              <Article>
                QRM	Está sendo interferido?	Sofre interferência:
                  1. Nulas
                  2.Ligeira
                  3.Moderada
                  4.Severa
                  5.Extrema
              </Article>
              <Article>
                QRN: Está sendo perturbado por estática?	
                1.Não
                2.Ligeiramente
                3.Moderadamente
                4.Severamente
                5.Extremamente
              </Article>
              <Article>QRO:	Devo aumentar a potência do transmissor?	Aumente a potência do transmissor.</Article>
              <Article>QRP:	Devo diminuir a potência do transmissor?	Diminua a potência do transmissor.</Article>
              <Article>QRQ:	Devo transmitir mais depressa?	Transmita mais depressa (…palavras por minuto).</Article>
              <Article>QRR:	Está pronto para operação automática?	Estou pronto para operação automática. Transmita à… palavras por minuto.</Article>
              <Article>QRS:	Devo transmitir mais devagar?	Transmita mais devagar (… palavras por minuto).</Article>
              <Article>QRT:	Devo cessar a transmissão?	Cesse a transmissão.</Article>
              <Article>QRU:	Tem algo para mim?	Não tenho nada para você.</Article>
              <Article>QRV:	Está preparado?	Estou preparado.</Article>
              <Article>QRW:	Devo avisar a... que você o está chamando em ... kHz(ou...MHz).	Por favor, avise ... que o estou chamando em ...kHz(ou ...MHz).</Article>
              <Article>	QRX	Quando você chamará novamente?	Eu o chamarei novamente às... horas, em ...kHz(ou ...MHz).	</Article>
              <Article>	QRY	Qual a minha ordem de vez? (Refere-se a comunicação)	É número ...(ou de acordo com qualquer indicação) (Refere-se a comunicação)	</Article>
              <Article>	QRZ	Quem está me chamando?	Você está sendo chamado por ... em... kHz (ou ... MHz).	</Article>
              <Article>	QSA	Qual a intensidade de meus sinais(ou dos sinais de...)?	A intensidade dos seus sinais (ou dos sinais de ...) é:Apenas perceptível Fraca Satisfatória Boa Ótima	</Article>
              <Article>	QSB	A intensidade de meus sinais varia?	A intensidade de seus sinais varia.	</Article>
              <Article>	QSC	Sua embarcação é de carga?	Minha embarcação é de carga.	</Article>
              <Article>	QSD	Minha manipulação está defeituosa?	Sua manipulação está defeituosa.	</Article>
              <Article>	QSE	Qual o deslocamento estimado da embarcação de salvamento?	O deslocamento estimado da embarcação de salvamento é ... (números e unidades).	</Article>
              <Article>	QSF	Você realizou o salvamento?	Eu realizei o salvamento e estou seguindo para a base ... (com ... pessoas feridas necessitando ambulância).	</Article>
              <Article>	QSG	Devo transmitir ... telegramas de uma vez?	Transmita ... telegramas de uma vez.	</Article>
              <Article>	QSH	Você é capaz de retornar usando seu equipamento radiogoniométrico?	Eu sou capaz de retornar usando meu equipamento radiogoniométrico.	</Article>
              <Article>	QSI	Não consegui interromper a ... (indicativo de chamada).	Sua transmissão ou informe que não conseguir interromper sua transmissão em ...kHz (ou ... MHz).	</Article>
              <Article>	QSJ	Qual a taxa a ser cobrada para ... incluindo sua taxa interna?	A taxa a ser cobrada para ... incluindo a minha taxa interna é ... francos, ou reais, ou dólares ... ou simplesmente referindo-se a um valor em dinheiro.	</Article>
              <Article>	QSK	Pode ouvir-me entre seus sinais, em casa afirmativo, posso interromper sua transmissão?	Posso ouvi-lo entre meus sinais: pode interromper minha transmissão.	</Article>
              <Article>	QSL	Pode acusar recebimento?	Acuso recebimento.	</Article>
              <Article>	QSM	Devo repetir o último telegrama que transmiti para você (ou algum telegrama anterior)?	Repita o último telegrama que você enviou para mim(ou telegrama(s) número(s)...).	</Article>
              <Article>	QSN	Escutou-me ou ...(indicativo de chamada) em ...kHz (ou ...MHz)?	Escutei-o ou ...(indicativo de chamada) em ...kHz (ou ...MHz)	</Article>
              <Article>	QSO	Pode comunicar-me diretamente (ou por retransmissão) com...?	Posso comunicar-me diretamente (ou por retransmissão) com... .	</Article>
              <Article>	QSP	Quer retransmitir gratuitamente a ...?	Vou retransmitir gratuitamente a... .	</Article>
              <Article>	QSQ	Há médicos ou Enfermeiros a bordo ou ... (nome da pessoa) a bordo?	Há médicos ou Enfermeiros a bordo ou ... (nome da pessoa) a bordo.	</Article>
              <Article>	QSR	Devo repetir a chamada na frequência de chamada?	Repita a chamada na frequência de chamada: não ouvi você (ou há interferência).	</Article>
              <Article>	QSS	Que frequência de trabalho você usará?	Usarei a frequência de trabalho de ...kHz (normalmente basta indicar os três último algarismo da frequência).	</Article>
              <Article>	QSU	Devo transmitir ou responder nesta frequência ou em ...kHz(ou ... MHz) com emissões do tipo...?	Transmita ou responda nesta frequência ou em ...kHz(ou ... MHz) com emissões do tipo... .	</Article>
              <Article>	QSV	Devo transmitir uma série de "v" nesta frequência ou em ... kHz(ou ... MHz)?	Transmita uma série de "v" nesta frequência ou em ... kHz(ou ... MHz)?	</Article>
              <Article>	QSW	Vai transmitir nesta frequência ou em ... kHz (ou ... MHz) (com emissão do tipo ...)?	Vou transmitir nesta frequência ou em ... kHz (ou ... MHz) (com emissão do tipo ...),	</Article>
              <Article>	QSX	Quer escutar a ... (indicativo de chamada) em ... kHz ( ou ... MHz)?	Estou escutando a ... (indicativo de chamada) em ... kHz ( ou ... MHz)?	</Article>
              <Article>	QSY	Devo transmitr em outra frequência?	Transmita em outra frequência ou em ... kHz (ou... MHz).	</Article>
              <Article>	QSZ	Tenho que transmitir cada palavra ou grupo mais de uma vez?	Transmita cada plavra ou grupo duas vezes (ou ... vezes).	</Article>
              <Article>	QTA	Devo cancelar o mensagem número ...?	Cancele o mensagem número ... .	</Article>
              <Article>	QTB	Concorda com minha contagem de palavras?	Eu não concordo com sua contagem de palavras; vou pedir a primeira letras ou dígito de cada palavra ou grupo.	</Article>
              
              <Article>	QTC	Quantos recados para transmitir?	Tenho ... recado transmitir (ou para ...).	</Article>
              <Article>	QTD	O que recolheu o barca ou a aeronave de salvamento?	.. (identificação) recolheu: ... 1 (número) sobreviventes. 2 ... restos de naufrágio. 3 ... (número) de cadáveres	</Article>
              <Article>	QTE 	Qual a minha orientação com relação a você? Ou Qual a minha orientação com relação a ... (indicativo de chamada)	Sua orientação verdadeira com relação a mim é... grau as... horas ou A orientação verdadeira de ...(indicativo de chamada) com relação a ... (indicativo de chamada) era de ... grau as ... horas. 	</Article>
              <Article>	QTF	Quer indicar a posição de minha estação de acordo com as orientações tomadas pelas estações refiogoniométricas que você controla?	A posição de sua estação de acordo com as orientações tomadas pelas estações radiogoniométricas que, eu controlo era ... latitude, ... longitude, (ou outra indicação de posição) tipo... às ... horas. 	</Article>
              <Article>	QTG 	Quer transmitir dois traços de 10 segundos cada, seguidos de seu indicativo de chamada (repetindo ... vezes) em kHz(ou ...MHz)? Quer pedir dois traços de 10 segundos cada, seguidos de seu indicativo de chamada (repetindo ... vezes) em kHz(ou ...MHz)?	Vou transmitir dois traços de 10 segundos cada, seguidos de seu indicativo de chamada (repetindo ... vezes) em kHz(ou ...MHz). Pedi dois traços de 10 segundos cada, seguidos de seu indicativo de chamada (repetindo ... vezes) em kHz(ou ...MHz). 	</Article>
              <Article>	QTH	Qual é seu local endereço posição em latitude e longitude (ou de acordo com qualquer outra indicação)?	Meu local de endereço posição é ... de latitude, ... de longitude(ou de acorde com qualquer outra indicação).	</Article>
              <Article>	QTI	Qual é o seu rumo VERDADEIRO?	Meu rumo VERDADEIRO é ... graus.	</Article>
              <Article>	QTJ	Qual a sua velocidade (refere-se à velocidade de um navio ou aeronave com relação à água ou ar, respectivamente).	Minha velocidade é de ... nós (ou quilômetros por horas, ou milhas por hora). (indique a velocidade de um navio ou aeronave através da água ou ar, respectivamente).	</Article>
              <Article>	QTK	Qual a velocidade de sua aeronave com relação à superfície terrestre?	A velocidade de minha aeronave com relação à superfície terrestre ér ... nós (ou quilômetros por horas, ou milhas terrestres por hora).	</Article>
              <Article>	QTL	Qual o seu rumo VERDADEIRO?	Meu rumo VERDADEIRO é ... graus.	</Article>
              <Article>	QTM	Qual é o seu rumo MAGNÉTICO?	Meu rumo MAGNÉTICO é ... graus.	</Article>
              <Article>	QTN	A que horas saiu de ... (lugar)?	Saí de ... (lugar) às ... horas.	</Article>
              <Article>	QTO	Pode comunicar-se com minha estação por meio de código internacional de sinais?	Vou comunicar-me com sua estação por meio de código internacional de sinais.	</Article>
              <Article>	QTR	Qual é a hora certa?	A hora certa é ... horas.	</Article>
              <Article>	QTS	Quer transmitir seu indicativo de chamada para sintonizar ou para que sua frequência possa ser medida agora (ou às ... horas) em ... kHz (ou MHz)?	Vou transmitir meu indicativo de chamada para sintonizar ou para que sua frequência possa ser medida agora (ou às ... horas) em ... kHz (ou MHz).	</Article>
              <Article>	QTT		O sinal de identificação que segue se sobrepõe à outra emissão.	</Article>
              <Article>	QTU	Qual é o horário de funcionamento de sua estação?	O horário de funcionamento da minha estação é ... horas.	</Article>
              <Article>	QTV	Devo fazer escuta por você na frequência de ... kHz (ou ... MHz) das ... às ... horas?	Faça escuta por você na frequência de ... kHz (ou ... MHz) das ... às ... horas.	</Article>
              <Article>	QTW	Como se encontra os sobrevivente?	Os sobreviventes se encontras em ... condições e precisam urgentemente ...	</Article>
              <Article>	QTX	Quer manter sua estação aberta para nova comunicação comigo até que eu o avise(ou até às... horas)?	Vou manter minha estação aberta para nova comunicação com você até que me avise (ou até às ... horas)	</Article>
              <Article>	QTY	Você está seguindo para o lugar do acidente? Caso afirmativo, quando espera chegar?	Estou seguindo para o lugar do acidente e espero chegar às ... horas em ... (data).	</Article>
              <Article>	QTZ	Você continua a busca?	Continuo a busca de ... (aeronave, navio, dispositivo de salvamento, sobreviventes ou destroços).	</Article>
              <Article>	QUA	Tem notícias de ... (indicativo de chamada)?	Envio notícias de ...(indicativo de chamada).	</Article>
              <Article>	QUB	Pode dar-me na seguinte ordem, informações sobre: a direção em graus VERDADEIROS e velocidade do vento na superfície; visibilidade; condições meteriológicas atuais; quantidade, tipo e altura das nuvens sobre a superfície em ... (lugar de observação)?	Envio informações solicitadas: (As unidades usadas para velocidade e distâncias devem ser indicadas).	</Article>
              <Article>	QUC	Qual é o número (ou outra estação) da última mensagem qe você recebeu de mim ou de ... (indicativo de chamada)?	O número (ou outra estação) da última mensagem recebida de você ou de ... (indicativo de chamada) é ... .	</Article>
              <Article>	QUD	Recebeu o sinal de urgência transmitido por ... (indicativo de chamada da estação móvel)?	Recebi o sinal de urgência transmitido por ... (indicativo de chamada da estação móvel) às ... horas.	</Article>
              <Article>	QUE	Pode usar telefonia tem ... (idioma) por meio de intérprete, se possível, em quaisquer frequência?	Posso usar telefonia em ... (idioma) em ... kHz (ou ... MHz).	</Article>
              <Article>	QUF	Recebeu o sinal de perigo transmitido por ... (indicativo de chamada da estação móvel)?	Recebi o sinal de perigo transmitido por ... (indicativo de chamada da estação móvel)?	</Article>
              <Article>	QUH	Quer dar-me a pressão barométrica atual ao nível do mar?	A pressão barométrica atual ao nível do mar é ...(unidades).	</Article>
              <Article>	QUI	Suas luzes de navegação estão acesas?	Minhas luzes de navegação estão acesas	</Article>
              <Article>	QUJ	Quer indicar o rumo VERDADEIRO para chegar a você (ou ...)?	O rumo VERDADEIRO para me alcançar (ou ...) ... graus às ... horas.	</Article>
              <Article>	QUK	Pode me informar as condições do mar observada em ... (lugar ou coordenadas)?	O mar em ... (lugar ou coordenadas) está ... .	</Article>
              <Article>	QUL	Pode me informar as vagas observadas em ... (lugar ou coordenadas)?	As vagas em ... (lugar ou coordenadas) são ... .	</Article>
              <Article>	QUM	Posso recomeçar tráfego normal?	Pode começar tráfego normal.	</Article>
              <Article>	QUN	Solicito às embarcações que se encontram em minhas proximidades imediatas ou (nas proximidades de ... latitude e ... longitude) ou (nas proximidades de ... ) favor indicar rumo VERDADEIRO e velocidade.	Minha posição, rumo VERDADEIRO e velocidade são ... .	</Article>
              <Article>	QUO 	Devo efetuar busca de: 1.aeronave 2.navio 3.embarcação de salvamento nas proximidades de ... latitude, ... longitude (ou de acordo com qualquer outra indicação) ?	Efetue busca de: 1.aeronave 2. navio 3.embarcação de salvamento nas proximidades de ... latitude, ... longitude (ou de acordo com qualquer outra indicação).	</Article>
              <Article>	QUP 	Quer indicar sua posição por meio de: 1.refletores 2.rastro de fumaça 3.sinais pirotécnicos?	Estou indicando minha posição por meio de: 1.refletores 2.rastro de fumaça 3.sinais pirotécnico	</Article>
              <Article>	QUQ	Devo orientar meu refletor quase verticalmente para uma nuvem, piscando se possível e, caso aviste sua aeronave, dirigir o facho contra o vento e sobre a água (ou solo) para facilitar seu pouso? 	Por favor, orientar seu refletor quase verticalmente para uma nuvem, piscando se possível e, caso aviste sua aeronave, dirigir o facho contra o vento e sobre a água (ou solo) para facilitar meu pouso. 	</Article>
              <Article>	QUR 	Os sobreviventes: 1.Receberam equipamentos salva-vidas? 2. Foram recolhidos por embarcação de salvamento? 3. Foram encontrados por grupo de salvamento de terra? 	Os sobreviventes: 1. Receberam equipamentos salva-vidas? 2. Foram recolhidos por embarcação de salvamento? 3.Foram encontrados por grupo de salvamento de terra. 	</Article>
                      
              <Article>	QUS	Você avistou sobreviventes ou destroços? Em caso afirmativo, em que posição?	Avistei: 1. sobreviventes na água; 2. sobreviventes em balsas; 3. destroços na latitude ..., longitude ... (ou de acordo com qualquer outra informação). 	</Article>
              <Article>	QUT	Foi marcado o local do acidente?	A posição do acidente está marcada por: 1.balsa flamígena ou fumígena; 2.bóia; 3.produto corante; 4 ... (especificar qualquer outro sinal) 	</Article>
              <Article>	QUU	Devo dirigir o navio ou aeronave para minha posição?	Dirija o navio ou aeronave (indicativo de chamada)? 1.para sua posição transmitindo seu indicativo de chamada e traços longos em ... kHz (ou ... MHz); 2.transmitindo em ... kHz (ou MHz) o rumo verdadeiro para chegar a você. 	</Article>
              <Article>	QUW	Você está na área de busca designada como ... nome da zona ou latitude e longitude) ?	Estou na área de busca (designação).	</Article>
              <Article>	QUY	Foi marcada a posição da embarcação de salvamento?	A posição da embarcação de salvamento foi marcada às ... horas por: 1. baliza flamígena; 2. bóia; 3. produto corante; 4 ...(especificar qualquer outro sinal). 	</Article>

               
              <Subtitle>Código Q</Subtitle>
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
            <SVGLoader name="bombeirocodq" width={155} height={152}  />
          </FooterRightSide>
        </Footer>
      </Content>
    </Container>
  );
};

export default CodeQ;
