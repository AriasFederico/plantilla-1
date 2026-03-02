import './Hero.scss';
import { motion } from 'framer-motion';
import { global } from '../../data/global';
import { Button } from '../components/common/button/Button';

const { hero } = global;
const { title, span, endTitle, description, ctaButton, image } = hero;

export const Hero = () => {
	return (
		<main className='Hero' id='hero'>
			<div className='Hero__container'>
				<motion.div
					className='Hero__content'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<h1 className='Hero__h1'>
						{title} <span className='Hero__span'>{span}</span> {endTitle}
					</h1>
					<p className='Hero__description'>{description}</p>
					<div className='Hero__ctaButtons-container'>
						{ctaButton?.map(({ text, url, variant }) => (
							<Button text={text} url={url} variant={variant} key={text} />
						))}
					</div>
				</motion.div>
				<motion.div
					className='Hero__media'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<img src={image} alt={title} className='Hero__image' />
				</motion.div>
			</div>
		</main>
	);
};
