import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*images*/
import image1 from '../../assets/Images/Key Visual-18.png';
import image2 from '../../assets/Images/Key Visual-20.png';
import image3 from '../../assets/Images/Key Visual-21.png';
import image4 from '../../assets/Images/Key Visual-22.png';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    swipeToSlide: true // set this to true to enable swipe gestures
};

const carouselData = [
    { id: 1, image: image1, label: 'PHUKET' },
    { id: 2, image: image2, label: 'LONDON' },
    { id: 3, image: image3, label: 'CANADA' },
    { id: 4, image: image4, label: 'JAPAN' },
];

export function Carousel() {

    return (
        <div className="image-container border-top">
            <div className="semi-circle">
                <div className='text'>
                    <h4>Favorite Destinations</h4>
                    <p>Discover Switzerland’s best ski resorts and plan the perfect holiday</p>
                </div>
                {carouselData.map((item) => (
                    <div className='image' key={item.id}>
                        <img src={item.image} alt={`Carousel item ${item.id}`} />
                        <label>{item.label}</label>
                    </div>
                ))}

            </div>
        </div>
    );

};