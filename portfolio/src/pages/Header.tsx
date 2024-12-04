import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import "../style/header.css";

const Header = () => {
  const homeMatch = useMatch("/");
  const profileMatch = useMatch("/profile");
  const workMatch = useMatch("/work/:cate");

  return (
    <header>
      <h1>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </h1>
      <ul>
        <Li isActive={homeMatch !== null}>
          <Link to="/">Home</Link>
        </Li>
        <Li isActive={profileMatch !== null}>
          <Link to="/profile">Profile</Link>
        </Li>
        <Li isActive={workMatch !== null}>
          <Link to="/work/pub">Work</Link>
        </Li>
      </ul>
    </header>
  );
};
const Li = styled.li<{ isActive: boolean }>`
  & a {
    position: relative;
    color: ${(props) => props.isActive && "#930909"};
    /* border-bottom: ${(props) => props.isActive && "2px solid #930909"}; */
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: ${(props) => (props.isActive ? "100%" : "0%")};
      height: 2px;
      background-color: #930909;
      transition: width 0.5s;
    }
  }
`;
export default Header;
