import React from "react";
import "./AdvantagesScreen.css";
import expand from "../../assets/expand.svg";
import dependable from "../../assets/dependable.svg";
import group from "../../assets/group.svg";
import jigsaw from "../../assets/jigsaw.svg";
import steeringWheel from "../../assets/steeringWheel.svg";
import step from "../../assets/step.svg";

export default function AdvantagesScreen() {
  return (
    <div className="advantages-screen advantages-steps">
      <div className="advantages-screen-headline">
        <h2 className="advantages-screen-title">
          Чего ты добьешься с помощью приложения
        </h2>
      </div>
      <ul className="advantages-screen-list">
        <li className="advantages-screen-item">
          <img
            className="advantages-screen-img"
            src={expand}
            alt="advantages on the screen"
          />
          <p className="advantages-screen-text">
            Сделаешь глубокий разбор своей личности и отделишь реальные желания
            от навязанных
          </p>
        </li>
        <li className="advantages-screen-item">
          <img
            className="advantages-screen-img"
            src={step}
            alt="advantages on the screen"
          />
          <p className="advantages-screen-text">
            Превратишь свои желания в цели, раздробленные на небольшие
            ежедневные шаги{" "}
          </p>
        </li>
        <li className="advantages-screen-item">
          <img
            className="advantages-screen-img"
            src={jigsaw}
            alt="advantages on the screen"
          />
          <p className="advantages-screen-text">
            Начнешь строить новую версию своей личности, выполняя ежедневные
            задания{" "}
          </p>
        </li>
        <li className="advantages-screen-item">
          <img
            className="advantages-screen-img"
            src={group}
            alt="advantages on the screen"
          />
          <p className="advantages-screen-text">
            Осознаешь что у тебя есть достаточно возможностей для создания жизни
            высокого уровня
          </p>
        </li>
        <li className="advantages-screen-item">
          <img
            className="advantages-screen-img"
            src={steeringWheel}
            alt="advantages on the screen"
          />
          <p className="advantages-screen-text">
            Возьмешь под контроль течение своей жизни, вопреки лени и страху
          </p>
        </li>
        <li className="advantages-screen-item">
          <img
            className="advantages-screen-img"
            src={dependable}
            alt="advantages on the screen"
          />
          <p className="advantages-screen-text">
            Улучшишь качество своей жизни по всем параметрам
          </p>
        </li>
      </ul>
    </div>
  );
}
