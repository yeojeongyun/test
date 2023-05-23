"use client";
import React from "react";
// import styles from './page.module.css';
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
// import StyledComponentsRegistry from '../../lib/registry';

export default function Home() {
  return (
    // <StyledComponentsRegistry>
    <Animation>
      <Header />
      <Parent>
        <MainImg src="https://static.wixstatic.com/media/10252b_5bd038179da44e34a79f323e45dbdbb5~mv2.png/v1/fill/w_2000,h_179,al_c,q_85,enc_auto/10252b_5bd038179da44e34a79f323e45dbdbb5~mv2.png" />
        <MainText>
          OPEN A NEW WORLD
          <p>WITH EXPERIENCE</p>
        </MainText>
        <MainTextUnder>
          다양한 경험이 새로운 경험으로 새로운 세계를 엽니다.
        </MainTextUnder>
        <TextOverlap
          toggle={true}
          marginTop="15.7rem"
          right="0rem"
          color="rgb(100, 150, 248)"
        >
          <p>OPEN A NEW WORLD</p>
          <p>WITH EXPERIENCE</p>
        </TextOverlap>
        <TextOverlap
          toggle={true}
          marginTop="15.4rem"
          right="0.2rem"
          color="rgb(175, 68, 251)"
        >
          <p>OPEN A NEW WORLD</p>
          <p>WITH EXPERIENCE</p>
        </TextOverlap>
      </Parent>

      {/* second */}
      <EvenSection toggle={true} height="40rem" marginTop="31rem">
        <SecondImg src="https://static.wixstatic.com/media/10252b_55625c5c8cdb4915a167fd0eb180c603~mv2.png/v1/fill/w_628,h_628,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/%EC%82%AC%EA%B3%A0%EB%8C%80%EC%B0%A8%20(2).png" />
        <EvenText
          className="SecondText"
          toggle={true}
          marginTop="-26rem"
          paddingRight="33rem"
        >
          렌트카 관련 서비스,
        </EvenText>
        <EvenText
          className="SecondText"
          toggle={true}
          marginTop="3rem"
          paddingRight="29rem"
        >
          <p>하나의 앱에서 간편하게!</p>
        </EvenText>
        <EvenTextUnder
          toggle={true}
          marginTop="4rem"
          paddingRight="25rem"
          marginLeft="-1rem"
        >
          <p>회원가입 없이도 간편하게 사고대차 요청하고</p>
        </EvenTextUnder>
        <EvenTextUnder
          toggle={true}
          marginTop="1.5rem"
          paddingRight="20.5rem"
          marginLeft="-1rem"
        >
          <p>사용할수록 쌓이는 포인트와 차량 관리 상품 구매까지!</p>
        </EvenTextUnder>
        <Link href="/platform">
          <SecondButton>자세히보기</SecondButton>
        </Link>
      </EvenSection>

      {/* third */}
      <OddSection>
        <ThirdImg
          toggle={true}
          marginBottom="-20rem"
          marginLeft="-25rem"
          src="https://static.wixstatic.com/media/10252b_85c81a00f47c40eab52f255b743e08c2~mv2.png/v1/crop/x_8,y_379,w_618,h_512/fill/w_434,h_359,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%EA%B0%80%EB%A7%88%20ERP%20(3).png"
        />
        <ThirdImg
          className="Click"
          toggle={true}
          marginBottom="2rem"
          marginLeft="-16rem"
          src="https://static.wixstatic.com/media/10252b_85c81a00f47c40eab52f255b743e08c2~mv2.png/v1/crop/x_259,y_0,w_366,h_371/fill/w_250,h_254,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%EA%B0%80%EB%A7%88%20ERP%20(3).png"
        />
        <OddText>
          <p>자동차 렌트에 필요한</p>
          <p>모든 업무를 한 곳에서!</p>
        </OddText>
        <OddTextUnder toggle={true} marginLeft="24rem" marginTop="4rem">
          업체 규모 상관없이
          <p>전문적 렌터카 관리 서비스 지원,</p>
          <p>중개플랫폼 실시간 연동으로 </p>
          <p> 업무 처리 속도 및 효율성 증가</p>
        </OddTextUnder>
        <Link href="/erp">
          <ThirdButton>자세히보기</ThirdButton>
        </Link>
        <ClickText>
          <p>One</p>
          <p>Click!!!</p>
        </ClickText>
      </OddSection>

      {/*fourth*/}
      <EvenSection toggle={true} height="40rem" marginTop="0">
        <FourthImg src="https://static.wixstatic.com/media/10252b_60a07bb155664188a9142ebb948e2dde~mv2.png/v1/crop/x_81,y_305,w_300,h_564/fill/w_230,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%EB%A7%88%EC%A7%80%EB%A7%89%EC%9E%A5.png" />
        <FourthImg2 src="https://static.wixstatic.com/media/10252b_60a07bb155664188a9142ebb948e2dde~mv2.png/v1/crop/x_443,y_403,w_578,h_484/fill/w_393,h_329,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%EB%A7%88%EC%A7%80%EB%A7%89%EC%9E%A5.png" />
        <FourthText>일상생활 속에서</FourthText>
        <EvenText
          className="FourthText"
          toggle={true}
          marginTop="-1rem"
          paddingRight="23rem"
        >
          <p>
            시간과 장소에
            <span style={{ color: "#5048e5" }}>구애받지 않는</span>
            &apos;가마&apos;
          </p>
        </EvenText>
        <EvenTextUnder
          className="FourthUnder"
          toggle={true}
          marginTop="5rem"
          paddingRight="25rem"
          marginLeft="0"
        >
          언제 어디에서나 내가 원하는 차량을 빠르게 예약하고
        </EvenTextUnder>
        <EvenTextUnder
          className="FourthUnder"
          toggle={true}
          marginTop="1.5rem"
          paddingRight="33rem"
          marginLeft="0"
        >
          <p>비대면 계약서를 통한 빠른 업무지원!</p>
        </EvenTextUnder>
        <EvenTextUnder
          className="FourthUnder"
          toggle={true}
          marginTop="1.5rem"
          paddingRight="25rem"
          marginLeft="0"
        >
          <p>&apos;가마&apos;에서 이동 서비스와 모든 업무를 이용해 보세요.</p>
        </EvenTextUnder>
      </EvenSection>

      {/* fifth */}
      <FifthSection>
        <FifthBottom>
          <FifthImg src="https://static.wixstatic.com/media/10252b_05d243f2f5a846f6a92af7a013bc07a2~mv2.png/v1/fill/w_264,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%EA%B0%80%EB%A7%88%20%EC%95%84%EC%9D%B4%EC%BD%98_PNG.png" />
          <FifthText
            toggle={true}
            left="10rem"
            top="37rem"
            right="0"
            paddingLeft="0"
          >
            <p>가마와 함께 새로운 세계를 열</p>
          </FifthText>
          <FifthText
            className="Under"
            toggle={true}
            left="-58rem"
            top="40rem"
            right="1rem"
            paddingLeft="57rem"
          >
            <p>인재를 찾습니다</p>
          </FifthText>
          <Link href="/hire">
            <FifthButton>지원하기</FifthButton>
          </Link>
        </FifthBottom>
      </FifthSection>
      <Footer />
    </Animation>

    // </StyledComponentsRegistry>
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
const Parent = styled.div`
  text-align: center;
  align-items: center;
  margin-bottom: -31rem;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
`;
const MainImg = styled.img`
  width: 100%;
  height: 35rem;
`;
const MainText = styled.div`
  @media (max-width: 390px) {
    font-size: 1.5rem;
  }
  position: absolute;
  line-height: 25%;
  margin-top: 18rem;
  top: 0;
  left: 0;
  right: 0;
  color: black;
  z-index: 80;
  font-size: 2.5rem;
  font-weight: bold;
  padding-bottom: 2rem;
`;
const MainTextUnder = styled.p`
  @media (max-width: 390px) {
    display: none;
  }
  position: absolute;
  margin-top: 25rem;
  top: 0;
  left: 0;
  right: 0;
  font-size: 1rem;
  font-weight: bold;
  line-height: 35%;
  color: black;
`;
const TextOverlap = styled.div<{
  toggle: boolean;
  marginTop: string;
  right: string;
  color: string;
}>`
  @media (max-width: 390px) {
    font-size: 1.5rem;
    margin-top: 16.5rem;
  }
  position: absolute;
  line-height: 25%;
  margin-top: ${(props) => props.marginTop};
  top: 0;
  left: 0;
  right: ${(props) => props.right};
  font-size: 2.5rem;
  color: ${(props) => props.color};
  font-weight: bold;
`;

const EvenSection = styled.div<{
  toggle: boolean;
  marginTop: string;
  height: string;
}>`
  @media (max-width: 860px) {
    padding-top: 10rem;
  }
  margin-top: ${(props) => props.marginTop};
  text-align: center;
  align-items: center;
  position: relative;
  background-color: rgb(245, 247, 250);
  width: 100%;
  height: ${(props) => props.height};
  /* min-width: 100rem; */
`;
const SecondImg = styled.img`
  @media (max-width: 860px) {
    display: none;
  }
  margin-right: -15rem;
`;
const EvenText = styled.div<{
  toggle: boolean;
  paddingRight: string;
  marginTop: string;
}>`
  @media (max-width: 860px) {
    margin-left: 2rem;
    &.SecondText {
      margin-bottom: 1rem;
      margin-top: 3rem;
      padding-right: 1rem;
    }
    &.FourthText {
      margin-left: 2rem;
      padding-right: 1rem;
    }
  }
  @media (max-width: 470px) {
    margin-left: 1rem;
    &.SecondText {
      font-size: 1.7rem;
    }
    &.FourthText {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 410px) {
    &.FourthText {
      margin-left: 2rem;
      line-height: 150%;
    }
  }
  @media (max-width: 300px) {
    &.SecondText {
      font-size: 1.6rem;
    }
    &.FourthText {
      font-size: 1.6rem;
    }
  }
  margin-top: ${(props) => props.marginTop};
  padding-right: ${(props) => props.paddingRight};
  font-size: 2rem;
  line-height: 30%;
  font-weight: bold;
`;
const EvenTextUnder = styled.div<{
  toggle: boolean;
  paddingRight: string;
  marginTop: string;
  marginLeft: string;
}>`
  @media (max-width: 860px) {
    padding-right: 1rem;
    margin-left: 1rem;
  }
  @media (max-width: 470px) {
    font-size: 1rem;
  }
  @media (max-width: 370px) {
    margin-top: 1rem;
    line-height: 100%;
  }
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  padding-right: ${(props) => props.paddingRight};
  top: 21rem;
  font-size: 1.2rem;
  line-height: 30%;
  font-weight: bold;
`;
const SecondButton = styled.button`
  @media (max-width: 860px) {
    margin-left: 1rem;
  }
  margin-left: -40rem;
  margin-top: 3rem;
  font-weight: bold;
  border: none;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  color: white;
  background-color: #5048e5;
  border-radius: 1rem;
  cursor: pointer;
  padding: 0.5rem 2rem;
`;

const OddSection = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  height: 40rem;
  text-align: center;
  align-items: center;
`;
const ThirdImg = styled.img<{
  toggle: boolean;
  marginBottom: string;
  marginLeft: string;
}>`
  @media (max-width: 600px) {
    &.Click {
      margin-left: -66em;
    }
  }
  @media (max-width: 860px) {
    display: none;
    &.Click {
      display: none;
    }
  }
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
`;
const OddText = styled.div`
  @media (max-width: 860px) {
    margin-left: 2rem;
    margin-top: 13rem;
  }
  @media (max-width: 470px) {
    margin-left: 1rem;
    font-size: 1.7rem;
  }
  @media (max-width: 300px) {
    font-size: 1.6rem;
  }
  font-size: 2rem;
  line-height: 50%;
  font-weight: bold;
  margin-left: 24rem;
  margin-top: -10rem;
`;
const OddTextUnder = styled.div<{
  toggle: boolean;
  marginLeft: string;
  marginTop: string;
}>`
  @media (max-width: 860px) {
    margin-left: 1rem;
  }
  @media (max-width: 470px) {
    font-size: 1rem;
  }
  @media (max-width: 300px) {
    line-height: 100%;
  }
  font-size: 1.2rem;
  line-height: 30%;
  font-weight: bold;
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: -10rem;
`;
const ThirdButton = styled.button`
  @media (max-width: 860px) {
    margin-top: 2rem;
    margin-left: -21rem;
  }
  position: relative;
  font-weight: bold;
  border: none;
  text-decoration: none;
  display: inline-block;
  bottom: -11rem;
  right: -12rem;
  font-size: 1.2rem;
  color: white;
  background-color: #5048e5;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  margin: 4px 10px;
`;
const ClickText = styled.div`
  @media (max-width: 860px) {
    display: none;
  }
  font-size: 2rem;
  line-height: 50%;
  font-weight: bold;
  z-index: 3;
  bottom: 25rem;
  margin-left: -14rem;
  margin-top: -13rem;
  color: white;
  /* min-width: 100rem; */
`;

const FourthImg = styled.img`
  @media (max-width: 860px) {
    display: none;
  }
  position: relative;
  transform: rotate(-25deg);
  top: 2rem;
  left: 27rem;
`;
const FourthImg2 = styled.img`
  @media (max-width: 860px) {
    display: none;
  }
  position: relative;
  top: 10rem;
  bottom: -20rem;
  left: 7rem;
`;
const FourthText = styled.div`
  @media (max-width: 860px) {
    margin-left: 2rem;
    font-size: 2rem;
    margin-top: -9rem;
    padding-right: 17rem;
  }
  @media (max-width: 470px) {
    padding-right: 0;
    margin-left: 1rem;
    font-size: 1.7rem;
  }
  @media (max-width: 300px) {
    padding-right: 0;
    margin-left: 1rem;
    font-size: 1.6rem;
  }
  padding-right: 39rem;
  margin-top: -28rem;
  padding-top: 10rem;
  font-size: 2rem;
  font-weight: bold;
`;

const FifthSection = styled.div`
  position: relative;
  background-color: #5048e5;
  height: 52rem;
  text-align: center;
`;
const FifthBottom = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  height: 33rem;
  bottom: 1em;
`;
const FifthImg = styled.img`
  @media (max-width: 710px) {
    display: none;
  }
  position: absolute;
  top: 35rem;
  align-items: center;
  left: 0;
  right: 40rem;
  margin: auto;
`;
const FifthText = styled.div<{
  toggle: boolean;
  left: string;
  top: string;
  right: string;
  paddingLeft: string;
}>`
  @media (max-width: 710px) {
    margin-left: -9rem;
  }
  @media (max-width: 400px) {
    &.Under {
      margin-left: -6rem;
    }
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    &.Under {
      margin-left: -5rem;
    }
    font-size: 1.3rem;
  }
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  padding-left: ${(props) => props.paddingLeft};
  margin: auto;
  font-size: 2rem;
  line-height: 30%;
  font-weight: bold;
  color: white;
`;
const FifthButton = styled.button`
  @media (max-width: 768px) {
    left: 1rem;
  }
  @media (max-width: 400px) {
    left: 0;
  }
  position: relative;
  font-weight: bold;
  border: none;
  text-decoration: none;
  display: inline-block;
  top: 45rem;
  font-size: 1.2rem;
  color: #5048e5;
  background-color: white;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  margin: 4px 10px;
  transition: 0.7s;
  &:hover {
    background-color: #5048e5;
  }
`;
