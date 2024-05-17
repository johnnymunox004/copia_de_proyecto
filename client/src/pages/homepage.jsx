import React from 'react';

function HomePage() {
  return (
    <div className="relative h-screen overflow-hidden bg-indigo-900 top-20">
      <img src="/v67.jpg" className="absolute object-cover w-full h-full"/>
      <div className="absolute inset-0 bg-black opacity-25">
      </div>
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container px-6 py-4 mx-auto md:px-12">
          <div className="items-center justify-between md:flex">
            <div className="flex items-center justify-between">
 

            </div>
          </div>
        </nav>
      </header>
      <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
          <span className="font-bold text-yellow-400 uppercase">
            Himalaya
          </span>
          <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
            Let yourself be carried
            <br/>
            by nature
          </h1>
          <a href="#" className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
            Discover
          </a>
        </div>
      </div>
    </div>
  );
}
export default HomePage;