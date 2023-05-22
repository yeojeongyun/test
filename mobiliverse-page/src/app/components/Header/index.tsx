"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const pathname = usePathname();
  const [ActiveLink, setActiveLink] = useState("");
  const handleLinkClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };
  useEffect(() => {
    if (pathname === "/") {
      setActiveLink("home");
    } else if (pathname === "/about") {
      setActiveLink("about");
    } else if (pathname === "/erp") {
      setActiveLink("erp");
    } else if (pathname === "/platform") {
      setActiveLink("platform");
    } else if (pathname === "/ir") {
      setActiveLink("ir");
    } else if (pathname === "/news") {
      setActiveLink("news");
    } else if (pathname === "/hire") {
      setActiveLink("hire");
    }
  }, [pathname]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderSection>
      <Link href="/">
        <HeaderImg
          src="https://static.wixstatic.com/media/10252b_eaf5eecf2e4f43138b9c2d84518c147d~mv2.png/v1/fill/w_216,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%EB%AA%A8%EB%B9%8C%EB%A6%AC%EB%B2%84%EC%8A%A4%20%EB%A1%9C%EA%B3%A0.png"
          alt="로고"
        />
      </Link>
      <NavMenu>
        <HeaderLi>
          <Link
            href="/"
            className={
              ActiveLink === "home" ? `${HeaderLink} ${ActiveLink}` : HeaderLink
            }
            style={ActiveLink === "home" ? { color: "#5048e5" } : undefined}
            onClick={() => handleLinkClick("home")}
          >
            홈
          </Link>
        </HeaderLi>
        <HeaderLi>
          <Link
            href="/about"
            className={
              ActiveLink === "about"
                ? `${HeaderLink} ${ActiveLink}`
                : HeaderLink
            }
            style={ActiveLink === "about" ? { color: "#5048e5" } : undefined}
            onClick={() => handleLinkClick("about")}
          >
            회사소개
          </Link>
        </HeaderLi>
        <HeaderLi>
          서비스
          <SubMenu>
            <HeaderLi>
              <Link
                href="/erp"
                className={ActiveLink === "erp" ? ActiveLink : ""}
                style={ActiveLink === "erp" ? { color: "#5048e5" } : undefined}
                onClick={() => handleLinkClick("erp")}
              >
                가마ERP
              </Link>
            </HeaderLi>
            <HeaderLi>
              <Link
                href="/platform"
                className={ActiveLink === "platform" ? ActiveLink : ""}
                style={
                  ActiveLink === "platform" ? { color: "#5048e5" } : undefined
                }
                onClick={() => handleLinkClick("platform")}
              >
                가마중개플랫폼
              </Link>
            </HeaderLi>
          </SubMenu>
        </HeaderLi>
        <HeaderLi>
          <Link
            href="/ir"
            className={ActiveLink === "ir" ? ActiveLink : ""}
            style={ActiveLink === "ir" ? { color: "#5048e5" } : undefined}
            onClick={() => handleLinkClick("ir")}
          >
            투자정보(IR)
          </Link>
        </HeaderLi>
        <HeaderLi>
          <Link
            href="/news"
            className={ActiveLink === "news" ? ActiveLink : ""}
            style={ActiveLink === "news" ? { color: "#5048e5" } : undefined}
            onClick={() => handleLinkClick("news")}
          >
            모빌리버스소식
          </Link>
        </HeaderLi>
        <HeaderLi>
          <Link
            href="/hire"
            className={ActiveLink === "hire" ? ActiveLink : ""}
            style={ActiveLink === "hire" ? { color: "#5048e5" } : undefined}
            onClick={() => handleLinkClick("hire")}
          >
            인재채용
          </Link>
        </HeaderLi>
      </NavMenu>

      {/* 햄버거메뉴 */}
      <HamburgerMenu>
        <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </HamburgerButton>
        {isOpen && (
          <NavIcon>
            <li>
              <Link
                href="/"
                className={
                  ActiveLink === "home"
                    ? `${HeaderLink} ${ActiveLink}`
                    : HeaderLink
                }
                style={ActiveLink === "home" ? { color: "#5048e5" } : undefined}
                onClick={() => handleLinkClick("home")}
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  ActiveLink === "about"
                    ? `${HeaderLink} ${ActiveLink}`
                    : HeaderLink
                }
                style={
                  ActiveLink === "about" ? { color: "#5048e5" } : undefined
                }
                onClick={() => handleLinkClick("about")}
              >
                회사소개
              </Link>
            </li>
            <li className="HamburgerService">서비스</li>
            <HamburgerSubMenu>
              <li>
                <Link
                  href="/erp"
                  className={
                    ActiveLink === "erp"
                      ? `${HeaderLink} ${ActiveLink}`
                      : HeaderLink
                  }
                  style={
                    ActiveLink === "erp" ? { color: "#5048e5" } : undefined
                  }
                  onClick={() => handleLinkClick("erp")}
                >
                  가마ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/platform"
                  className={
                    ActiveLink === "platform"
                      ? `${HeaderLink} ${ActiveLink}`
                      : HeaderLink
                  }
                  style={
                    ActiveLink === "platform" ? { color: "#5048e5" } : undefined
                  }
                  onClick={() => handleLinkClick("platform")}
                >
                  가마중계플랫폼
                </Link>
              </li>
            </HamburgerSubMenu>
            <li>
              <Link
                href="/ir"
                className={
                  ActiveLink === "ir"
                    ? `${HeaderLink} ${ActiveLink}`
                    : HeaderLink
                }
                style={ActiveLink === "ir" ? { color: "#5048e5" } : undefined}
                onClick={() => handleLinkClick("ir")}
              >
                투자정보(IR)
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className={
                  ActiveLink === "news"
                    ? `${HeaderLink} ${ActiveLink}`
                    : HeaderLink
                }
                style={ActiveLink === "news" ? { color: "#5048e5" } : undefined}
                onClick={() => handleLinkClick("news")}
              >
                모빌리버스 소식
              </Link>
            </li>
            <li>
              <Link
                href="/hire"
                className={
                  ActiveLink === "hire"
                    ? `${HeaderLink} ${ActiveLink}`
                    : HeaderLink
                }
                style={ActiveLink === "hire" ? { color: "#5048e5" } : undefined}
                onClick={() => handleLinkClick("hire")}
              >
                인재소식
              </Link>
            </li>
          </NavIcon>
        )}
      </HamburgerMenu>
    </HeaderSection>
  );
}
const HeaderSection = styled.div`
  /* min-width: 100%; */
  cursor: pointer;
  /* display: flex; */
  /* text-align: center;
  align-items: center;
  justify-content: center; */
  position: relative;
  border-bottom: 0.1rem solid black;
`;
const HeaderImg = styled.img`
  align-items: left;
  @media (max-width: 360px) {
    width: 13rem;
  }
`;
const NavMenu = styled.ul`
  text-align: center;
  margin-top: -2rem;
  @media (max-width: 900px) {
    display: none;
  }
  @media (min-width: 970px) {
    padding-left: 0;
    margin-left: 4rem;
    font-size: 0.8rem;
  }
`;
const HeaderLink = styled.li`
  &:hover {
    color: #5048e5;
  }
`;
const SubMenu = styled.ul`
  padding-right: 1rem;
  margin-left: -3rem;
  text-align: center;
  display: none;
  position: absolute;
  top: 100%;
  width: 9rem;
  background-color: white;
`;
const HeaderLi = styled.li`
  @media (min-width: 900px) {
    font-size: 1rem;
  }
  font-weight: bold;
  height: 100%;
  display: inline-block;
  align-items: center;
  padding: 0.1rem 0.8rem;
  position: relative;
  &:hover ${SubMenu} {
    display: block;
    height: auto;
    transition-duration: 1s;
    z-index: 50;
    position: absolute;
    transition-duration: 0.2s;
    float: left;
    text-align: left;
    line-height: 2rem;
  }
  &:hover > a:not(.SubMenu) {
    color: #5048e5;
  }
`;
const HamburgerMenu = styled.div`
  @media (min-width: 901px) {
    display: none;
  }
`;
const HamburgerButton = styled.button`
  margin-top: -10rem;
  width: 2rem;
  cursor: pointer;
  height: 2rem;
  margin-left: 17rem;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  color: #333;
  transition: 0.7s;
  &:hover {
    color: #000;
    /* transform: scale(1.4); */
  }
  @media (max-width: 901px) {
    margin-left: 44rem;
  }
  @media (max-width: 764px) {
    margin-left: 33rem;
  }
  @media (max-width: 500px) {
    margin-left: 23rem;
  }
  @media (max-width: 360px) {
    margin-left: 15rem;
  }
`;
const HamburgerSubMenu = styled.ul`
  font-size: 1rem;
  padding-right: 1rem;
  margin-top: -11rem;
  margin-left: -11.5rem;
  display: none;
  position: absolute;
  top: 100%;
  width: 7rem;
  background-color: rgb(245, 247, 250);
`;
const NavIcon = styled.ul`
  @media (max-width: 900px) {
    padding: 0.9rem;
    margin-left: 36rem;
  }
  @media (max-width: 764px) {
    padding: 0.9rem;
    margin-left: 25rem;
  }
  @media (max-width: 500px) {
    margin-left: 15rem;
    padding: 0.9rem;
  }
  @media (max-width: 360px) {
    margin-left: 8rem;
    padding: 0.9rem;
  }
  display: block;
  margin-top: -0.01rem;
  margin-left: 13rem;
  margin-right: -20rem;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255);
  cursor: pointer;
  text-align: center;
  padding: 1rem;
  position: absolute;
  top: 100%;
  z-index: 500;
  line-height: 200%;

  &:hover ${HamburgerSubMenu} {
    display: block;
    height: auto;
    transition-duration: 1s;
    z-index: 50;
    position: absolute;
    transition-duration: 0.2s;
    float: left;
    text-align: left;
    line-height: 2rem;
  }
`;
