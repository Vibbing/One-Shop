import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


export default function Layout(){
    return(
        <div className="flex">
        <div className="w-[20%] h-screen p-10 flex flex-col justify-start items-center shadow-2xl">
          <Navbar />
        </div>
        <div className="w-[85%] h-screen p-10  flex justify-evenly gap-10 flex-wrap overflow-x-auto overflow-y-auto">
          <Outlet/>
        </div>
      </div>
    )
}