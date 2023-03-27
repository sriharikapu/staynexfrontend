import { Col, Row } from "react-bootstrap";
import "./footer.css";

function FooterComponent() {
    return (
        <>
            <div className="footer-wrapper">
                <Row >
                    <Col>
                        <h2 className="connect_with_us"> Connect With us</h2>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <div>Staynex</div>
                                <div>Staynex Passes</div>
                                <div>FAQs</div>
                                <div>Terms and Conditions</div>
                            </Col>
                            <Col>
                                <div>Staynex</div>
                                <div>Staynex Passes</div>
                                <div>FAQs</div>
                                <div>Terms and Conditions</div>
                            </Col>
                            <Col>Back To Top</Col>
                        </Row>

                    </Col>
                </Row>
                <hr />
            </div>
        </>);
}

export default FooterComponent; 