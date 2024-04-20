import React from "react";
import "./header.css";
const Header = () => {
  window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    if(this.scrollY>=80) header.classList.add('show-header');
    else header.classList.remove('show-header');
})
  const [toggle,setToggle] = React.useState(false);
  const [activeNav,setActiveNav] = React.useState('#home');
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Sudarshan
        </a>
        <div className={toggle? "nav__menu show-menu":"nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={()=>setActiveNav("#home")} className={activeNav === "#home" ?"nav__link active-link":"nav__link"}>
                <i className="uil uil-estate nav__icon">Home</i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about"  onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ?"nav__link active-link":"nav__link"}>
                <i className="uil uil-user nav__icon">About</i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills"  onClick={()=>setActiveNav("#skills")} className={activeNav === "#skills" ?"nav__link active-link":"nav__link"}>
                <i className="uil uil-file-alt nav__icon">Skills</i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects"  onClick={()=>setActiveNav("#projects")} className={activeNav === "#projects" ?"nav__link active-link":"nav__link"}>
                <i className="uil uil-scenery nav__icon">Projects</i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact"  onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ?"nav__link active-link":"nav__link"}>
                <i className="uil uil-message nav__icon">Conatct</i>
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={()=>setToggle(!toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={()=>setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
export default Header;
