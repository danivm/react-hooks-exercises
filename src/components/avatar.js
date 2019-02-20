import React from "react";
import { MyContext } from "../context";
import userIcon from "../static/images/account_circle.png";

export const Avatar = () => (
  <MyContext.Consumer>
    {value => (
      <div>
        <img src={userIcon} alt="user icon" />
        <p>{value.user}</p>
      </div>
    )}
  </MyContext.Consumer>
);
