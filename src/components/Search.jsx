import PropTypes from 'prop-types';
import { cn } from '../lib/cn';

const Search = ({ className, ...props }) => {
	return (
		<input
			type='text'
			placeholder='Search'
			className={cn(
				'w-full font-medium px-3 py-2 text-sm border border-zinc-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500',
				className
			)}
			{...props}
		/>
	);
};

Search.propTypes = {
	className: PropTypes.string,
};

export default Search;
