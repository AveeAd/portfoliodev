import React from 'react';
import Back from '../components/ui/Back';

const Page404 = () => {
	return (
		<div className="page-not-found">
			<h1>404</h1>
			<p>Page not found</p>
			<div>
				<Back icon />
				<Back text="Back to previous page" />
			</div>
		</div>
	);
};

export default Page404;
