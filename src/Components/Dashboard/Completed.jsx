/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Completed = ({ complete, setComplete }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks", "complete"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/todo?status=complete&email=${user.email}`
      );
      return res.data;
    },
  });
  console.log(complete);
  if (complete) {
    refetch();
    setComplete(false);
  }

  const handelDelete = (id) => {
    const toastId = toast.loading("Deleting....");
    axiosPublic.delete(`/todo/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success("Deleted", { id: toastId });
        refetch();
      } else {
        toast.error("Something Wrong", { id: toastId });
      }
    });
  };
  return (
    <div className=" text-gray-100  mb-10">
      <h1 className=" text-2xl text-gray-100 font-semibold mb-4">Completed</h1>
      <div className="overflow-x-auto max-h-60 rounded-lg border-2 shadow-2xl shadow-red-500 glass">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className=" text-gray-200 text-lg">
              <th>Title</th>
              <th>Priority</th>
              <th>Deadline</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tasks.map((task) => (
              <tr key={task._id}>
                <td
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className=" max-w-32 overflow-x-scroll cursor-pointer"
                >
                  {task.title}
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box text-gray-100 glass text-lg ">
                      <h3 className="font-bold text-3xl">{task.title}</h3>
                      <p className="pt-4">Description:{task.postDescription}</p>
                      <p className="py-1">Deadline:{task.deadline}</p>
                      <p className="">Priority:{task.priority}</p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
                <td>{task.priority}</td>
                <td>{task.deadline}</td>
                <td
                  onClick={() => handelDelete(task._id)}
                  className=" cursor-pointer hover:text-teal-500"
                >
                  x
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Completed;
