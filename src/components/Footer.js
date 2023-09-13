import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-dark text-light py-md-3 py-2">
      <Container>
        <div className="text-center">
          <p> {t("footer_copyrights")}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
