import { IoMdHome } from "react-icons/io";
import { SiGotomeeting } from "react-icons/si";
import { AiFillProduct } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import {
  RiCustomerService2Line,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar bg-light w-1/6 flex flex-col items-center space-y-10 px-8">
      <div className="logo pt-10 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-secondary">ساینا رایان</h1>
        <span className="text-slate-700">پنل مدیریت</span>
      </div>
      <div className="w-full">
        <ul className="grid gap-4">
          <li className="bg-primary hover:bg-secondary rounded-xl shadow shadow-primary">
            <a
              href="#"
              className="text-white flex gap-2 items-center px-2 py-1.5"
            >
              <IoMdHome className="text-lg" />
              پنل مدیریت
            </a>
          </li>
          <li className="rounded-xl group hover:bg-primary hover:shadow hover:shadow-primary">
            <a
              href="#"
              className="text-secondary group-hover:text-white flex gap-2 items-center px-2 py-1.5"
            >
              <AiFillProduct className="text-lg" />
              محصولات
            </a>
          </li>
          <li className="rounded-xl group hover:bg-primary hover:shadow hover:shadow-primary">
            <a
              href="#"
              className="text-secondary group-hover:text-white flex gap-2 items-center px-2 py-1.5"
            >
              <GrServices className="text-lg" />
              خدمات
            </a>
          </li>
          <li className="rounded-xl group hover:bg-primary hover:shadow hover:shadow-primary">
            <a
              href="#"
              className="text-secondary group-hover:text-white flex gap-2 items-center px-2 py-1.5"
            >
              <RiMoneyDollarCircleLine className="text-lg" />
              فروش روزانه
            </a>
          </li>
          <li className="rounded-xl group hover:bg-primary hover:shadow hover:shadow-primary">
            <a
              href="#"
              className="text-secondary group-hover:text-white flex gap-2 items-center px-2 py-1.5"
            >
              <SiGotomeeting className="text-lg" />
              نمایندگی‌ها
            </a>
          </li>
          <li className="rounded-xl group hover:bg-primary hover:shadow hover:shadow-primary">
            <a
              href="#"
              className="text-secondary group-hover:text-white flex gap-2 items-center px-2 py-1.5"
            >
              <MdOutlineLocalOffer className="text-lg" />
              جشنواره‌ها
            </a>
          </li>
          <li className="rounded-xl group hover:bg-primary hover:shadow hover:shadow-primary">
            <a
              href="#"
              className="text-secondary group-hover:text-white flex gap-2 items-center px-2 py-1.5"
            >
              <RiCustomerService2Line className="text-lg" />
              مشتریان
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
