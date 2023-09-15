import { useState } from "react";
import "./App.css";
import { Modal } from "./Component/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        className={"modalContainer"}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
