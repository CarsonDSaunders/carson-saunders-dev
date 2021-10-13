import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

// styles
const Page = styled.div`
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;

    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;

    @media (min-width: 768px) {
    }
`;

const Main = styled.main`
    background-image: url("https://github.com/CarsonDSaunders/carson-saunders-dev/blob/main/src/images/carson-saunders-dev-bg.jpg");
    width: 100vw;
    height: 80vh;
`;

const Header = styled.header`
    width: 50vw;
    margin: 0 auto;
`;

const NavBar = styled.nav`
    display: flex;
`;

const NavOptions = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const NavItem = styled.li`
    font-size: 1.5rem;
`;

const Footer = styled.footer`
    background-color: darkgray;
    height: 20vh;
`;

const Logo = styled(StaticImage)``;
// markup
const IndexPage = () => {
    return (
        <Page>
            <Main>
                <Header>
                    <h1>Carson Saunders Dev</h1>
                </Header>
                <NavBar>
                    <NavOptions>
                        <NavItem>Home</NavItem>
                        <NavItem></NavItem>
                        <NavItem></NavItem>
                        <NavItem></NavItem>
                    </NavOptions>
                </NavBar>
            </Main>
            <Footer></Footer>
        </Page>
    );
};

export default IndexPage;
