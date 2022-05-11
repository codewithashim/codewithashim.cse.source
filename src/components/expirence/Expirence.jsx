import React from "react";
import "./expirence.css";
import { SiVuedotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { SiGreensock } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {SiExpress} from "react-icons/si";
import {IoLogoNodejs} from "react-icons/io";
import {SiWeb3Dotjs} from "react-icons/si";
import {SiFirebase} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {SiWebrtc} from "react-icons/si";


const Expirence = () => {
  return (
    <section id="experiance">
      <div className="Experiance_title">
        <h5>What Skill I Have</h5>
        <h2>My Expirence</h2>
      </div>

      <div className="container Experiance_container">
        {/* frontend experiance */}

        <div className="Fontend_experiance">
          <h3>Frontend Experiance</h3>

          <div className="experiance_contant">
            <article className="Experiance_details">
              <AiOutlineHtml5 className="icon_size" />
              <h4>HTML</h4>
              <code className="text_aling">Expert Lavel 95%</code>
            </article>

            <article className="Experiance_details">
              <FaCss3Alt className="icon_size" />
              <h4>CSS3</h4>
              <code className="text_aling">Expert Lavel 95%</code>
            </article>

            <article className="Experiance_details">
              <DiSass className="icon_size" />
              <h4>Scss</h4>
              <code className="text_aling">Expert Lavel 95%</code>
            </article>

            <article className="Experiance_details">
              <SiBootstrap className="icon_size"/>
              <h4>Bootstrap</h4>
              <code className="text_aling">Expert Lavel 80%</code>
            </article>

            <article className="Experiance_details">
              <SiJavascript className="icon_size" />
              <h4>Javascript</h4>
              <code className="text_aling">Expert Lavel 75%</code>
            </article>

            <article className="Experiance_details">
              <SiTailwindcss className="icon_size" />
              <h4>Tailwindcss</h4>
              <code className="text_aling">Expert Lavel 80%</code>
            </article>

            <article className="Experiance_details">
              <SiGreensock className="icon_size" />
              <h4>Greensock</h4>
              <code className="text_aling">Expert Lavel 65%</code>
            </article>

            <article className="Experiance_details">
              <FaReact className="icon_size" />
              <h4>React.js</h4>
              <code className="text_aling">Expert Lavel 80%</code>
            </article>

            <article className="Experiance_details">
              <SiVuedotjs className="icon_size" />
              <h4>Vue.js</h4>
              <code className="text_aling">Expert Lavel 70%</code>
            </article>

            <article className="Experiance_details">
              <SiFigma className="icon_size" />
              <h4>Figma</h4>
              <code className="text_aling">Expert Lavel 80%</code>
            </article>

            <article className="Experiance_details">
              <SiAdobexd className="icon_size" />
              <h4>Adobe XD</h4>
              <code className="text_aling">Expert Lavel 70%</code>
            </article>
          </div>
        </div>
        {/* backend experiance */}

        <div className="Backend_experiance">
          <h3>Backend Experiance</h3>
          <div className="experiance_contant">
            <article className="Experiance_details">
              <IoLogoNodejs className="icon_size" />
              <h4>Node.js</h4>
              <code className="text_aling">Expert Lavel 95%</code>
            </article>

            <article className="Experiance_details">
              <SiExpress className="icon_size" />
              <h4>Express</h4>
              <code className="text_aling">Expert Lavel 95%</code>
            </article>

            <article className="Experiance_details">
              <SiMongodb className="icon_size" />
              <h4>MongoDB</h4>
              <code className="text_aling">Expert Lavel 95%</code>
            </article>

            <article className="Experiance_details">
              <SiFirebase className="icon_size"/>
              <h4>Firebase</h4>
              <code className="text_aling">Expert Lavel 80%</code>
            </article>

            <article className="Experiance_details">
              <SiWeb3Dotjs className="icon_size" />
              <h4>Web3.js</h4>
              <code className="text_aling">Expert Lavel 75%</code>
            </article>


            <article className="Experiance_details">
              <GrMysql className="icon_size" />
              <h4>MySql</h4>
              <code className="text_aling">Expert Lavel 80%</code>
            </article>

            <article className="Experiance_details">
              <SiWebrtc className="icon_size" />
              <h4>Webrtc</h4>
              <code className="text_aling">Expert Lavel 70%</code>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expirence;
