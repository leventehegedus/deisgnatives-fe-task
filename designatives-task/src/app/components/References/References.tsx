"use client";
import { IReference } from "@/app/types";
import Reference from "../Reference/Reference";
import "./References.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useRef } from "react";
import Image from "next/image";

const settings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const References: React.FC = () => {
  const slider = useRef<Slider>(null);

  const references: IReference[] = [
    {
      title: "Budaörs",
      description: "Decathlon",
      img: "/ref_1.png",
    },
    {
      title: "Üllő",
      description: "Teljesen automata zöldfal",
      img: "/ref_2.png",
    },
    {
      title: "Balatonszántód",
      description: "Balalaland",
      img: "/ref_3.png",
    },
  ];

  return (
    <div className="references">
      <div className="title">Referenciák</div>
      <div className="slider">
        <Slider ref={slider} {...settings}>
          {references.map((ref: IReference, index) => (
            <Reference reference={ref} key={index} />
          ))}
        </Slider>
        <div className="desktop-view">
          <div className="custom-slider-buttons">
            <button
              className="prev"
              onClick={() => slider?.current?.slickPrev()}
            >
              <Image src="/arrow.svg" alt="Arrow" width={18} height={18} />
            </button>
            <button
              className="next"
              onClick={() => slider?.current?.slickNext()}
            >
              <Image src="/arrow.svg" alt="Arrow" width={18} height={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
