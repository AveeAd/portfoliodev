import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

const Home = () => {
	const [show, setShow] = useState<boolean>(false);
	const handleClose = () => {
		setShow(false);
	};
	return (
		<div>
			<h1>Homepage</h1>
			<Button color="white" backgroundColor="transparent" borderColor="white" onClick={() => setShow(true)}>
				Click to Open Modal
			</Button>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora fuga aut perferendis repudiandae,
				itaque, totam perspiciatis quod sed, officiis exercitationem. Cum fugiat, numquam non sit quas nam sint ea
				facere velit quasi molestias placeat vitae eum vel ducimus soluta maiores doloribus, illum odio ipsa possimus,
				reprehenderit a! Alias, laboriosam nobis voluptatum sint illo unde veniam exercitationem vel quod voluptatibus
				repellat placeat ex atque earum esse libero molestiae ab distinctio consequuntur. Ratione facere harum sunt
				rerum obcaecati praesentium eum voluptatem atque blanditiis impedit dolore odio excepturi distinctio esse
				exercitationem cumque veritatis repellendus repellat provident voluptates incidunt velit, debitis illo? Ut nihil
				laboriosam eaque quia beatae molestiae at magni, obcaecati dolores nisi accusamus dicta sed dolorem vitae
				quaerat ratione, magnam culpa aut error. Suscipit dolore veritatis accusamus rem magnam praesentium minus.
				Consequatur aspernatur error, incidunt vitae, modi quidem optio minima obcaecati asperiores commodi veritatis ea
				dolores quia est molestiae! Odio eum fugiat laudantium. Consequatur debitis dolor nemo quidem odio animi, neque
				atque aspernatur totam ducimus delectus consequuntur reprehenderit illo repellat earum pariatur, magni eaque
				incidunt eveniet ex! Amet repellendus exercitationem necessitatibus ea, corporis saepe! Minus repellendus cumque
				similique vel ipsam enim delectus quos aperiam provident odit quibusdam, fuga facilis culpa asperiores qui?
				Nemo, ea atque. Dolor eaque atque nemo nam, explicabo maiores? Aliquam placeat totam ipsam minima officia iure
				id possimus, sapiente fugit qui aspernatur, quidem officiis soluta? Architecto, provident eveniet aut, placeat
				pariatur laborum veniam voluptatem dolore in, ratione adipisci soluta odit eos unde vitae explicabo perspiciatis
				doloribus dolores dignissimos odio commodi voluptate sint! Minus corrupti, velit magnam laudantium dolores
				quibusdam neque consectetur adipisci id eaque voluptas. Sit, harum quaerat perferendis sed magni maiores nostrum
				nisi dolore unde repudiandae tempore labore, ipsam dignissimos quo? Quam dolore ab vitae, non qui voluptatum
				eius placeat blanditiis sit, consectetur sequi. Voluptate minima quidem repellat eligendi facilis non, sunt
				labore, aspernatur praesentium fuga, molestias nostrum adipisci officiis eaque. Iusto aspernatur corporis
				molestias doloribus ipsa, aut accusamus eligendi deserunt odit distinctio praesentium inventore error quae.
				Reprehenderit ad nulla atque pariatur reiciendis nesciunt tempore iste placeat libero, molestiae similique ex
				facere ullam optio incidunt aliquid unde qui aut veniam repudiandae maxime consequatur impedit. Facere voluptate
				hic expedita vel odit, dolore quis, natus, omnis quibusdam eligendi recusandae? Nisi mollitia in maiores aut
				sint omnis sapiente animi vero, magnam, placeat corporis veniam? Quibusdam a eum, recusandae illo velit qui.
				Adipisci animi veritatis at ipsam quo? Earum at ratione quis quisquam est provident quas veritatis modi minima
				dolore optio, labore voluptatibus corrupti in beatae eveniet quo quia fugiat ipsum placeat. Nobis sint expedita
				amet pariatur ea est illo facilis minus, soluta dolor corporis. Inventore voluptate aliquid itaque hic qui
				consequuntur, eveniet beatae veniam ducimus nemo esse, aperiam omnis unde sint blanditiis quisquam assumenda.
				Tempora necessitatibus non ullam assumenda voluptatibus impedit esse qui porro libero excepturi in sunt, ipsa
				harum quos reiciendis atque animi. Explicabo, eveniet repudiandae sed qui quam ullam magni aspernatur, rem,
				omnis totam id quaerat necessitatibus natus sequi eligendi consequuntur! Officia similique provident dicta
				voluptate consectetur molestias. Veritatis debitis hic laborum, eaque, maiores cumque aliquam ipsa tenetur
				doloremque quo nobis qui labore non eos, unde sint nostrum. Error mollitia pariatur necessitatibus explicabo
				maiores placeat, architecto enim, aut laboriosam natus sed rem eaque dolor culpa adipisci quod qui et quasi a
				consectetur? Assumenda laboriosam corrupti repellendus consequatur magni quidem dolorem asperiores veritatis id
				consectetur dicta voluptates iure provident, repudiandae quos necessitatibus officiis nobis totam consequuntur
				magnam ab architecto soluta accusantium voluptatem. Provident, magnam aperiam! Quis nisi architecto eveniet
				ullam similique earum eum praesentium soluta maiores, excepturi at totam laborum aspernatur. Facilis non vero
				temporibus ipsam eum animi optio asperiores! Quae cupiditate sunt quaerat perspiciatis quisquam aut possimus
				fuga voluptates iure fugiat, quas sequi, maxime quis? Deserunt vero ipsum, sint, dignissimos error explicabo
				nesciunt dicta minus ratione, dolor tempora doloremque commodi! Enim, soluta. Quaerat, qui! Distinctio quam,
				nostrum eaque labore voluptatem temporibus vitae, officia commodi autem saepe quisquam nihil reprehenderit fuga
				amet. Mollitia a aspernatur, labore dignissimos accusantium, tenetur dicta eaque doloremque dolore doloribus
				delectus explicabo? Reiciendis ea deleniti, adipisci perspiciatis magni aperiam illo similique animi, nulla,
				atque obcaecati autem labore eveniet doloremque iste ipsam aut. Sed numquam error eligendi accusantium ut
				excepturi maiores eum maxime voluptatibus cum beatae laboriosam, deleniti vel commodi sit a assumenda saepe
				dignissimos natus hic recusandae provident rerum atque facilis. In qui a dicta. Repudiandae, voluptatum nam
				repellendus suscipit atque nisi nihil minima sed quos et necessitatibus provident commodi officia cumque. Iure,
				adipisci odio repudiandae accusantium voluptate fugit officia magni aliquid vero, perspiciatis quaerat ipsum
				pariatur quis sed facilis facere temporibus. Eaque, quia totam excepturi sunt corporis nesciunt quibusdam vitae
				iusto quam incidunt nam tempora tempore doloremque cumque doloribus laborum asperiores dicta deleniti tenetur
				quod suscipit alias. Ut dolorum enim doloribus ea hic rerum veniam voluptate omnis, cupiditate magnam amet
				expedita blanditiis neque quasi dolores reiciendis sit quidem laudantium accusantium corrupti eos quaerat nisi
				ratione. Libero enim natus, numquam veritatis hic quam quae asperiores eligendi laudantium quis officiis
				incidunt, earum eum unde sequi! Voluptate, neque! Dolore nemo maiores, voluptate ea blanditiis aspernatur ipsa
				libero architecto ducimus consequatur laborum, iusto earum quae itaque molestias sequi quas sed velit ex
				pariatur error eveniet quo. Ipsam consequatur est modi rem magnam, harum laboriosam maxime? Praesentium quasi
				placeat dignissimos odio nisi quam fugiat dolores hic quos doloribus, aliquid reprehenderit tempore magnam illo
				delectus aspernatur non quas suscipit molestiae maxime ducimus velit. Atque velit optio exercitationem officia
				ullam. Dolorum ratione assumenda minima quas, incidunt quo illo deserunt repudiandae iure commodi consequatur
				libero soluta in repellendus, veritatis distinctio dolor aliquam? Laudantium saepe similique eaque sequi
				quibusdam! Earum facilis iste officiis beatae molestias aspernatur nulla error alias, laboriosam dolorem ea est
				numquam iusto vero aperiam nostrum deserunt tempora totam vel hic. Libero reprehenderit ex voluptates. Iure
				exercitationem nihil voluptatum, saepe harum explicabo doloribus recusandae quisquam reiciendis hic sunt sequi
				expedita, corporis inventore. Molestiae hic ipsum quas quasi ipsam quo nesciunt beatae numquam labore nulla
				aperiam delectus nam tempora necessitatibus, modi atque! Ducimus harum nobis quos voluptatum sint repellat hic
				maxime officia!
			</p>
			<Modal show={show} handleClose={handleClose}>
				<div className="header">
					<h1>This is a modal</h1>
					<p onClick={handleClose} className="pointer">
						Close
					</p>
				</div>
				<div className="body">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga alias quos sequi a aliquam? Sapiente eligendi
						magnam odit eius deleniti, obcaecati inventore culpa saepe totam rerum voluptates placeat tempore sint.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam enim est autem numquam cum, facere impedit
						quod odit fugiat dolores qui quam dolorem voluptatum commodi, tempore vitae ipsam sunt ratione.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nobis optio facere delectus nam provident
						excepturi, amet quia quas, repudiandae labore eum fugit! Ipsa tenetur consequuntur porro assumenda
						consectetur aut.
					</p>
				</div>
				<div className="footer">
					<Button onClick={handleClose} backgroundColor="red" color="white">
						Close
					</Button>
					<Button backgroundColor="steelblue" color="white" margin="0 0.5em">
						Okay
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default Home;
