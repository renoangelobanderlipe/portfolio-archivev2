import React from "react";
import { ContainerWrapper } from "../components/ContainerWrapper";
import { CardComponent } from "../components/generic/CardComponent";
import { ChipComponent } from "../components/generic/ChipComponent";

const WorkPage = () => {
  return (
    <ContainerWrapper style={'bg-hero bg-no-repeat bg-cover h-full'}>
      <div className="flex flex-col gap-[80px]">
        <div className="flex flex-col gap-[24px]">
          <h4 className="font-heading text-primary-500 font-[700] leading-normal tracking-[4.68px] text-[24px]">
            Portfolio
          </h4>
          <h1 className="text-h1 uppercase text-headings">
            My Side Hustles
          </h1>
          <p className="text-body-text font-body-text text-[20px]">
            Projects that I created and was involved in during my college and free time.
          </p>
        </div>

        {/* <div className="flex gap-48 align-middle justify-center ">
          <ul className="flex align-middle text-center bg-background rounded-[20px] font-body-text text-body text-primary-500  p-24  gap-[48px] uppercase">
            <li>All</li>
            <li>UI/UX</li>
            <li>Web Application</li>
            <li>Mobile App</li>
          </ul>
        </div> */}

        <div className="grid grid-cols-3 gap-24 w-full ">

          {
            [...Array(5)].map((element, key) => (
              <CardComponent key={key}>
                <div className="flex flex-col gap-48">
                  <div className="flex justify-between  ">
                    <ChipComponent title={'Web Application'} style={'rounded-[8px] text-chip uppercase text-primary-900'} />
                    <div className=" text-headings">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[16px]">
                    <div className="text-h5 text-headings">Helping Hand</div>
                    <p className='text-headings text-paragraph'>
                      Web based application formed by a group of remote-based teams that accept academic and school related commissions on different courses and subject areas
                    </p>
                  </div>

                  <div className={`grid grid-cols-5 gap-24 w-full `}>
                    {
                      [...Array(5)].map((element, key) =>
                        <ChipComponent style={'bg-secondary-400 gap-[8px] h-[28px] rounded-[20px] text-[11px] font-normal tracking-[0.46px] uppercase font-[500]'} title={'html'} key={key} />
                      )
                    }
                  </div>
                </div>

              </CardComponent>
            ))
          }







        </div>

      </div>
    </ContainerWrapper>
  );
}

export default WorkPage;