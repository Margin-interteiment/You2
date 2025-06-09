import React from "react";
import "./FineScreen.css";
import photoForFineScreen from "../../assets/photoForFineScreen.png";
import photoForFineScreenForMedia from "../../assets/photoForFineScreenForMedia.png";

export default function FineScreen() {
  return (
    <div className="fine-screen">
      <div className="fine-screen-content">
        <h2 className="fine-screen-title">
          Почему система штрафов эффективна?
        </h2>
        <img
          className="fine-screen-img-media"
          src={photoForFineScreenForMedia}
          alt="media for fine page"
        />
        <p className="fine-screen-text text-problem">
          В реальном мире мы теряем деньги каждый раз, когда пасуем перед
          внедрением полезных привычек. Пропустил пробежку - потерял деньги на
          счёт, который придётся оплатить у кардиолога, через 10-15 лет.
          Пропустил занятия английского языка - потерял еще больше денег на
          своей будущей зарплате, не получив повышение по должности.
        </p>
        <p className="fine-screen-text text-resolve">
          Это приложение создано чтобы ты помнил, что влечёт за собой пропуск
          любого шага, направленного на улучшение любых параметров жизни. Чтобы
          ты прочувствовал последствия ещё до того, как они станут реально
          плачевными, зарядился мотивацией, и встал на путь, ведущий к успеху.
        </p>
      </div>
      <div className="fine-screen-media">
        <img
          className="fine-screen-img"
          src={photoForFineScreen}
          alt="media for fine page"
        />
      </div>
    </div>
  );
}
