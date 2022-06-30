import Notiflix from 'notiflix';
import axios from 'axios';

export default async function fetchImages(value, page) {
  try {
    const response = await axios({
      url: `https://pixabay.com/api/`,
      params: {
        key: '28348938-0384dcc8789dbce7d9ed883a2',
        q: value,
        orientation: 'horizontal',
        image_type: 'photo',
        safesearch: true,
        page: page,
        per_page: 40,
      },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }

  ///////////////////////////////////////////////////

  // url: `https://pixabay.com/api/?key=28348938-0384dcc8789dbce7d9ed883a2&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`;
  //   const imagesUrl = 'https://pixabay.com/api/';
  //   const KEY = '?key=28348938-0384dcc8789dbce7d9ed883a2';
  //   const filter = '&image_type=photo&orientation=horizontal&safesearch=true';

  //   const response = fetch(`${imagesUrl}${KEY}&q=${value}${filter}`)
  //     .then(data => {
  //       if (!data.ok) {
  //         console.log(data);
  //         throw new Error('Error');
  //       }
  //       return data.json();
  //     })
  //     .catch(() => Notiflix.Notify.failure('Oops, there is no such image!'));
  //   return response;
}
