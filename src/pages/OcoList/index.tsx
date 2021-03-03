import React, { useRef, useState, useEffect } from "react";
import { ScrollView, Alert, FlatList, Button } from "react-native";
import { Feather as Icon } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import HeaderNav from "../../components/HeaderNav";
import Footer from   "../../components/Footer";
import { 
  saveItem, 
  getItems,
  getItem,
  deleteItem } 
  from '../../services/database';

import {
  AvatarContainer,
  Container,
  Content,
  ListContainer,
  Localization,
  ItemTextContainer,
  ButtonsContainer,
  EditButtonContainer,
  EditButton,
  DeleteButtonContainer,
  DeleteButton,
  Separator,  
  Item,
  Subactivity,
} from "./styles";

interface Props {
  navigation: void;
}

/*const ocurrences = [
  {
    id: "001",
    activity: "Salvamento",
    subactivity: "Salvamento aquático",
    localization: "Crocobeach",
    initialDate: "teste",
  },
  {
    id: "002",
    activity: "Atendimento Pré-Hospitalar",
    subactivity: "Atendimento Pré-Hospitalar",
    localization: "Via Sul",
    initialDate: "teste",
  },
  {
    id: "003",
    activity: "Salvamento",
    subactivity: "Salvamento aquático",
    localization: "Itaparicá",
    initialDate: "teste",
  },
  {
    id: "004",
    activity: "Combate a Incêndio",
    subactivity: "Incêndio residencial",
    localization: "Parangaba",
    initialDate: "teste",
  },
  {
    id: "005",
    activity: "Atendimento Pré-Hospitalar",
    subactivity: "RCP",
    localization: "North Shopping",
    initialDate: "teste",
  },
  {
    id: "006",
    activity: "Prevenção",
    subactivity: "Palestra",
    localization: "CBMCE",
    initialDate: "teste",
  }

];*/


const renderOcurrence = ({item, index}) => {
  function handleDeletePress(){ 
    Alert.alert(
        "Atenção",
        "Você tem certeza que deseja excluir este item?",
        [
            {
            text: "Não",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "Sim", onPress: () => {
                deleteItem(item.id)
                .then(response => navigation.navigate("OcoList", {id: item.id}));
                }
            }
        ],
        { cancelable: false }
        );
} 

    async function handleEditPress(){ 
      const itemEdit = await getItem(item.id);
      navigation.navigate("OcoAddForm", itemEdit);
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
  return (<Item>            
            <AvatarContainer>
              <UserAvatar size={50} name={getInitials(item.activity)} />
            </AvatarContainer>
            <ItemTextContainer>
              <Subactivity>{item.activity}</Subactivity>
              <Localization>{item.subactivity}</Localization>
              <Localization>{item.localization}</Localization>
            </ItemTextContainer>
            <ButtonsContainer>
            <DeleteButtonContainer
                onPress={handleDeletePress}> 
                <DeleteButton>
                <Icon name="trash" color="white" size={18} />
                </DeleteButton>
              </DeleteButtonContainer> 
              <EditButtonContainer
                onPress={handleEditPress}> 
                <EditButton>
                <Icon name="edit" color="white" size={18} />
                </EditButton>
              </EditButtonContainer> 
            </ButtonsContainer>                     
          </Item>                       
    );
  }

const OcoList: React.FC<Props> = ({ route, navigation }) => {
  const [ocurrences, setOcurrences] = useState([]); 
  const scrollViewRef = useRef<ScrollView>(null);
 
  useEffect(() => {
    getItems().then(items => setOcurrences(items));
  }, [route]); 

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
      <HeaderNav 
        title="Ocorrências"
        subtitle="Suas Ocorrências"
        navigation={navigation}
      />
      <Content>
        <Button
          title="Novo"
          onPress={() =>  navigation.navigate("OcoAddForm")}
        />
        <ListContainer>                
        <FlatList
          data={ocurrences}
          renderItem={renderOcurrence}                        
          keyExtractor={(item) => item.id}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
        />
        </ListContainer>
        <Separator />
        <Footer />
      </Content>
    </Container>
  );
};
export default OcoList;
