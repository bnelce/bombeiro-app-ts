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
  Avatar,
  Initials,
  User,
  Name,
  Account,
  ChangeAccountButton,
  ChangeAccountText,
  ChangeAccountButtonContainer,
  SignInButtonContainer,
  SignInButton,
  SignInText,
  ISafe,
  Generate,
  GenerateButton,
  GenerateText,
  Interpag,
  InterpagButtons,
  Pay,
  PayButton,
  PayText,
  Receive,
  ReceiveButton,
  ReceiveText,
  TInput
} from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { onChange } from "react-native-reanimated";

const SignIn: React.FC = () => {
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
                <Name>Login</Name>
                <TInput onChangeText={text => setEmail(text)}/>                         
              </User>
            </UserInfoRow>
            <UserInfoRow>              
              <User>
                <Name>Senha</Name>
                <TInput
                onChangeText={text => setPassword(text)}
                />          
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
        </Cards>
      </CardsContainer>
    </Container>
  );
};

export default SignIn;
