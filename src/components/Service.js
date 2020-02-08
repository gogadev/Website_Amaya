import React, { Component } from "react";
import Title from "./Title";
import { FaBicycle, FaShip, FaUtensils, FaUmbrellaBeach } from "react-icons/fa";

export default class Service extends Component {
  state = {
    services: [
      {
        icon: <FaUtensils />,
        title: "24h Food Service",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid ergo? Duo Reges: constructio interrete. "
      },
      {
        icon: <FaBicycle />,
        title: "Free Bicycle Tours",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid ergo? Duo Reges: constructio interrete. "
      },
      {
        icon: <FaShip />,
        title: "Day Trips",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid ergo? Duo Reges: constructio interrete. "
      },

      {
        icon: <FaUmbrellaBeach />,
        title: "Lounge Area",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid ergo? Duo Reges: constructio interrete. "
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
