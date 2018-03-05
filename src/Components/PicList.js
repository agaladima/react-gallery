import React from 'react';
import Pic from './Pic';
import NoPics from './NoPics';

const PicList = props => {

	const results = props.data;
	let pics;
	if(results.length > 0) {
		pics = results.map(pic => <Pic url={`http://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} />);
	} else {
		pics = <NoPics />
	}

	return(
		<ul>
			{pics}
		</ul>
	);
}

export default PicList;