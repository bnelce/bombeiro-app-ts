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

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  function handleSignIn(email: string, password: string) {
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
                <TInput/>                         
              </User>
            </UserInfoRow>
            <UserInfoRow>              
              <User>
                <Name>Senha</Name>
                <TInput/>          
              </User>
            </UserInfoRow>
            <SignInButtonContainer
              onPress={() => handleSignIn("italo_barboza@hotmail.com", "1234567890")}
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

export default ForgotPassword;
