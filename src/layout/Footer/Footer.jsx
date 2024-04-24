import React, { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { footerAnimation, scrollUpBtn, scrollUpShow } from "../../helper/main";
import { WhiteButton } from "../../components/Button/Button";

import footerBg from "/assets/img/bg/footer_bg.png";
import elegenciaLogo from "/assets/img/logo/Elegencia.png";

const Footertext = {
  email: "info@elegencia.com",
  phoneone: "+91-6353616891",
  addressone: "101 & 102 Utsav Galani Park, Nana Varachha, Surat.",

  timeone: "MONDAY - FRIDAY: 11:30AM - 11PM",
  timetwo: "SATURDAY & SUNDAY: 11:30AM - 12AM",
  copyright: "©2024 Elegencia | All Rights Reserved ",
};

const Footernav = [
  {
    title: "Home",
    link: "/",
    key: "home",
  },
  {
    title: "About",
    link: "/about",
    key: "about",
  },
  {
    title: "Menu",
    link: "/menu",
    key: "menu",
  },
  {
    title: "Chef",
    link: "/chef",
    key: "chef",
  },
  {
    title: "Contact",
    link: "/contact",
    key: "contact",
  },
];

export default function Footer() {
  const scrollup = useRef();
  const footerContainer = useRef(null);
  const footerHrTop = useRef(null);
  const footerHrBottom = useRef(null);
  const footerTimeBorder = useRef(null);

  useLayoutEffect(() => {
    footerAnimation(
      footerContainer.current,
      footerHrTop.current,
      footerHrBottom.current,
      footerTimeBorder.current
    );
    scrollUpShow(scrollup.current);
  }, [
    footerContainer.current,
    footerHrTop.current,
    footerHrBottom.current,
    footerTimeBorder.current,
  ]);

  return (
    <footer>
      <div className="ak-height-150 ak-height-lg-150"></div>
      <div className="ak-footer ak-style-1">
        <img className="ak-bg footer-bg-img" src={footerBg} />
        <div className="container ak-hr-container" ref={footerContainer}>
          <div className="ak-braner-logo type-color-1 footer-logo">
            <div
              className="footer-log-elem"
              ref={scrollup}
              onClick={() => scrollUpBtn()}
            >
              <div className="footer-log-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="13"
                  viewBox="0 0 30 13"
                  fill="none"
                >
                  <path
                    d="M28.991 12.2063L14.8322 1L0.67334 12.2063"
                    stroke="white"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <img src={elegenciaLogo} alt="..." />
            </div>
          </div>
          <div className="ak-height-100 ak-height-lg-60"></div>
          <div className="ak-footer-hr-top" ref={footerHrTop}></div>

          <div className="footer-main">
            <div className="footer-eamil-menu">
              <div className="footer-email">
                <a href="mailto:info@example.com">{Footertext.email}</a>
              </div>
              <div className="footer-menu">
                <ul>
                  {Footernav?.map((item) => {
                    return (
                      <li key={item.key}>
                        <Link to={item.link}>{item.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="ak-height-75 ak-height-lg-5"></div>
            <div className="footer-info">
              <div className="fooer-phn">
                <a href={`tel:${Footertext.phoneone}`}>{Footertext.phoneone}</a>
                <br />
                <a href={`tel:${Footertext.phonetwo}`}>{Footertext.phonetwo}</a>
              </div>
              <div className="footer-address">
                <a
                  href="https://www.google.com/maps/place/The+D+Pizza/@21.2354116,72.8088314,13z/data=!4m10!1m2!2m1!1sthe+d+pizza!3m6!1s0x3be04f4a01c568eb:0x5bbaa4793a72c308!8m2!3d21.2234961!4d72.8845833!15sCgt0aGUgZCBwaXp6YSIDiAEBWg0iC3RoZSBkIHBpenphkgEQcGl6emFfcmVzdGF1cmFudOABAA!16s%2Fg%2F11f88q367_?entry=ttu"
                  target="_blank"
                >
                  {Footertext.addressone}
                  <br />
                  {Footertext.addresstwo}
                </a>
              </div>
              <div className="footer-time">
                <p>{Footertext.timeone}</p>
                <div
                  className="footer-time-border my-1"
                  ref={footerTimeBorder}
                ></div>
                <p>{Footertext.timetwo}</p>
              </div>
              <div className="footer-btn">
                <WhiteButton to="reservations">Reservations</WhiteButton>
              </div>
            </div>
          </div>

          <div
            className="ak-footer-hr-bottom qodef-grid-item"
            ref={footerHrBottom}
          ></div>
          <div className="ak-height-130 ak-height-lg-30"></div>

          <div className="copy-right-section">
            <p className="text-uppercase text-md-center text-white">
              {Footertext.copyright}
            </p>
          </div>

          <div className="ak-height-45 ak-height-lg-30"></div>
        </div>
      </div>
    </footer>
  );
}
