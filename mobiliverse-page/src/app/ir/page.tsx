"use client";
import React from "react";
// import styles from './page.module.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";

export default function IR() {
  return (
    <Animation>
      <Header />
      <Download>
        <DownloadName>최신 IR 발표자료</DownloadName>
        <a href="./downloads/IR.pdf" download>
          <DownloadButton>다운로드</DownloadButton>
        </a>
      </Download>

      <Inquiry>
        <Partnership>제휴문의</Partnership>
        <Mail>support@mobiliverse.com</Mail>
        <Name>이름</Name>
        <Answer />
        <Name>연락처 *</Name>
        <Answer required />
        <Name>Email *</Name>
        <Answer required />
        <Name>내용 *</Name>
        <Answer className="Large" required />
        <ButtonDiv>
          <Button>문의하기</Button>
        </ButtonDiv>
      </Inquiry>
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
  text-align: center;
  align-items: center;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  width: 100%;
  height: 100%;
`;
const Download = styled.div`
  display: inline;
  height: 15rem;
`;
const DownloadName = styled.p`
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  margin-top: 5rem;
  font-weight: bold;
  font-size: 4rem;
`;
const DownloadButton = styled.button`
  font-weight: bold;
  border: none;
  text-decoration: none;
  display: inline-block;
  top: 18rem;
  left: 50.5rem;
  font-size: 1.2rem;
  color: white;
  background-color: #5048e5;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem 6rem;
  margin-bottom: 5rem;
`;

const Inquiry = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(243, 244, 245);
  height: 45rem;
  padding-top: 0.1rem;
  border-bottom: 0.1rem solid black;
`;
const Partnership = styled.p`
  @media (max-width: 970px) {
    margin-top: 3rem;
    margin-left: -39rem;
  }
  @media (max-width: 850px) {
    margin-top: 3rem;
    margin-left: -1rem;
  }
  @media (max-width: 678px) {
    margin-top: 3rem;
    margin-left: -1rem;
  }
  font-weight: bold;
  font-size: 1.8rem;
  margin-top: 5rem;
  margin-left: -50rem;
`;
const Mail = styled.p`
  @media (max-width: 970px) {
    margin-left: -39rem;
  }
  @media (max-width: 850px) {
    margin-left: -1rem;
  }
  @media (max-width: 678px) {
    margin-left: -1rem;
  }
  margin-left: -45rem;
  line-height: 30%;
`;
const Name = styled.p`
  @media (max-width: 850px) {
    margin-left: -19rem;
  }
  @media (max-width: 330px) {
    margin-left: -13rem;
  }
  margin-left: -25rem;
`;
const Answer = styled.input`
  @media (max-width: 970px) {
    width: 30rem;
  }
  @media (max-width: 768px) {
    width: 15rem;
    margin-left: -1rem;
  }
  border-radius: 0.5rem;
  margin-left: 17rem;
  margin-top: -0.5rem;
  border: 1px solid ${(props) => (props.required ? "red" : "initial")};
  height: 2rem;
  width: 39rem;
  &.Large {
    height: 8rem;
  }
`;
const ButtonDiv = styled.div`
  align-items: center;
  margin-top: 3rem;
`;
const Button = styled.button`
  @media (max-width: 970px) {
    width: 20rem;
    margin-left: 18rem;
  }
  @media (max-width: 768px) {
    width: 15rem;
    margin-left: -1rem;
  }
  @media (max-width: 330px) {
    width: 15rem;
    margin-left: -1rem;
  }
  font-weight: bold;
  border: none;
  text-decoration: none;
  margin-left: 17rem;
  font-size: 1rem;
  color: white;
  background-color: #5048e5;
  cursor: pointer;
  border-radius: 0.5rem;
  height: 3rem;
  width: 40rem;
  &:hover {
    background-color: #e6e6e6;
    color: #000;
    transition: 0.7s;
  }
`;
