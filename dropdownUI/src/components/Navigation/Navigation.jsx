import "./Navigation.css";
import blog from "../../assets/blog.png";
import report from "../../assets/report.png";
import media from "../../assets/media.png";
import caseStudy from "../../assets/case-studies.png";
import podcast from "../../assets/podcast.png";
import documentation from "../../assets/documentation.png";
import api from "../../assets/api.png";
import video from "../../assets/video.png";
import forum from "../../assets/forum.png";
import support from "../../assets/support.png";
import arrowBlue from "../../assets/blue-arrow-up.png";
import arrowDown from "../../assets/arrow-down.png";
import servers from "../../assets/servers.png";
import { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const resources = [
    {
      icon: blog,
      list_item: "Blog",
      id: 1,
    },
    {
      icon: report,
      list_item: "Reports",
      id: 2,
    },
    {
      icon: media,
      list_item: "Media",
      id: 3,
    },
    {
      icon: caseStudy,
      list_item: "Case Studies",
      id: 4,
    },
    {
      icon: podcast,
      list_item: "Podcasts",
      id: 5,
    },
  ];
  const developers = [
    {
      icon: documentation,
      list_item: "Documentation",
      id: 6,
    },
    {
      icon: api,
      list_item: "API",
      id: 7,
    },
    {
      icon: video,
      list_item: "Videos and Tutorials",
      id: 8,
    },
    {
      icon: forum,
      list_item: "Forums",
      id: 9,
    },
    {
      icon: support,
      list_item: "Support",
      id: 10,
    },
  ];

  const navigationData = [
    { label: "Product", submenu: [] },
    { label: "Features", submenu: [] },
    { label: "Resources", submenu: [] },
    { label: "Pricing", submenu: [] },
    { label: "About", submenu: [] },
  ];

  const hidden = () => {
    setIsHidden(!isHidden);
  };

  const handleLinkClick = (index, event) => {
    event.preventDefault();
    setActive(index);
    hidden();
  };
  return (
    <section>
      <nav className="navigation">
        <ul>
          {navigationData.map((item, index) => (
            <li key={index} className="dropdown">
              <a
                href="/"
                className={active === index ? "active" : ""}
                onClick={(event) => handleLinkClick(index, event)}
              >
                {item.label}{" "}
                <img src={active === index ? arrowBlue : arrowDown} alt="" />
              </a>
            </li>
          ))}
        </ul>

        <div className={`dropdown-container ${isHidden ? "visible" : ""}`}>
          <ul>
            <h2>Resources</h2>
            {resources.map((item) => (
              <li key={item.id}>
                <img src={item.icon} alt="" />
                {item.list_item}
              </li>
            ))}
          </ul>
          <ul>
            <h2>Developers</h2>
            {developers.map((item) => (
              <li key={item.id}>
                <img src={item.icon} alt="" />
                {item.list_item}
              </li>
            ))}
          </ul>

          <div className="servers">
            <img src={servers} alt="" />
            <h3>Why and how serverless computing helps teams scale up</h3>
            <div className="end-text">
              <p>
                <strong>Christopher Gehlot</strong>
              </p>
              <span>
                <strong>Sep 7</strong> ∙ 4 min read
              </span>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
