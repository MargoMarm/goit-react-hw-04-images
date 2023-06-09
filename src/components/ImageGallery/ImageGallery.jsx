import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({pictures, onClick}) => {

    return (
      <Gallery onClick={onClick}>
        {pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              imgSrc={webformatURL}
              alt={tags}
              imgModal={largeImageURL}
            />
          );
        })}
      </Gallery>
    );
  
}

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
