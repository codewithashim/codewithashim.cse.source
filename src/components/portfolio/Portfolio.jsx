import React from "react";
import "./portfolio.css";
import { BsGithub } from "react-icons/bs";
import PROJECT_1 from "../../assets/portfolio/project_1_cover.png";
import PROJECT_2 from "../../assets/portfolio/project_2_cover.png";
import PROJECT_3 from "../../assets/portfolio/project_3_cover.png";
import PROJECT_4 from "../../assets/portfolio/project_4_cover.png";
import PROJECT_5 from "../../assets/portfolio/project_5_cover.png";
import PROJECT_6 from "../../assets/portfolio/project_6_cover.png";
import PROJECT_7 from "../../assets/portfolio/project_7_cover.png";
import PROJECT_8 from "../../assets/portfolio/project_8_cover.png";
import PROJECT_9 from "../../assets/portfolio/project_9_cover.png";

// daynamicaly get all port folio usuing map mathod

const data = [
  {
    id: 1,
    imeage: PROJECT_1,
    title: "School Manegment System",
    github: "https://github.com/codewithashim",
    live: "https://dev-school-manegment.pantheonsite.io",
  },

  {
    id: 2,
    imeage: PROJECT_2,
    title: "Neno Number Convater",
    github: "https://github.com/codewithashim/realtime-number-convater",
    live: "https://nenoconvater.netlify.app/",
  },

  {
    id: 3,
    imeage: PROJECT_3,
    title: "Hunda CBR Website",
    github: "https://github.com/codewithashim/honda-cbr",
    live: "http://codewithashim.me/honda-cbr/",
  },

  {
    id: 4,
    imeage: PROJECT_4,
    title: "Legendary Layons",
    github: "https://github.com/codewithashim/lagendary-layon",
    live: "http://codewithashim.me/lagendary-layon/",
  },

  {
    id: 5,
    imeage: PROJECT_5,
    title: "Travel Zone",
    github: "https://github.com/codewithashim/travel-zone",
    live: "http://codewithashim.me/travel-zone/",
  },

  {
    id: 6,
    imeage: PROJECT_6,
    title: "Functional Clock",
    github: "https://github.com/codewithashim/js-functionalClock",
    live: "http://codewithashim.me/js-functionalClock/",
  },

  {
    id: 7,
    imeage: PROJECT_7,
    title: "Testy Food Corner",
    github: "https://github.com/codewithashim/testy-foodCorner",
    live: "http://codewithashim.me/testy-foodCorner/",
  },

  {
    id: 8,
    imeage: PROJECT_8,
    title: "Calculator",
    github: "https://github.com/codewithashim/js-calculater",
    live: "http://codewithashim.me/js-calculater/",
  },

  {
    id: 9,
    imeage: PROJECT_9,
    title: "Vatual Assisten",
    github: "https://github.com/codewithashim",
    live: "http://codewithashim.me",
  },
];

const Portfolio = () => {
  return (
    <section id="project">
      <div className="portfolio_title">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container portfolio_content">
        {/* usng map method  */}

        {data.map(({ id, imeage, title, github, live }) => {
          return (
            <article key={id} className="portfolio_titem">
              <div className="portfolio_item_imeage">
                <img src={imeage} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="live_btn">
                <a href={github} target="_blank" className="btn">
                  <BsGithub className="git_btn" />
                  Github
                </a>
                <a href={live} target="_blank" className="btn btn_primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}

        {/* portfolio Content end */}
      </div>
    </section>
  );
};

export default Portfolio;
