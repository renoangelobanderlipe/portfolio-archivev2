import React, { Fragment } from "react";
import { ContainerWrapper } from "../components/ContainerWrapper";
import { ButtonComponent } from "../components/generic/ButtonComponent";


const ContactPage = () => {
  return (
    <ContainerWrapper style={'bg-hero bg-no-repeat bg-cover'}>
      <div className="flex gap-[80px]">
        <div className="w-full">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-16 ">
              <p className="text-h5 text-primary-500">Portfolio</p>
              <div className="text-headings text-h2 uppercase  ">My side hustles</div>
            </div>
          </div>
          <div className="text-body text-body-text">
            Projects that I created and was involved in during my college and free time.
          </div>
        </div>
        <div className={'flex justify-center items-center w-full'}>
          <ButtonComponent style={'w-[184px]'}>
            Hire Me
          </ButtonComponent>
        </div>
      </div>
    </ContainerWrapper>
  );
}

export default ContactPage;