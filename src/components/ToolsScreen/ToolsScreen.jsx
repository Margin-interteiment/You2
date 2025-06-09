import React from "react";
import "./ToolsScreen.css";
import photoOfToolsScreen from "../../assets/photoOfToolsScreen.png";
import cap from "../../assets/cap.svg";
import island from "../../assets/island.svg";
import maps from "../../assets/maps.svg";
import referee from "../../assets/referee.svg";
import chart from "../../assets/chart.svg";
import notification from "../../assets/notification.svg";
import photoOfToolsScreenForMedia from "../../assets/photoOfToolsScreenForMedia.png";

export default function ToolsScreen() {
  return (
    <div className="tools-screen">
      <div className="tools-screen-headline">
        <h2 className="tools-screen-title">
          Как <span className="tools-screen-subtitle">You2</span> поможет тебе
          сохранить мотивацию на пути к цели
        </h2>
      </div>
      <p className="tools-screen-text">
        Приложение построено на эффективной системе инструментов, но реальные
        подвиги совершать будешь ты сам
      </p>
      <div className="tools-screen-content">
        <div className="tools-screen-media">
          <img
            className="tools-screen-img"
            src={photoOfToolsScreen}
            alt="media for tools page"
          />
          <img
            className="tools-screen-img-media"
            src={photoOfToolsScreenForMedia}
            alt="media for tools page"
          />
        </div>
        <ul className="tools-screen-list">
          <li className="tools-screen-item">
            <div>
              <img src={cap} className="tool-img" />
              <h3 className="tools-screen-item-title life-title">
                Личный лайф-коуч
              </h3>
            </div>
            <p className="tools-screen-item-text">
              Отвечая на вопросы профессионального лайф-коуча ты осознаешь свои
              возможности. Сможешь подобрать лучшие инструменты для достижения
              твоих целей. Составляй список ежедневных заданий и новых привычек,
              которые помогут тебе построить новую жизнь.{" "}
            </p>
          </li>
          <li className="tools-screen-item">
            <div>
              <img src={island} className="tool-img" />
              <h3 className="tools-screen-item-title vacation-title">
                Отпуск и больничный
              </h3>
            </div>
            <p className="tools-screen-item-text">
              Ты можешь взять “отпуск” или “больничный” до двух недель.
              Выполнение задач ставится на паузу, без начисления штрафов.
              Сохраняя прежние показатели в графике.
            </p>
          </li>
          <li className="tools-screen-item ">
            <div>
              <img src={maps} className="tool-img" />
              <h3 className="tools-screen-item-title island-title">
                Остров личности
              </h3>
            </div>
            <p className="tools-screen-item-text">
              Игровое отображение прогресса через “Остров личности” вовлекает и
              мотивирует. Получай награды за выполнение заданий и с каждой
              наградой остров будет расти и развиваться. Если ты упорный - через
              год твой остров превратится в настоящую цивилизацию.
            </p>
          </li>
          <li className="tools-screen-item">
            <div>
              <img src={referee} className="tool-img" />
              <h3 className="tools-screen-item-title system-title">
                Система штрафов
              </h3>
            </div>
            <p className="tools-screen-item-text">
              Назначай сумму денежных штрафов за невыполненные задачи. Не
              откладывай свои задачи “на потом”, а завершай их несмотря ни на
              что - не идеально выполненное задание лучше, чем штраф. Лишаясь
              зацикленности на деталях и идеальности, ты идешь к цели,
              постепенно растворяя страх неудачи.{" "}
            </p>
          </li>
          <li className="tools-screen-item">
            <div>
              <img src={chart} className="tool-img" />
              <h3 className="tools-screen-item-title grew-title">
                График твоего роста
              </h3>
            </div>
            <p className="tools-screen-item-text">
              Вдохновляйся историей успешного формирования новых привычек,
              отображенной с помощью инфографики. Анализируй свой прогресс в
              выполнении ежедневных заданий. Убедись в том, что небольших
              ежедневных шагов достаточно для создания новой личности.
            </p>
          </li>
          <li className="tools-screen-item">
            <div>
              <img src={notification} className="tool-img" />
              <h3 className="tools-screen-item-title tasks-title">
                Напоминания для задач
              </h3>
            </div>
            <p className="tools-screen-item-text">
              Больше не держишь в памяти все дневные задачи (направленные на
              саморазвитие), благодаря напоминаниям. Получаешь организованное
              мышление и снижение стресса.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
