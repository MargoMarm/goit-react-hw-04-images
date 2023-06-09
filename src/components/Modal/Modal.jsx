import { useEffect } from 'react';
import { ModalWindow, Overlay } from './Modal.styled';

const Modal = ({ imgSrc, alt, onClose }) => {
	const handleOverayClick = ( {target, currentTarget} ) => {
    if (target === currentTarget) onClose();
  };

 
	
	useEffect(() => {
		const handleKeyDown = ({ code }) => {
      if (code === 'Escape') onClose();
    };
		window.addEventListener('keydown', handleKeyDown);
		
		return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };	
	}, [onClose])

  return (
    <Overlay onClick={handleOverayClick}>
      <ModalWindow>
        <img src={imgSrc} alt={alt} />
      </ModalWindow>
    </Overlay>
  );
};



export default Modal;
