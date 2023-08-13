import React, { Fragment } from 'react';
import { NavbarComponent } from '../components/NavbarComponent';
import { HeroSectionPage } from './HeroSectionPage';
import { AboutPage } from './AboutPage';
import WorkPage from './WorkPage';
import SkillsPage from './SkillsPage';
import ContactPage from './ContactPage';

const HomePage = () => {
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
}

export default HomePage;



