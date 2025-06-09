import React, { useState } from "react";
import Modal from "react-modal";
import "./ModalWindow.css";
import closeIcon from "../../assets/closeIcon.svg";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

Modal.setAppElement("#root");

export default function ModalWindow({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <div className="modal-content">
        {!isSubmitted ? (
          <>
            <h2 className="modal-title">
              Ваша жизнь <span className="modal-subtitle">изменится через</span>
            </h2>
            <div className="modal-timer">
              <CountdownTimer targetDate="2025-07-01T00:00:00" />
            </div>
            <p className="modal-text">
              <span className="modal-subtext-one">
                Мы делаем для вас лучшее приложение!
              </span>
              Оставьте свой емейл и мы оповестим вас как только приложение будет
              запущено, а также
              <span className="modal-subtext-two">
                подарим вам бесплатную неограниченную поддержку реального
                ментора
              </span>
            </p>
            <form className="modal-form" onSubmit={handleSubmit}>
              <input
                className="modal-form-input"
                placeholder="Ваш E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="modal-form-btn" type="submit">
                Стать первым!
              </button>
            </form>
          </>
        ) : (
          <div className="modal-thank">
            <h2 className="modal-thank-title">Спасибо!</h2>
            <div className="modal-thank-content">
              <p className="modal-thank-text">
                Как только приложение будет доступно на App Store и Google Play,
                <span className="modal-thank-subtext">
                  мы отправим вам письмо на
                  <span className="modal-thank-email"> E-mail!</span>
                </span>
              </p>
            </div>
            <button className="modal-thank-btn" onClick={onClose} type="button">
              Хорошо
            </button>
          </div>
        )}
        <button className="modal-close-button" onClick={onClose}>
          <img className="modal-close-img" src={closeIcon} alt="close icon" />
        </button>
      </div>
    </Modal>
  );
}
