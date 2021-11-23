import { IRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({
	isEditable = false,
	rating,
	setRating,
	...props
}: IRatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedRating = ratingArray.map((_: JSX.Element, i: number): JSX.Element => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: currentRating > i,
						[styles.editable]: isEditable,
					})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => changeDisplayOnClick(i + 1)}>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(event: KeyboardEvent<SVGElement>) => changeDisplayOnSpace(i + 1, event)}
					/>
				</span>
			);
		});

		setRatingArray(updatedRating);
	};

	const changeDisplay = (i: number): void => {
		if (isEditable) {
			constructRating(i);
		}
	};

	const changeDisplayOnClick = (i: number): void => {
		if (isEditable && setRating) {
			setRating(i);
		}
	};

	const changeDisplayOnSpace = (i: number, event: KeyboardEvent<SVGElement>): void => {
		if (event.code == 'Space' && setRating) {
			setRating(i);
		}
	};

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
