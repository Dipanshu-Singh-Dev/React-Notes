import React from "react";
import Style from "./B.module.css";

function B(props) {
  return (
    <div>
      <h2 id={Style.b} className={Style.h2}>
        B Component
      </h2>
    </div>
  );
}

export default B;
