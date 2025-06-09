import React from "react";
import "./SliderScreen.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import photoForProfile from "../../assets/photoForProfile.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import vk from "../../assets/vk.svg";

export default function SliderScreen() {
  return (
    <div className="slider-screen">
      <h2 className="slider-screen-title">
        Никаких пустых обещаний - <br />
        только факты, доказанные пользователями
      </h2>
      <div className="slider-screen-content">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <div className="slider-screen-item">
              <div className="slider-screen-info">
                <div className="profile-info">
                  <img
                    className="slider-screen-img"
                    src={photoForProfile}
                    alt="photo for profile"
                  />
                  <h2 className="slider-screen-headline">
                    Дмитрий Поршенко
                    <span className="slider-screen-subcontact">
                      Региональный Менеджер
                    </span>
                  </h2>
                </div>
                <div className="slider-screen-contact">
                  <ul className="contact-list">
                    <li className="contact-item">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="contact-item-img"
                          src={facebook}
                          alt="facebook icon"
                        />
                      </a>
                    </li>
                    <li className="contact-item">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="contact-item-img"
                          src={instagram}
                          alt="instagram icon"
                        />
                      </a>
                    </li>
                    <li className="contact-item">
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="contact-item-img"
                          src={twitter}
                          alt="twitter icon"
                        />
                      </a>
                    </li>
                    <li className="contact-item">
                      <a
                        href="https://vk.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="contact-item-img"
                          src={vk}
                          alt="vk icon"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <blockquote className="slider-screen-blockquote">
                “Моя жизнь так нагружена, и я не хотела испытывать еще большее
                давление, боясь потерять деньги, из-за невыполненного задания.
                Но если не оплатишь 5 штрафов - приложение само удалится, так
                что я решила, что ничем не рискую. И не зря! Это приложение как
                пари с другом. Выполняю все задания с азартом, не заморачиваясь
                о деталях вот я подтянула английский и выучила 2 программы.
                Наконец-то я получила желаемую работу, до которой еще три месяца
                назад не дотягивала!”
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-screen-item">
              <div className="slider-screen-info">
                <div className="profile-info">
                  <img
                    className="slider-screen-img"
                    src={photoForProfile}
                    alt="photo for profile"
                  />
                  <h2 className="slider-screen-headline">
                    Дмитрий Поршенко
                    <span className="slider-screen-subcontact">
                      Региональный Менеджер
                    </span>
                  </h2>
                </div>
                <div className="slider-screen-contact">
                  <ul className="contact-list">
                    <li className="contact-item">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="contact-item-img"
                          src={facebook}
                          alt="facebook icon"
                        />
                      </a>
                    </li>
                    <li className="contact-item">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="contact-item-img"
                          src={instagram}
                          alt="instagram icon"
                        />
                      </a>
                    </li>
                    <li className="contact-item">
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="contact-item-img"
                          src={twitter}
                          alt="twitter icon"
                        />
                      </a>
                    </li>
                    <li className="contact-item">
                      <a
                        href="https://vk.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="contact-item-img"
                          src={vk}
                          alt="vk icon"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <blockquote className="slider-screen-blockquote">
                “Моя жизнь так нагружена, и я не хотела испытывать еще большее
                давление, боясь потерять деньги, из-за невыполненного задания.
                Но если не оплатишь 5 штрафов - приложение само удалится, так
                что я решила, что ничем не рискую. И не зря! Это приложение как
                пари с другом. Выполняю все задания с азартом, не заморачиваясь
                о деталях вот я подтянула английский и выучила 2 программы.
                Наконец-то я получила желаемую работу, до которой еще три месяца
                назад не дотягивала!”
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-screen-item">
              <div className="slider-screen-info">
                <div className="profile-info">
                  <img
                    className="slider-screen-img"
                    src={photoForProfile}
                    alt="photo for profile"
                  />
                  <h2 className="slider-screen-headline">
                    Дмитрий Поршенко
                    <span className="slider-screen-subcontact">
                      Региональный Менеджер
                    </span>
                  </h2>
                </div>
                <div className="slider-screen-contact">
                  <ul className="contact-list">
                    <li className="contact-item">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="contact-item-img"
                          src={facebook}
                          alt="facebook icon"
                        />
                      </a>
                    </li>
                    <li className="contact-item">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="contact-item-img"
                          src={instagram}
                          alt="instagram icon"
                        />
                      </a>
                    </li>
                    <li className="contact-item">
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="contact-item-img"
                          src={twitter}
                          alt="twitter icon"
                        />
                      </a>
                    </li>
                    <li className="contact-item">
                      <a
                        href="https://vk.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="contact-item-img"
                          src={vk}
                          alt="vk icon"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <blockquote className="slider-screen-blockquote">
                “Моя жизнь так нагружена, и я не хотела испытывать еще большее
                давление, боясь потерять деньги, из-за невыполненного задания.
                Но если не оплатишь 5 штрафов - приложение само удалится, так
                что я решила, что ничем не рискую. И не зря! Это приложение как
                пари с другом. Выполняю все задания с азартом, не заморачиваясь
                о деталях вот я подтянула английский и выучила 2 программы.
                Наконец-то я получила желаемую работу, до которой еще три месяца
                назад не дотягивала!”
              </blockquote>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
