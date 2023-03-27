import React from "react";


import Slider from 'react-slick';
import './EventsAndStuff.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// /*images*/
// import image1 from '../../../assets/Images/events/event_01.jpg';
// import image2 from '../../../assets/Images/events/event_02.jpg';
// import image3 from '../../../assets/Images/events/event_03.jpg';
// import image4 from '../../../assets/Images/events/event_04.jpg';


import image1 from "./../../assets/Images/events/event_01.jpg";
import image2 from "./../../assets/Images/events/event_02.jpg";
import image3 from "./../../assets/Images/events/event_03.jpg";
import image4 from "./../../assets/Images/events/event_04.jpg";


const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    swipeToSlide: true // set this to true to enable swipe gestures
};

export function EventsAndStuff() {


    let cardItems = [
        {
            id: 1,
            "src": image1,
            title: "Crypto State by CoinDesk",
            date: "29th Jan 2023 ・ 3PM - 4PM",
        },
        {
            id: 2,
            src: image2,
            title: "Crypto State by CoinDesk",
            date: "29th Jan 2023 ・ 3PM - 4PM",
        },
        {
            id: 3,
            src: image3,
            title: "Crypto State by CoinDesk",
            date: "29th Jan 2023 ・ 3PM - 4PM",
        },
        {
            id: 3,
            src: image4,
            title: "Crypto State by CoinDesk",
            date: "29th Jan 2023 ・ 3PM - 4PM",
        }, {
            id: 4,
            "src": image1,
            title: "Crypto State by CoinDesk",
            date: "29th Jan 2023 ・ 3PM - 4PM",
        },
        {
            id: 5,
            src: image2,
            title: "Crypto State by CoinDesk",
            date: "29th Jan 2023 ・ 3PM - 4PM",
        },
        {
            id: 6,
            src: image3,
            title: "Crypto State by CoinDesk",
            date: "29th Jan 2023 ・ 3PM - 4PM",
        },
        {
            id: 7,
            src: image4,
            title: "Crypto State by CoinDesk",
            date: "29th Jan 2023 ・ 3PM - 4PM",
        }
    ];


    return (
        <div className="eventsContainer">
            <div><h4 className="mb-3">Events and stuff</h4></div>
            <div><h5 className="mb-4">Discover Switzerland’s best ski resorts and plan the perfect holiday</h5></div>
            <div className="card-group">
                <div >
                    <Slider {...settings} >
                        {cardItems.map((cardItem) => (
                            <div key={cardItem.id} className='card-event-container'>
                                <img className="card-event-img-top" src={cardItem.src} alt="nazeki" />
                                <div className="card-event-body">
                                    <div className="card-title"><b>{cardItem.title}</b></div>
                                    <span className="card-text">{cardItem.date}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
