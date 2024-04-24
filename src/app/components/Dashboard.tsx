export default function Dashboard() {
  return (
    <div id = "Dashboard" className="flex justify-center gap-3 rounded-xl">
   
       
      <div className="relative h-[400px] w-[300px] ">
        <img
          src="/PHOTO.jpg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Introduction</h1>

          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View →
          </button>
        </div>
      </div>

      <div className="relative h-[400px] w-[300px] ">
        <img
          src="/PHOTO.jpg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">About Me</h1>

          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View →
          </button>
        </div>
      </div>

      <div className="relative h-[400px] w-[300px] ">
        <img
          src="/PHOTO.jpg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Skills</h1>

          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View →
          </button>
        </div>
      </div>

      <div className="relative h-[400px] w-[300px] ">
        <img
          src="/PHOTO.jpg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Projects</h1>

          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View →
          </button>
        </div>
      </div>

      <div className="relative h-[400px] w-[300px] ">
        <img
          src="/PHOTO.jpg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Contact</h1>

          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View →
          </button>
        </div>
      </div>
    </div>
  );
}
