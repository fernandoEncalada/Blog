import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="flex place-content-between items-center">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Navbar />
    </header>
  );
};
