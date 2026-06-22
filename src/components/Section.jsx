import { Container } from 'react-bootstrap';

function Section({ id, title, text, light, children }) {
    return (
        <section id={id} className={`section ${light ? 'section-light' : ''}`}>
            <Container>
                <h2>{title}</h2>

                {text && <p className="section-intro">{text}</p>}

                {children}
            </Container>
        </section>
    );
}

export default Section;