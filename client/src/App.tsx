import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<div>404</div>} />
			</Routes>
		</Layout>
	);
}

export default App;
