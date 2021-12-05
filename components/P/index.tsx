import { IPProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ size = 'm', children, ...props }: IPProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, {
				[styles.s]: size == 's',
				[styles.m]: size == 'm',
				[styles.l]: size == 'l',
			})}
			{...props}>
			{children}
		</p>
	);
};
