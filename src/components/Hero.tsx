import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://lh3.googleusercontent.com/p/AF1QipNrAOnSTv8CLFAMJ-I5qRDCNM5vFK077UMUlTxN=s680-w680-h510)",
      }}
    >
      <div>
        <div className="flex w-full">
          <div className="grid flex-grow  h-96 card bg-base-300 rounded-box place-items-center">
            <div className="flex flex-col content-between text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-7 font-extralight  text-7xl ">
                  Welcome to
                  <br /> HEARTSEAE
                </h1>
                <p className="mb-5 text-xl text-balance">
                  Situated in its own secluded woodland grounds in the West
                  Wickham area, Heartsease Girlguiding House is an ideal base.
                </p>
              </div>
            </div>
          </div>

          <div className="divider lg:divider-horizontal">OR</div>
          <div className="grid flex-grow h-96 card bg-base-100 rounded-box place-items-center">
            <Squares />
          </div>
        </div>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="join mt-20">
          <div>
            <div>
              <input
                className="input input-bordered  text-slate-700 join-item"
                placeholder="Date"
              />
            </div>
          </div>
          <select className="select select-bordered text-slate-700 join-item">
            <option disabled selected>
              Room
            </option>
            <option>Double Room, Sea Views.</option>
            <option>Family Room</option>
            <option>Single Room, With Ensuite</option>
          </select>
          <div className="indicator">
            <button className="btn join-item">Search</button>
          </div>
          <input
            className="input input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn join-item rounded-r-full">Send</button>
        </div>
      </div>
    </div>
  );
};
