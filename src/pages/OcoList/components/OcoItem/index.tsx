import React from "react";
import { Alert } from "react-native";
import { Feather as Icon } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import { 
  getItem,
  deleteItem } 
  from '../../../../services/database';

import {
  AvatarContainer,
  Localization,
  ItemTextContainer,
  ButtonsContainer,
  EditButtonContainer,
  EditButton,
  DeleteButtonContainer,
  DeleteButton, 
  Item,
  Subactivity,
} from "./styles";

interface Props {
  navigation: void;
  ocurrence: Ocurrence;
}


interface Ocurrence {
  id: string;
  activity: string;
  subactivity: string;
  localization: string;
  initialDate: string;
  requester: string;
  requesterPhone: string;
  serviceStation: string;
  finalDate: string;
  historic: string;
  complements: string;
}

const OcoItem: React.FC <Props>  = ({ocurrence, navigation}) => {
  function handleDeletePress(id: string){ 
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
                deleteItem({id: id})
                .then(response => navigation.navigate("OcoList", {id: id}));
                }
            }
        ],
        { cancelable: false }
        );
} 

    async function handleEditPress(id: string){ 
      const itemEdit = await getItem(id);
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
              <UserAvatar size={50} name={getInitials(ocurrence.activity)} />
            </AvatarContainer>            
            <ItemTextContainer>
              <Subactivity>{ocurrence.activity}</Subactivity>
              <Localization>{ocurrence.subactivity}</Localization>
              <Localization>{ocurrence.localization}</Localization>
            </ItemTextContainer>
            <ButtonsContainer>
            <DeleteButtonContainer
                onPress={() => handleDeletePress(ocurrence.id)}> 
                <DeleteButton>
                <Icon name="trash" color="white" size={18} />
                </DeleteButton>
              </DeleteButtonContainer> 
              <EditButtonContainer
                onPress={() => handleEditPress(ocurrence.id)}> 
                <EditButton>
                <Icon name="edit" color="white" size={18} />
                </EditButton>
              </EditButtonContainer> 
            </ButtonsContainer>                     
          </Item>                       
      );
  }

  export default OcoItem;