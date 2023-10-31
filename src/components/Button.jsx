import { cn } from '../lib/cn.js';
import PropTypes from 'prop-types';

const Button = ({ children, className, ...props }) => (
	<button
		className={cn(
			'px-3 py-2 text-sm font-medium tracking-wide bg-white rounded-full text-zinc-800 hover:bg-zinc-100',
			className
		)}
		{...props}>
		{children}
	</button>
);

Button.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Button;
