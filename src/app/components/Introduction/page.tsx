import Sidebar from "../Sidebar/page";

export default function Introduction() {
  return (
    <div id="Introduction">
      <div className="w-full">
        <div className="relative w-full bg-white">
            <Sidebar />
          <div className="flex-row mx-auto max-w-8xl px-2 lg:grid lg:grid-cols-8 lg:gap-x-8 lg:px-8">
            <div className="lg:px-20 lg:py-5 xl:col-span-6">
              <div className="flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
                <div className="rounded-full bg-white">
                  <p className="text-sm font-medium">Front End Developer</p>
                </div>
                <p className="text-sm font-medium">Back End Developer</p>
              </div>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                Raheel Iqbal
              </h1>
              <p className="mt-8 text-lg text-gray-700">
                As a web developer, I seamlessly blend creativity with technical prowess, crafting digital landscapes that captivate and engage. My expertise extend beyond mere code; I possess an intuitive understanding of user experience, ensuring that every interface I create is not just functional, but delightful to navigate. My passion for innovation drive me to stay abreast of the latest technologies, constantly pushing boundaries to deliver cutting-edge solutions. With meticulous attention to detail, transform concepts into sleek, responsive websites, each line of code a testament to my dedication to excellence.
              </p>

              <p className="mt-8 text-lg text-gray-700">
                As a seasoned web developer, my proficiency transcends conventional boundaries, delving into the realms of advanced programming paradigms and intricate architectural designs. My mastery of language like typescript enables me to architect complex web applications with seamless functionality and unparalleled efficiency. My expertise in framework like Next JS empowers me to craft dynamic user interfaces that respond intuitively to user interactions. I effortlessly navigate the 
                intricacies of backend development, employing technologies such as Node.js to build robust server-side systems capable of
                handling immense traffic loads with grace.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
