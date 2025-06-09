import React from "react";
import Modal from "react-modal";
import "./ModalWindow.css";
import closeIcon from "../../assets/closeIcon.svg";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

Modal.setAppElement("#root");

export default function ModalWindow({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <div className="modal-content">
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
            подарим вам бесплатную неограниченную поддержку реального ментора
          </span>
        </p>
        <form className="modal-form">
          <input
            className="modal-form-input"
            placeholder="Ваш E-mail"
            type="email"
            required
          />
          <button className="modal-form-btn" type="submit">
            Стать первым!
          </button>
        </form>
        <button className="modal-close-button" onClick={onClose}>
          <img className="modal-close-img" src={closeIcon} alt="close icon" />
        </button>
      </div>
    </Modal>
  );
}
