"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
export default function Example() {
  return (
    <Hire>
      <Header />
      <Name>인재 채용</Name>
      <Contents>현재 채용중인 공고가 없습니다.</Contents>
      <Footer />
    </Hire>
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
const Hire = styled.div`
  /* @media (max-width: 480px) {
    min-width: 30rem;
  } */
  animation-name: ${fadeIn};
  animation-duration: 1s;
  width: 100%;
  height: 90%;
  text-align: center;
  border-bottom: 0.1rem solid black;
  min-width: 50%;
`;
const Name = styled.p`
  font-weight: bold;
  font-size: 4rem;
`;
const Contents = styled.p`
  font-size: 1.3rem;
  height: 25rem;
  /* margin-bottom: 15rem; */
  @media (min-width: 280px) {
    height: 33rem;
  }
  /* @media (max-width: 600px) {
    height: 35rem;
  }
  @media (min-width: 768px) {
    margin-left: -20rem;
  }
  @media (min-width: 900px) {
    margin-left: -35rem;
  } */
`;
