import React from "react";

const Slides = ({ slidesProp }) => {
  const [index, setIndex] = React.useState(0);
  const { title, text } = slidesProp[index];
  // console.log(index);

  const nextSlide = () => {
    let slide = index;
    if (slide === slidesProp.length - 1) {
      return setIndex(0);
    }
    setIndex(slide + 1);
  };

  //=====================
  const prevSlide = () => {
    let slide = index;
    if (slide === 0) {
      return setIndex(slidesProp.length - 1);
    }
    setIndex(slide - 1);
  };
  //=================================
  const Board = () => {
    return (
      <div id="slide" className="card text-center">
        <h1 data-testid="title"> {title} </h1>
        <p data-testid="text">{text}</p>
      </div>
    );
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={() => setIndex(0)}
          // disabled={index === 0}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          // disabled={index === 0}
          className="small"
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          // disabled={index === slidesProp.length - 1}
          className="small"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
      <Board />
    </div>
  );
};
export default Slides;
