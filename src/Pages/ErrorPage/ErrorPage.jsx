import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
          <div className=" flex justify-center text-center mt-10 lg:mt-[10%]">
           <img src="https://i.postimg.cc/Bn1b8f4D/Word-Press-support-UK.webp"  className ="rounded-lg w-96" alt="" />
           
         </div>
        <div className="flex justify-center mt-5">
        <Link to="/"><button className="btn btn-outline flex justify-center bg-red-500 px-2 py-2 rounded-lg font-semibold text-white">Back to Home</button></Link>
        </div>
        </div>
     );
};

export default ErrorPage;