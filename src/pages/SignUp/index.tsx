import React, { useRef, useState } from "react";
import { ScrollView } from "react-native";

import HeaderNav from "../../components/HeaderNav";

import api from '../../services/api';

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
  UserInfoRow,
  User,
  TInput,
  LabelPassword,
  SignInButtonContainer,
  SignInButton,
  SignInText
} from "./styles";

interface Props {
  navigation: void;
}

interface PromiseResponse {
  id_user: number;
  full_name: string;
  peace_name: string;
  phone_number: string;
  email: string;
}

const SignUp: React.FC<Props> = ({ navigation }) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  const [full_name, setCompleteName] = useState<string>();
  const [peace_name, setPeaceName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone_number, setPhone] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>();
  
  const scrollViewRef = useRef<ScrollView>(null);

  function handleScrollToTop() {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }

  async function handleSignIn(): void {
    const response: PromiseResponse = await api.post('/users', { full_name, peace_name, phone_number, email, password});
    navigation.navigate('SignIn');
  }

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
      <HeaderNav/>
      <Content>
          <TextContainer>
            <ShoppingButtonInfo>
            <UserInfoRow>              
              <User>
                <TInput
                onChangeText={text => setCompleteName(text)} 
                placeholder="Insira o seu nome Completo"/>                         
              </User>
            </UserInfoRow>
            <UserInfoRow>              
              <User>
                <TInput
                onChangeText={text => setPeaceName(text)} 
                placeholder="Insira o seu nome de Paz"/>                         
              </User>
            </UserInfoRow>
            <UserInfoRow>              
              <User>
                <TInput
                onChangeText={text => setEmail(text)} 
                placeholder="Insira um email válido"/>                         
              </User>
            </UserInfoRow>
            <UserInfoRow>              
              <User>
                <TInput
                onChangeText={text => setPhone(text)} 
                placeholder="Insira um número de telefone válido"/>                         
              </User>
            </UserInfoRow>
            <UserInfoRow>              
              <User>
                <TInput
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                placeholder="Insira uma Senha"
                />
              </User>
            </UserInfoRow>
            <UserInfoRow>              
              <User>
                <TInput
                onChangeText={text => setPasswordConfirmation(text)}
                secureTextEntry={true}
                placeholder="Repita a Senha digitada"
                />
              </User>
            </UserInfoRow>
            <SignInButtonContainer
            >
              <SignInButton>
                  <SignInText
                  onPress={() => handleSignIn()}
                  >CADASTRAR</SignInText>
              </SignInButton>
            </SignInButtonContainer>
            </ShoppingButtonInfo>
          </TextContainer>
        <Separator />
        </Content>
    </Container>
  );
};

export default SignUp;
