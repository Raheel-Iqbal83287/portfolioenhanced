import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="Dashboard" className="flex justify-center gap-3 rounded-xl mt-10">
      <div className="relative h-[400px] w-[300px] ">
        <img
          src="/photo.jpeg"
          alt="Me"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Introduction</h1>
          <Link href="../components/Introduction">
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View →
          </button>
          </Link>
        </div>
      </div>

      <div className="relative h-[400px] w-[300px] ">
        <img
          src="/aboutme.jpeg"
          alt="about"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">About Me</h1>
          <Link href="../components/About">
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View →
          </button>
          </Link>
        </div>
      </div>

      <div className="relative h-[400px] w-[300px] ">
        <img
          src="/skills.jpeg"
          alt="skills"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Skills</h1>
          <Link href="../components/Skills">
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View →
          </button>
          </Link>
        </div>
      </div>

      <div className="relative h-[400px] w-[300px] ">
        <img
          src="/projects.jpeg"
          alt="projects"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Projects</h1>
          <Link href="../components/Projects">
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View →
          </button>
          </Link>
        </div>
      </div>

      <div className="relative h-[400px] w-[300px] ">
        <img
          src="/contactus.jpeg"
          alt="contact"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Contact</h1>
          <Link href="../components/Contact">
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View →
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
