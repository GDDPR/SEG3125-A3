import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ComingSoonPage({ title, description }) {
    return (
        <div className="coming-soon-page">
            <Container>
                <p className="eyebrow">Coming Soon</p>

                <h1>{title}</h1>

                <p className="coming-soon-text">
                    {description}
                </p>

                <Button as={Link} to="/" variant="outline-light" className="back-button">
                    <span className="back-icon">←</span>
                    <span>Back to Portfolio</span>
                </Button>
            </Container>
        </div>
    );
}

export default ComingSoonPage;