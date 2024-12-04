import { Link } from "react-router-dom";
import styled from "styled-components";

interface Ipopup {
  imgsrc: string;
  openpop: any;
}
const Popup = ({ imgsrc, openpop }: Ipopup) => {
  const handleClick = () => {
    openpop(false);
  };
  return (
    <>
      <Back onClick={handleClick} />
      <Container>
        <span onClick={handleClick}><i></i><i></i></span>
        <Link to={imgsrc.replace("/My_portfolio", "")} target="_blank">
          <img src={imgsrc} alt="큰이미지" />
        </Link>
      </Container>
    </>
  );
};
const Back = styled.div`
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;
const Container = styled.div`
  z-index: 100;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 75%;
  height: 100vh;
  margin: auto;
  background-color: #000;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #eee;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
  span {
    position: fixed;
    right: 15px;
    top: 15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    width: 30px; 
    height: 30px;
    // padding: 0 10px;
    cursor: pointer;
    border-radius: 5px;
    // border: 1px solid #000;
    // background-color: #fff;
    text-align: center;
    line-height: 30px;
    box-sizing: border-box;

    & i {
      display:block; 
      width:100%; 
      height:2px; 
      background-color:#fff;

      &:first-of-type {
        transform:rotate(45deg) translateY(1px);
        transform-origin:center;
      }
      &:last-of-type {
        transform:rotate(-45deg) translateY(-1px);
        transform-origin:center;
      }
    }
  }
  a {
    display: block;
    width: 100%;
    height: 100vh;
  }
  a:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 100%;
  }
  img {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
  }
`;

export default Popup;
