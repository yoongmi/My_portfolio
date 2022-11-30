import "../style/kv.css";
import profileIMG from "../assets/profile.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="kv">
        <div className="textArea">
          <h3>YOONMI KIM's PORTFOLIO</h3>
          <img src={profileIMG} alt="프로필이미지" />
          <p>Front-end developer 김윤미입니다.</p>
          <span>Thank you for visiting my portfolio site.</span>
          <span>이 포트폴리오는 반응형입니다.</span>
          <Link to="/work">작업물 보러가기</Link>
        </div>
        <i className="icon01"></i>
        <i className="icon02"></i>
        <i className="icon03"></i>
        <i className="icon04"></i>
      </div>
    </>
  );
};

export default Home;
