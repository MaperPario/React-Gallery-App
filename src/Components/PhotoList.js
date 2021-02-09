import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

/*photolist component for rendering the images pulled from the Flickr API, along with
rendering the NotFound component when there aren't results*/

const PhotoList = props => {
  
  const results = props.data;
  const photos = results.length ?
    results.map(photo => {
      return(
        <Photo 
          url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
          key={photo.id} />
      )
    }) : <NotFound query={props.query} />
  
  const headerText = results.length ? props.query : "";

  return(
    <div>
      <h2>{ headerText }</h2>
      <ul>
        {photos}
      </ul>
    </div>
  )
}

export default PhotoList;