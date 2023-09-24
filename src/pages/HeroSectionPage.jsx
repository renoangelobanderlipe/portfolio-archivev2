import { ButtonComponent } from "../components/generic/ButtonComponent";
import { ContainerWrapper } from "../components/ContainerWrapper";
import { mailto } from "../config/mail";

export const HeroSectionPage = () => {
  return (
    <ContainerWrapper style={"bg-hero bg-no-repeat bg-cover py-[150px] text-white gap-48"}>
      <div className="flex flex-col laptop:w-[676px] gap-24">
        <div>
          <h4 className="font-heading text-primary-500 font-[700] leading-normal tracking-[4.68px] text-[24px]">
            Junior Developer
          </h4>
          <h1 className="text-phone-h1 tablet:text-tablet-h1 laptop:text-h1 uppercase text-headings">
            Reno Angelo Banderlipe
          </h1>
        </div>

        <p className="text-phone-body laptop:text-body-text font-body-text text-[20px]">
          I am currently a Junior Programmer working with a passion to develop a
          quality and scalable code.
        </p>
      </div>
      <div className="flex flex-col-reverse phone-lg:flex-row gap-16">
        <ButtonComponent
          style={
            "bg-transparent hover:bg-primary-500 text-primary-500 hover:text-primary-100 w-full phone-lg:w-auto"
          }
        >
          See My Works
        </ButtonComponent>
        <a href={mailto}>
          <button className="flex w-full phone-lg:w-[184px] items-center justify-center px-20 h-button  bg-primary-500 font-body-text text-primary-100 rounded-[30px] text-btn-lg uppercase hover:bg-primary-800 hover:text-primary-500 ">
            Hire Me
          </button>
        </a>
      </div>
    </ContainerWrapper>
  );
};
