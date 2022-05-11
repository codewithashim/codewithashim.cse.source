import React from "react";
import "./about_me.css";
import MYPROFILE from "../../assets/about_me.jpg";
import { FaAward } from "react-icons/fa";
import { AiOutlineCode } from "react-icons/ai";
// import { BsGithub } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";

const About_me = () => {
  return (
    <section id="about_me">
      {/* about title start */}
      <div className="about_title">
        <h5>Get To Know</h5>
        <h2>Abou Me</h2>
      </div>
      {/* about title end */}
      {/* about details start  */}
      <div className="container about_me_container">
        <div className="about_me_profile">
          {/* MYPROFILE */}
          <div className="about_me_imeage">
            <img
              src={MYPROFILE}
              alt="codewithashim"
              className="my_profile_imeage"
            />
          </div>
        </div>
        <div className="about_me_content">
          <div className="about_card">
            {/* about skill start*/}
            <article className="about_card_content">
              <FaAward className="about_icon" />
              <h5>Experiance</h5>
              <code>
                1.5+ Years Experiance <br /> In Coding
              </code>
            </article>

            <article className="about_card_content">
              <AiOutlineCode className="about_icon" />
              <h5>Coding Skill</h5>
              <code>6+ Language I Work </code>
            </article>

            <article className="about_card_content">
              <VscFolderLibrary className="about_icon" />
              <h5>Project</h5>
              <code>50+ I Have Complited</code>
            </article>

            {/* about skill end */}
          </div>
          <p>
            <code>Hey I'm Ashim Rudra Paul</code> <br />I build new projects
            just to tickle my brain and love teaching how thay're made. While I
            keep busy my self to learning and sometimes try to teaching others
            for make thair dream become comes to reality. My goal is make me and
            others good at codeing.
          </p>
          <a href="#contact" className="btn btn_primary">
            Let's Talk
          </a>
        </div>
        {/* end about content */}
      </div>
      {/* about details end  */}
    </section>
  );
};

export default About_me;
