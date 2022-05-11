import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <div className="services_title">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container services_container">
        {/* ========= start ui service ======= */}
        <article className="service">
          <div className="service_heade">
            <h3>UI Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
          </ul>
        </article>
        {/*================ end ui service ============== */}
        {/*================ start full stack we developmet service ============== */}
        <article className="service">
          <div className="service_heade">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
          </ul>
        </article>
        {/*================ end full stack we developmet service ============== */}
        {/*================ start WordPress WooCommerce service ============== */}
        <article className="service">
          <div className="service_heade">
            <h3>WordPress WooCommerce And Bug Fixing</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </li>
          </ul>
        </article>
        {/*================ End WordPress WooCommerce service ============== */}
      </div>
    </section>
  );
};

export default Services;
