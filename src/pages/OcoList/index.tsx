import React, { useRef, useState } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { Feather as Icon } from '@expo/vector-icons';
// import UserAvatar from 'react-native-user-avatar';
import SVGLoader from "../../components/SVGLoader";
import HeaderNav from "../../components/HeaderNav";
import styles2 from './styles2';

import {
  Container,
  Content,
  Buttons,
  ShoppingButtonInfo,
  Title,
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

interface Props {
  navigation: void;
}

const OcoList: React.FC<Props> = ({ route, navigation }) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  function handleScrollToTop() {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }

  function getInitials(name = '') {
    switch(name) {
      
      case 'Combate a Incêndio':
      return 'CI';
      break;
      
      case 'Atendimento Pré-Hospitalar':
      return 'APH';
      break;
  
      case 'Salvamento':
      return 'SA';
      break;
  
      case 'Prevenção':
      return 'PR';
      break;
  
      default:
      return name
      .replace(/\s+/, ' ')
      .split(' ')
      .slice(0, 2)
      .map(v => v && v[0].toUpperCase())
      .join('');  
    }
  };

  async function handleEditPress(){ 
    //const itemEdit = await Database.getItem(item.id);
    //navigation.navigate("OcoAddForm", itemEdit);
}  

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
      <HeaderNav 
        title="Ocorrências"
        subtitle="Suas Ocorrências"
        navigation={navigation}
      />
      <Content>
        <Buttons>
          <TextContainer>
            <ShoppingButtonInfo>
            <View style={styles2.avatarContainer}>
                  {/*<UserAvatar size={50} name={getInitials('item.activity')} />*/}
                </View>
                <View style={styles2.textContainer}>
                  <Text style={styles2.subactivity} >subactivity</Text>
                  <Text style={styles2.localization} >localization</Text>
                  <Text style={styles2.localization} >initialDate</Text>
                </View>
              <View style={styles2.buttonsContainer}>
            <TouchableOpacity 
              style={styles2.deleteButton}
              onPress={() => {}}> 
               <Icon name="trash" color="white" size={18} />
             </TouchableOpacity> 
             <TouchableOpacity 
               style={styles2.editButton} 
               onPress={handleEditPress}> 
               <Icon name="edit" color="white" size={18} />
              </TouchableOpacity> 
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
  );
};

export default OcoList;
