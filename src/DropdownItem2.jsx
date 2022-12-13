import React, { useEffect, useRef, useState } from "react";

function Dropdownitem2() {
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
        <h4 className="h4">Explore</h4>
      </div>
      <div className={`items dropdownOptions`}>
        <ul className="footerlist footerOptions">
          <li>
            <a className="footerLinks" href="#">
              Mac
            </a>
          </li>
          <li>
            <a className="footerLinks" href="#">
              iPad
            </a>
          </li>
          <li>
            <a className="footerLinks" href="#">
              iPhone
            </a>
          </li>
          <li>
            <a className="footerLinks" href="#">
              Music
            </a>
          </li>
          <li>
            <a className="footerLinks" href="#">
              AirPods
            </a>
          </li>
          <li>
            <a className="footerLinks" href="#">
              AirTags
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdownitem2;
