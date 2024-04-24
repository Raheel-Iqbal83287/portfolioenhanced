import Sidebar from "../Sidebar/page";

export default function Skills() {
  return (
    <div id="Skills">
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            My Skills
          </p>
        </div>
        <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
          <div className="flex w-full items-end border-b border-gray-300">
            <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
              Structuring
            </div>
            <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
              Design/Layout
            </div>
            <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
              Programming
            </div>
            <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
              UI/UX
            </div>
            <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
              Frameworks
            </div>
          </div>
        </div>
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          <div id="Structuring" className="border">
            <img
              src="/html.png"
              className="aspect-video w-full rounded-md"
              alt=""
            />
            <div className="min-h-min p-3">
              <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                #Structuring
              </p>
              <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                Hyper Text Markup Language
              </p>
            </div>
          </div>

          <div id="DesignLayout" className="border">
            <img
              src="/css.png"
              className="aspect-video w-full rounded-md"
              alt=""
            />
            <div className="min-h-min p-3">
              <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                #Design
              </p>
              <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                Cascading Style Sheet
              </p>
            </div>
          </div>

          <div id="DesignLayout" className="border">
            <img
              src="/tailwindcss.png"
              className="aspect-video w-full rounded-md"
              alt=""
            />
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
            <img
              src="/jscript.jpeg"
              className="aspect-video w-full rounded-md"
              alt=""
            />
            <div className="min-h-min p-3">
              <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                #Programming
              </p>
              <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                JavaScript
              </p>
            </div>
          </div>
          <div id="Programming" className="border">
            <img
              src="/tscript.png"
              className="aspect-video w-full rounded-md"
              alt=""
            />
            <div className="min-h-min p-3">
              <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                #Programming
              </p>
              <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                TypeScript
              </p>
            </div>
          </div>
          <div id="UIUX" className="border">
            <img
              src="/shadcnui.png"
              className="aspect-video w-full rounded-md"
              alt=""
            />
            <div className="min-h-min p-3">
              <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                #UI/UX
              </p>
              <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                Shadcn/UI
              </p>
            </div>
          </div>
          <div id="UIUX" className="border">
            <img
              src="/devui.png"
              className="aspect-video w-full rounded-md"
              alt=""
            />
            <div className="min-h-min p-3">
              <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                #UI/UX
              </p>
              <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                DevUI
              </p>
            </div>
          </div>
          <div id="Framework" className="border">
            <img
              src="/react.png"
              className="aspect-video w-full rounded-md"
              alt=""
            />
            <div className="min-h-min p-3">
              <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                #Framework
              </p>
              <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                React
              </p>
            </div>
          </div>
          <div id="Framework" className="border">
            <img
              src="/nextjs.png"
              className="aspect-video w-full rounded-md"
              alt=""
            />
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
  );
}
