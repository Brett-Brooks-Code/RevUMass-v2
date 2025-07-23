export default function Home() {
  return (
    <div>
      <div className="bg-umass-red text-white top-1/20 left-5/100 w-9/10 min-w-50 h-15 rounded-full absolute drop-shadow-lg/50 flex gap-2">
        <button className="text-white right-1/100 w-25 h-15 px-2">ham</button>
        <button className="text-white w-5/5 h-15 px-2">SEARCH</button>
        <button className="text-white w-25 h-15 px-2">PFP</button>
      </div>
      <button className="bg-umass-red text-4xl text-white bottom-1/30 right-5/100 w-15 h-15 rounded-full absolute drop-shadow-lg/50">
        +
      </button>
    </div>
  );
}
