import React, { useRef, useState, useEffect } from "react";
import { Feather as Icon } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import styles2 from './styles2';
import { Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from '@react-native-community/picker';
import { v4 as uuidv4 } from 'uuid';
import subactivities from './subactivities';
import HeaderNav from "../../components/HeaderNav";
import Footer from   "../../components/Footer";
import { saveItem } from '../../services/database';
import {  
  Container,
  Content,
  ListContainer, 
  Separator,  
} from "./styles";

interface Props {
  navigation: void;
}
const OcoAddForm: React.FC<Props> = ({ route, navigation }) => {
  const id = route.params ? route.params.id : undefined;
  const [requester, setRequester] = useState('');
  const [requesterPhone, setRequesterPhone] = useState('');
  const [localization, setLocalization] = useState('');
  const [serviceStation, setServiceStation] = useState('');
  const [activity, setActivity] = useState('');
  const [subactivity, setSubactivity] = useState('');
  const [subactivitiesArray, setSubactivitiesArray] = useState('');
  const [initialDate, setInitialDate] = useState(new Date(1598051730000));
  const [finalDate, setFinalDate] = useState(new Date(1598051730000));
  const [historic, setHistoric] = useState('');
  const [complements, setComplements] = useState(''); 
  
  const scrollViewRef = useRef<ScrollView>(null);
 
  useEffect(() => {
    if(!route.params) return;   
    setRequester(route.params.requester);
    setRequesterPhone(route.params.requesterPhone);
    setLocalization(route.params.localization);
    setServiceStation(route.params.serviceStation);
    setActivity(route.params.activity);
    setSubactivity(route.params.subactivity);
    setInitialDate(route.params.initialDate);
    setFinalDate(route.params.finalDate);
    setHistoric(route.params.historic);
    setComplements(route.params.complements);
  }, [route]);

  const onAddButtonPress = () => {
    const listItem = {
        requester,
        requesterPhone,
        localization,
        serviceStation,
        activity,
        subactivity,
        initialDate,
        finalDate,
        historic,
        complements
    };    
    saveItem(listItem, id)
    .then(response => navigation.navigate("OcoList", listItem));
}

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
      { id ? 
      <HeaderNav 
        title="Ocorrências"
        subtitle="Editar Ocorrência"
        navigation={navigation}
        image="emblema"
      />:
      <HeaderNav 
        title="Ocorrências"
        subtitle="Nova Ocorrência"
        navigation={navigation}
        image="emblema"
      />}
      <Content>
        <ListContainer>                
        <View style={styles2.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">               
                <TextInput
                    style={styles2.input}
                    placeholder='Solicitante'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setRequester(text)}
                    value={requester}
                    underlineColorAndroid="transparent"                    
                />
                <TextInput
                    style={styles2.input}
                    placeholder='Telefone do Solicitante'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setRequesterPhone(text)}
                    keyboardType="phone-pad"
                    value={requesterPhone}
                    underlineColorAndroid="transparent"                    
                />
                <TextInput
                    style={styles2.input}
                    placeholder='Início do atendimento'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setRequesterPhone(text)}
                    keyboardType="phone-pad"
                    value={requesterPhone}
                    underlineColorAndroid="transparent"                    
                />       
                <TextInput
                    style={styles2.input}
                    placeholder='Localização'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setLocalization(text)}
                    value={localization}
                    underlineColorAndroid="transparent"                    
                />                
                <Picker
                    selectedValue={activity}
                    style={styles2.input}
                    onValueChange={(itemValue, itemIndex) =>
                    setActivity(itemValue)  
                                      
                }>
                    <Picker.Item label="Atividade" value="" />
                    <Picker.Item label="Combate a Incêndio" value="Combate a Incêndio" />
                    <Picker.Item label="Salvamento" value="Salvamento"  />
                    <Picker.Item label="Prevenção e Auxílio" value="Prevenção e Auxílio" />
                    <Picker.Item label="Atendimento Pré-Hospitalar" value="Atendimento Pré-Hospitalar"  />
                </Picker> 
                <Picker
                    selectedValue={subactivity}
                    style={styles2.input}
                    onValueChange={(itemValue: any, itemIndex) =>
                    setSubactivity(itemValue) }>
                    <Picker.Item label="Subatividade" value="" />
                    <Picker.Item label="Combate a Incêndio" value="Combate a Incêndio" />
                    <Picker.Item label="Salvamento" value="Salvamento"  />
                    <Picker.Item label="Prevenção e Auxílio" value="Prevenção e Auxílio" />
                    <Picker.Item label="Atendimento Pré-Hospitalar" value="Atendimento Pré-Hospitalar"  />
                </Picker> 

                <TextInput
                    style={styles2.inputTextArea}
                    placeholder='Descrição da Ocorrência'
                    placeholderTextColor="#aaaaaa"                    
                    onChangeText={(text) => setHistoric(text)}
                    value={historic}
                    multiline
                    numberOfLines={7}
                    underlineColorAndroid="transparent"                    
                />
                <TextInput
                    style={styles2.inputTextArea}
                    placeholder='Dados Complementares'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setComplements(text)}
                    value={complements}
                    multiline
                    numberOfLines={7}
                    //underlineColorAndroid="transparent"
                />
                <TouchableOpacity style={styles2.button} onPress={() => onAddButtonPress()}> 
                    <View style={styles2.buttonContainer}>
                        <Icon name="save" size={22} color="white" />
                        <Text style={styles2.buttonText}>Salvar</Text> 
                    </View>
                </TouchableOpacity>
                <View style={styles2.footerView}>
                    <Text style={styles2.footerText}> </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
        </ListContainer>
        <Separator />
        <Footer />
      </Content>
    </Container>
  );
};
export default OcoAddForm;
