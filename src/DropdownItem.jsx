import React, { useEffect, useRef, useState } from "react";

function DropdownItem() {
  const dropRef = useRef();

  useEffect(function () {
    const handler = (e) => e.target;
    window.onclick = handler;
  });

  function toggle() {
    dropRef.current.classList.toggle("dropdownconclicked");
    dropRef.current.classList.toggle("dropdowncon");
    dropRef.current
      .querySelector(".items")
      .classList.toggle("dropdownOptionsclicked");
    dropRef.current.querySelector(".items").classList.toggle("dropdownOptions");
  }

  return (
    <div ref={dropRef} className={`dropdowncon`}>
      <div onClick={toggle} className="dropdown">
        <h4 className="h4">About Apple</h4>
      </div>
      <div className={`items dropdownOptions`}>
        <ul className="footerlist footerOptions">
          <li>
            <a className="footerLinks" href="#">
              News Room
            </a>
          </li>
          <li>
            <a className="footerLinks" href="#">
              Apple Leadership
            </a>
          </li>
          <li>
            <a className="footerLinks" href="#">
              Career Oppurtunities
            </a>
          </li>
          <li>
            <a className="footerLinks" href="#">
              Investors
            </a>
          </li>
          <li>
            <a className="footerLinks" href="#">
              Ethics & compliance
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownItem;
