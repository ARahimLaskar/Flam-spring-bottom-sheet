import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ isOpen, onClose }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [modalSize, setModalSize] = useState({ width: 400, height: 300 });
  const [initialPosition, setInitialPosition] = useState({ y: 0 });

  const handleMouseDown = (e) => {
    setIsResizing(true);
    setInitialPosition({
      y: e.clientY,
    });
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const dy = e.clientY - initialPosition.y;

      setModalSize((prevSize) => ({
        height: prevSize.height - dy,
      }));

      setInitialPosition({
        y: e.clientY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };
  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsResizing(true);
    setInitialPosition({
      y: e.touches[0].clientY,
    });
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (isResizing) {
      const dy = e.touches[0].clientY - initialPosition.y;

      setModalSize((prevSize) => ({
        ...prevSize,
        height: prevSize.height - dy,
      }));

      setInitialPosition({
        y: e.touches[0].clientY,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsResizing(false);
  };

  return (
    <div
      className={`modal ${isOpen ? "open" : ""}`}
      style={{ height: modalSize.height, maxHeight: "95vh" }}
    >
      <div
        className="spanSection"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="span">
          <span className="material-symbols-outlined">compress</span>
        </div>

        <span
          onClick={onClose}
          id="close-button"
          className="material-symbols-outlined"
        >
          close
        </span>
      </div>
      <div className="scrollable-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          veritatis sint labore laborum repellendus qui vero numquam, amet iure
          adipisci quis, alias saepe magnam facere deserunt. Rerum ratione
          corrupti quia! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ut, optio tempora? Beatae, ratione omnis libero totam,
          accusantium corporis deserunt tempore voluptatum iure earum odit,
          repellat cupiditate ut rem alias tempora! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Debitis sunt dicta est ea sequi
          temporibus expedita. Rem, architecto? Corporis, esse. Eaque, esse
          doloremque. In asperiores sunt doloribus quaerat sapiente nostrum
          nihil illo qui sequi suscipit non, voluptatibus, quam a totam
          obcaecati sint rerum enim itaque, adipisci maiores fuga debitis animi.
          Velit incidunt sed cum doloremque repellendus? Qui nostrum ab
          necessitatibus quam dolore quidem quas unde repudiandae ut
          consequuntur aliquid sapiente facere corporis doloremque impedit
          suscipit, sed at illum obcaecati! Similique natus, nisi commodi
          consequatur non dolorem excepturi ratione a? Quidem ut, dolor dolores
          culpa magni architecto ipsam doloremque incidunt nam.
        </p>
      </div>
    </div>
  );
};
