import React, { Fragment, useEffect } from "react";
import { NavbarComponent } from "../components/NavbarComponent";
import { HeroSectionPage } from "./HeroSectionPage";
import { AboutPage } from "./AboutPage";
import WorkPage from "./WorkPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";

const HomePage = () => {

  useEffect(() => {
    function redirectUrl() {
      if (window.confirm("Portfolio update! My portfolio has moved to a new location: https://renoangelo.vercel.app. Click Ok to visit the new site.")) {

        window.location.href = "https://renoangelo.vercel.app/";
      }
    }

    redirectUrl();
  }, []);
  return (
    <Fragment>
      <NavbarComponent />
      <HeroSectionPage />
      <AboutPage />
      <WorkPage />
      <SkillsPage />
      <ContactPage />
    </Fragment>
  );
};

export default HomePage;
