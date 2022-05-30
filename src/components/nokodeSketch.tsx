import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

export const NokodeSketch = () => {
  return (
    <React.Fragment>
      <Carousel className="noKodeContainer">
        <CarouselItem>
          <img src="https://sketchviz.com/@StrawberryChocolateFudge/b450de4ab5e028f6db849c4dc62fa7a6/34b524daf962520d1f40954cf94029c3d1b2dbc7.sketchy.png" />
        </CarouselItem>
        <CarouselItem>
          <img src="https://sketchviz.com/@StrawberryChocolateFudge/b450de4ab5e028f6db849c4dc62fa7a6/a50036155d54eeead7ce5cbab1c26a2d110802e8.sketchy.png" />
        </CarouselItem>
        <CarouselItem>
          <img src="https://sketchviz.com/@StrawberryChocolateFudge/c3bfe58852e953fe1e377535040e1222/583d8f18687103bfea1d0fba6df160784c7537b7.sketchy.png" />
        </CarouselItem>
      </Carousel>
    </React.Fragment>
  );
};

export const CarouselItem = ({ children, width }: any) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <Button
              variant="contained"
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
