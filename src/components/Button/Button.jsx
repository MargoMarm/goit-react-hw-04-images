import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({onClick}) => {
  return <Btn onClick={onClick}>Load more</Btn>;
};

export default Button;


Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};