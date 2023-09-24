import React, { Fragment } from "react";
import { ContainerWrapper } from "../components/ContainerWrapper";
import { ICONS } from "../utils/skills";
import { Icon } from "@iconify/react";

const SkillsPage = () => {
  return (
    <ContainerWrapper style={"py-[100px] bg-background h-[100vh]"}>
      <div className="flex gap-80">
        <div className="flex flex-col w-full gap-[48px]">
          <div className="flex flex-col gap-16">
            <section className="text-h5 text-primary-500">
              Things That Helped Me Grow
            </section>
            <h1 className=" text-h2 text-headings uppercase">
            Skills and Experiences
            </h1>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="text-h5 uppercase text-primary-100">
              New Media Services
            </div>
            <div className="flex flex-col gap-8">
              <section className="text-h5 text-headings uppercase ">
                Junior Programmer
              </section>
              <section className="text-paragraph text-body-text uppercase">
                August 2022 - Present
              </section>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="grid grid-cols-3 gap-24">
            {
              // background: linear-gradient(135deg, rgba(0, 41, 122, 0.05) 0%, rgba(69, 25, 91, 0.13) 100%), #262D3F;

              ICONS.map((element, index) => (
                <div
                  className="skills-card  flex flex-col p-16 justify-center items-center gap-48 rounded-[20px] hover:bg-primary-500"
                  key={index}
                >
                  <div
                    className={`flex justify-center items-center w-[60px] h-[60px] bg-no-repeat bg-cover ${element}`}
                  >
                    <Icon icon={element.icon} fontSize={"50px"} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default SkillsPage;
