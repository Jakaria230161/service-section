import React from 'react';

const Banner = () => {
    return (
      <div className="carousel w-full h-full">
        <div id="slide1" className="carousel-item relative w-full mt-auto">
          <img
            src="https://img.freepik.com/free-photo/gavel-with-books-old-wooden-desk_93675-129543.jpg?size=626&ext=jpg"
            alt=""
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/closeup-shot-person-writing-book-with-gavel-table_181624-57173.jpg?w=740&t=st=1668091497~exp=1668092097~hmac=6da4ca7feba5dde344d64fbaccb8a3c4529418a2b9620eef9c4b8db76d59f818"
            alt=""
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/still-life-with-scales-justice_23-2149776024.jpg?w=740&t=st=1668091540~exp=1668092140~hmac=4322cae07bae09d300db868f7f60c2d6e7027070511ab3e8ab78883095015504"
            alt=""
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-vector/law-justice-trial-with-prisoner-cage_1284-59982.jpg?w=360&t=st=1668091589~exp=1668092189~hmac=e21d22e97b3a6cb76d0f603f97d9f4193521e0efd9bbed18f455738240b4e906"
            alt=""
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default Banner;