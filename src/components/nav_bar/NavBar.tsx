import React from "react";

type NavBarProps = {
  title: string
}

function NavBar({ title }: NavBarProps) {
  return (
      <nav className="navbar navbar-light bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand text-light fs-1 d-flex align-items-center" href="/">
            <img src="https://img.icons8.com/doodle/48/000000/homer-simpson.png" alt="" width="30" height="24"
                 className="d-inline-block align-text-top"/>
            {title}
          </a>
        </div>
      </nav>
  );
}

export default NavBar;


