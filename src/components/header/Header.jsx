import style from './Header.module.scss' 
import logoIcon from '../../assets/logo-icon.svg'

const Header = () => {
  return (
    <header className={style.header}>
        <div className={style.header__logo}>
            <img src={logoIcon} alt="Logo icon" />
            <h1>tutoring-paradise</h1>
        </div>
    </header>
  )
}

export default Header
