import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LandingHeader } from "../landingpage/components";

function SignUp() {
  return (
    <div>
      <LandingHeader />

      <form>
        <div className=" mt-8  mx-[480px] flex flex-col items-center justify-center">
          {/* lock icon */}
          <div className=" border rounded-full bg-buttonBackground flex justify-center w-12 h-12 font-robotoRegular">
            {/* <FontAwesomeIcon
              className=" text-white mt-auto mb-auto text-xl items-center"
              icon="fa-solid fa-lock"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lock  text-white  mt-auto mb-auto text-xl items-center"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          {/* sign up and input */}
          <div className=" ">
            <h1 className=" text-center mt-2 mb-8 font-robotoRegular text-xl text-textColor">
              Sign up
            </h1>
            <div className=" flex flex-col md:flex-row gap-4">
              <input
                className=" border border-gray-400 w-full hover:ring-offset-black hover:outline-none hover:ring-0 hover:ring-white hover:ring-offset-1 focus:ring-offset-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 h-[60px] rounded-md text-left px-4"
                id="firstname"
                name="firstname"
                type="text"
                placeholder="First Name *"
              />
              <input
                className=" border border-gray-400 w-full hover:ring-offset-black hover:outline-none hover:ring-0 hover:ring-white hover:ring-offset-1  focus:ring-offset-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 h-[60px] rounded-md text-left px-4"
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Last Name *"
              />
            </div>
            <input
              className=" border border-gray-400 w-full mt-4 hover:ring-offset-black hover:outline-none hover:ring-0 hover:ring-white hover:ring-offset-1  focus:ring-offset-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 h-[60px] rounded-md text-left px-4"
              id="email"
              type="email"
              name="email"
              placeholder="Email Address *"
            />
            <input
              className=" border border-gray-400 w-full mt-4  focus:ring-offset-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 h-[60px] rounded-md text-left px-4 hover:ring-offset-black hover:outline-none hover:ring-0 hover:ring-white hover:ring-offset-1"
              id="password"
              type="password"
              name="password"
              placeholder="Password *"
            />
            <button className=" bg-buttonBackground rounded-md font-robotoMedium py-2 w-full mt-4  text-white">
              SIGN UP
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;