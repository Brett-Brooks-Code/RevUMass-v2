"use client"; // if you're using it in an app router client component
import Image from "next/image";

interface FoodCardProps {
  imageSrc: string;
  foodType: string;
  foodName: string;
  stars: number;
  reviews: any[];
}

const FoodCard = ({ imageSrc, foodType, foodName, stars, reviews } : FoodCardProps) => {
  function onButtonClick() {
    console.log(foodName);
  }

  return (
    <button className="bg-orange-50 text-black w-full h-80 flex flex-col py-3 px-5 items-center rounded-md drop-shadow-lg/50" onClick={onButtonClick}>
      <div className="text-sm">{foodType}</div>
      <div className="text-xl font-semibold">{foodName}</div>

      <div className="my-2">
        <Image
          src={imageSrc}
          alt={foodName}
          width={96}
          height={96}
          className="rounded-full object-cover"
        />
      </div>

      <div className="text-xl">{stars}</div>

      {reviews.map((item, index) => (
        <div key={index} className="text-sm text-center">
          {item.user}: {item.comment}. {item.rating}/5 
        </div>
      ))}
    </button>
  );
};

export default FoodCard;