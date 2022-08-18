import React from "react";
import style from "../Footer/Footer.module.scss";
import Img from "../Img/Flowers.png";
import About from "../About/About";
const Footer = () => {
  return (
    <div className={style.Footer}>
      {/* <div>Logo</div> */}
      {
        <div className={style.Footer__Flowers}>
          <img src={Img} />
        </div>
      }

      <div className={style.Footer__About}>
        <div className={style.Footer__About1}> About </div>
        <div className={style.Footer__Contact}> Contact </div>
      </div>

      <About />
    </div>
  );
};

export default Footer;
