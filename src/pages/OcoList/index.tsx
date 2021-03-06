import React, { useRef, useState, useEffect } from "react";
import { ScrollView, Button, Text } from "react-native";
import HeaderNav from "../../components/HeaderNav";
import Footer from   "../../components/Footer";
import OcoItem from './components/OcoItem';
import { getItems } from '../../services/database';

import {
  Container,
  Content,
  ListContainer,
  Separator,
} from "./styles";

interface Props {
  navigation: void;
}

interface IItem {
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


interface Props {
  route: void;
  navigation: void;
}

const OcoList: React.FC <Props> = ({ route, navigation }) => {
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
        image="emblema"
      />
      <Content>
        <Button
          title="Novo"
          onPress={() =>  navigation.navigate("OcoAddForm")}
        />
        <ListContainer>
        {ocurrences ? 
          ocurrences.map(oco => {
            return(
            <OcoItem 
              ocurrence={oco}
              navigation={navigation}
            />
            )
          })
          : 
            <Text>Sem Ocorrências</Text>}
        </ListContainer>
        <Separator />
        <Footer />
      </Content>
    </Container>
  );
};
export default OcoList;
