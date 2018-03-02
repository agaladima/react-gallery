import React from 'react';
import Pic from './Pic';

const PicList = props => {

	const results = props.data;
	let pics;
	if(results.length > 0) {
		pics = results.map(pic => <Pic url={pic.url_o} key={pic.id} />);
	}
	

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