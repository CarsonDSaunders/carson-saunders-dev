import React from "react";
import styled from "styled-components";

import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import "./styles.css";

const oxfordBlue = "#14213dff";
const orangeWeb = "#fca311ff";

// styles
const Page = styled.div`
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    color: white;
`;

const VidBg = styled.video`
    height: 90vh;
    width: 100vw;
    z-index: 0;
    position: fixed;
    filter: blur(5px);
    object-fit: cover;
`;

const Main = styled.main`
    background: #71816d;
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopSection = styled.section`
    backdrop-filter: blur(5px);
    border-radius: 10%;
    height: 40%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Header = styled.header`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeaderText = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
`;

const NavBar = styled.nav`
    display: flex;
`;

const NavOptions = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 30vw;
`;

const NavItem = styled(Link)`
    font-size: 1.5rem;
    color: #14213dff;
    font-weight: 600;
    text-decoration: none;
    transition: color linear 0.5s;

    &:hover {
        color: #fca311ff;
    }
`;

const ActiveNavItem = styled(NavItem)`
    color: #fca311ff;
`;

const Footer = styled.footer`
    background-color: #71816d;
    height: 10vh;
`;
export default function about() {
    return (
        <Page>
            <Helmet>
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
                </style>
            </Helmet>
            <Main>
                <TopSection>
                    <Header>
                        <HeaderText>Carson Saunders Dev</HeaderText>
                    </Header>
                    <NavBar>
                        <NavOptions>
                            <li>
                                <NavItem to="/">Home</NavItem>
                            </li>
                            <li>
                                <ActiveNavItem to="/about">
                                    About Me
                                </ActiveNavItem>
                            </li>
                            <li>
                                <NavItem to="https://bigg.carsonsaunders.dev/">
                                    Projects
                                </NavItem>
                            </li>
                        </NavOptions>
                    </NavBar>
                </TopSection>
            </Main>
            <Footer></Footer>
        </Page>
    );
}
