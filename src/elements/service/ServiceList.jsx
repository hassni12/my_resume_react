import React, { Component } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";
import { FaBootstrap,FaGithub } from "react-icons/fa";
import { SiMysql, SiMongodb, SiJavascript, SiExpress,SiRedux,SiBootstrap } from "react-icons/si";
// FaGithub
const ServiceList = [
  {
    icon: <DiJavascript1 />,
    title: "Javascript  ",
    description:
      "Hands-on experience with JavaScript Development on both client and server-side",
  },
  {
    icon: <DiHtml5 />,
    icon1: <DiCss3 />,
    icon2:<FaBootstrap/>,
    title: "HTML 5 & CSS & Bootstrap",
    description:
      "Experience creating front end applications using HTML5 CSS & Bootstrap",
  },
  {
    icon: <FaReact />,
    icon1:<SiRedux/>,
    title: "React Js",
    description:
      "Experience with modern frameworks and design patterns & Strong Proficient in Redux, Redux toolkit",
  },
  {
    icon: <FaNodeJs />,
    title: "Node Js & Express Js",
    description:
      "responsible for building and maintaining the RESTful services and FullStack applications and will play a key role in the development of our projects",
  },
  {
    icon: <SiMysql />,
    icon1: <SiMongodb />,
    title: "MYSQL & MongoDB",
    description:
      "in depth knowledge of MongoDB, MySQL",
  },
  {
   
    icon:<FaGithub/>,
    title: "GitHub & GitBash",
    description:
      "Source version control system, i.e. Git, BitBucket",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <a href="/dark-portfolio-landing#service">
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="icon" style={{ marginLeft: "6px" }}>
                    {val.icon1}
                  </div>
                  <div className="icon" style={{ marginLeft: "6px"}}>
                    {val.icon2}
                  </div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
