'use client';
import FoodCard from "./components/foodCard";
import data from "@/app/test.json";

export default  function Home() {

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
      {/* Homepage */}
      <div className="bg-umass-black h-screen text-white">
        <div className="relative w-3/5 left-1/5 top-2/20 bottom-18/20 h-1/10 flex justify-between">
          <button id="logo">LOGO</button>
          <button id="hamburger">HAM</button>
        </div>
        <div className="relative w-3/5 left-1/5 top-3/20 h-1/10">
          <div className="text-8xl shine-text">RevUMass</div>
          <div className="text-umass-bright-red">(it's pronounced review-mass)</div>
        </div>
        <div className="relative w-3/5 left-1/5 top-5/20 h-1/10 text-4xl text-neutral-gray shine-text">UMass Amherst's place to discover and share opinions regarding on-campus life.</div>
        <form className="relative w-3/5 left-1/5 top-5/20 h-1/10 text-4xl text-neutral-gray shine-text">   
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search Mockups, Logos..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-grey-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Search</button>
            </div>
        </form>
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
                reviews={item.reviews}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
