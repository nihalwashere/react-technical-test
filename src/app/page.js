import ReviewCard from "@/components/ReviewCard";
import { Reviews } from "../utils/constants";

export default function ReviewPage() {
  return (
    <main className="w-full min-h-screen py-12 px-8 lg:px-4 flex justify-center items-center relative">
      <div className="accent absolute top-0 right-0 w-[150px] h-[400px] z-[-10]" />
      <div className="accent left absolute bottom-0 left-[-250px] w-[400px] h-[400px] z-[-10]" />

      <div className="w-11/12 lg:w-10/12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {Reviews.map((review) => (
            <ReviewCard key={review?.id} review={review} />
          ))}
        </div>
      </div>
    </main>
  );
}
