import React from "react";
// import { Link } from "react-router-dom";
import {  BsTwitter, BsInstagram } from "react-icons/bs";
import {FiGithub} from 'react-icons/fi'
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:bounty@octafarm.fi">Bug Bounty</a>
              </li>
              <li>
                <a
                  href="https://octafarmfi.notion.site/Job-Board-459a120785774f53b84219de8da44455"
                >
                  Jobs / Career
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Developer</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://octafarm.gitbook.io/">
                  Octa Farm Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/octafarm">
                  Explore Github
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://t.me/octafarmfi" >
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://octafarmfi.medium.com/" >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/privacy-policy">Privacy &amp; Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row footer-border-top d-flex justify-content-between align-items-center">
          <div className="col">
            <img src="assets/octa-logo.png"  alt="" width={150} />
          </div>
          <div className="col text-center">
            <p className="pt-3">© 2021-22 Octa Farm. All rights reserved.</p>
          </div>
          <div className="col text-end">
            <ul className="list-unstyled social">
              <li className="footer-social-outer-li rounded-circle">
                <a href="https://github.com/octafarm">
                  <FiGithub className="footer-social-icons" />
                </a>
              </li>
              <li className="footer-social-outer-li rounded-circle">
                <a href="https://twitter.com/OctaFarmFi">
                  <BsTwitter className="footer-social-icons" />
                </a>
              </li>
              <li className="footer-social-outer-li rounded-circle">
                <a href="https://t.me/octafarmfi">
                  <FaTelegramPlane className="footer-social-icons"/>
                </a>
              </li>
              <li className="footer-social-outer-li rounded-circle">
                <a href="https://www.instagram.com/octafarmfi/">
                  <BsInstagram className="footer-social-icons"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
