import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './layouts';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import Page404 from './pages/Page404';
import Container from './layouts/Container';
import Dashboard from './pages/Dashboard';
import Article from './pages/Dashboard/Article';
import Project from './pages/Dashboard/Project';

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Layout>
						<Home />
					</Layout>
				}
			/>
			<Route
				path="/about"
				element={
					<Layout>
						<About />
					</Layout>
				}
			/>
			<Route
				path="/articles"
				element={
					<Layout>
						<Container>
							<Articles />
						</Container>
					</Layout>
				}
			/>
			<Route
				path="/projects"
				element={
					<Layout>
						<Container>
							<Projects />
						</Container>
					</Layout>
				}
			/>
			<Route path="/dashboard" element={<Dashboard />}>
				<Route path="/dashboard/article" element={<Article />} />
				<Route path="/dashboard/project" element={<Project />} />
				<Route path="/dashboard/*" element={<Page404 />} />
			</Route>
			<Route
				path="*"
				element={
					<Layout>
						<Page404 />
					</Layout>
				}
			/>
		</Routes>
	);
}

export default App;
