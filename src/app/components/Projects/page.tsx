import Link from "next/link";
import Sidebar from "../Sidebar/page";

export default function Projects() {
  return (
    <div id="Introduction">
      <div className="w-full">
        <div className="relative w-full bg-white">
          <Sidebar />
          <div className="flex-row mx-auto max-w-8xl px-2 lg:grid lg:grid-cols-8 lg:gap-x-8 lg:px-8">
            <div className="lg:px-20 lg:py-5 xl:col-span-6">
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                My Projects
              </h1>
              <div className="mt-8 text-lg text-gray-700">
                <div className="w-[300px] rounded-md border">
                  <img
                    src="/Proj1screenshot.png"
                    alt="Laptop"
                    className="rounded-t-md object-cover"
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                      AI Website  {" "}
                      <Link href="https://allaboutaidomain.vercel.app/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                      </Link>
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      A simple website regarding information relating to
                      Artificial Intelligence.
                    </p>
                    <div className="mt-4">
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #AI
                      </span>
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #NextJS
                      </span>
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #Tailwind CSS
                      </span>
                    </div>
                    <Link href="https://allaboutaidomain.vercel.app/" target="_blank">
                    <button
                      type="button"
                      className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Visit
                    </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-lg text-gray-700">
                <div className="w-[300px] rounded-md border">
                  <img
                    src="/Proj2screenshot.png"
                    alt="Laptop"
                    className="w-full rounded-t-md object-cover"
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                      Personal Website  {" "}
                      <Link href="https://personalwebsite-my.vercel.app/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                      </Link>
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      A simple personal website regarding information about
                      myself.
                    </p>
                    <div className="mt-4">
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #Personal
                      </span>
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #NextJS
                      </span>
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #Tailwind CSS
                      </span>
                    </div>
                    <Link href="https://personalwebsite-my.vercel.app/" target="_blank">
                    <button
                      type="button"
                      className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Visit
                    </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-lg text-gray-700">
                <div className="w-[300px] rounded-md border">
                  <img
                    src="/Proj3screenshot.png"
                    alt="Laptop"
                    className="w-full rounded-t-md object-cover"
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                      Portfolio Website  {" "}
                      <Link href="https://portfoliowebsite-my.vercel.app/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                      </Link>
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      A Portfolio website showcasing my skills, projects.
                    </p>
                    <div className="mt-4">
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #Portfolio
                      </span>
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #NextJS
                      </span>
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #Tailwind CSS
                      </span>
                    </div>
                    <Link href="https://portfoliowebsite-my.vercel.app/" target="_blank">
                    <button
                      type="button"
                      className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Visit
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
