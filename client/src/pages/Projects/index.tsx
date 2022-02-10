import { Container, SubContainer, Ad, Discover } from '../../components/StyledComponents/Reusables';
import FlatCard from '../../components/ui/FlatCard';

const Projects = () => {
	return (
		<Container>
			<SubContainer>
				{Array.from({ length: 10 }, (v: any, i: number) => i + 1).map((v: number) => (
					<FlatCard
						key={v}
						publishedDate={`2022-02-${11 - v}`}
						title={`Project ${v}`}
						longDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque quo natus, nostrum totam quos culpa dignissimos hic voluptatibus eum perferendis, molestiae quibusdam numquam. At quia debitis quidem aperiam quo!"
						categories={['hello world', 'article', 'blog', 'fun']}
						actions={[{ name: 'feedback' }, { name: 'share' }, { name: 'mute' }]}
					/>
				))}
			</SubContainer>
			<Ad></Ad>
			<Discover></Discover>
		</Container>
	);
};

export default Projects;
