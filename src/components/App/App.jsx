import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { Container } from './App.styled';
import getPictures from '../services/getPictures';
import Error from 'components/Error/Error';
import { notification } from 'components/Notification/Notification';
import { welcomingMessage } from 'components/WelcomingMessage/WelcomingMessage';
import { useState, useEffect } from 'react';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPics, seteTotalPics] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => welcomingMessage(), []);

	useEffect(() => {
		if (!searchQuery) return;
	  const startFetching = async () => {
		 setLoading(true);
      try {
        const { hits, totalHits } = await getPictures(searchQuery, page);
        setPictures(prevPictures =>
          page === 1 ? hits : [...prevPictures, ...hits]
        );
        seteTotalPics(totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    startFetching();
  }, [searchQuery, page]);

  const handleSerach = searchQueryIncoming => {
    if (searchQueryIncoming === searchQuery) {
      notification(
        `Images of ${searchQueryIncoming} have already been displayed.`
      );
      return;
    }
    setSearchQuery(searchQueryIncoming);
    setPictures([]);
    setPage(1);
    seteTotalPics(null);
    setIsOpen(false);
    setLoading(true);
    setModalImgSrc('');
    setError(null);
  };
  const onBtnClick = () => setPage(page => page + 1);
  const onModalClose = () => setIsOpen(false);
  const onModalOpen = ({ target: { dataset } }) => {
    setIsOpen(true);
    setModalImgSrc(dataset.src);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSerach} />

      <ImageGallery pictures={pictures} onClick={onModalOpen} />

      {/* for wrong query */}
      {totalPics === 0 && (
        <Error errorText={'Sorry, nothing has been found at your request'} />
      )}
      {/* for server error */}
      {error && (
        <Error
          errorText={`Something went wrong... ${error}. Please try again.`}
        />
      )}
      {/* loader */}
      {loading && <Loader />}
      {/* for displaying load more btn */}
      {totalPics / pictures.length > page && (
        <Button onClick={onBtnClick}></Button>
      )}
      {/* for displaying modal window */}
      {isOpen && <Modal imgSrc={modalImgSrc} onClose={onModalClose} />}
      <ToastContainer />
    </Container>
  );
};

