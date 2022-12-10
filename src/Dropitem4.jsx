import React, { useEffect, useRef } from "react";

function Dropitem4() {
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
        <h4 className="h4">Account</h4>
      </div>
      <div className={`items dropdownOptions`}>
        <ul className="footerlist footerOptions">
          <li>
            <a className="footerLinks" href="#">
              Manage Your Apple ID
            </a>
          </li>
          <li>
            <a className="footerLinks" href="#">
              iCloud.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropitem4;
