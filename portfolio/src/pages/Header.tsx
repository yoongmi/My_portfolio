import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
