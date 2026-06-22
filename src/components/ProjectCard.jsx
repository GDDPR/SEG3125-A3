import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProjectCard({ title, techStack, description, image, link }) {
    return (
        <Card as={Link} to={link} className="project-card mb-4">
            <div className="project-card-content">
                <img
                    src={image}
                    alt={`${title} preview`}
                    className="project-card-image"
                />

                <div className="project-card-body">
                    <h3>{title}</h3>

                    {techStack && <p className="tech-stack">{techStack}</p>}

                    <p>{description}</p>
                </div>
            </div>
        </Card>
    );
}

export default ProjectCard;