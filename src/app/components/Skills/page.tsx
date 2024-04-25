import Sidebar from "../Sidebar/page";

export default function Skills() {
  return (
    <div id="Introduction">
      <div className="">
        <div className="">
          <Sidebar />
          <div className="grid lg:grid lg:grid-cols-9 lg:gap-x-8 ">
            <div className="lg:px-20 lg:py-5 xl:col-span-3">

              <h1 className="mt-8 text-3xl font-bold text-black md:text-4xl lg:text-5xl">
                My Skills
              </h1>
              
              <p className="mt-8 text-lg text-gray-700">
                <div id="DesignLayout" className="border">
                  <img src="/tailwindcss.png" className="rounded-md" alt="" />
                  <div className="min-h-min p-3">
                    <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                      #Layout
                    </p>
                    <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                      Tailwind Cascading Style Sheet
                    </p>
                  </div>
                </div>
              </p>

              <p className="mt-8 text-lg text-gray-700">
                <div id="Programming" className="border">
                  <img src="/tscript.png" className="rounded-md" alt="" />
                  <div className="min-h-min p-3">
                    <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                      #Programming
                    </p>
                    <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                      TypeScript
                    </p>
                  </div>
                </div>
              </p>

              <p className="mt-8 text-lg text-gray-700">
                <div id="Framework" className="border">
                  <img src="/nextjs.png" className="rounded-md" alt="" />
                  <div className="min-h-min p-3">
                    <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                      #Framework
                    </p>
                    <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                      NEXT.JS
                    </p>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
