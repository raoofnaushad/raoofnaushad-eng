import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,myUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
          <a href={myUrl} target="_blank">Source Link</a>
          </div>
        </div>
      </div>
    </Col>
  )
}