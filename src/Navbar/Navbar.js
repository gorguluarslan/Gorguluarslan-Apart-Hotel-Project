import React from "react";
import Img from "../Assets/Img/Gorguluarslan.png";
import style from "../Navbar/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <div className={style.Navbar__Img}>
        <img src={Img} />
      </div>
      <div className={style.Reservation}>
        <div className={style.Navbar__Reservation}>Rezervasyon</div>

        <div className={style.Navbar__DropdownMenu}>DropdownMenu & MiniImg</div>
      </div>
    </div>
  );
};

export default Navbar;
