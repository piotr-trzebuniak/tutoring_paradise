import style from "./Button.module.scss";

const Button = ({ children, className }) => {
  const classNames = `${style.button} ${className}`;
  return <button className={classNames}>{children}</button>;
};

export default Button;
