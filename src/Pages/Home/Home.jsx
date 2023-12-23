import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import Dashboard from "../../Components/Dashboard/Dashboard";
import { AuthContext } from "../../Provider/AuthProvider";
import People from "../../Components/People/People";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" px-0 lg:px-20 py-0 lg:py-10">
      <Banner />
      {user && <Dashboard />}
      <People />
    </div>
  );
};

export default Home;
