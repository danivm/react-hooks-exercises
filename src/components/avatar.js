import React, { useContext } from "react";
import { MyContext } from "../context";
import userIcon from "../static/images/account_circle.png";

export const Avatar = () => {
  const { user, coordinates } = useContext(MyContext);
  return (
    <div>
      <img src={userIcon} alt="user icon" />
      <p>{user}</p>
      <p>
        {coordinates.x} - {coordinates.y}
      </p>
    </div>
  );
};
