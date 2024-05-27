import style from './Header.module.scss' 
import logoIcon from '../../assets/logo-icon.svg'

const Header = () => {
  return (
    <header className={style.header}>
        <div className={style.header__logo}>
            <img src={logoIcon} alt="Logo icon" />
            <h1>tutoring-paradise</h1>
        </div>
        <button>Rejestracja</button>
        <button>Logowanie</button>
    </header>
  )
}

export default Header
