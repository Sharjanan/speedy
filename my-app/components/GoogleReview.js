import React, { useState, useEffect } from "react";
import { Typography, Card } from "@material-tailwind/react";

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const PLACE_ID = process.env.REACT_APP_PLACE_ID;


export function GoogleReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();

        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews.slice(0, 3)); // Fetch top 3 reviews
        }
      } catch (error) {
        console.error("⚠️ Error fetching Google Reviews:", error);
      }
    };

    fetchGoogleReviews();
  }, []);

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Typography variant="h6" className="text-lg font-medium text-gray-600">
            Real Customer Reviews from Google
          </Typography>
          <Typography variant="h2" className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            What Our Clients Say
          </Typography>
        </div>

        {/* Reviews Grid */}
        <div className="relative mt-10 md:mt-24">
          <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <Card key={index} className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex items-center mb-4">
                      {/* Star Ratings */}
                      {Array(Math.round(review.rating))
                        .fill()
                        .map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                    </div>

                    {/* Review Text */}
                    <Typography variant="paragraph" className="text-lg leading-relaxed text-gray-900">
                      “{review.text}”
                    </Typography>

                    {/* Reviewer Info */}
                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={review.profile_photo_url || "https://via.placeholder.com/100"} alt={review.author_name} />
                      <div className="ml-4">
                        <Typography variant="h6" className="text-base font-bold text-gray-900">
                          {review.author_name}
                        </Typography>
                        <Typography variant="small" className="mt-0.5 text-sm text-gray-600">
                          {review.relative_time_description}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <Typography variant="h6" className="text-center text-gray-500 mt-8">
                Loading reviews...
              </Typography>
            )}
          </div>
        </div>

        {/* Link to More Reviews */}
        <div className="mt-8 text-center md:mt-16">
          <a
            href={`https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 hover:text-gray-600"
          >
            Check All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
