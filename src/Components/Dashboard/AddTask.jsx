/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import Select from "react-select";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const AddTask = ({setReload}) => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const [option, setOption] = useState();
  const axiosPublic = useAxiosPublic();
  const options = [
    { value: "Low", label: "low" },
    { value: "Moderate", label: "moderate" },
    { value: "High", label: "high" },
  ];
  const handelChange = (e) => {
    setOption(e.value);
  };
  // console.log(user.email);
  const onSubmit = (data) => {
    const toastId = toast.loading("Adding....");
    data.priority = option;
    data.status = "todo";
    data.taskCreator = user?.email;
    // console.log(data);
    axiosPublic.post("/todo", data).then((res) => {
      // console.log(res.data)
      if (res.data.insertedId) {
        toast.success('Added...', {id: toastId});
        setReload(true)
      }
    });
  };

  return (
    <div className="rounded-lg border-2 shadow-2xl shadow-red-500 glass px-10 py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-6 mt-4 ">
          <div className="col-span-3 md:col-span-1">
            <label className="text-gray-100 text-base md:text-lg font-medium ">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-white  rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div className=" col-span-2 md:col-span-1">
            <label className="text-gray-100 text-base md:text-lg font-medium ">Deadline</label>
            <input
              type="date"
              {...register("deadline", { required: true })}
              className="block w-full min-h-10 px-4 py-2 mt-2 text-gray-100 bg-transparent border border-white  rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-100  text-sm md:text-lg font-medium ">
              Priority
            </label>
            <Select
              onChange={handelChange}
              options={options}
              className="mt-3"
            />
          </div>
        </div>
        <div className=" flex justify-between items-end gap-5">
          <div className=" mt-6 flex-1">
            <label className="text-gray-100 text-base md:text-lg font-medium ">
              Post Description
            </label>
            <textarea
              type="text"
              {...register("postDescription", { required: true })}
              className="block w-full h-16 px-4 py-2 mt-2 text-gray-100 bg-transparent border border-white  rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-[#FF7594] text-xl transition-colors duration-300 transform h-16 bg-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
