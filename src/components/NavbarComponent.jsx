import { Icon } from "@iconify/react";
import { NAVIGATIONS } from "../utils/navigations";
import { downloadResume } from "./../utils/download";

export const NavbarComponent = () => {
  return (
    <div className="flex items-center text-primary-100  bg-background laptop:bg-[#1d2839b6] backdrop-blur-sm shadow-md backdrop-filter saturate-100 no-repeat px-phone laptop:px-100 desktop:px-150 py-16 gap-48 sticky top-0 -mb-[104px] font-body-text text-[20px]">

      <div className="font-[700] w-full laptop:w-[250px] uppercase ">Reno Angelo</div>

      <div className="flex justify-end laptop:w-full">
        <ul className="hidden tablet:flex justify-center items-center gap-[30px] text-[16px] font-[600] uppercase text-body-text ">
          {NAVIGATIONS.map((items, index) => (
            <li key={index}>
              {/* <Link to={items.path}>{items.name}</Link> */}
              <a href={items.path}>{items.name}</a>
            </li>
          ))}
        </ul>
        <Icon className="tablet:hidden" icon="solar:hamburger-menu-linear" color="#66CCFF" width="32" height="32" />
      </div>

      <button
        className="hidden laptop:flex items-center justify-center px-20 h-button-m  bg-primary-500 font-body-text text-primary-100 rounded-[30px] text-btn-m uppercase hover:bg-primary-800 hover:text-primary-500 w-[184px]"
        onClick={downloadResume}
      >
        Resume
      </button>
    </div>
  );
};
