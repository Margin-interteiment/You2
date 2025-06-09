import React from "react";
import "./RequestScreen.css";
import photoForRequestScreen from "../../assets/photoForRequestScreen.png";
export default function RequestScreen() {
  return (
    <div className="request-screen">
      <h2 className="request-screen-title">Тебе НЕ пойдет, если ты</h2>
      <div className="request-screen-main">
        <ul className="request-screen-list">
          <li className="request-screen-item">
            <p className="request-screen-text">
              Не готов ежедневно совершать маленькие действия для повышения
              качества своей жизни
            </p>
          </li>
          <li className="request-screen-item">
            <p className="request-screen-text">
              Привык откладывать свою жизнь на “потом” и не хочешь этого менять
            </p>
          </li>
          <li className="request-screen-item">
            <p className="request-screen-text">
              Не нуждаешься в дополнительной мотивации при выполнении ежедневных
              рутинных задач
            </p>
          </li>
          <li className="request-screen-item">
            <p className="request-screen-text">
              С легкостью формируешь новые привычки и внедряешь их в жизнь
            </p>
          </li>
          <li className="request-screen-item">
            <p className="request-screen-text">
              Полностью доволен своими личностными качествами и не желаешь их
              улучшить
            </p>
          </li>
          <li className="request-screen-item">
            <p className="request-screen-text">
              Не хочешь покидать зону комфорта ради воплощения своей мечты
            </p>
          </li>
        </ul>

        <div className="request-screen-media">
          <img
            className="request-screen-img"
            src={photoForRequestScreen}
            alt="media for request page"
          />
        </div>
      </div>
    </div>
  );
}
