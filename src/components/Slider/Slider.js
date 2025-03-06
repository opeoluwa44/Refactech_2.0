import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Slider.css';
import data from './Data';
import {ArrowRight} from '../HeroSection/HeroElements'
import {MdKeyboardArrowLeft as ArrowLeft} from "react-icons/md";





const Slider = () => {
  // Ensure `people` is always an array
  const [people] = useState(Array.isArray(data) ? data : []);

  // Debugging: Log the value of `people`
  console.log('People:', people);

  const [index, setIndex] = useState(0);

  // Handle index changes (circular logic)
  const nextSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % people.length);
  }, [people.length]);

  const prevSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
  }, [people.length]);

  // Auto-slide effect
  useEffect(() => {
    const sliderInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(sliderInterval);
  }, [nextSlide]);

  // Memoize the mapped slides to avoid unnecessary re-renders
  const slides = useMemo(() => {
    // Ensure `people` is an array before calling `.map()`
    if (!Array.isArray(people)) {
      console.error('People is not an array:', people);
      return null; // Return nothing if `people` is not an array
    }

    return people.map((item, indexPeople) => {
      const { id, image, name, title, quote } = item;

        // Determine the position
        const position =
        indexPeople === index ? 'activeSlide' :
        indexPeople === (index - 1 + people.length) % people.length ? 'leftSlide' :
        'nextSlide';

        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
          </article>
        );
    });
  }, [people, index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>Testimonials</h2>
      </div>
      <div className='section-center'>
        {slides}
      </div>
      {/* Add navigation buttons (optional) */}
      <button className='prev' onClick={prevSlide}><ArrowLeft /></button>
      <button className='next' onClick={nextSlide}><ArrowRight /></button>
    </section>
  );
};

export default Slider;