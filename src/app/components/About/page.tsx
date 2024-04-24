import Sidebar from "../Sidebar/page";

export default function About() {
  return (
    <div id="about">
      <div className="w-full">
        <div className="relative w-full bg-white">
          <div className="flex-row mx-auto max-w-8xl px-2 lg:grid lg:grid-cols-8 lg:gap-x-8 lg:px-8">
            <Sidebar />
            <div className="lg:px-20 lg:py-5 xl:col-span-6">
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                About Me
              </h1>
              <p className="mt-8 text-lg text-gray-700">
                Born and raised in the vibrant metropolis of Karachi, I possess
                a rich cultural heritage intertwined with the bustling energy of
                city lights. Educated in the esteemed institutions of Karachi, I
                have acquired a solid foundation of knowledge, culminating in
                impressive qualifications reflective of my dedication and
                intellect. Beyond academia, my true passion lies in leveraging
                technology to drive positive change, fueling my aspirations to
                contribute meaningfully to society. In my spare time, immerse
                myself in a diverse array of hobbies, ranging from exploring the
                culinary delights of Karachi bustling streets to delving into
                the intricacies of life. My interests span a wide spectrum,
                music, reading, travelling, programming, astronomy, philosophy,
                technology, physics, space and so on, reflecting a keen
                curiosity and a drive to make a difference in the world around
                me.
              </p>

              <div className="">
                <img className="" src="/photo.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
