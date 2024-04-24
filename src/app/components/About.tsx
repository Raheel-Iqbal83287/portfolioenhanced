export default function About() {
  return (
    <div id="About">
      <div className="relative w-full">
        <nav className="z-50">
          <div className="w-full bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
              <div className="ml-2 lg:hidden">
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
                  className="h-6 w-6 cursor-pointer"
                >
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
          <div className="relative mx-auto max-w-2xl py-24">
            <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
              <svg
                className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                  fill-opacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                ></path>
                <defs>
                  <linearGradient
                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9089FC"></stop>
                    <stop offset="1" stop-color="#FF80B5"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About Me
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Born and raised in the vibrant metropolis of Karachi, I possess
                a rich cultural heritage intertwined with the bustling energy of
                city lights. Educated in the esteemed institutions of Karachi, I
                have acquired a solid foundation of knowledge, culminating in
                impressive qualifications reflective of my dedication and
                intellect. Beyond academia, my true passion lies in leveraging
                technology to drive positive change, fueling my aspirations to
                contribute meaningfully to society. In my spare time, I immerse
                myself in a diverse array of hobbies, ranging from exploring the
                culinary delights of Karachi bustling streets to delving into
                the intricacies of life. My interests span a wide spectrum,
                music, reading, travelling, programming, astronomy, philosophy,
                technology, physics, space and so on, reflecting a keen
                curiosity and a drive to make a difference in the world around
                me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
