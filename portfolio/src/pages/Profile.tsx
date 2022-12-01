import "../style/profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="inner">
        <h3>
          <i>Yoonmi Kim</i>
          <i>김윤미</i>
          <i>金潤美</i>
        </h3>
        <div className="description">
          <p>
            <b>저는,</b>
          </p>
          <ul>
            <li>프론트엔드 개발자입니다. </li>
            <li>커뮤니케이션을 중요시합니다.</li>
            <li>
              4년의 퍼블리셔 경력으로 다양한 홈페이지를 제작한 경험이 있습니다.
            </li>
            <li>새롭게 배우는것을 좋아합니다.</li>
          </ul>
        </div>
        <div className="link">
          <a href="https://github.com/yoongmi" target="_blank" rel="noreferrer">
            github
          </a>
          <a href="mailto:xduathx@naver.com" target="_blank" rel="noreferrer">
            email
          </a>
          <a
            href="https://diamond-cork-0f5.notion.site/Yoonmi-Kim-3bcc31b225f841dd95579ca8415f0fb4"
            target="_blank"
            rel="noreferrer"
          >
            notion
          </a>
          <a
            href="https://www.instagram.com/yooong_fly/"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
          <a href="tel:01051065054">phone</a>
        </div>
        <div className="list">
          <h4>Career</h4>
          <ul>
            <li>
              <b>2021.11 ~ 2022.06</b> 펜타브리드 [웹 퍼블리셔]
              <br />
              웹사이트 운영 및 구축.
            </li>
            <li>
              <b>2019.06 ~ 2021.10</b> 비젠소프트 [웹 퍼블리셔]
              <br />
              웹사이트, 쇼핑몰 운영 및 구축.
            </li>
            <li>
              <b>2017.12 ~ 2018.12 </b> 제이시컴퍼니 [웹 퍼블리셔]
              <br />
              카페24를 이용한 쇼핑몰 제작.
            </li>
          </ul>
        </div>
        <div className="list">
          <h4>Education</h4>
          <ul>
            <li>
              <b>[프론트엔드웹개발]리액트(React) 프로그래밍</b> (2022.07 ~
              2022.08)
              <br />
              reactJS의 기초부터 시작해 todoList, 외부api를 연동한
              영화검색사이트, 인스타그램 클론까지 작업.
            </li>
            <li>
              <b>자바스크립트와 제이쿼리를 활용한 프론트엔드 웹개발 과정 </b>
              (2020.02 ~ 2020.03)
              <br />
              자바스크립트를 이용한 미니게임, greensock 플러그인 활용한 동적효과
              진행.
            </li>
            <li>
              <b>[NCS]모바일UI/UX 웹디자인 취업과정</b> (2017.04 ~ 2017.11)
              <br />
              웹사이트 디자인부터 웹사이트 제작까지 작업.
            </li>
            <li>
              <b>수원대학교 IT대학 정보미디어학과</b> (2013.03 ~ 2017.02)
            </li>
          </ul>
        </div>
        <div className="list">
          <h4>Used Tool & Skill</h4>
          <ul>
            <li>
              <b>Skill</b>
              <br />
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Sass</span>
              <span>Javascript</span>
              <span>Typescript</span>
              <span>Jquery</span>
              <span>ReactJS</span>
              <span>NextJS</span>
              <span>WebSocket</span>
              <span>Webpack</span>
              <span>Babel</span>
              <span>Gulp</span>
            </li>
            <li>
              <b>Tool</b>
              <br />
              <span>VSCode</span>
              <span>EditPlus</span>
              <span>Git</span>
              <span>Github</span>
              <span>Figma</span>
              <span>PhotoShop</span>
              <span>Notion</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
