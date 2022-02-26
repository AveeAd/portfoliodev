import Layout from '../../layouts/DashboardLayout';
import ArticleForm from '../../components/Dashboard/Article/ArticleForm';

const Article = () => {
	return (
		<Layout>
			<h1>Articles</h1>
			<ArticleForm />
		</Layout>
	);
};

export default Article;
