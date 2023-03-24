import React, { useEffect, useState, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import StarIcon from './star.svg';
import style from './Rating.module.css';

export function Rating({
  rating,
  isEditable = false,
  setRating,
  ...props
}: RatingProps): JSX.Element {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRaiting: number) => {
    const updatedArr = ratingArray.map((star: JSX.Element, idx: number) => (
      <span
        className={cn(style.star, {
          [style.filled]: idx < currentRaiting,
        })}
        onMouseEnter={() => {
          changeDisplay(idx + 1);
        }}
        onMouseLeave={() => {
          changeDisplay(rating);
        }}
        onClick={() => {
          onClick(idx + 1);
        }}
      >
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
            isEditable && handleSpace(idx + 1, e)
          }
        />
      </span>
    ));

    setRatingArray(updatedArr);
  };

  const changeDisplay = (idx: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(idx);
  };

  const onClick = (idx: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(idx);
  };

  const handleSpace = (idx: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return;
    }
    setRating(idx);
  };
  return (
    <div {...props}>
      {ratingArray.map((star, idx) => (
        <span key={idx}>{star}</span>
      ))}
    </div>
  );
}
