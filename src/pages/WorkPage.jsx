import React, { Fragment } from "react";
import { ContainerWrapper } from "../components/ContainerWrapper";
import { CardComponent } from "../components/generic/CardComponent";
import { ChipComponent } from "../components/generic/ChipComponent";
import { WORKS } from "../data/works";
import { Icon } from "@iconify/react";
import { ButtonComponent } from "../components/generic/ButtonComponent";

const WorkPage = () => {
  return (
    <ContainerWrapper style={"py-[100px] bg-hero bg-no-repeat bg-cover h-full"}>
      <div className="flex flex-col gap-[80px]">
        <div className="flex flex-col gap-[24px]">
          <h4 className="font-heading text-primary-500 font-[700] leading-normal tracking-[4.68px] text-[24px]">
            Portfolio
          </h4>
          <h1 className="text-phone-h1 laptop:text-h1 uppercase text-headings">My Side Hustles</h1>
          <p className="text-body-text font-body-text text-[20px]">
            Projects that I created and was involved in during my college and
            free time.
          </p>
        </div>

        <div className="grid grid-cols-1 phone-lg:grid-cols-2 laptop:grid-cols-3 gap-24 w-full ">
          {WORKS.map((values, key) => (
            <CardComponent key={key}>
              <div className="flex flex-col gap-48">
                <div className="flex justify-between  ">
                  <ChipComponent
                    title={values.type}
                    style={
                      "rounded-[8px] bg-primary-200 text-chip uppercase text-primary-900"
                    }
                  />
                  <div className="text-headings flex flex-row ">
                    <div>
                      {values.github_url ? (
                        <a
                          href={values.github_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon icon="fe:github" fontSize={"30px"} />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div>
                      {values.link ? (
                        <a href={values.link} target="_blank" rel="noreferrer">
                          <Icon icon="bx:link" fontSize={"30px"} />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[16px]">
                  <div className="flex flex-col tablet:flex-row justify-between items-center">
                    <h5 className="text-h5 text-headings">{values.title}</h5>
                  </div>

                  <p className="text-headings text-paragraph">
                    {values.description}
                  </p>
                </div>

                <div className={`grid grid-cols-2 phone:grid-cols-3 gap-16 w-full `}>
                  {values.tags.map((val, key) => (
                    <ChipComponent
                      style={
                        "w-auto bg-secondary-400 gap-[8px] h-[28px] rounded-[20px] text-[10px] font-normal tracking-[0.46px] uppercase font-[700]"
                      }
                      title={val}
                      key={key}
                    />
                  ))}
                </div>
              </div>
            </CardComponent>
          ))}

        </div>
      </div>
      <div className="flex items-center justify-center ">

        <ButtonComponent
          style={
            "hidden laptop:flex px-20 h-button-m  bg-primary-500 font-body-text text-primary-100 rounded-[30px] text-btn-m uppercase hover:bg-primary-800 hover:text-primary-500 w-[184px]"
          }
        >
          See All
        </ButtonComponent>
      </div>
    </ContainerWrapper>
  );
};

export default WorkPage;
