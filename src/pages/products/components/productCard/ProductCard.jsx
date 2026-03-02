import './ProductCard.scss';
import { motion } from 'framer-motion';
export const ProductCard = ({ name, description, image, price }) => {
	return (
		<motion.div
			className='ProductCard'
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className='ProductCard__container'>
				<div className='ProductCard__media'>
					<img src={image} alt={name} className='ProductCard__image' />
				</div>

				<div className='ProductCard__content'>
					<h3 className='ProductCard__h3'>{name}</h3>
					<p className='ProductCard__p'>{description}</p>
					<span className='ProductCard__price'>{price}</span>
				</div>
			</div>
		</motion.div>
	);
};
