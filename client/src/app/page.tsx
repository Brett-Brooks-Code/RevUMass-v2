'use client';

export default function Home() {

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
      <div className="bg-umass-red text-white top-1/20 left-5/100 w-9/10 min-w-50 h-15 rounded-full absolute drop-shadow-lg/50 flex gap-2">
        <button className="text-white right-1/100 w-25 h-15 px-2" onClick={handleMenuClick} >ham</button>
        <button className="text-white w-5/5 h-15 px-2" onClick={handleSearchClick}>SEARCH</button>
        <button className="text-white w-25 h-15 px-2" onClick={handlePfpClick}>PFP</button>
      </div>
      {/* add button */} 
      <button className="bg-umass-red text-4xl text-white bottom-1/30 right-5/100 w-15 h-15 rounded-full absolute drop-shadow-lg/50" onClick={handleAddClick}>
        +
      </button>
      {/* add button */} 
      <button>

      </button>
    </div>
  );
}
