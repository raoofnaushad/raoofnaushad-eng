import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/raoof.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Machine Learning Engineer", "Data Engineer", "Entrepreneur"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Raoof`} </h1>
                <h2><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Machine Learning Engineer", "Data Engineer", "Entrepreneur"]'><span className="wrap">{text}</span></span></h2>
                <p>
  I am a highly driven and talented professional with expertise in AI/ML, Data Engineering, and Software Development. I have over 4 years of experience in developing enterprise-grade data-driven applications, with a solid foundation in software engineering and MLOps. My passion for innovation and problem-solving is evident through my research collaborations in Deep Learning, Remote Sensing, and IoT with prestigious institutions such as IIT-Bombay, CSRE NIIST, and the University of New Hampshire.
</p>
<p>
  As a co-founder of Ark-X and We4U, I have demonstrated my entrepreneurial spirit and leadership abilities. I have organized national and international events, including TEDx and a Guinness World Record attempt, showcasing my capacity to lead and inspire. My leadership roles in IEEE and CEST further highlight my commitment to fostering technological advancement and community engagement.
</p>
<p>
  In addition to my technical prowess, I am a certified UAV Pilot and a dedicated technical blogger, contributing insightful articles to prominent platforms like DDI and Analytics Vidhya. My multifaceted experience and dedication to continuous learning position me as a dynamic and influential figure in the fields of AI, Data Engineering, and beyond.
</p>


              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}