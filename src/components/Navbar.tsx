import { RiSearch2Line } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import profile from "../assets/images/profile.jpg";
import { CgProfile } from "react-icons/cg";
import { IoExitOutline, IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full flex items-center">
      <h2 className="text-4xl font-bold text-secondary">پنل مدیریت</h2>
      <div className="flex-1 flex justify-end items-center gap-6">
        <div className="search-form ">
          <form
            action=""
            className="flex text-secondary items-center gap-2 pr-2 rounded-xl overflow-hidden focus-within:ring-2 ring-secondary"
          >
            <button className="">
              <RiSearch2Line className="rotate-90" />
            </button>
            <input
              type="text"
              name=""
              id=""
              className="w-[240px] px-2 py-1 focus:outline-none"
              placeholder="جستجو کنید...."
            />
          </form>
        </div>
        <div className="group text-secondary relative">
          <GoBell className="cursor-pointer text-xl" />
          <ul className="bg-white hidden group-hover:flex flex-col divide-y absolute top-full left-0 w-[280px] shadow shadow-secondary/30 py-4 px-2">
            <li className="hover:bg-secondary/20 w-full">
              <a
                href=""
                className="font-semibold flex items-center w-full h-full p-2"
              >
                <h3 className="">بررسی تکالیف انجام شده</h3>
              </a>
            </li>
            <li className="hover:bg-secondary/20 w-full">
              <a
                href=""
                className="font-semibold flex items-center w-full h-full p-2"
              >
                <h3 className="">بررسی تکالیف انجام شده</h3>
              </a>
            </li>
          </ul>
        </div>
        <div className="group relative">
          <div className="w-10 h-10 overflow-hidden rounded-full cursor-pointer">
            <img src={profile} alt="" className="w-full h-auto" />
          </div>
          <ul className="bg-white hidden group-hover:flex flex-col divide-y absolute top-full left-0 w-[240px] shadow shadow-secondary/30 py-4 px-2">
            <li className="hover:bg-secondary/20 w-full">
              <a
                href=""
                className="font-semibold flex items-center w-full h-full p-2 gap-2"
              >
                <CgProfile />
                <span className="">پروفایل</span>
              </a>
            </li>
            <li className="hover:bg-secondary/20 w-full">
              <a
                href=""
                className="font-semibold flex items-center w-full h-full p-2 gap-2"
              >
                <IoSettingsOutline />
                <span className="">تنظیمات</span>
              </a>
            </li>
            <li className="hover:bg-secondary/20 w-full">
              <a
                href=""
                className="font-semibold flex items-center w-full h-full p-2 gap-2"
              >
                <IoExitOutline />
                <span className="">خروج</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
