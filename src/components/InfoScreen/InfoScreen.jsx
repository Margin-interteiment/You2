import React from "react";
import "./InfoScreen.css";
import photoForInfoScreen from "../../assets/photoForInfoScreen.svg";

export default function InfoScreen() {
  return (
    <div className="info-screen">
      <div className="info-screen-media">
        <img
          className="info-screen-img"
          src={photoForInfoScreen}
          alt="media for info page"
        />
      </div>
      <div className="info-screen-content">
        <p className="info-screen-text">
          <span className="info-screen-subtext">You2</span> - это мобильное
          приложение, дающее эффект работы с персональным лайф-коучем. Отвечай
          на простые вопросы и ты поймешь чего действительно хочешь от жизни,
          что тебе делать, куда двигаться и с какой скоростью. Путь к успеху
          построен из развивающих задач и полезных привычек. Разбери свою цель
          на простые шаги, и ежедневно делай минимум из того, что ты можешь уже
          здесь и сейчас. А <span className="info-screen-subtext">You2</span> с
          помощью увлекательной геймификации и системы штрафов за пропуски,
          проследит, чтобы ты не сдавался и не сбивался с курса.
        </p>
      </div>
    </div>
  );
}
