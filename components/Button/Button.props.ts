import { ButtonHTMLAttributes, ReactNode, DetailedHTMLProps } from 'react';

export interface IButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'ghost';
	children: ReactNode;
	arrow?: 'right' | 'down' | 'none';
}
