import React, { Fragment, useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { FaArrowRight, FaArrowLeft, FaBorderAll } from 'react-icons/fa';
import { Container, FullWidthSection } from '../Global'

import desert from '../../resources/desert.jpg'
import forrest from '../../resources/forrest.jpg'
import plant from '../../resources/plant.jpg'
import trees from '../../resources/trees.jpg'

const images = [desert, forrest, plant, trees]

const SimpleSlider = ({  }) => {

    const NextArrow = ({ onClick }) => {
        return (
            <div
                className="arrow next"
                onClick={onClick}
            >
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                className="arrow prev"
                onClick={onClick}
            >
                <FaArrowLeft />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0)

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    }


    return (
        <FullWidthSection style={{
            background: '#fcfcf1',
            borderBottom: '1px solid #ddd'
        }}>
            <Container>
                <SliderWrapper>
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <Slide className={
                                // add class if slide is active
                                index === imageIndex ?
                                    "slide activeSlide" :
                                    "slide"
                            }>
                                <Image src={img} alt={img} />
                            </Slide>
                        ))}
                    </Slider>
                </SliderWrapper>
            </Container>
        </FullWidthSection>
    )
}

export default SimpleSlider

const SliderWrapper = styled.div`
    width:100%;
    height:100%;

    .activeSlide {
        transform: scale(1.1);
    }

    .arrow {
        background-color: #fff;
        border-radius:100px;
        border:1px solid #ddd;
        padding:20px;
        position:absolute;
        cursor: pointer;
        z-index: 10;

        svg {
            transition: color: 300ms;
            &:hover {
                color: lightblue;
            }
        }
    }

    .next {
        right: 0%;
        top: 40%;
    }

    .prev {
        left: 0%;
        top: 40%;
    }
`

const Image = styled.img`
    max-width:400px;
    margin:0 auto;
    border-radius:16px;
    box-shadow: 0px 10px 20px 0 rgba(0,0,0,0.2)
`

const Slide = styled.div`
    transform: scale(0.5);
    transition: transform 300ms;
    padding:40px 0px;
`