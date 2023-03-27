import React from "react";
import { Col, Row } from "react-bootstrap";
import staynex_pass_intro from "./../../assets/Images/staynex_pass_intro.png";
import pass_tag from "./../../assets/Images/staynex_tag.png";
import staynex_sample_pass from "./../../assets/Images/staynex_sample_pass.png";
import freenight from "./../../assets/Images/icons/free_night.svg";


import "./homepage.css";
import {ResortCard} from "../resort-cards/resort-card";
import BookingWidget from "../booking-widget/booking-widget";
import AdventureForm from "../adventure-form/adventureForm";
import { Destination } from "../destinations/destination";
import { Carousel } from "../../common/carousal/carousal";
import {EventsAndStuff} from "../EventsAndStuff/EventsAndStuff";

export function HomePage() {
  return (
    <>
      <div className="hero-wrapper row">
        <div className="col-sm-4 herotext">
          <h3 className="text-left">Ski the Swiss Alps this winter</h3>
          <p className="text-left">Discover Switzerland’s best ski resorts and plan the perfect holiday</p>
        </div>
        <div className="col-sm-8 heroimage">col-sm-8</div>
      </div>
      <Destination/>
      <Carousel/>
      <EventsAndStuff></EventsAndStuff>
    </>
  );
}