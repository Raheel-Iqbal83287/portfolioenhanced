

export default function Introduction() {
  return (
    <div id="Introduction">
      <div className="w-full">
        <div className="relative w-full bg-white">
          <div className="mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
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
              As a web developer, I seamlessly blend creativity with technical prowess, crafting digital landscapes that captivate and engage. My expertise extend beyond mere code; I possess an intuitive understanding of user experience, ensuring that every interface I create is not just functional, but delightful to navigate. My passion for innovation drive me to stay abreast of the latest technologies, constantly pushing boundaries to deliver cutting-edge solutions. With meticulous attention to detail, I transform concepts into sleek, responsive websites, each line of code a testament to my dedication to excellence. 
              </p>

              <p className="mt-8 text-lg text-gray-700">
              As a seasoned web developer, my proficiency transcends conventional boundaries, delving into the realms of advanced programming paradigms and intricate architectural designs. My mastery of language like typescript enables me to architect complex web applications with seamless functionality and unparalleled efficiency. My expertise in framework like Next JS.js empowers me to craft dynamic user interfaces that respond intuitively to user interactions. I effortlessly navigate the intricacies of backend development, employing technologies such as Node.js to build robust server-side systems capable of handling immense traffic loads with grace.
              </p>
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
              <img
                className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                src="/PHOTO.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
