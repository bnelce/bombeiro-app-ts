import React, { useState } from "react";
import { ActivityIndicator } from "react-native";

import SVGLoader from "../../components/SVGLoader";
import CustomIcon from "../../components/CustomIcon";
import Input from "../../components/Input";
import { useAuth } from "../../contexts/auth";


import {
  Container,
  LogoContainer,
  CardsContainer,
  Cards,
  Login,
  UserInfoRow,
  User,
  Name,
  SignInButtonContainer,
  SignInButton,
  SignInText,
  TInput,
  LabelPassword,
  Cadastrar,
  LoginButtonBelowText1,
  ContainerCadastrar,
  LoginButtonBelowText2
} from "./styles";

interface Props {
  navigation: void;
}

const SignIn: React.FC<Props> = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  function handleSignIn(): void {
    setLoading(true);
    signIn(email, password);
  }

  return (
    <Container>
      <LogoContainer>
        <SVGLoader name="inter_logo" width={110} height={40} />
      </LogoContainer>
      <CardsContainer>
        <Cards>
          <Login>
            <UserInfoRow>              
              <User>
                <TInput placeholder="Login" onChangeText={text => setEmail(text)}/>                         
              </User>
            </UserInfoRow>
            <UserInfoRow>              
              <User>
                <TInput
                secureTextEntry={true}
                placeholder="Senha"
                onChangeText={text => setPassword(text)}
                />
                <LabelPassword>Esqueceu a senha?</LabelPassword>          
              </User>
            </UserInfoRow>
            <SignInButtonContainer
              onPress={() => handleSignIn()}
            >
              <SignInButton>
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <SignInText>ENTRAR</SignInText>
                )}
              </SignInButton>
            </SignInButtonContainer>
          </Login>
          
          <Cadastrar/>
          <ContainerCadastrar>
          <LoginButtonBelowText2>Não tem uma conta?</LoginButtonBelowText2>   
          <LoginButtonBelowText1 onPress={() => {navigation.navigate('SignUp')}}>Cadastre-se</LoginButtonBelowText1>
          </ContainerCadastrar> 
        </Cards>
      </CardsContainer>      

    </Container>
  );
};

export default SignIn;
