/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className="w-full p-2 mt-10 lg:h-screen">
      <div className="max-w-[750px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-10 tracking-widest uppercase animate-pulse">
          Skills
        </h2>
        <hr />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/css.png?raw=true"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/html.png?raw=true"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/javascript.png?raw=true"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/github1.png?raw=true"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="
                  https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/react.png?raw=true"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/tailwind.png?raw=true"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Ant design</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
