import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import styled from 'styled-components';
import { Image } from '../StyledComponents/Reusables';

interface FlatCardProps {
	publishedDate?: string;
	title?: string;
	longDescription?: string;
	categories?: string | string[];
	image?: string;
	actions?: any[];
	onSave?: () => void;
}

const FlatCard = ({ publishedDate, title, longDescription, categories, image, actions }: FlatCardProps) => {
	const [toggle, setToggle] = useState<boolean>(false);
	return (
		<FlatCardContainer toggle={toggle}>
			<section>
				<small>{publishedDate && publishedDate}</small>
				<h2>{title && title}</h2>
				<p>
					{longDescription && longDescription}
					&nbsp;<span>see more...</span>
				</p>
				<div>
					<div className="categories">
						{categories && Array.isArray(categories) ? (
							categories.map((v: string, i: number) => <small key={i + 1}>{v}</small>)
						) : (
							<small>{categories}</small>
						)}
					</div>
					<div className="actions">
						<div>
							<FaBookmark />
						</div>
						<div>
							<BsThreeDots onClick={() => setToggle(!toggle)} />
							<div className="sub-menu">
								{actions &&
									actions.map((v: any, i: number) => (
										<h6 key={i} onClick={v?.action}>
											{v?.name}
										</h6>
									))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Image height="100%" src={image && image} width="100%" border="1px solid #ccc" />
		</FlatCardContainer>
	);
};

export default FlatCard;

const FlatCardContainer = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-gap: 0.5rem;
	padding: 0.5rem;
	margin-bottom: 0.5rem;
	border-right: 1px dotted #ccc;
	section {
		small {
			font-style: italic;
		}
		h2 {
			cursor: pointer;
			&:hover {
				color: white;
			}
		}
		p {
			span {
				display: block;
				cursor: pointer;
				font-style: italic;
				&:hover {
					color: white;
				}
			}
		}
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 0.5rem;
			small {
				cursor: pointer;
				border-radius: 0.8rem;
				background: rgba(255, 255, 255, 0.3);
				backdrop-filter: blur(2rem);
				margin-left: 0.2rem;
				padding: 0.2rem 0.5rem;
			}
			.actions {
				div {
					position: relative;
					margin-right: 0.5rem;
					cursor: pointer;
					&:last-child {
						margin-right: 0;
					}
					.sub-menu {
						position: absolute;
						top: 100%;
						right: 0;
						display: flex;
						flex-direction: column;
						text-align: left;
						width: max-content;
						border: 1px solid #ccc5;
						h6 {
							background-color: transparent;
							padding: 0.2rem 0.5rem;
							width: 100%;
							color: #ccc;
							transition: all 0.1s linear;
							&:hover {
								background-color: white;
								color: #002;
							}
						}
						display: ${({ toggle }: { toggle: boolean }) => (toggle ? 'block' : 'none')};
					}
				}
			}
		}
	}
`;
