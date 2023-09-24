import { NAVIGATIONS } from "../utils/navigations";
import { downloadResume } from "./../utils/download";

export const NavbarComponent = () => {
  return (
    <div className="flex items-center text-primary-100 bg-[hsla(0,0%,100%,.10)] px-150 py-20 gap-48 sticky top-0 -mb-[104px] font-body-text text-[20px]">
      <div className="font-[700] w-[250px] uppercase ">Reno Angelo</div>

      <div className="flex justify-end w-full">
        <ul className="flex justify-center items-center gap-[30px] text-body-text font-[600] ">
          {NAVIGATIONS.map((items, index) => (
            <li key={index}>
              {/* <Link to={items.path}>{items.name}</Link> */}
              <a href={items.path}>{items.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="flex items-center justify-center px-20 h-button  bg-primary-500 font-body-text text-primary-100 rounded-[30px] text-btn-lg uppercase hover:bg-primary-800 hover:text-primary-500 w-[184px]"
        onClick={downloadResume}
      >
        Resume
      </button>
    </div>
  );
};
