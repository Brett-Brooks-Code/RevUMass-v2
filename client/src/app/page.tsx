'use client';
import FoodCard from "./components/foodCard";
import data from "@/app/test.json";
import useScrollProgress from "@/hooks/scrollingProgress";

export default  function Home() {

  const [screensScrolled, progress] = useScrollProgress();

  function handleSearchClick() {
    console.log('search')
  }

  function handleMenuClick() {
    console.log('Menu')
  }

  function handlePfpClick() {
    console.log('pfp')
  }

  function handleAddClick() {
    console.log('add')
  }

  return (
    <div>
      <div className="text-white fixed left-1/2 top-85/100 text-8xl animate-bounce z-1000" style={{ opacity: `${Math.max(0, -(screensScrolled / 0.1) + 1)}` }}>
        ↓
      </div>
      {/* Homepage */}
      <div className="bg-umass-black h-screen text-white">
        <div className="relative w-3/5 left-1/5 top-2/20 bottom-18/20 h-1/10 flex justify-between">
          <button id="logo">LOGO</button>
          <button id="hamburger">HAM</button>
        </div>
        <div className="relative w-3/5 left-1/5 top-3/20 h-1/10">
          <div className="text-8xl shine-text">RevUMass</div>
          <div className="text-umass-bright-red">(it&apos;s pronounced review-mass)</div>
        </div>
        <div className="relative w-3/5 left-1/5 top-5/20 h-1/10 text-4xl text-neutral-gray shine-text">UMass Amherst&apos;s place to discover and share opinions regarding on-campus life.</div>
        <form className="relative w-3/5 left-1/5 top-5/20 h-1/10 text-4xl text-neutral-gray shine-text">   
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search Food, Dorms, Study Spots..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-grey-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Search</button>
            </div>
        </form>
        <button className="Btn relative w-3/5 left-1/5 top-5/20 h-1/10">
          <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
          <div className="text">Write a Review</div>
        </button>



      </div>
      <div className="h-screen">
        {/* appbar */}
        <div className="relative bg-umass-red text-white top-1/20 left-5/100 right-5/100 w-9/10 min-w-50 h-15 rounded-full fixed drop-shadow-lg/50 flex gap-2 z-1">
          <button className="text-white right-1/100 w-25 h-15" onClick={handleMenuClick} >ham</button>
          <button className="text-white w-5/5 h-15" onClick={handleSearchClick}>SEARCH</button>
          <button className="text-white w-25 h-15" onClick={handlePfpClick}>PFP</button>
        </div>
        {/* add button */} 
        <button className="Btn bg-umass-red text-4xl text-white bottom-1/30 right-5/100 w-15 h-15 rounded-full fixed drop-shadow-lg/50 z-1" onClick={handleAddClick}>
          +
        </button>
        {/* tile component container*/} 
        <div className="relative top-30 left-1/10 w-8/10 min-w-45 absolute z-0 flex flex-wrap justify-center gap-4 p-3">
            {data.map((item, index) =>(
              <FoodCard
                imageSrc={item.imSrc}
                foodType={item.type}
                foodName={item.name}
                stars={item.stars}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
