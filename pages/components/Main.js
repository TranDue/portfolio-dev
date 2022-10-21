/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[750px] w-full h-full m-auto p-2 flex justify-center items-center ">
        <div>
          <h1 className="text-5xl">Hi, I'm Tran Due</h1>
          <div>
            <h2 className="py-3 text-gray-500 uppercase ">
              <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                Front end developer{" "}
              </span>

              <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
            </h2>
            {/* <p className="py-4 m-auto tracking-widest text-gray-400 uppercase">
            Learn More About Me!

                         </p> */}
            <hr className="py-1" />
            <div className="flex items-center justify-between max-w-[330px] m-auto p-2">
              <hr />

              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-white hover:scale-125">
                <a
                  href={process.env.LINKEDIN_ACCOUNT}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-white hover:scale-125">
                <a
                  href={process.env.GITHUB_ACCOUNT}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-white hover:scale-125">
                <a href={process.env.GMAIL_ACCOUNT}>
                  <AiOutlineMail />
                </a>
              </div>
              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-white hover:scale-125">
                <a
                  href={process.env.FB_ACCOUNT}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TfiFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
