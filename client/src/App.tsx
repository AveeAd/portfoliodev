import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './layouts';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import Page404 from './pages/Page404';
import Container from './layouts/Container';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/articles"
					element={
						<Container>
							<Articles />
						</Container>
					}
				/>
				<Route
					path="/projects"
					element={
						<Container>
							<Projects />
						</Container>
					}
				/>
				<Route path="*" element={<Page404 />} />
			</Routes>
		</Layout>
	);
}

export default App;
