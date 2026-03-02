import './Header.scss';
import { useEffect, useState } from 'react';
import { global } from '../../../data/global';
import { Nav } from './nav/Nav';

const { header, logo } = global;

const { navigationLinks, menuBurguer } = header;
const { image, altText, url } = logo;

export const Header = () => {
	const [menuActive, setMenuActive] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1280) {
				setMenuActive(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<header className='Header'>
			<div className='Header__container'>
				<a href={url} className='Header__logo'>
					{image}
				</a>
				<Nav
					navigationLinks={navigationLinks}
					onCloseMenu={() => setMenuActive(false)}
					menuActive={menuActive}
				/>
				<button
					className='Header__burguer'
					onClick={() => setMenuActive(!menuActive)}
				>
					<ion-icon name={menuBurguer}></ion-icon>
				</button>
			</div>
		</header>
	);
};
