import React from 'react';
import { ButtonComponent } from '../components/generic/ButtonComponent';
import { ContainerWrapper } from '../components/ContainerWrapper';

export const HeroSectionPage = () => {
  return (
    <ContainerWrapper style={'bg-hero bg-no-repeat bg-cover'}>
      <div className="flex flex-col w-[676px] gap-24">
        <div>
          <h4 className="font-heading text-primary-500 font-[700] leading-normal tracking-[4.68px] text-[24px]">
            Junior Developer
          </h4>
          <h1 className="text-h1 uppercase text-headings">
            Reno Angelo Banderlipe
          </h1>
        </div>

        <p className="text-body-text font-body-text text-[20px]">
          I am currently a Junior Programmer working with a passion to develop a quality and scalable code.
        </p>
      </div>
      <div className="flex gap-16">
        <ButtonComponent style={'bg-transparent hover:bg-primary-500 text-primary-500 hover:text-primary-100  '}>
          See My Works
        </ButtonComponent>
        <ButtonComponent style={'w-[184px]'}>
          Hire Me
        </ButtonComponent>
      </div>
    </ContainerWrapper>
  );
}