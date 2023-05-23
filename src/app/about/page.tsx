"use client";
import React from "react";
// import styles from './page.module.css';
import styled, { keyframes } from "styled-components";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
export default function About() {
  return (
    <Animation>
      <Header />
      <First>
        <Img src="https://static.wixstatic.com/media/10252b_5cf088adf70442a8a8a3b2efa986238f~mv2.png/v1/fill/w_1903,h_360,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/10252b_5cf088adf70442a8a8a3b2efa986238f~mv2.png" />

        <Name>회사 소개 </Name>
        <P1 toggle={true} marginLeft="-27rem">
          Mobility + Universe를 혼합한 모빌리버스는
        </P1>
        <P1 toggle={true} marginLeft="-29rem">
          차량 대여 플랫폼 업계에서 제공 되고 있는
        </P1>
        <P1 toggle={true} marginLeft="-26rem">
          다양한 서비스들을 하나의 플랫폼으로 통합하여
        </P1>
        <P1 toggle={true} marginLeft="-23rem">
          시장의 선구자로 나서겠다는 목표로 설립 되었습니다.
        </P1>

        <Year>
          <YearAbout>연혁</YearAbout>
          <YearContents>
            <span style={{ color: "#5048e5" }}>2022년 08월</span>
            (주) 모빌리버스 설립
          </YearContents>
        </Year>

        <How>
          <HowAbout>오시는길</HowAbout>
          <HowContent>
            서울특별시 금천구 두산로 70, 현대지식산업센터 A동 15층 1512호
          </HowContent>
          <Map
            loading="lazy"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBtL1_J88ek3yX288KeS-gPEF-koifpmy0
&q=현대지식산업센터 A동&region=KR&language=ko"
          ></Map>
        </How>

        <Download>
          <DownloadAbout>회사 소개서 자료</DownloadAbout>
          <a href="./downloads/about.pdf" download>
            <DownloadButton>다운로드</DownloadButton>
          </a>
        </Download>
      </First>
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
  width: 100%;
  object-fit: cover;
`;
const Img = styled.img`
  width: 100%;
`;
const Name = styled.div`
  @media (max-width: 900px) {
    /* margin-right: -15rem; */
  }
  @media (max-width: 850px) {
    margin-left: 2rem;
  }
  @media (max-width: 600px) {
    margin-left: 1rem;
  }
  font-size: 2.5rem;
  font-weight: bold;
  margin-left: -40rem;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
const P1 = styled.p<{ toggle: boolean; marginLeft: string }>`
  @media (max-width: 850px) {
    margin-left: 2rem;
  }
  @media (max-width: 435px) {
    font-size: 1rem;
    margin-left: 1rem;
  }
  @media (max-width: 360px) {
    font-size: 0.79rem;
  }
  margin-top: 2rem;
  font-weight: bold;
  margin-left: ${(props) => props.marginLeft};
  font-size: 1.2rem;
  line-height: 10%;
  margin-bottom: 3rem;
  text-align: center;
`;

const Year = styled.div`
  padding: 1.2rem;
  background-color: rgb(243, 244, 245);
  height: 15rem;
`;
const YearAbout = styled.div`
  @media (max-width: 900px) {
    /* margin-right: -15rem; */
  }
  @media (max-width: 850px) {
    margin-left: 2rem;
  }
  @media (max-width: 280px) {
    margin-left: 1rem;
  }
  text-align: center;
  margin-left: -46rem;
  margin-top: 3rem;
  font-size: 2.5rem;
  font-weight: bold;
`;
const YearContents = styled.p`
  @media (max-width: 850px) {
    margin-left: 2rem;
  }
  @media (max-width: 320px) {
    margin-left: 1rem;
    font-size: 1rem;
  }
  text-align: center;
  margin-top: 4rem;
  font-weight: bold;
  margin-left: -32rem;
  font-size: 1.2rem;
  line-height: 35%;
  margin-bottom: 2rem;
`;

const How = styled.div`
  /* position: relative; */
  text-align: center;
  height: 35rem;
`;
const HowAbout = styled.div`
  @media (max-width: 850px) {
    margin-left: 1rem;
  }
  margin-top: 3rem;
  font-size: 2.5rem;
  font-weight: bold;
  margin-left: -41rem;
`;
const HowContent = styled.p`
  @media (max-width: 930px) {
    font-size: 1rem;
  }
  @media (max-width: 850px) {
    margin-left: 1rem;
  }
  @media (max-width: 450px) {
    display: none;
  }
  font-weight: bold;
  margin-left: -15rem;
  font-size: 1.2rem;
  line-height: 35%;
`;
const Map = styled.iframe`
  @media (max-width: 900px) {
    width: 35rem;
  }
  @media (max-width: 850px) {
    margin-left: 2rem;
  }
  @media (max-width: 570px) {
    margin-left: 1rem;
    width: 30rem;
  }
  @media (max-width: 460px) {
    margin-top: 5rem;
    width: 20rem;
    height: 20rem;
  }
  @media (max-width: 300px) {
    margin-left: 1rem;
    width: 18rem;
    height: 18rem;
  }
  align-items: center;
  width: 50rem;
  height: 25rem;
  margin-bottom: 2rem;
  margin: 0 auto;
`;

const Download = styled.div`
  @media (max-width: 480px) {
    /* min-width: 30rem; */
  }
  text-align: center;
  padding: 2rem;
  background-color: rgb(243, 244, 245);
  height: 10rem;
`;
const DownloadAbout = styled.div`
  @media (max-width: 355px) {
    font-size: 1.8rem;
  }
  padding: 1rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
`;
const DownloadButton = styled.button`
  font-weight: bold;
  border: none;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-size: 1.2rem;
  color: white;
  background-color: #5048e5;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
`;
