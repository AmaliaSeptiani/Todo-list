import { cn } from '../lib/cn';
import PropTypes from 'prop-types';

const Checkbox = ({ className, ...props }) => (
	<input
		type='checkbox'
		className={cn(
			'w-4 h-4 text-indigo-500 border-indigo-500 rounded-md form-checkbox focus:ring-indigo-500',
			className
		)}
		{...props}
	/>
);

Checkbox.propTypes = {
	className: PropTypes.string,
};

export default Checkbox;
