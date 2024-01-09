import "../styles/Main.css";
import WebImage from "../assets/images/image-web-3-desktop.jpg";
const Main = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img src={WebImage} alt="Image" />
        <div className="description">
          <h1>
            The Bright <br /> Future of <br /> Web 3.0?
          </h1>
          <div className="read-more">
            <p>
              We dive into the nect evolution of the web that claims to put the
              power of platforms back into the hands of the people. But is it
              really fulfilling its promise?
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="list-container">
        <h1>New</h1>
        <h3>Hydrogen vs Electric Cars</h3>
        <p>Willv hydrogen fueled cars ever catch up to EVs?</p>
        <hr />
        <h3>The Downsides of AI Artistry</h3>
        <p>
          What are the possible adverse effect of on demand AI image generation?
        </p>
        <hr />
        <h3>Is VC Funding Drying Up?</h3>
        <p>
          Privste funding by VC firms is down 50% YOY. we take a look at what
          that means.
        </p>
      </div>
    </div>
  );
};

export default Main;
