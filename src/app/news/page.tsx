'use client';
import React from 'react';
// import styles from './page.module.css';
import styled, { keyframes } from 'styled-components';

export default function News() {
  return (
    <Animation>
      <Section1>
        <Img src="https://static.wixstatic.com/media/11062b_6783fe24ca554c53a3ab020857a888d8~mv2.jpg/v1/fill/w_1903,h_334,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_6783fe24ca554c53a3ab020857a888d8~mv2.jpg" />
        <Name toggle={true} fontSize="3.5rem" top="4.5rem">
          보도자료
        </Name>
        <Name toggle={true} fontSize="1.2rem" top="11rem">
          모빌리버스 소식을 확인해 보세요.
        </Name>
      </Section1>

      <Section2>
        <Img2 src="https://static.wixstatic.com/media/4673d86350944060a80ef6074d7a7841.jpg/v1/fill/w_378,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%EC%8B%A0%EB%AC%B8%EC%9D%98%20%EC%8A%A4%ED%83%9D.jpg" />
        <Name2>새로운 소식이 없습니다.</Name2>
        <Contents2>모빌리버스 소식을 기다려 주세요!</Contents2>
      </Section2>
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
  height: 33rem;
  text-align: center;
  align-items: center;
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
  height: 65%;
  object-fit: cover;
`;
const Name = styled.p<{ toggle: boolean; fontSize: string; top: string }>`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  color: white;
  font-weight: bold;
  font-size: ${(props) => props.fontSize};
  top: ${(props) => props.top};
`;

const Section2 = styled.div`
  text-align: center;
  margin-top: -2rem;
  height: 18rem;
  border-bottom: 0.1rem solid black;
`;
const Img2 = styled.img`
  @media (max-width: 970px) {
    width: 20rem;
    margin-left: 1rem;
  }
  @media (max-width: 768px) {
    width: 20rem;
  }
  @media (max-width: 300px) {
    display: none;
  }
  margin-left: -40rem;
  margin-top: -5rem;
`;
const Name2 = styled.p`
  @media (max-width: 970px) {
    margin-top: -17rem;
    margin-left: 1rem;
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 1.5rem;
  }
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: 25rem;
  margin-top: -18rem;
`;
const Contents2 = styled.p`
  @media (max-width: 970px) {
    margin-top: 16rem;
    margin-left: 1rem;
  }
  @media (max-width: 768px) {
    margin-top: -1rem;
    margin-left: 1rem;
  }
  margin-left: 21rem;
  margin-top: 2rem;
`;
