import React from "react";
import Switch from "@mui/material/Switch";

function ThemeToggle() {
  return (
    <div>
      <Switch size="large" onChange={(e) => console.log(e.target.checked)} />
    </div>
  );
}

export default ThemeToggle;
