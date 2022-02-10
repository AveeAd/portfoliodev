import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './layouts';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import Page404 from './pages/Page404';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</Layout>
	);
}

export default App;
