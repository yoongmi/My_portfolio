import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorComponent = () => {
  return (
    <Container>
      <div>
        <p>404 Not Found.</p>
        <Link to="/">홈으로 가기</Link>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background-color: #000;
  text-align: center;
  p {
    font-size: 2em;
    color: #fff;
    margin-bottom: 20px;
  }
  a {
    color: #ffd78e;
  }
`;
export default ErrorComponent;
