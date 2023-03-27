import React from 'react';
import Slider from 'react-slick';
import './destCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*images*/
import image1 from '../../../assets/Images/resort Images/nazeki.png';
import image2 from '../../../assets/Images/resort Images/kunang.png';
import image3 from '../../../assets/Images/resort Images/kunang.png';
import image4 from '../../../assets/Images/resort Images/behome.png';

/*icons*/
import { ReactComponent as Bed } from '../../../assets/Images/icons/bed.svg';
import { ReactComponent as Bath } from '../../../assets/Images/icons/bath.svg';
import { ReactComponent as Sqft } from '../../../assets/Images/icons/square_foot.svg';

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
export function DestCard() {
    let cardItems=[
    {
        id:1,
        "src":image1,
        title:"Nazeki Villa",
        place:"Amber Villa, Indonesia",
        utilities: [{ bedroom: 2,  bath: 1, sqft: 950 }],
        amount:4999
    },
    {
        id:2,
        src: image2,
        title: "Kunang Kunang Tent Resort",
        place: "Banyuwangi, Indonesia",
        utilities: [{ bedroom: 2, bath: 1, sqft: 950 }],
        amount: 4999
    },
    {
        id:3,
        src:image3,
        title: "Mohini  Komodo",
        place: "Labuan Bajo, Indonesia",
        utilities: [{ bedroom: 2, bath: 1, sqft: 950 }],
        amount: 4999
    },
    {
        id: 3,
        src: image4,
        title: "Be Home",
        place: "Phuket, Thailand",
        utilities: [{ bedroom: 2, bath: 1, sqft: 950 }],
        amount: 4999
    },
    {
        id:4,
        "src":image1,
        title:"Nazeki Villa",
        place:"Amber Villa, Indonesia",
        utilities: [{ bedroom: 2,  bath: 1, sqft: 950 }],
        amount:4999
    },
    {
        id:5,
        src: image2,
        title: "Kunang Kunang Tent Resort",
        place: "Banyuwangi, Indonesia",
        utilities: [{ bedroom: 2, bath: 1, sqft: 950 }],
        amount: 4999
    },
];
    
    return (
        <div >
            <Slider {...settings} >
                {cardItems.map((cardItem) => (
                    <div key={cardItem.id} className='card-container'>
                        <img className="card-img-top" src={cardItem.src} alt="nazeki" />
                        <div className="card-body">
                            <div className="card-title"><b>{cardItem.title}</b></div>
                            <div className="card-text">{cardItem.place}</div>
                            <div className="container">
                                <div className="item">
                                   <span className='icon'><Bed /></span>
                                    <span className="label">{cardItem.utilities[0].bedroom} Bedrooms</span>
                                </div>
                                <div className="item">
                                    <span className='icon'><Bath /></span>
                                    <span className="label">{cardItem.utilities[0].bath} Bathrooms</span>
                                </div>
                                <div className="item">
                                    <span className='icon'><Sqft /></span>
                                    <span className="label">{cardItem.utilities[0].sqft}sqft</span>
                                </div>
                            </div>

                            <div>From ${cardItem.amount}</div>
                        </div>
                    </div>
                ))}
            </Slider>  
        </div>
    );
}
