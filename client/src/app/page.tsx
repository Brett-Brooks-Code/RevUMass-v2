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
      {/* appbar */}
      <div className="bg-umass-red text-white top-1/20 left-5/100 right-5/100 w-9/10 min-w-50 h-15 rounded-full fixed drop-shadow-lg/50 flex gap-2 z-1">
        <button className="text-white right-1/100 w-25 h-15" onClick={handleMenuClick} >ham</button>
        <button className="text-white w-5/5 h-15" onClick={handleSearchClick}>SEARCH</button>
        <button className="text-white w-25 h-15" onClick={handlePfpClick}>PFP</button>
      </div>
      {/* add button */} 
      <button className="bg-umass-red text-4xl text-white bottom-1/30 right-5/100 w-15 h-15 rounded-full fixed drop-shadow-lg/50 z-1" onClick={handleAddClick}>
        +
      </button>
      {/* tile component container*/} 
      <div className="top-30 left-1/10 right-1/10 w-8/10 min-w-45 h-dvh absolute z-0 flex flex-wrap gap-2 p-2">
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
  );
}
