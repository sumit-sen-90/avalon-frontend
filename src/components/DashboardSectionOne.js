import home_img from "../assets/dasgboard.webp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";

const DashboardSectionOne = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row className="justify-content-center align-items-center ">
        <Col md={6} className="text-center">
          <h2 className="dashboard-title mb-5">{t("home_title")}</h2>
          <Carousel
            interval={1200}
            controls={false}
            data-bs-theme="dark"
            className="pb-5"
          >
            <Carousel.Item>
              <p className="dashboard-description">
                {t("dashboard_slide_one")}
              </p>
              <p>
                <strong> {t("dashboard_slide_one_author")}</strong>
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="dashboard-description">
                {t("dashboard_slide_two")}
              </p>
              <p>
                <strong>{t("dashboard_slide_two_author")} </strong>
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="dashboard-description">
                {t("dashboard_slide_three")}
              </p>
              <p>
                <strong>{t("dashboard_slide_three_author")}</strong>
              </p>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6} className="text-center">
          <img src={home_img} alt="Dashboard" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardSectionOne;
