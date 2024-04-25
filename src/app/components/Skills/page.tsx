import Sidebar from "../Sidebar/page";

export default function Skills() {
  return (
    <div id="Skills">
      <div className="w-full">
        <div className="max-w-6xl">
          <Sidebar />
          <div className="space-y-8 pb-10 md:pt-20">
            <p className="text-3xl font-bold text-gray-900 md:text-5xl">
              My Skills
            </p>
          </div>
          <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">          
          

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
          </div>
        </div>
      </div>
    </div>
  );
}
