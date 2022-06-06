import "./App.css";

import HeartImage from "./resources/heart.jfif";

function App() {
  return (
    <>
      <h1 className="App">
        Ở đây khum có gì hết. Chỉ có một chút tình iu thui.
      </h1>
      <img
        className="image"
        src={HeartImage}
        alt="Hien thi anh khum co duoc"
      ></img>
    </>
  );
}

export default App;
