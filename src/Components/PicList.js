import React from 'react';
import Pic from './Pic';

const PicList = props => {

	const results = props.photo;
	let pics = results.map(pic =>
		<Pic url={pic.images.fixed_height.url} />
	);

	return(
		<div className='photo-container'>
			<h2>Results</h2>
			<ul>
				{pics}
			</ul>
		</div>
	);
}

export default PicList;