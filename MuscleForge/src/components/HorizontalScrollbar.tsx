import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import LeftArrowIcon from '../assets/left-arrow.png';
import RightArrowIcon from '../assets/right-arrow.png';
import ExerciseCard from './ExerciseCard';
interface HorizontalScrollbarProps {
  data: any[];
  bodyPart?: any;
  bodyParts?: any[];
  setBodyPart?: React.Dispatch<React.SetStateAction<string>>;
  isBodyParts?: boolean;
}

const HorizontalScrollbar: React.FC<HorizontalScrollbarProps> = ({
  data,
  setBodyPart,
  bodyPart,
  isBodyParts,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getCardWidth = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.children[0] as HTMLElement;
      const computedStyle = window.getComputedStyle(firstCard);
      const marginLeft = parseFloat(computedStyle.marginLeft);
      const marginRight = parseFloat(computedStyle.marginRight);
      return firstCard.offsetWidth + marginLeft + marginRight;
    }
    return 0;
  };

  const scrollPrevious = () => {
    const cardWidth = getCardWidth();
    if (scrollContainerRef.current && cardWidth > 0) {
      scrollContainerRef.current.scrollLeft -= cardWidth;
    }
  };

  const scrollNext = () => {
    const cardWidth = getCardWidth();
    if (scrollContainerRef.current && cardWidth > 0) {
      scrollContainerRef.current.scrollLeft += cardWidth;
    }
  };

  return (
    <div>
      <Typography onClick={scrollPrevious} className='right-arrow'>
        <img src={LeftArrowIcon} alt='right arrow' />
      </Typography>
      <div
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          overflowX: 'scroll',
          scrollBehavior: 'smooth',
          whiteSpace: 'nowrap',
        }}
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            data-item-id={item.id || item}
            data-title={item.id || item}
            sx={{ margin: '0 40px' }}
          >
            {isBodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </div>
      <Typography onClick={scrollNext} className='left-arrow'>
        <img src={RightArrowIcon} alt='left arrow' />
      </Typography>
    </div>
  );
};

export default HorizontalScrollbar;
