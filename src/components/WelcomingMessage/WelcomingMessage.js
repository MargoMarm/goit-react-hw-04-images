import {  toast } from 'react-toastify';

export const welcomingMessage = () => {
	toast('Welcome! Hope you easily find what you are looking for.', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
}