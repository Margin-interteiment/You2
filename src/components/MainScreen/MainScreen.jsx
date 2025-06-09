import React, { useState } from "react";
import "./MainScreen.css";
import photoForMainScreen from "../../assets/photoForMainScreen.png";
import ModalWindow from "../ModalWindow/ModalWindow";

export default function MainScreen() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="main-screen">
      <div className="main-screen-content">
        <h1 className="main-screen-title">
          Личный лайф-коуч <br />
          <span className="main-screen-subtitle">в твоем смартфоне</span>
        </h1>
        <p className="main-screen-description">
          Поможет собрать твою цель из маленьких ежедневных кирпичиков, не
          позволит сойти с дистанции, поддержит высокую мотивацию в создании
          новых привычек, покажет что ты уже можешь стать новой версией себя.
        </p>
        <button
          className="main-screen-button"
          type="button"
          onClick={() => setModalOpen(true)}
        >
          Скачать
        </button>
      </div>
      <div className="main-screen-media">
        <img
          className="main-screen-img"
          src={photoForMainScreen}
          alt="media for main page"
        />
      </div>

      {isModalOpen && (
        <ModalWindow isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}
