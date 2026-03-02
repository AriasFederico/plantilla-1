import './About.scss';
import { motion } from 'framer-motion';
import { global } from '../../data/global';
import { SocialLinks } from './components/social/SocialLinks';
import { VisitCard } from './components/visitCards/VisitCard';

const { footer } = global;
const { socialMedia } = footer;
const { about, businessInfo } = global;
const { storeDetails } = businessInfo;
const { mission } = about;

export const About = () => {
	return (
		<section className='About' id='about'>
			<motion.div
				className='About__container'
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<div className='About__intro'>
					<h2 className='About__title'>{about.title}</h2>
					{about.description?.map((text, index) => (
						<p key={index} className='About__description'>
							{text}
						</p>
					))}
					<div className='About__socials'>
						{socialMedia?.map(({ icon, plataform, url, target }) => (
							<SocialLinks
								url={url}
								plataform={plataform}
								icon={icon}
								key={`id - ${plataform}`}
								target={target}
							/>
						))}
						{/* componente social */}
					</div>
				</div>

				<div className='About__mission'>
					<img
						src={mission.image}
						alt={mission.title}
						className='About__mission-image'
					/>
					<div className='About__mission-intro'>
						<h3 className='About__mission-title'>{mission.title}</h3>
						<p className='About__mission-description'>{mission.description}</p>
					</div>
				</div>

				<div className='About__visit' id='visit'>
					<h3 className='About__visit-title'>{businessInfo.title}</h3>
					<div className='About__visit-cards'>
						{storeDetails?.map(
							({ icon, title, description1, description2 }) => (
								<VisitCard
									title={title}
									icon={icon}
									description1={description1}
									description2={description2}
									key={title}
								/>
							),
						)}
					</div>
				</div>
			</motion.div>
		</section>
	);
};
