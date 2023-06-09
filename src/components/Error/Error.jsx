import { ErrorText } from './Error.styled';
import PropTypes from 'prop-types';

const Error = ({ errorText }) => {
	return <ErrorText>{errorText}</ErrorText>;
};

export default Error;

Error.propTypes = {
	errorText: PropTypes.string,
}