"use client";
import React from "react";
// import styles from './page.module.css';
import styled, { keyframes } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Erp() {
  return (
    <Animation>
      <Header />
      <Section1>
        <Gama>가마 ERP </Gama>
        <P toggle={true} marginLeft="-33.5rem">
          자동차 렌트에 필요한 모든 업무를 한 곳에서!
        </P>
        <P toggle={true} marginLeft="-38rem">
          차량 예약, 차량 관리, 과태료 처리 등
        </P>
        <P toggle={true} marginLeft="-43.5rem">
          가마 ERP에서 관리하세요.
        </P>
        <Img
          className="First"
          toggle={true}
          marginLeft="28rem"
          marginRight="-10rem"
          src="https://static.wixstatic.com/media/10252b_80e3f5bfedcb4a9bace2c18b8d31a370~mv2.png/v1/crop/x_980,y_223,w_960,h_497/fill/w_495,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%EA%B0%80%EB%A7%88ERP%20%EC%86%8C%EA%B0%9C%20%EB%B0%B0%EB%84%88_-001%20(2).png"
        />
      </Section1>

      <Feature>
        <FeatureErp>가마 ERP 특징</FeatureErp>
        <FeatureAbout toggle={true} marginTop="4rem" marginLeft="-45rem">
          다양한 업무처리,
        </FeatureAbout>
        <FeatureAbout toggle={true} marginTop="3rem" marginLeft="-33rem">
          이제 가마 ERP에서
          <span style={{ color: "#5048e5" }}>원클릭</span> 해결!
        </FeatureAbout>
        <Img
          className="Click"
          toggle={true}
          marginLeft="-19rem"
          marginRight="2rem"
          src="https://static.wixstatic.com/media/10252b_66ee4275d03a49a18178e563b1f16bbe~mv2.png/v1/crop/x_35,y_40,w_586,h_264/fill/w_648,h_292,al_c,lg_1,q_85,enc_auto/%EC%9B%90%ED%81%B4%EB%A6%AD%20%ED%95%B4%EA%B2%B0%20(2).png"
        />
        <Click>ONE</Click>
        <Click>Click!!!</Click>
        <FeatureContent toggle={true} marginTop="-5rem" marginLeft="35rem">
          전문 렌트카 관리 서비스 지원으로
        </FeatureContent>
        <FeatureContent toggle={true} marginTop="1rem" marginLeft="38rem">
          계약관리, 차량관리, 채권 추심, 과태료 등
        </FeatureContent>
        <FeatureContent
          className="Under"
          toggle={true}
          marginTop="1rem"
          marginLeft="35rem"
        >
          다양한 업무 처리를 가마 ERP에서
        </FeatureContent>
        <FeatureContent toggle={true} marginTop="1rem" marginLeft="34rem">
          클릭 한번으로 해결 가능합니다.
        </FeatureContent>
      </Feature>

      <SectionUnder className="Second" toggle={true} height="36rem">
        <Img
          className="Second"
          toggle={true}
          marginLeft="-60rem"
          marginRight="0"
          src="./images/image1.png"
        />
        <SectionName
          className="Second"
          toggle={true}
          marginTop="-25rem"
          marginLeft="59rem"
          marginBottom="0"
          marginRight="0"
        >
          <span style={{ color: "#5048e5" }}>비대면 전자계약</span>으로
        </SectionName>
        <SectionName
          className="SecondUnder"
          toggle={true}
          marginTop="0"
          marginLeft="59rem"
          marginBottom="3rem"
          marginRight="0"
        >
          <p>고객들과 발빠른 소통</p>
        </SectionName>
        <Section2Contents className="Second" toggle={true} marginLeft="62rem">
          모바일과 PC 어떤 환경에서도 서비스 지원하여
        </Section2Contents>
        <Section2Contents
          className="Second2"
          toggle={true}
          marginLeft="66.5rem"
        >
          직접 대면해 계약서 작성하지 않고
        </Section2Contents>
        <Section2Contents
          className="Second3"
          toggle={true}
          marginLeft="57.5rem"
        >
          비대면으로 전자계약서 작성하여 빠른 업무 처리 가능합니다.
        </Section2Contents>
      </SectionUnder>

      <SectionUnder className="Third" toggle={true} height="39rem">
        <Img
          className="Third"
          toggle={true}
          marginLeft="-60rem"
          marginRight="0"
          src="./images/image2.PNG"
        />
        <SectionName
          className="Third"
          toggle={true}
          marginTop="-25rem"
          marginLeft="59rem"
          marginBottom="0"
          marginRight="0"
        >
          고객과 렌트카 업체간
        </SectionName>
        <SectionName
          className="ThirdUnder"
          toggle={true}
          marginTop="2rem"
          marginRight="0"
          marginLeft="55rem"
          marginBottom="3rem"
        >
          상호 <span style={{ color: "#5048e5" }}>유기적</span> 연결
        </SectionName>
        <Section3Contents
          className="Third"
          toggle={true}
          marginTop="4rem"
          marginLeft="60rem"
        >
          중개 플랫폼 연동 지원 및 실시간으로 ERP 업데이트 되어
        </Section3Contents>
        <Section3Contents
          className="Third2"
          toggle={true}
          marginTop="0"
          marginLeft="64rem"
        >
          예약 및 차량 관리에 용이하며, 고객의 니즈 파악 및 해결이 빠릅니다.
        </Section3Contents>
      </SectionUnder>
      <Footer />
    </Animation>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Animation = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 1s;
  width: 100%;
  height: 100%;
`;
const Section1 = styled.div`
  text-align: center;
  align-items: center;
  margin-bottom: -20rem;
  height: 40rem;
  @media (max-width: 360px) {
    height: 35rem;
  }
  /* min-width: 100rem; */
`;
const Gama = styled.div`
  @media (max-width: 970px) {
    margin-left: -30rem;
  }
  @media (max-width: 900px) {
    margin-left: 1rem;
  }
  @media (max-width: 360px) {
    font-size: 2rem;
  }
  @media (max-width: 305px) {
    font-size: 1.5rem;
    margin-left: 0.4rem;
  }
  margin-top: 3rem;
  font-size: 2.5rem;
  font-weight: bold;
  margin-left: -48rem;
  margin-bottom: 3rem;
`;
const P = styled.p<{ toggle: boolean; marginLeft: string }>`
  @media (max-width: 970px) {
    margin-left: -30rem;
  }
  @media (max-width: 900px) {
    margin-left: 1rem;
  }
  @media (max-width: 360px) {
    font-size: 1rem;
  }
  @media (max-width: 305px) {
    font-size: 0.9rem;
  }
  margin-left: ${(props) => props.marginLeft};
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 10%;
`;
const Img = styled.img<{
  toggle: boolean;
  marginLeft: string;
  marginRight: string;
}>`
  @media (max-width: 970px) {
    &.First {
      margin-left: 25rem;
    }
    &.Click {
      margin-left: 5rem;
    }
  }
  @media (max-width: 900px) {
    display: none;
  }
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginRight};
`;

const Feature = styled.div`
  @media (max-width: 970px) {
    margin-left: -20rem;
  }
  @media (max-width: 900px) {
    height: 27rem;
  }
  @media (max-width: 360px) {
    height: 20rem;
  }
  text-align: center;
  align-items: center;
  padding: 1.2rem;
  position: relative;
  background-color: rgb(243, 244, 245);
  height: 40rem;
`;
const FeatureErp = styled.p`
  @media (max-width: 970px) {
    margin-left: -10rem;
  }
  @media (max-width: 900px) {
    margin-left: 21rem;
  }
  @media (max-width: 410px) {
    font-size: 1.8rem;
  }
  @media (max-width: 350px) {
    font-size: 1.5rem;
  }
  margin-top: 3rem;
  font-size: 2rem;
  font-weight: bold;
  margin-left: -45rem;
  margin-bottom: 5rem;
`;
const FeatureAbout = styled.p<{
  toggle: boolean;
  marginTop: string;
  marginLeft: string;
}>`
  @media (max-width: 970px) {
    margin-left: -10rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 900px) {
    margin-left: 21rem;
  }
  @media (max-width: 410px) {
    margin-top: -1rem;
    font-size: 1.5rem;
  }
  @media (max-width: 350px) {
    font-size: 1rem;
  }
  margin-top: ${(props) => props.marginTop};
  font-weight: bold;
  margin-left: ${(props) => props.marginLeft};
  font-size: 1.8rem;
  line-height: 5%;
`;
const Click = styled.p`
  @media (max-width: 970px) {
    margin-left: 16rem;
  }
  @media (max-width: 900px) {
    display: none;
  }
  font-size: 2rem;
  line-height: 10%;
  font-weight: bold;
  margin-left: -8rem;
  margin-top: -5.5rem;
  z-index: 5;
  color: white;
`;
const FeatureContent = styled.div<{
  toggle: boolean;
  marginLeft: string;
  marginTop: string;
}>`
  @media (max-width: 970px) {
    margin-top: 1rem;
    margin-left: 59rem;
  }
  @media (max-width: 900px) {
    margin-top: 1rem;
    margin-left: 20rem;
  }
  @media (max-width: 300px) {
    font-size: 0.9rem;
  }
  font-weight: bold;
  line-height: 20%;
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
`;

const SectionUnder = styled.div<{ toggle: boolean; height: string }>`
  @media (max-width: 360px) {
    height: 35rem;
  }
  position: relative;
  height: ${(props) => props.height};
  text-align: center;
`;
const SectionName = styled.div<{
  toggle: boolean;
  marginTop: string;
  marginLeft: string;
  marginBottom: string;
  marginRight: string;
}>`
  @media (max-width: 1425px) {
    &.Second {
      margin-top: -13rem;
      margin-left: 35rem;
    }
    &.SecondUnder {
      margin-left: 35rem;
    }
    &.Third {
      margin-left: 35rem;
      margin-top: -15rem;
    }
    &.ThirdUnder {
      margin-left: 31rem;
    }
  }
  @media (max-width: 900px) {
    &.Second {
      margin-top: 13rem;
      margin-left: 1rem;
    }
    &.SecondUnder {
      margin-left: 1rem;
    }
    &.Third {
      margin-left: 1rem;
      margin-top: -3rem;
    }
    &.ThirdUnder {
      margin-left: 1rem;
    }
  }
  @media (max-width: 300px) {
    margin-left: 0.5rem;
    font-size: 1.9rem;
  }
  font-size: 2rem;
  line-height: 20%;
  font-weight: bold;
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;
const Section2Contents = styled.div<{
  toggle: boolean;
  marginLeft: string;
}>`
  @media (max-width: 1425px) {
    &.Second {
      margin-top: 1rem;
      margin-left: 38rem;
    }
    &.Second2 {
      margin-top: 1rem;
      margin-left: 42rem;
    }
    &.Second3 {
      margin-top: 1rem;
      margin-left: 33rem;
    }
  }
  @media (max-width: 900px) {
    &.Second {
      margin-top: 5rem;
      margin-left: 1rem;
    }
    &.Second2 {
      margin-top: 2rem;
      margin-left: 1rem;
    }
    &.Second3 {
      margin-top: 2em;
      margin-left: 1rem;
    }
  }
  @media (max-width: 360px) {
    font-weight: bold;
    font-size: 0.7rem;
    &.Second {
      margin-top: 5rem;
      margin-left: 0.3rem;
    }
    &.Second2 {
      margin-top: 2rem;
      margin-left: 0.3rem;
    }
    &.Second3 {
      margin-top: 2rem;
      margin-left: 0.2rem;
    }
  }
  line-height: 10%;
  margin-left: ${(props) => props.marginLeft};
  margin-top: 1rem;
  font-size: 0.8rem;
`;
const Section3Contents = styled.p<{
  toggle: boolean;
  marginLeft: string;
  marginTop: string;
}>`
  @media (max-width: 1425px) {
    &.Third {
      margin-top: 1rem;
      margin-left: 35rem;
    }
    &.Third2 {
      margin-top: 1rem;
      margin-left: 39rem;
    }
  }
  @media (max-width: 970px) {
    &.Third2 {
      margin-left: 33rem;
    }
  }
  @media (max-width: 900px) {
    &.Third {
      margin-top: 5rem;
      margin-left: 1rem;
    }
    &.Third2 {
      margin-top: 2rem;
      margin-left: 1rem;
    }
  }
  @media (max-width: 360px) {
    font-weight: bold;
    font-size: 0.7rem;
    &.Third {
      margin-top: 5rem;
      margin-left: 0.5rem;
    }
    &.Third2 {
      margin-left: 0.5rem;
      line-height: 140%;
    }
  }
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  line-height: 20%;
  font-size: 0.8rem;
`;
