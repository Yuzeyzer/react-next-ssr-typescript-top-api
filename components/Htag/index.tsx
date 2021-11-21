import { IHtagProps } from './Htag.props';

export const Htag = ({ tag, children }: IHtagProps): JSX.Element => {
	return <h1>{children}</h1>;
};

