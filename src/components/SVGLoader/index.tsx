import React from "react";

import PaiLogo from "../../assets/images/pai_logo.svg";
import InterLogo from "../../assets/images/logo_inter.svg";
import InterLogoColored from "../../assets/images/logo_inter_colored.svg";
import ProtectionPlatform from "../../assets/images/protection_platform.svg";
import ISafeLogo from "../../assets/images/isafe_logo.svg";
import InterpagLogo from "../../assets/images/interpag_logo.svg";
import HiddenBalance from "../../assets/images/hidden_balance.svg";
import HiddenInvestment from "../../assets/images/hidden_investment.svg";
import Card from "../../assets/images/card.svg";
import ShoppingCart from "../../assets/images/shopping_cart.svg";
import LifeStyleBeauty from "../../assets/images/lifestyle_beauty.svg";
import LifeStyleDrugstore from "../../assets/images/lifestyle_drugstore.svg";
import LifeStyleEntertainment from "../../assets/images/lifestyle_entertainment.svg";
import LifeStyleFashion from "../../assets/images/lifestyle_fashion.svg";
import LifeStyleHouse from "../../assets/images/lifestyle_house.svg";
import LifeStyleMobility from "../../assets/images/lifestyle_mobility.svg";
import LifeStyleSport from "../../assets/images/lifestyle_sport.svg";
import LifeStyleTechnology from "../../assets/images/lifestyle_technology.svg";
import LifeStyleTravel from "../../assets/images/lifestyle_travel.svg";
import GroupPeople from "../../assets/images/group_people.svg";
import FooterShare from "../../assets/images/footer_share.svg";
import BannerNews from "../../assets/images/banner_news.svg";
import BannerCode from "../../assets/images/banner_code.svg";
import BannerGlasgow from "../../assets/images/banner_glasgow.svg";
import BannerOco from "../../assets/images/10063.svg";
import BrasaoBPC from "../../assets/images/brasao-bpc.svg";
import S13 from "../../assets/images/s13.svg";
import Sino from "../../assets/images/sino.svg";
import Emblema from "../../assets/images/emblema.svg";


interface Props {
  name: string;
  width: number;
  height: number;
}

interface VectorModel {
  [name: string]: JSX.Element;
}

const SVGLoader: React.FC<Props> = ({ name, width, height }) => {
  const vectors: VectorModel = {
    pai_logo: <PaiLogo width={width} height={height} />,
    inter_logo: <InterLogo width={width} height={height} />,
    inter_logo_colored: <InterLogoColored width={width} height={height} />,
    protection_platform: <ProtectionPlatform width={width} height={height} />,
    isafe_logo: <ISafeLogo width={width} height={height} />,
    interpag_logo: <InterpagLogo width={width} height={height} />,
    hidden_balance: <HiddenBalance width={width} height={height} />,
    hidden_investment: <HiddenInvestment width={width} height={height} />,
    card: <Card width={width} height={height} />,
    shopping_cart: <ShoppingCart width={width} height={height} />,
    lifestyle_beauty: <LifeStyleBeauty width={width} height={height} />,
    lifestyle_drugstore: <LifeStyleDrugstore width={width} height={height} />,
    lifestyle_entertainment: (
      <LifeStyleEntertainment width={width} height={height} />
    ),
    lifestyle_fashion: <LifeStyleFashion width={width} height={height} />,
    lifestyle_house: <LifeStyleHouse width={width} height={height} />,
    lifestyle_mobility: <LifeStyleMobility width={width} height={height} />,
    lifestyle_sport: <LifeStyleSport width={width} height={height} />,
    lifestyle_technology: <LifeStyleTechnology width={width} height={height} />,
    lifestyle_travel: <LifeStyleTravel width={width} height={height} />,
    group_people: <GroupPeople width={width} height={height} />,
    footer_share:  <FooterShare width={width} height={height} />,
    banner_news:  <BannerNews width={width} height={height} />,
    banner_code:  <BannerCode width={width} height={height} />,
    banner_glasgow:  <BannerGlasgow width={width} height={height} />,
    banner_oco:  <BannerOco width={width} height={height} />,
    brasao_bpc:  <BrasaoBPC width={width} height={height} />,
    s13:  <S13 width={width} height={height} />,
    sino:  <Sino width={width} height={height} />,
    emblema:  <Emblema width={width} height={height} />,
  };

  return vectors[name];
};

export default SVGLoader;
