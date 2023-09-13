import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import {
  detail_img1,
  detail_img2,
  detail_img3,
  detail_img4,
} from "../utils/constant";

const Details = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row className="justify-content-center align-items-center  ">
        <Col md={2} className="text-center">
          <img src={detail_img1} alt="Dashboard" className="img-fluid" />
        </Col>
        <Col md={10} className=" ">
          <h2 className="dashboard-title mb-5">{t("who_are_we")}</h2>
          <p className="dashboard-title mb-5">{t("who_are_we_description")}</p>
          <hr className="my-5" />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center  ">
        <Col md={2} className="text-center">
          <img src={detail_img2} alt="Dashboard" className="img-fluid" />
        </Col>
        <Col md={10} className=" ">
          <h2 className="dashboard-title mb-5">{t("what_we_do")}</h2>
          <p className="dashboard-title mb-5">
            {t("what_we_do_description_para_first")}
          </p>
          <p className="dashboard-title mb-5">
            {t("what_we_do_description_para_secound")}
          </p>
          <hr className="my-5" />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center  ">
        <Col md={2} className="text-center">
          <img src={detail_img3} alt="Dashboard" className="img-fluid" />
        </Col>
        <Col md={10} className=" ">
          <h2 className="dashboard-title mb-5">{t("our_benefits")}</h2>
          <p className="dashboard-title mb-5">
            {t("our_benefits_description")}
          </p>
          <hr className="my-5" />
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center mb-5 ">
        <Col md={2} className="text-center">
          <img src={detail_img4} alt="Dashboard" className="img-fluid" />
        </Col>
        <Col md={10} className=" ">
          <h2 className="dashboard-title mb-5">{t("our_technology")}</h2>
          <p className="dashboard-title mb-5">
            {t("our_technology_description")}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
