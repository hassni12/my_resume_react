import React, { Component } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql, SiMongodb, SiJavascript, SiExpress,SiRedux,SiBootstrap } from "react-icons/si";

const ServiceList = [
  {
    icon: <DiJavascript1 />,
    title: "Javascript  ",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <DiHtml5 />,
    icon1: <DiCss3 />,
    icon2:<FaBootstrap/>,
    title: "HTML 5 & CSS & Bootstrap",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FaReact />,
    icon1:<SiRedux/>,
    title: "React Js",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FaNodeJs />,
    title: "Node Js & Express Js",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <SiMysql />,
    title: "MYSQL",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
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
