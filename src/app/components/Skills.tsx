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
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1469&amp;q=80"
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
              src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
              className="aspect-video w-full rounded-md"
              alt="" />
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
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
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
              src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
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
              src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
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
              src="https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
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
              src="https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1476&amp;q=80"
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
              src="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
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
              src="https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
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
