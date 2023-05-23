"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
// import styles from './page.module.css';
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
export default function Platform() {
  return (
    <Animation>
      <Header />
      <First>
        <Name>가마 중개플랫폼</Name>
        <Contents>렌터카 관련 서비스를 하나의 어플에서 간편하게!</Contents>
        <Contents>언제 어디서나 내가 원하는 차량을 빠르게 예약하고</Contents>
        <Contents>회원가입 없이도 간편하게 사고대차를 요청해 보세요.</Contents>
      </First>

      <Section toggle={true} height="39rem">
        <SectionImg className="First" src="./images/image3.png" />
        <SectionName
          className="First"
          toggle={true}
          marginTop="-25rem"
          marginRight="0"
          marginLeft="40rem"
        >
          <span style={{ color: "#5048e5" }}>다양한</span>
        </SectionName>
        <SectionName
          className="FirstUnder"
          toggle={true}
          marginTop="1rem"
          marginRight="0"
          marginLeft="58rem"
        >
          <p>대여 서비스를 만나보세요.</p>
        </SectionName>
        <SectionOddText
          className="First"
          toggle={true}
          marginLeft="49rem"
          marginTop="4rem"
        >
          차량대여, 사고대차, 기사 제공 서비스 등
        </SectionOddText>
        <SectionOddText
          className="First"
          toggle={true}
          marginLeft="50rem"
          marginTop="0rem"
        >
          {/* eslint-disable-next-line no-irregular-whitespace */}
          <p>가마에서 ​다양한 렌트 서비스를 만나보세요.</p>
        </SectionOddText>
      </Section>

      <Section toggle={true} height="36rem">
        <SectionImg className="Second" src="./images/image4.png" />
        <SectionName
          className="Second"
          toggle={true}
          marginTop="-20rem"
          marginRight="5rem"
          marginLeft="76rem"
        >
          상황에 맞는
        </SectionName>
        <SectionName
          className="Second2"
          toggle={true}
          marginTop="2rem"
          marginRight="0"
          marginLeft="67rem"
        >
          <span style={{ color: "#5048e5" }}>여러 대여 옵션</span>을
        </SectionName>
        <SectionName
          className="Second3"
          toggle={true}
          marginTop="1rem"
          marginRight="0"
          marginLeft="72rem"
        >
          <p>제공 합니다.</p>
        </SectionName>
        <SectionEvenText
          className="Second"
          toggle={true}
          marginLeft="63rem"
          marginTop="4rem"
        >
          대여 장소, 목적, 상황 등에 맞는 여러 대여 옵션으로
        </SectionEvenText>
        <SectionEvenText
          className="SecondUnder"
          toggle={true}
          marginLeft="69rem"
          marginTop="0rem"
        >
          <p>더욱 편리한 서비스를 경험해보세요.</p>
        </SectionEvenText>
      </Section>

      <Section toggle={true} height="39rem">
        <SectionImg className="First" src="./images/image5.png" />
        <SectionName
          className="Third"
          toggle={true}
          marginTop="-25rem"
          marginRight="0"
          marginLeft="51rem"
        >
          <span style={{ color: "#5048e5" }}>편안</span>하고
          <span style={{ color: "#5048e5" }}>안전</span>
          하게
        </SectionName>
        <SectionName
          className="ThirdUnder"
          toggle={true}
          marginTop="1rem"
          marginRight="0"
          marginLeft="46rem"
        >
          <p>자동차 대여</p>
        </SectionName>
        <SectionOddText
          className="Third"
          toggle={true}
          marginLeft="59rem"
          marginTop="3.8rem"
        >
          가마에서 서비스가 검증된 렌터카를 안심하고 부를 수 있습니다.
        </SectionOddText>
      </Section>

      <Section toggle={true} height="36.5rem">
        <SectionImg className="Second" src="./images/image6.png" />
        <SectionName
          className="Fourth"
          toggle={true}
          marginTop="-25rem"
          marginRight="0"
          marginLeft="70rem"
        >
          보다
          <span style={{ color: "#5048e5" }}>편리한</span>
          <p>대여 서비스</p>
        </SectionName>
        <SectionEvenText
          className="Fourth"
          toggle={true}
          marginLeft="68rem"
          marginTop="4rem"
        >
          서비스마다 번거로운 설치는 그만!
        </SectionEvenText>
        <SectionEvenText
          className="FourthUnder"
          toggle={true}
          marginLeft="58rem"
          marginTop="0rem"
        >
          <p>가마에서 하나로 다양한 렌터카 서비스를 자유롭게 이용하세요.</p>
        </SectionEvenText>
      </Section>
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
const First = styled.div`
  height: 33rem;
  /* position: relative; */
  text-align: center;
  align-items: center;
  margin-bottom: -15rem;
  /* min-width: 100rem; */
`;
const Name = styled.p`
  @media (max-width: 405px) {
    font-size: 2.5rem;
  }
  @media (max-width: 350px) {
    font-size: 2rem;
  }
  margin-top: 3rem;
  font-weight: bold;
  font-size: 3rem;
`;
const Contents = styled.p`
  /* @media (max-width: 970px) {
    margin-right: 39rem;
  }
  @media (max-width: 768px) {
    margin-left: -11rem;
  } */
  @media (max-width: 405px) {
    font-size: 1rem;
  }
  @media (max-width: 335px) {
    font-size: 0.8rem;
  }
  line-height: 80%;
  font-size: 1.2rem;
`;

const Section = styled.div<{ toggle: boolean; height: string }>`
  position: relative;
  height: ${(props) => props.height};
  text-align: center;
  @media (max-width: 970px) {
    height: 35rem;
  }
  @media (max-width: 500px) {
    height: 30rem;
  }
`;
const SectionImg = styled.img`
  margin-left: -60rem;
  @media (max-width: 970px) {
    &.First {
      margin-left: -30rem;
    }
    &.Second {
      margin-left: -30rem;
    }
    max-width: 50%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const SectionName = styled.div<{
  toggle: boolean;
  marginTop: string;
  marginRight: string;
  marginLeft: string;
}>`
  @media (max-width: 1565px) {
    &.First {
      font-size: 2rem;
      margin-left: 17rem;
      margin-top: -20rem;
    }
    &.FirstUnder {
      font-size: 2rem;
      margin-left: 35rem;
      margin-top: 1rem;
    }
    &.Second {
      font-size: 2rem;
      margin-left: 43rem;
      margin-top: -20rem;
    }
    &.Second2 {
      font-size: 1.9rem;
      margin-left: 35rem;
      margin-top: 1.5rem;
    }
    &.Second3 {
      font-size: 1.9rem;
      margin-left: 40rem;
      margin-top: 1.5rem;
    }
    &.Third {
      font-size: 2rem;
      margin-left: 27rem;
      margin-top: -20rem;
    }
    &.ThirdUnder {
      font-size: 1.9rem;
      margin-left: 22rem;
    }
    &.Fourth {
      font-size: 2rem;
      margin-left: 38rem;
      margin-top: -20rem;
    }
  }
  @media (max-width: 970px) {
    &.First {
      margin-top: -15rem;
      margin-left: 10rem;
    }
    &.FirstUnder {
      margin-left: 28rem;
    }
    &.Second {
      margin-top: -15rem;
      margin-left: 40rem;
    }
    &.Second2 {
      margin-left: 33rem;
    }
    &.Second3 {
      margin-left: 38rem;
    }
    &.Third {
      margin-top: -15rem;
      margin-left: 20rem;
    }
    &.ThirdUnder {
      margin-left: 15rem;
    }
    &.Fourth {
      margin-left: 36rem;
      margin-top: -15rem;
    }
  }
  @media (max-width: 900px) {
    &.First {
      margin-top: 5rem;
      margin-left: 1rem;
    }
    &.FirstUnder {
      margin-left: 1rem;
    }
    &.Second {
      margin-top: -10rem;
      margin-left: 6rem;
    }
    &.Second2 {
      margin-left: 1rem;
    }
    &.Second3 {
      font-size: 1.9rem;
      margin-left: 2rem;
    }
    &.Third {
      margin-top: -5rem;
      margin-left: 1rem;
    }
    &.ThirdUnder {
      font-size: 1.9rem;
      margin-left: 1rem;
    }
    &.Fourth {
      font-size: 1.9rem;
      margin-left: 1rem;
      margin-top: -3rem;
    }
  }
  @media (max-width: 350px) {
    &.First {
      margin-left: 0.6rem;
      margin-top: 3rem;
      font-size: 1.5rem;
    }
    &.FirstUnder {
      font-size: 1.5rem;
      margin-left: 0.5rem;
    }
    &.Second {
      font-size: 1.5rem;
      margin-left: 5rem;
    }
    &.Second2 {
      font-size: 1.5rem;
      margin-left: -0.2rem;
    }
    &.Second3 {
      margin-left: 0.5rem;
      font-size: 1.5rem;
    }
    &.Third {
      margin-left: 0.2rem;
      font-size: 1.5rem;
    }
    &.ThirdUnder {
      margin-left: 0.2rem;
      font-size: 1.5rem;
    }
    &.Fourth {
      margin-left: 0.5rem;
      margin-top: -7rem;
      font-size: 1.5rem;
    }
  }
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  font-size: 2rem;
  line-height: 35%;
  font-weight: bold;
  /* min-width: 100rem; */
`;
const SectionOddText = styled.div<{
  toggle: boolean;
  marginLeft: string;
  marginTop: string;
}>`
  @media (max-width: 1565px) {
    &.First {
      font-size: 0.8rem;
      margin-left: 28rem;
    }
    &.Third {
      font-size: 0.8rem;
      margin-left: 35rem;
    }
  }
  @media (max-width: 970px) {
    &.First {
      margin-left: 20rem;
    }
    &.Third {
      margin-left: 28rem;
    }
  }
  @media (max-width: 900px) {
    &.First {
      margin-left: 1rem;
    }
    &.Third {
      margin-left: 1rem;
    }
  }
  @media (max-width: 340px) {
    &.First {
      margin-left: 0.8rem;
    }
    &.Third {
      margin-left: 0.4rem;
      line-height: 150%;
    }
  }
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  line-height: 70%;
  font-size: 0.8rem;
`;

const SectionEvenText = styled.div<{
  toggle: boolean;
  marginLeft: string;
  marginTop: string;
}>`
  @media (max-width: 1565px) {
    &.Second {
      margin-left: 32rem;
    }
    &.SecondUnder {
      margin-left: 38rem;
    }
    &.Fourth {
      margin-left: 37rem;
    }
    &.FourthUnder {
      margin-left: 27rem;
    }
  }
  @media (max-width: 900px) {
    &.Second {
      margin-left: 2rem;
    }
    &.SecondUnder {
      margin-left: 2rem;
    }
    &.Fourth {
      margin-left: 1rem;
    }
    &.FourthUnder {
      margin-left: 1rem;
    }
  }
  @media (max-width: 340px) {
    &.Second {
      margin-left: 0.4rem;
    }
    &.SecondUnder {
      margin-left: 0.8rem;
    }
    &.Fourth {
      margin-left: 0.7rem;
    }
    &.FourthUnder {
      margin-left: 0.4rem;
      line-height: 150%;
    }
  }
  &.Second {
    font-size: 0.8rem;
  }
  &.Fourth {
    font-size: 0.8rem;
  }
  &.FourthUnder {
    font-size: 0.8rem;
  }
  line-height: 70%;
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  font-size: 0.8rem;
`;
