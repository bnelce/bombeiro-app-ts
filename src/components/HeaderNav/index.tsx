import React from "react";
import { AntDesign } from '@expo/vector-icons';
import {
  Container,
  HeaderContent,
  AccountInfo,
  InfoContainer,
  BackContainer,
  Subtitle,
  Title,
  Avatar
} from "./styles";
import SVGLoader from "../SVGLoader";



interface Props {
  navigation: void,
  goBack: any,
  title: string,
  subtitle: string,
  image: string
}

const HeaderNav: React.FC<Props> = ({navigation: { goBack }, title, subtitle, image}) => {

  return (
    <Container>
      <HeaderContent>          
          <AccountInfo>
              <BackContainer onPress={ () => goBack()}>               
                <AntDesign name="arrowleft" size={30} color="#fff" />
              </BackContainer>                 
              <InfoContainer>                
                  <Title>{title}</Title>
                  <Subtitle>{subtitle}</Subtitle> 
              </InfoContainer>                         
          </AccountInfo>
          <Avatar>
            <SVGLoader name={image} width={50} height={50} />
          </Avatar>
      </HeaderContent>
    </Container>
  );
};

export default HeaderNav;
