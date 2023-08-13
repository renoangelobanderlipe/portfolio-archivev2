import React from 'react';
import { ContainerWrapper } from '../components/ContainerWrapper';

export const AboutPage = () => {
  return (
    <ContainerWrapper style={'bg-background'}>
      <div className='flex gap-[80px]'>
        <div className='flex flex-col w-full gap-24'>
          <div>
            <h4 className="font-heading text-primary-500 font-[700] leading-normal tracking-[4.68px] text-[24px]">
              Let Me Introduce My Name
            </h4>
            <h1 className="text-h1 uppercase text-headings gap-[24px]">
              About Me
            </h1>
          </div>
          <div className='flex flex-col gap-24'>
            <p className='text-body-text font-body-text text-[20px]'>Hello there! My name is Reno Angelo Banderlipe, I enjoy creating things on the Web also on Mobile. My interest in programming started back in 2019 when I got introduced to Java and OOP but curiosity hits me back in 2020 when I created a backdoor script that allows unauthorized user to execute code to the victim’s computer and that started my interest to learn other programming languages.
            </p>
            <p className='text-body-text font-body-text text-[20px]'>
              My interest in Web Development started during my Internship at PC4ME and It was first introduced to us by their Senior Developer and that time I never had any background in those technologies but I slowly learn and adapt to them despite I am still in the progress of developing my Capstone Project (Mobile Application) which uses other technologies as well.
            </p>
          </div>
        </div>

        <div className='flex justify-center w-full'>
          <img src={"images/profile.png"} />
        </div>
      </div>
    </ContainerWrapper>
  );
}