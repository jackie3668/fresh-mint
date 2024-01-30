import React, { useEffect } from 'react'
import './Slider.css'
import dish1 from '../../Asset/Home/1 (1).jpg';
import dish2 from '../../Asset/Home/1 (2).jpg';
import dish3 from '../../Asset/Home/1 (3).jpg';
import dish4 from '../../Asset/Home/1 (4).jpg';
import dish5 from '../../Asset/Home/1 (5).jpg';
import dish6 from '../../Asset/Home/1 (6).jpg';
import dish7 from '../../Asset/Home/1 (7).jpg';
import dish8 from '../../Asset/Home/1 (8).jpg';
import dish9 from '../../Asset/Home/1 (9).jpg';
import dish10 from '../../Asset/Home/1 (10).jpg';
import arrow from '../../Asset/UI/arrow.png'


const Slider = () => {
  useEffect(() => {
    const slideButtons = document.querySelectorAll('.slide-button');
    const imageList = document.querySelector('.image-list');
    const sliderScrollBar = document.querySelector('.slider-scrollbar');
    const scrollbarThumb = document.querySelector('.scrollbar-thumb');
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    const handleScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollBar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    let isDragging = false;
    let startMouseX;
    let startScrollLeft;

    const handleMouseDown = (e) => {
      isDragging = true;
      startMouseX = e.pageX;
      startScrollLeft = imageList.scrollLeft;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const mouseDelta = e.pageX - startMouseX;
      const scrollDelta = (mouseDelta / (sliderScrollBar.clientWidth - scrollbarThumb.offsetWidth)) * maxScrollLeft;
      imageList.scrollLeft = startScrollLeft + scrollDelta;
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleClick = (button) => () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    slideButtons.forEach((button) => {
      const clickListener = handleClick(button);
      button.addEventListener("click", clickListener);
    });

    imageList.addEventListener("scroll", handleSlideButtons);
    imageList.addEventListener("scroll", handleScrollThumbPosition);
    scrollbarThumb.addEventListener('mousedown', handleMouseDown);

    return () => {
      slideButtons.forEach((button) => {
        const clickListener = handleClick(button);
        button.removeEventListener("click", clickListener);
      });
      imageList.removeEventListener("scroll", handleSlideButtons);
      imageList.removeEventListener("scroll", handleScrollThumbPosition);
      scrollbarThumb.removeEventListener('mousedown', handleMouseDown);
      if (isDragging) {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, []);
  
  return (
    <div className='slider'>
      <h1><span>On The Menu</span>This Week</h1>
      <div className="slider-wrapper">
      <img src={arrow} id="prev-slide" className='slide-button' alt="" />
        <div className="image-list">
          <img className='image-item' src={dish1} alt="Dish 1" />
          <img className='image-item' src={dish2} alt="Dish 2" />
          <img className='image-item' src={dish3} alt="Dish 3" />
          <img className='image-item' src={dish4} alt="Dish 4" />
          <img className='image-item' src={dish5} alt="Dish 5" />
          <img className='image-item' src={dish6} alt="Dish 6" />
          <img className='image-item' src={dish7} alt="Dish 7" />
          <img className='image-item' src={dish8} alt="Dish 8" />
          <img className='image-item' src={dish9} alt="Dish 9" />
          <img className='image-item' src={dish10} alt="Dish 10" />
        </div>
      <img src={arrow} id="next-slide" className='slide-button' alt="" />
      </div>
      <div className="slider-scrollbar">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  )
}

export default Slider