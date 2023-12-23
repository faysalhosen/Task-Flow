import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="rounded-lg border-2 shadow-2xl shadow-red-500 glass h-full my-2">
      <div className=" flex justify-center items-center py-4">
      <div className="avatar">
        <div className="w-16 md:w-20 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      </div>
      <h1 className=" text-gray-100 text-2xl lg:text-2xl text-center mb-2">{user?.displayName}</h1>
      <h1 className=" text-gray-100 text-base md:text-xl text-center">{user?.email}</h1>
    </div>
  );
};

export default UserProfile;
