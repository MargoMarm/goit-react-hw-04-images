import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

async function getPictures(searchQuery, page) {
  const options = {
    params: {
      key: '34991535-a7425182e30d9d17c0e128526',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 12,
    },
  };
	  
	try {
		const response = await axios.get(BASE_URL, options);
		return response.data;
	} catch (error) {
		
	}

};

export default getPictures;
