import "./App.css";

import ReactPlayer from "react-player";
import { useState } from "react";

function App() {
  const [isHiddenMenu, setIsHiddenMenu] = useState(true);

  const handleOnMenuButtonClick = () => {
    setIsHiddenMenu(!isHiddenMenu);
  };

  return (
    <>
      <div
        class="antialiased bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400 h-screen"
      >
        <header>
          <nav
            class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
          >
            <div>
              <a href="#" className="text-pink-500">
                LoveZone
              </a>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              onClick={handleOnMenuButtonClick}
              class="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <div
              class={`w-full md:flex md:items-center md:w-auto ${
                isHiddenMenu ? "hidden" : ""
              }`}
              id="menu"
            >
              <ul
                class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
              >
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400" href="#">
                    Nghe nhạc
                  </a>
                </li>
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400" href="#">
                    Fun
                  </a>
                </li>
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400" href="#">
                    ABC
                  </a>
                </li>
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400" href="#">
                    XYz
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div class="px-4 mb-auto">
          <div
            class="
          flex
          flex-col
          justify-center
          bg-white
          mx-auto
          rounded-lg
          my-16
          p-16
        "
          >
            <h1 className="text-pink-500 text-3xl text-center mb-5">
              Ở đây khum có gì hết. Chỉ có một chút tình iu thui.
            </h1>
            <div className="flex justify-center">
              {/* <img
                className="image"
                src={HeartImage}
                alt="Hien thi anh khum co duoc"
              ></img> */}
              <ReactPlayer
                url="https://www.youtube.com/watch?v=mZF9BRZkTDQ"
                volume={1}
                muted={true}
                controls={true}
                playing={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
