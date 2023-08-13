import Image from "next/image";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <Image
        src={rating > i ? "/icons/Full_Star.svg" : "/icons/Empty_Star.svg"}
        alt=""
        width={24}
        height={24}
        className="mx-1"
      />
    );
  }

  return stars;
};

export default function ReviewCard({ review }) {
  return (
    <div className="w-full xl:min-w-[370px] h-fit border-2 border-[#111111CC] bg-[#FFFFFF] p-4">
      <div className="my-6 flex">
        <Rating rating={review?.rating} />
      </div>

      <div className="my-6 font-dm-sans text-black-80 font-light">
        {review?.review}
      </div>

      <div className="flex items-center my-6">
        <Image
          src={review?.customerAvatar}
          alt={review?.customerName}
          width={44}
          height={44}
        />

        <div className="ml-4">
          <div className="font-space text-black font-light">
            {review?.customerName}
          </div>
          <div className="text-sm font-inter text-black opacity-[0.7] font-light">
            {review?.customerDesignation}
          </div>
        </div>
      </div>
    </div>
  );
}
