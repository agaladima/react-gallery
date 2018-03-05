import React from 'react';
import PicContainer from './PicContainer';

const SearchResults = ({match}) => {

  return(
    <PicContainer title='Search Results' topic={match.params.topic} />
  );
}

export default SearchResults;