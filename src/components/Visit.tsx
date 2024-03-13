// import { logo } from "../assets";

export const Visit = () => (
  <div className="carousel h-40 w-40">
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
        className="w-full"
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
        src="https://static.wixstatic.com/media/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg/v1/fill/w_151,h_198,al_c,q_80,usm_2.00_1.00_0.00/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg"
        className="w-full"
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
        src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
        className="w-full"
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
        src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
        className="w-full"
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