import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Award = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
<section className="award" id="award">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="award-bx wow zoomIn">
          <h2>Awards</h2>
          <br></br>
          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme award-slider">
            <div className="item">
              <h4>Winner, IJCRS Data Mining Hackathon</h4>
              <h6>Saint Mary’s University - Canada</h6>
            </div>
            <div className="item">
              <h4>Runner Up, Facts-on-Hack (Generative AI Hackathon)</h4>
              <h6>Factspan Analytics - India</h6>
            </div>
            <div className="item">
              <h4>Open Source Contributor</h4>
              <h6>LlamaIndex</h6>
            </div>
            <div className="item">
              <h4>State Athlete</h4>
              <h6>Triple Jump</h6>
            </div>
            <div className="item">
              <h4>Association Secretary</h4>
              <h6>Student Senate</h6>
            </div>
            <div className="item">
              <h4>Winner, FactOnHack</h4>
              <h6>Chatgpt Hackathon by Factspan</h6>
            </div>
            <div className="item">
              <h4>Spot Award</h4>
              <h6>Maersk Team, Factspan</h6>
            </div>
            <div className="item">
              <h4>USTAR Award</h4>
              <h6>UST Global</h6>
            </div>
            <div className="item">
              <h4>Remote Pilot License</h4>
            </div>
            <div className="item">
              <h4>HackerEarth DL Competition</h4>
              <h6>Indian Dance Forms Identification, Top 1%</h6>
            </div>
            <div className="item">
              <h4>RASA Open Source Contributor</h4>
            </div>
            <div className="item">
              <h4>Mar Baselios Youth Excellence Awards 2019</h4>
              <h6>1st Runner Up</h6>
            </div>
            <div className="item">
              <h4>Excellence Award, Electronics and Communication Department</h4>
              <h6>SCTCE - Winner</h6>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}