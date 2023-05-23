'use client';
import React from 'react';
import styled from 'styled-components';
// import styles from './style.module.css';

export default function Footer() {
  return (
    <FooterContents>
      <Name>
        <p>(주)모빌리버스</p>
      </Name>
      <Inform
        className="Name"
        toggle={true}
        marginLeft="-52rem"
        paddingBottom="0"
      >
        <p>
          대표
          <Span> 박용석</Span>
        </p>
      </Inform>
      <Inform
        className="Address"
        toggle={true}
        marginLeft="-32rem"
        paddingBottom="0.9rem"
      >
        주소
        <Span>서울특별시 금천구 두산로70, 현대지식산업센터 A동 1512호</Span>
      </Inform>
      <Inform
        className="Number"
        toggle={true}
        marginLeft="-40rem"
        paddingBottom="1.8rem"
      >
        전화번호
        <Span>02-2169-2681 | Fax</Span>
        <Span>02-2169-2685</Span>
      </Inform>

      <Span className="copyRight">
        <p>copyright © 모빌리버스 AllRightsReserved.</p>
      </Span>
    </FooterContents>
  );
}
const FooterContents = styled.div`
  background-color: rgb(245, 247, 250);
  width: 100%;
  text-align: center;
  bottom: 0;
  @media (max-width: 500px) {
    width: auto;
  }
`;
const Name = styled.div`
  @media (max-width: 950px) {
    margin-left: -20rem;
  }
  @media (max-width: 380px) {
    margin-left: 1rem;
  }
  padding-top: 1rem;
  margin-left: -50rem;
  color: #5048e5;
  font-weight: bold;
  line-height: 35%;
  padding-bottom: 0.2rem;
`;
const Inform = styled.div<{
  toggle: boolean;
  marginLeft: string;
  paddingBottom: string;
}>`
  @media (max-width: 950px) {
    margin-left: -20rem;
    &.Name {
      margin-left: -21rem;
    }
    &.Address {
      margin-left: -1rem;
    }
    &.Number {
      margin-left: -9rem;
    }
  }
  @media (max-width: 380px) {
    &.Name {
      margin-left: 1rem;
    }
    &.Address {
      display: none;
    }
    &.Number {
      margin-left: 1rem;
    }
  }
  margin-left: ${(props) => props.marginLeft};
  font-size: 0.84rem;
  line-height: 20%;
  padding-bottom: ${(props) => props.paddingBottom};
`;
const Span = styled.span`
  /* min-width: 100%; */
  &.copyRight {
    @media (max-width: 950px) {
      margin-left: -20rem;
    }
  }
  font-weight: bold;
  margin-left: 0.2rem;
`;
