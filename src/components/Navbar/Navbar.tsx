import { FC } from "react";
import logo from "../../assets/logo.png";
import Logo from "../Logo/Logo";
import List from "../List/List";
import Link from "../Link/Link";
import Container from "../Container/Container";
import Button from "../Button.tsx/Button";
import useShowNavbar from "../../hooks/useShowNavbar";

const Navbar: FC = () => {
  const { isVisible } = useShowNavbar();

  const classNames = `fixed top-0 right-0 z-[100] w-full py-4 bg-black/10 backdrop-blur-sm sm:py-4 ${
    isVisible ? "hidden tall:block" : ""
  }`;

  return (
    <header data-aos="fade-down" className={classNames}>
      <Container>
        <nav className="flex items-center justify-between">
          <Logo logo={logo} />
          <List isInNavbar>
            <Link href="#">About</Link>
            <Link href="#">Technology</Link>
            <Link href="#">Galaxy</Link>
            <Link href="#">Satellite</Link>
          </List>
          <Button variant="navbar">Login</Button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
