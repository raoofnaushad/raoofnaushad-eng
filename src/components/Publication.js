import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Publication = () => {

    return (
        <section className="publication" id="publication">
<Container>
  <Row>
    <Col size={12}>
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Publications</h2>
            <p>I have 3 publications in 01 journal and 2 conferences with over 100 citations</p>
            <Tab.Container id="publication-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Recent Publication</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Ready to be Published</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <Tab.Pane eventKey="first">
                  <Row>
                    <p><a href="https://doi.org/10.3390/s21238083" target="_blank">Naushad, R.; Kaur, T.; Ghaderpour, E. Deep Transfer Learning for Land Use and Land Cover Classification: A Comparative Study. Sensors 2021, 21, 8083.</a></p>
                  </Row>
                  <Row>
                    <p><a href="https://doi.org/10.1063/5.0004262" target="_blank">Raoof Naushad, M. Harshita Vijayam, A. Mohammed Hassan, T. Safwan Rashid, S. Asha, “Plastic waste segregation using Raman spectroscopy,” AIP Conference Proceeding.</a></p>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p><a href="https://opus.uleth.ca/handle/10133/5760" target="_blank">"Query focused abstractive summarization using BERTSUM model"</a>, University of Lethbridge, Canada, 2020.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>A Novel Approach to Rental Market Analysis for Property Management Firms using Large Language Models and Machine Learning by Raoof Naushad, Rakshit Gupta, Tejasvi Bhutiyal, and Vrushali Prajapati.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <p><a href="https://scholar.google.com/citations?user=eOjoaA0AAAAJ&hl=en" target="_blank">Google Scholar Link</a></p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>}
      </TrackVisibility>
    </Col>
  </Row>
</Container>

    </section>
    )
}