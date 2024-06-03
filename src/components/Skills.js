import meter1 from "../assets/img/meter1.svg"; //95%
import meter2 from "../assets/img/meter2.svg"; //80%
import meter3 from "../assets/img/meter3.svg"; //90%
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
    <div className="item">
    <br></br>

        {/* <img src={meter3} alt="Image" /> */}
        <h5>Generative AI</h5>
    </div>
    <div className="item">
    <br></br>
        {/* <img src={meter2} alt="Image" /> */}
        <h5>Machine Learning</h5>
    </div>
    <div className="item">
    <br></br>
        {/* <img src={meter3} alt="Image" /> */}
        <h5>MLOps</h5>
    </div>
    <div className="item">
    <br></br>
        {/* <img src={meter1} alt="Image" /> */}
        <h5>Python</h5>
    </div>
    <div className="item">
    <br></br>
        {/* <img src={meter1} alt="Image" /> */}
        <h5>SQL</h5>
    </div>
    <div className="item">
    <br></br>
        {/* <img src={meter1} alt="Image" /> */}
        <h5>Data Analysis</h5>
    </div>
    <div className="item">
    <br></br>
        {/* <img src={meter3} alt="Image" /> */}
        <h5>Data Engineering</h5>
    </div>
    <div className="item">
        {/* <img src={meter2} alt="Image" /> */}
        <br></br>
        <h5>Deep Learning</h5>
    </div>
    <div className="item">
    <br></br>
        {/* <img src={meter1} alt="Image" /> */}
        <h5>Time Management</h5>
    </div>
    <div className="item">
    <br></br>
        {/* <img src={meter1} alt="Image" /> */}
        <h5>Leadership</h5>
    </div>
    <div className="item">
    <br></br>
        {/* <img src={meter1} alt="Image" /> */}
        <h5>Team Player</h5>
    </div>
</Carousel>

                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}