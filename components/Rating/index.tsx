import { IRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState } from 'react';

export const Rating = ({
	isEditable = false,
	rating,
	setRating,
	...props
}: IRatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	const constructRating = (currentRating: number) => {
		const updatedRating = ratingArray.map((item: JSX.Element, i: number): JSX.Element => {
			return (
				<StarIcon
					className={cn(styles.star, {
						[styles.filled]: currentRating > i,
					})}
				/>
			);
		});

		setRatingArray(updatedRating);
	};

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	return (
		<div {...props}>
			{ratingArray.map(
				(icon: JSX.Element, i: number): JSX.Element => (
					<span key={i}>{icon}</span>
				),
			)}
		</div>
	);
};
