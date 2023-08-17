import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,links,vlink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br /><br />
          <h5><a className="tagline space"  href={links} target="blank">Live link</a> 
          <a className="tagline" href={vlink} target="blank">Demo Video</a></h5>
        </div>
        
      </div>
    </Col>
  )
}
