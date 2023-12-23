import { useState } from "react";
import AddTask from "./AddTask";
import Completed from "./Completed";
import Ongoing from "./Ongoing";
import ToDo from "./ToDo";
import UserProfile from "./UserProfile";

const Dashboard = () => {
  const [reload, setReload] = useState(false);
  const [complete, setComplete] = useState(false);
  const [ongoing, setOngoing] = useState(false);
  // const [tasks, setTasks] = useState([])
  // console.log(tasks);
  return (
    <div
      className=" my-6 lg:my-20 px-4 lg:px-10 bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] rounded-md "
    >
      <h1 className=" text-center font-semibold text-4xl py-6">
        Task<span className=" text-gray-100">Bar</span>
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
        <div
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className=" col-span-1 lg:col-span-2"
        >
          <AddTask setReload={setReload} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className=" col-span-1     "
        >
          <UserProfile />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className=" col-span-1    "
        >
          <ToDo setOngoing={setOngoing} reload={reload} setReload={setReload} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className=" col-span-1    "
        >
          <Ongoing
            setOngoing={setOngoing}
            ongoing={ongoing}
            setComplete={setComplete}
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className=" col-span-1    "
        >
          <Completed setComplete={setComplete} complete={complete} />
        </div>
      </div>
      <h1 className=" text-center text-gray-200 pb-2">
        Click over the title to see task details
      </h1>
    </div>
  );
};

export default Dashboard;
