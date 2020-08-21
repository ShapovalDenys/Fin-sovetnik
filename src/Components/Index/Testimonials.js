import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './Testimonials.scss';

const Testimonials = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
  <section className="testimonials">
    <h3 className="testimonials__article">Отзывы:</h3>

    <div className="testimonials__carousel">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
        <Carousel.Item>
          <div className="testimonials__wrap">
            <img
              className="testimonials__wrap-user-picture"
              src="./img/555.jpg"
              alt="testimonials-user"
              />
            <h4 className="testimonials__wrap-user-article">Анатолий Виниамидов</h4>
            <p className="testimonials__wrap-user-text">
              Взял займ 2-ой раз, очень доволен быстрыми решениями,
              деньги быстро приходят на карту.
              Никаких проблем не возникает
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonials__wrap">
            <img
              className="testimonials__wrap-user-picture"
              src="./img/111.jpg"
              alt="testimonials-user"
              />
            <h4 className="testimonials__wrap-user-article">Валерий Винокуров</h4>
            <p className="testimonials__wrap-user-text">
            Спасибо большое ребятам за поддержку и подбор займа.
            Мне пенсионеру было сложно найти деньги, обратился сюда и получил
            нужную сумму через 1 час. Еще раз спасибо.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonials__wrap">
            <img
              className="testimonials__wrap-user-picture"
              src="./img/444.jpg"
              alt="testimonials-user"
              />
            <h4 className="testimonials__wrap-user-article">Анастасия Поникарова</h4>
            <p className="testimonials__wrap-user-text">
            Искала срочно займ на покупку лекарств, после
            регистрации получила полный список доступных для меня предложений.
            Деньги получила за 10 минут. Спасибо.
            </p>
          </div>
        </Carousel.Item>
    </Carousel>
      </div>

  </section>
  );
}

export default Testimonials;
