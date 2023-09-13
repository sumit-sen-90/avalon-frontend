import Container from "react-bootstrap/Container";

import {
  BsFillCalendar3EventFill,
  BsHouseFill,
  BsPersonFillX,
} from "react-icons/bs";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { Button } from "react-bootstrap";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { app_logo, langTitle } from "../utils/constant";
import { flag } from "../utils/helper";
const Header = () => {
  const [local, setLocal] = useState(i18n.language);
  const { t } = useTranslation();
  const navigate = useNavigate();

  //Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedin");
    navigate("/");
  };

  //Changed language
  i18n.on("languageChanged", (lng) => setLocal(i18n.language));
  const handleItemClick = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <>
      <Navbar expand="lg" className={`shadow mb-3 `}>
        <Container fluid>
          <Navbar.Brand href="/home">
            <img
              src={app_logo}
              alt="Avalon Solution Logo"
              className={`d-inline-block align-top mr-2 ${styles.logo}`}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <img
                  src={app_logo}
                  alt="Avalon Solution Logo"
                  className={`d-inline-block align-top mr-2 ${styles.logo}`}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className="d-flex  justify-content-center align-items-center mx-3 flex-column flex-sm-row flex-md-row flex-lg-row">
                  <span className={`fi fi-${flag(local)}`}></span>
                  <NavDropdown
                    title={local}
                    id={`offcanvasNavbarDropdown-expand-lg`}
                    className="d-flex flex-column justify-content-center align-items-center "
                  >
                    <NavDropdown.Item
                      onClick={() => handleItemClick("EN")}
                      disabled={local === "EN"}
                    >
                      <span
                        className={`fi fi-us ${
                          local === "EN"
                            ? styles.lowOpacity
                            : styles.highOpacity
                        }`}
                      ></span>{" "}
                      {langTitle.america}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => handleItemClick("FR")}
                      disabled={local === "FR"}
                    >
                      <span
                        className={`fi fi-fr ${
                          local === "FR"
                            ? styles.lowOpacity
                            : styles.highOpacity
                        }`}
                      ></span>{" "}
                      {langTitle.french}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => handleItemClick("HI")}
                      disabled={local === "HI"}
                    >
                      <span
                        className={`fi fi-in ${
                          local === "HI"
                            ? styles.lowOpacity
                            : styles.highOpacity
                        }`}
                      ></span>{" "}
                      {langTitle.india}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => handleItemClick("RU")}
                      disabled={local === "RU"}
                    >
                      <span
                        className={`fi fi-ru ${
                          local === "RU"
                            ? styles.lowOpacity
                            : styles.highOpacity
                        }`}
                      ></span>{" "}
                      {langTitle.russian}
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>

                <Link to="/home" className="nav-link ">
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <BsHouseFill /> <span>{t("header_home")}</span>
                  </div>
                </Link>
                <Link to="/about" className="nav-link">
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <BsFillCalendar3EventFill />{" "}
                    <span>{t("header_about_us")}</span>
                  </div>
                </Link>
                <Button variant="warning" onClick={handleLogout}>
                  <BsPersonFillX className={styles.custom_btn_color} />
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
