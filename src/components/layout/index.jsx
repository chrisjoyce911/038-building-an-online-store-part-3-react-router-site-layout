import React from "react";

export default function Layout({ children, title }) {
  document.getElementsByTagName("title")[0].innerHTML = title;

  return (
    <div className="wrapper">
      <h1>{title}</h1>
      {children}
    </div>
  );
}
