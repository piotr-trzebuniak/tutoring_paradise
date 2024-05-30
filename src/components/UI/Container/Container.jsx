import style from './Container.module.scss'

const Container = ({children, className}) => {
  
  const classNames = `${style.container} ${className}`

  
  return <div className={classNames}>{children}</div>;
};

export default Container;
