import { Button } from '../../common/button/Button';
import './Nav.scss';

export const Nav = ({ navigationLinks, onCloseMenu, menuActive }) => {
	return (
		<nav className={`Nav ${menuActive ? 'Nav-mobile' : ''}`}>
			<ol className='Nav__ol'>
				{navigationLinks?.map(({ label, url }) => (
					<li key={label} className='Nav__li'>
						<a href={url} onClick={onCloseMenu} className='Nav__a'>
							{label}
						</a>
					</li>
				))}
			</ol>
			{menuActive && (
				<Button text={'Visit us'} url={'#visit'} onClick={onCloseMenu} />
			)}
		</nav>
	);
};
