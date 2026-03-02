import './Button.scss';
export const Button = ({ text, url, variant, onClick }) => {
	return (
		<button className={variant ? 'Button-secondary' : 'Button-primary'}>
			<a
				href={url}
				onClick={onClick}
				className={variant ? 'Button-secondary__a' : 'Button-primary__a'}
			>
				{text}
			</a>
		</button>
	);
};
