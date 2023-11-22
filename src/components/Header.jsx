import React from "react";

export default function Header(props) {
  const str = props.str;
  return (
    <div className="headerTitle">
      <h1>Your Mighty Note</h1>
      <h2>~Weak Point is your best friend not enemy~</h2>
    </div>
  );
}
