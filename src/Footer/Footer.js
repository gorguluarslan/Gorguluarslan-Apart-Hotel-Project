import React from "react";
import style from "../Footer/Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div>Logo</div>

      <div>Resim</div>

      <div className={style.Ayrı}>
        <div>Hakkımızda</div>
        <div>İletişim</div>
      </div>
    </div>
  );
};

export default Footer;
