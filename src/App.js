import Bus from "./Components/Bus.jsx";
import Graph from "./Components/Graph.jsx";
import "./Components/Style.css";
function App() {
  return (
    <>
      <div className="d-flex ">
        {" "}
        <div>
          <h4 className="outer-box">Know About Seat Types</h4>
          <ul>
            <li className="d-flex">
              <div className="box-color1 me-2 mb-2"></div>
              <div className="color-title">Available</div>
            </li>
            <li className="d-flex">
              <div className="box-color2 me-2 mb-2"></div>
              <div className="color-title">Available Only for Woman</div>
            </li>
            <li className="d-flex">
              <div className="box-color3 me-2 mb-2"></div>
              <div className="color-title">Selected by you</div>
            </li>
            <li className="d-flex">
              <div className="box-color4 me-2 mb-2"></div>
              <div className="color-title">Booked by others</div>
            </li>
            <li className="d-flex">
              <div className="box-color5 me-2 mb-2"></div>
              <div className="color-title">Booked by Female passengers</div>
            </li>
          </ul>
        </div>
        <Bus />
      </div>
      <Graph />
    </>
  );
}

export default App;
