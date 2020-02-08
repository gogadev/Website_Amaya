import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Service from "../components/Service";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="amaya resort" subtitle="deluxe rooms from $199">
          <Link to="./rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRooms />
    </>
  );
}
