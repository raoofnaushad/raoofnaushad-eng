import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Accordion from 'react-bootstrap/Accordion';


export const Project = () => {

  const NLPproject = [
    {
      title: "Evidence Based Query",
      description: "Generating query to prepare query-focused summarization dataset",
      imgUrl: projImg4,
      myUrl:"https://github.com/deen-abdullah/EvidenceBasedQuery",
    },
    {
      title: "QAbsBert",
      description: "Query Focused Abstractive Summarization",
      imgUrl: projImg5,
      myUrl:"https://github.com/deen-abdullah/QABSBERT",
    },
    {
      title: "Summarization using GAT",
      description: "Work in progress",
      imgUrl: projImg9,
      myUrl:"https://github.com/deen-abdullah/gat",
    },
  ];

  const Courseproject = [
    {
      title: "Question Generation using Seq2Seq model with Attention",
      description: "Project completed as an assignment in one of the Ph.D. courses (Deep Learning for Natural Language Processing) at University of Lethbridge",
      imgUrl: projImg10,
      myUrl:"https://colab.research.google.com/drive/1EtftSOSKyIFkM8C6LtMTM4eDhXObtk59?usp=sharing",
    },
    {
      title: "Movie Review",
      description: "Project completed in one of the Ph.D. courses (Data Mining and Deep Learning) at University of Lethbridge",
      imgUrl: projImg8,
      myUrl:"https://github.com/deen-abdullah/Deep-Learning-for-Natural-Language-Processing",
    },
    {
      title: "Ensemble-based spam filtering",
      description: "Project completed in one of the M.Sc. courses (Advanced Data Processing) at University of Lethbridge",
      imgUrl: projImg6,
      myUrl:"https://github.com/deen-abdullah/Ensemble-based-spam-filtering",
    },
    {
      title: "Quantum Computing",
      description: "Project completed in one of the M.Sc. courses (Quantum Computing) at University of Lethbridge",
      imgUrl: projImg7,
      myUrl:"https://github.com/deen-abdullah/quantum-computing",
    },
  ];

  const project = [
    {
      title: "My Portfolio Website",
      description: "Using React App & JavaScript",
      imgUrl: projImg1,
      myUrl:"https://github.com/deen-abdullah/deen-abdullah.github.io/tree/master",
    },
  ];

  return (

    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experiences</h2>
                  <p>
                    Explore a diverse showcase of my journey, including industrial expertise, cutting-edge research, impactful volunteer work, and innovative personal projects.
                  </p>
                  <Tab.Container id="project-tabs" defaultActiveKey="industrial">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="industrial">Industrial Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="research">Research Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="entrepreneurial">Entrepreneurial Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="volunteer">Volunteer Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="personal">Personal Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="industrial">
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Data Engineer (Amplify) | Co-op - RBC</Accordion.Header>
                            <Accordion.Body>
                              <p>Royal Bank of Canada (RBC) - Toronto, Canada | May 2024 – Present</p>
                              <ul>
                                <li>Collaborated as a Data Engineer with 4 Amplify interns to develop and maintain a scalable generative AI application, resulting in LLM-assisted information retrieval and real-time visualization.</li>
                                <li>Designed and brainstormed the application to maximize business value, gathering feedback and suggestions from over 20 technical and business mentors.</li>
                                <li>Conducted data mining and analysis on over 5 million client records and their transactional data over a year, enhancing LLMs with prompt engineering and RAG techniques with function calling to improve performance.</li>
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Machine Learning Engineer | Co-op - Farpoint</Accordion.Header>
                            <Accordion.Body>
                              <p>Farpoint - Vancouver, Canada | Nov 2023 – April 2024</p>
                              <ul>
                                <li>Developed a proof of concept service using the open-source language models Hermes-2-Pro-Llama-3-8B and embedding model GritLM-7B, fine-tuning Meta Llama 3 8B for function calling. This service is designed to replace the client's application that uses OpenAI models, potentially resulting in a 96.3% reduction in price per score.</li>
                                <li>Assisted in developing an architecture document for the POC, detailing the use of Kubernetes, Load Balancers, Hive Clusters, and Network Attached Storages for the client.</li>
                                <li>Spearheaded the FarpointOI (Farpoint Operational Intelligence) project, automating company-wide operational processes with Generative AI.</li>
                                <li>Integrated OpenAI LLM models, leveraging advanced prompt engineering and retrieval-augmented generation techniques such as chain of thoughts and RAPTOR. Additionally, optimized the LLM and RAG pipeline, reducing processing time by 23%.</li>
                                <li>Utilized GitHub Actions for CI/CD, AWS for cloud deployment, and JIRA for agile task management, ensuring seamless workflow and project execution. Served as Scrum Master for an 8-member engineering team, orchestrating efforts and facilitating agile practices to drive project milestones and deliverables across over 6 sprints effectively.</li>
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Senior Analyst (Data Science) | Full-time - Factspan Analytics</Accordion.Header>
                            <Accordion.Body>
                              <p>Factspan Analytics - Bangalore, India | Nov 2022 – August 2023</p>
                              <ul>
                                <li>Developed robust data loading functions in PySpark on Azure Databricks to efficiently load and transform 5 million daily incremental data records, significantly enhancing processing efficiency.</li>
                                <li>Utilized over 86 complex SQL queries to validate business logic, meticulously identifying and resolving discrepancies in the source data.</li>
                                <li>Conducted comprehensive analysis of data from four different billing systems, significantly contributing to the billing data architecture.</li>
                                <li>Automated the testing framework by scheduling a PySpark-based Databricks notebook to execute SQL test queries, enabling continuous monitoring and alerting, saving 10% in resource time.</li>
                                <li>Received a spot award for innovation from Factspan for exceptional contributions to project success and innovation.</li>
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>Software Engineer (Level-3) | Full-time - UST Global</Accordion.Header>
                            <Accordion.Body>
                              <p>UST Global - Kerala, India | Feb 2022 – Aug 2022</p>
                              <ul>
                                <li>Designed and developed a scalable data engineering pipeline using AWS services, implementing pipeline jobs with AWS Step Functions and Lambda functions for seamless data processing.</li>
                                <li>Optimized the Python codebase by utilizing Pandas, multiprocessing, and multithreading techniques, resulting in a 60% reduction in data load time.</li>
                                <li>Received the UStar Award for outstanding contributions to the project's success and significant performance enhancements.</li>
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header>Artificial Intelligence Engineer | Full-time - Accubits Technologies</Accordion.Header>
                            <Accordion.Body>
                              <p>Accubits Technologies - Kerala, India | Dec 2019 – Dec 2021</p>
                              <ul>
                                <li>Developed an intent and entity recognition NLP project using state-of-the-art architectures like BERT to automate the client's IVR system, reducing manual labor by 8%.</li>
                                <li>Proficiently deployed deep learning models on AWS infrastructure, utilizing both GPU and CPU-based servers, and implemented server provisioning for model retraining to ensure robust model performance and scalability.</li>
                                <li>Provided mentorship and technical guidance to 6 junior engineers, fostering a culture of continuous learning and knowledge sharing.</li>
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Tab.Pane>
                      <Tab.Pane eventKey="research">
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Graduate Research Assistant - University of New Hampshire</Accordion.Header>
                            <Accordion.Body>
                              <p>University of New Hampshire · Full-time | Aug 2022 - Oct 2022 · 3 mos | New Hampshire, United States</p>
                              <ul>
                                <li>Contributed to the NASA project "Low-Temperature Comparative Planetology: Pore-Scale Dynamics with Planetary Scale Implications".</li>
                                <li>Focused on the development of multiphase Ice/brine/Sediment models using remote sensing observations and experiments and models.</li>
                                <li>Worked on UAV systems to make remote sensing observations.</li>
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Junior Research Fellow - Indian Institute of Technology, Bombay</Accordion.Header>
                            <Accordion.Body>
                              <p>Indian Institute of Technology, Bombay · Full-time | Nov 2021 - Feb 2022 · 4 mos | Mumbai, Maharashtra, India</p>
                              <ul>
                                <li>Focused on InSAR principle for the development of the "Indigenous Early Warning Radar System for predicting failures/slope instabilities in Open Cast Mines".</li>
                                <li>Installed the indigenous Ground-Based Synthetic Aperture Radar (GB-SAR) to monitor mining areas, man-made structures, and landslide structures, etc.</li>
                                <li>Improved cross-range resolution by exploiting SAR principle with radar mounted on a terrestrial platform.</li>
                                <li>Used interferometry principles to generate a displacement map in real-time, analyzing it to predict slope failures.</li>
                                <li>Assisted authorities to evacuate workers and equipment before any mishap happens.</li>
                                <li>Professor: Dr. Y. S Rao, CSRE department - IIT Bombay.</li>
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Tab.Pane>
                      <Tab.Pane eventKey="entrepreneurial">
  <Row>
    <Col>
      <p>
        <br /><br />
        <strong>Ark-X:</strong> Ark-X is an inventive-technological company providing digital transformation, product development, and marketing services to businesses, tech-startups, and organizations to accelerate their growth and performance. By focusing on unconventional thinking, a progressive problem-solving approach, and economical solutions, we are a collective of futuristic thinkers and innovators endeavoring to assimilate a modern technological touch to your venture.
        <br /><br />
        <strong>We4U:</strong> We4U is a non-profit organization focused on educating underprivileged school kids with technical knowledge. Founded under SCT College of Engineering, supported by the IEDC of SCT Engineering College.
      </p>
    </Col>
  </Row>
</Tab.Pane>
<Tab.Pane eventKey="volunteer">
  <Row>
    <Col>
      <p>
        <strong>ECE Association Secretary - SCT Students Union</strong><br />
        Sree Chitra Thirunal College Of Engineering | Sep 2018 - Mar 2019 · 7 mos<br />
        Arts and Culture
        <br /><br />
        <strong>Vice Chairman</strong><br />
        IEEE SCT SB | Feb 2018 - Feb 2019 · 1 yr 1 mo<br />
        Science and Technology
        <br /><br />
        <strong>Secretary - Council of Electronics and Communication (CEST)</strong><br />
        Sree Chitra Thirunal College Of Engineering | Oct 2018 - Mar 2019 · 6 mos<br />
        Science and Technology
        <br /><br />
        <strong>Chairman - RAS</strong><br />
        IEEE SCT SB | Feb 2017 - Feb 2018 · 1 yr 1 mo<br />
        Science and Technology
        <br /><br />
        <strong>Curator Organizer</strong><br />
        TEDx Vazhuthacaud | Sep 2017 - Mar 2018 · 7 mos<br />
        Science and Technology
        <br /><br />
        <strong>Volunteer</strong><br />
        TEDx Thiruvananthapuram | Oct 2016 - Dec 2016 · 3 mos<br />
        Science and Technology
      </p>
    </Col>
  </Row>
</Tab.Pane>

<Tab.Pane eventKey="personal">
  <Row>
    <Col>
      <p>
        <strong>NSRentals:</strong> Developed a web-based rental market analysis platform for property management firms. The platform includes a dashboard for market analysis and predictive insights. Implemented LLM-based comparison techniques to evaluate various properties and suggest marketing strategies to attract users.
        <br /><br />
        <strong>StanAI:</strong> Developed an AI-powered facility management assistant for consulting work in facility management consultancy. StanAI assists consultants by attending meetings, taking notes, recommending context-based questions, and generating meeting summaries and action items to be sent to attendees.
      </p>
    </Col>
  </Row>
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