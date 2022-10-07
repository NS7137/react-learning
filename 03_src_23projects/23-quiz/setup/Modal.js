import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  const score = Math.floor((correct / questions.length) * 100);
  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        {score >= 50 ? <h2>congrats!</h2> : <h2>oops!</h2>}
        <p>You answered {score}% of questions correctly</p>
        <button className='close-btn' onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
