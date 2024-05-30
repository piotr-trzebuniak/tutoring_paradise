import style from "./Header.module.scss";
import logoIcon from "../../assets/logo-icon.svg";
import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";

const Header = () => {
  return (
    <header className={style.header}>
      <Container className={style.header__container}>
        <div className={style.header__logo}>
          <img src={logoIcon} alt="Logo icon" />
          <h1>tutoring-paradise</h1>
        </div>
        <div className={style.header__btns}>
          <span>Zaloguj się</span>
          <Button className={style['header__btns-btn']}>Załóż konto</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
