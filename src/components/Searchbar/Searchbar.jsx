import { useState } from 'react';
import { notification } from 'components/Notification/Notification';
import { FcSearch } from 'react-icons/fc';
import { Form, FormButton, FormInput, Header } from './Searchbar.styled';
import PropTypes from 'prop-types';


const Searchbar = ({onSubmit}) => {
  const [value, setValue] = useState('');

const	handleChange = ({ target: { value } }) => setValue(value);
	
  
const  handleSubmit = e => {
    e.preventDefault();
    if (value === '') {
      notification(
        'The search input can not be empty. Please enter a search query'
      );
      return;
    }
    onSubmit(value.trim().toLowerCase());
	setValue(value);
  };

  return (
    <Header>
      <Form type="submit" onSubmit={handleSubmit}>
        <FormButton>
          <FcSearch size="30" />
        </FormButton>

        <FormInput
          onChange={handleChange}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
	onSubmit : PropTypes.func.isRequired,
}

export default Searchbar;
