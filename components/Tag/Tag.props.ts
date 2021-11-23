import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IPProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 's' | 'm';
	children: ReactNode;
	color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
	href?: string;
}
