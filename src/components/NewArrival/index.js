import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./newArrival.css";

const NewArrival = () => {
  return (
      <>
      <header className="newArrivals">
          <p>AN ALL-NEW WARDROBE</p>
        <h1>New Arrivals</h1>
        <p>
          Be the trendsetter, with the latest season menswear and men’s clothing
          from Suit Direct. It's time to suit up ahead of the trend - in a vast
          range of menswear, with rugged winter suits, stylish tuxedos and
          eyecatching checked suits for men. Our latest designs feature a huge
          range of cuts, fits and colour schemes – in a versatile selection of
          patterns and styles to add character to your wardrobe. Whether it's a
          wedding, party or night out, our latest menswear is bound to suit any
          occasion - from top designer brands.
        </p>
        <br />
        <Link to="/shop" className="button">
          Show all
        </Link>
      </header>

    <div className="newArrival-section">
      

      <section className="newArrival">
        <div>
          <img
            src="https://res.cloudinary.com/sam13/image/upload/v1613707643/20_1_phnokq.jpg"
            alt="Calvin Klein Men's Slim Fit Suit"
          />
          <span className="description">Calvin Klein Men's Slim Fit Suit</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sam13/image/upload/v1613707924/30_1_vjrilo.jpg"
            alt="Second description"
          />
          <span className="description">Kenneth Cole REACTION Men's Slim Fit Suit</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sam13/image/upload/v1613707935/40_1_uikgwn.jpg"
            alt="Third description"
          />
          <span className="description">Perry Ellis Men's Slim Fit Suit with Hemmed Pant</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sam13/image/upload/v1613707945/50_1_agdspa.jpg"
            alt="Fourth description"
          />
          <span className="description">STACY ADAMS Men's Suny Vested 3 Piece Suit</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sam13/image/upload/v1613707953/60_1_j2bi31.jpg"
            alt="Fifth description"
          />
          <span className="description">Chaps Men's Classic Fit Suit</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sam13/image/upload/v1613707968/70_1_k1iv00.jpg"
            alt="Sixth description"
          />
          <span className="description">Cole Haan Men's Slim Fit Suit</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sam13/image/upload/v1613707978/80_1_q28veh.jpg"
            alt="Seventh description"
          />
          <span className="description">Cole Haan Men's Slim Fit Suit</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sam13/image/upload/v1613707986/90_1_tkyefj.jpg"
            alt="Eighth description"
          />
          <span className="description">Vince Camuto Men's Slim Fit Stretch Suit</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sam13/image/upload/v1613707997/100_1_xt31qz.jpg"
            alt="Ninth description"
          />
          <span className="description">Perry Ellis Mens 2 Pc Suit</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sam13/image/upload/v1613708008/110_1_cvw1sh.jpg"
            alt="Tenth description"
          />
          <span className="description">Cole Haan Men's Slim Fit Suit</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sam13/image/upload/v1613708018/120_1_u5ajmw.jpg"
            alt="Eleventh description"
          />
          <span className="description">DKNY Men's All Wool Slim Fit Suit</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sam13/image/upload/v1613708024/130_1_u3yjmn.jpg"
            alt="Twelfth description"
          />
          <span className="description">Original Penguin Men's Slim Fit Suit</span>
        </div>
      </section>
    </div>
    </>
  );
};

export default NewArrival;
