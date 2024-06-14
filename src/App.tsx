import Sidebar from "./components/Sidebar.tsx";
import Navbar from "./components/Navbar.tsx";
import { BiWallet } from "react-icons/bi";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { HiOutlineBanknotes } from "react-icons/hi2";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 px-8 pt-10 flex flex-col gap-8">
        <Navbar />

        <div className="w-full grid grid-cols-3 gap-4">
          <div className="shadow-2xl shadow-slate-300 border border-gray-100 rounded-2xl p-4 col-span-1 flex gap-2">
            <div className="text-3xl w-14 h-14 bg-green-200 text-green-600 rounded-2xl grid place-items-center">
              <HiOutlineBanknotes />
            </div>
            <div className="ml-auto flex flex-col gap-2">
              <span className="">درامد‌ها</span>
              <div className="flex items-end gap-1">
                <h3 className="font-bold">89/267/130</h3>
                <span className="text-[0.5rem]">تومان</span>
              </div>
            </div>
            <p className="flex items-center gap-1 text-[12px]">
              نسبت به ماه قبل<span className="text-green-400">17%</span>
              <IoMdArrowUp className="text-green-400" />
            </p>
          </div>
          <div className="shadow-2xl shadow-slate-300 border border-gray-100 rounded-2xl p-4 col-span-1 flex gap-2">
            <div className="text-3xl w-14 h-14 bg-green-200 text-green-600 rounded-2xl grid place-items-center">
              <BiWallet />
            </div>
            <div className="ml-auto flex flex-col gap-2">
              <span className="">هزینه‌ها</span>
              <div className="flex items-end gap-1">
                <h3 className="font-bold">21/815/720</h3>
                <span className="text-[0.5rem]">تومان</span>
              </div>
            </div>
            <p className="flex items-center gap-1 text-[12px]">
              نسبت به ماه قبل<span className="text-green-400">3%</span>
              <IoMdArrowDown className="text-green-400" />
            </p>
          </div>
          <div className="shadow-2xl shadow-slate-300 border border-gray-100 rounded-2xl p-4 col-span-1 flex gap-2">
            <div className="text-3xl w-14 h-14 bg-green-200 text-green-600 rounded-2xl grid place-items-center">
              <BiWallet />
            </div>
            <div className="ml-auto flex flex-col gap-2">
              <span className="">هزینه‌ها</span>
              <div className="flex items-end gap-1">
                <h3 className="font-bold">21/815/720</h3>
                <span className="text-[0.5rem]">تومان</span>
              </div>
            </div>
            <p className="flex items-center gap-1 text-[12px]">
              نسبت به ماه قبل<span className="text-green-400">3%</span>
              <IoMdArrowDown className="text-green-400" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
