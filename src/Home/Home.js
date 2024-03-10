import "./Home.css";
import image1 from "../Assets/image1.png";
function Home() {
  return (
    <div className="big-container">
    <div className="main-container">
      <div className="container">
        <img className=" desktop-image" src={image1} alt="desktop" />
      </div>
      <div className="data">
        <h1 className="heading">Pocket Notes</h1>
        <p className="paragraph">
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
    </div>
    </div>
  );
}
export default Home;
