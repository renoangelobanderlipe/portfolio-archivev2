import React, { Fragment } from "react";
import { ContainerWrapper } from "../components/ContainerWrapper";
import { ButtonComponent } from "../components/generic/ButtonComponent";
import { Link } from "react-router-dom";
import { mailto } from "../config/mail";

const ContactPage = () => {
  return (
    <ContainerWrapper style={"py-[100px] bg-hero bg-no-repeat bg-cover"}>
      <div className="flex flex-col phone-lg:flex-row gap-48 phone-lg:gap-[80px]">
        <div className="w-full">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-16 ">
              <p className="text-h5 text-primary-500">What’s next?</p>
              <div className="text-phone-h1 laptop:text-h1 uppercase text-headings">
              Get In Touch
              </div>
            </div>
          </div>
          <div className="text-body text-body-text">
          Ready to turn your project ideas into reality? Let's collaborate and bring your vision to life! Whether it's web development, mobile apps, or custom software, I'm here to transform your concepts into functional and elegant solutions. Contact me today, and let's code your future together!
          </div>
        </div>
        <div className={"flex justify-center items-center"}>
          {/* <ButtonComponent style={'w-[184px]'}>
            Hire Me
          </ButtonComponent> */}
          <a href={mailto}>
            <button className="flex items-center justify-center px-20 h-button  bg-primary-500 font-body-text text-primary-100 rounded-[30px] text-btn-lg uppercase hover:bg-primary-800 hover:text-primary-500 w-[184px]">
              Hire Me
            </button>
          </a>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default ContactPage;
