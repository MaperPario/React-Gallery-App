import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => {
  
  const results = props.data;
  let photos;
  if (results.length) {
    photos = results.map(gif => <Photo url={gif.images.fixed_height.url} key={gif.id} />);    
  } else {
    photos = <NotFound />
  }
  
  return(
    <div class="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  )
}

export default PhotoList;