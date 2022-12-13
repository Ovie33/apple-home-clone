import { useState, useRef, useEffect } from "react";
import appleLogo from "./assets/apple.svg";
import search from "./assets/search.svg";
import "./App.css";
import DropdownItem from "./DropdownItem";
import Dropdownitem2 from "./DropdownItem2";
import Dropitem3 from "./Dropitem3";
import Dropitem4 from "./Dropitem4";

function App() {
  const [opacity, setOpacity] = useState("hidden");
  const [navHeight, setNavHeight] = useState(0);
  const [height, setHeight] = useState("48px");
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

  const footerDrop = () => {
    if (drop1 == 0) {
      setDrop1(1);
      setClassname("dropdownconclicked");
      setDropdownclass("dropdownOptionsclicked");
    } else {
      setDrop1(0);
      setClassname("dropdowncon");
      setDropdownclass("dropdownOptions");
    }
  };

  const changeOpacity = () => {
    if (opacity === "hidden") {
      setOpacity("visible");
    } else {
      setOpacity("hidden");
    }
    if (navHeight == 0) {
      setNavHeight("100%");
    } else {
      setNavHeight(0);
    }

    if (height === "48px") {
      setHeight("100%");
    } else {
      setHeight("48px");
    }
  };

  return (
    <div className="App">
      {/* navbar */}
      <nav className="nav" style={{ maxHeight: height }}>
        <input type="checkbox" id="check" />
        <div className="navwrapper">
          <div className="searchContainer">
            <input
              type="search"
              className="search"
              placeholder="Search apple.com"
            />
          </div>
          <ul className="navlisthidden">
            <li>
              <button onClick={changeOpacity} className="hambuger">
                <div className="line"></div>
                <div className="line"></div>
              </button>
            </li>
            <li className="navlink apple">
              <img src={appleLogo} alt="" />
            </li>
          </ul>
          <ul
            className="navlist navDrop "
            style={{ height: navHeight, visibility: opacity }}
          >
            <li className="navlink hidden">
              <img src={appleLogo} alt="" />
            </li>
            <li className="navlink navDropLink mac">
              <a href="#" className="nav-items">
                Mac
              </a>
            </li>
            <li className="navlink navDropLink b">
              <a href="#" className="nav-items">
                iPad
              </a>
            </li>
            <li className="navlink navDropLink b">
              <a href="#" className="nav-items">
                iPhone
              </a>
            </li>
            <li className="navlink navDropLink b">
              <a href="#" className="nav-items">
                Music
              </a>
            </li>
            <li className="navlink navDropLink b">
              <a href="#" className="nav-items">
                Support
              </a>
            </li>
            <li className="navlink navDropLink b">
              <a href="#" className="nav-items">
                Where to Buy
              </a>
            </li>
            <li className="navlink hidden" role="search">
              <img src={search} alt="" />
            </li>
          </ul>
        </div>
      </nav>
      {/* end of navbar */}
      <main>
        <section className="section">
          {/* ipad section */}
          <div className="ipad">
            <div className="wrapper">
              <a className="Link" href="#"></a>
              <div className="textSection">
                <h2 className="header">iPad</h2>
                <h3 className="subHeader">Lovable. Drawable. Magical</h3>
                <div className="learnMore">
                  <a href="#" className="learnMoreLink">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="imageWrapper">
                <figure className="image unitImage"></figure>
              </div>
            </div>
          </div>
          {/* end of iPad */}
          {/* iphone section */}
          <div className="iphone">
            <div className="wrapper">
              <a href="#" className="Link"></a>
              <div className="textSection2">
                <h2 className="header">iPhone 14 Pro</h2>
                <h3 className="subHeader">Pro. Beyond</h3>
                <div className="learnMore">
                  <a href="#" className="learnMoreLink">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="imageWrapper">
                <figure className="image2 unitImage"></figure>
              </div>
            </div>
          </div>
          {/* end of iphone section */}
          {/* iphone 14 */}
          <div className="iphone">
            <div className="wrapper">
              <a href="#" className="Link"></a>
              <div className="textSection3">
                <h2 className="header">iPhone 14</h2>
                <h3 className="subHeader">Big and bigger</h3>
                <div className="learnMore">
                  <a href="#" className="learnMoreLink">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="imageWrapper">
                <figure className="image3 unitImage"></figure>
              </div>
            </div>
          </div>
          {/* end of iphone 14 */}
        </section>
        <section className="section2">
          {/* pairs */}
          <div className="gridContainer">
            {/* ipad pro */}
            <div className="gridItem gridItem1">
              <a href="#"></a>
              <div className="gridTextSection">
                <h4 className="headline">iPad Pro</h4>
                <h3 className="subline">Supercharge by</h3>
                <div className="gridlearnMore">
                  <a href="#" className="gridlearnMoreLink">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="gridImageWrapper">
                <figure className="unitImage gridImage1 "></figure>
              </div>
            </div>
            {/* macbook air */}
            <div className="gridItem gridItem2">
              <a href="#"></a>
              <div className="gridTextSection">
                <h4 className="headline2">MacBook Air</h4>
                <h3 className="subline2">Supercharge by</h3>
                <div className="gridlearnMore">
                  <a href="#" className="gridlearnMoreLink">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="gridImageWrapper">
                <figure className="unitImage gridImage2 "></figure>
              </div>
            </div>
            {/* macbook 13 */}
            <div className="gridItem gridItem3">
              <a href="#"></a>
              <div className="gridTextSection">
                <h4 className="headline">MacBook Pro 13"</h4>
                <h3 className="subline">Supercharge by</h3>
                <div className="gridlearnMore">
                  <a href="#" className="gridlearnMoreLink">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="gridImageWrapper">
                <figure className="unitImage gridImage3 "></figure>
              </div>
            </div>
            {/* ipad air */}
            <div className="gridItem gridItem4">
              <a href="#"></a>
              <div className="gridTextSection">
                <h4 className="headline">iPad</h4>
                <h3 className="subline">Light. Bright. Full of might</h3>
                <div className="gridlearnMore">
                  <a href="#" className="gridlearnMoreLink">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="gridImageWrapper">
                <figure className="unitImage gridImage4 "></figure>
              </div>
            </div>
          </div>
          {/* end of pairs */}
        </section>
      </main>
      <footer>
        <div className="div1">
          <div className="footerContainer">
            <nav className="div2">
              <Dropdownitem2 />
              <Dropitem3 />
              <Dropitem4 />
              <DropdownItem />
            </nav>
            <div className="div3">
              <div className="div4">
                <a href="#">Find a retailer</a>
                <p>near you</p>
              </div>
              <div className="div5">
                <div className="div7">
                  <a href="#" className="footerLinks">
                    Nigeria
                  </a>
                </div>
                <div className="div6">
                  <div className="copy">
                    <p>
                      Copyright <span>&#169;</span> 2022 Apple inc. All rights
                      reserved.
                    </p>
                  </div>

                  <div className="terms">
                    <a href="#" className="footerLinks flink1">
                      Terms of use
                    </a>
                    <a href="#" className="footerLinks">
                      Site Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
