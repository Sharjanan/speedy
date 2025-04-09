import React, { useState, useEffect } from "react";
import { Rating, Typography, Card } from "@material-tailwind/react";

interface GoogleReview {
  rating: number;
  userRatingCount: number;
  relativePublishTimeDescription: string;
  text: {
    text: string;
    languageCode: string;
  };
  originalText: {
    text: string;
    languageCode: string;
  };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
}

const GOOGLE_API_KEY: string =
  process.env.GOOGLE_API_KEY || "AIzaSyBnpDw8PX6uMBx7OXuWzrrQtTrDOrAoxXg";
const PLACE_ID: string = process.env.PLACE_ID || "ChIJRXZ1iUorZ08RzKa-BJrxlLo";

export function GoogleReview() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [rated, setRated] = useState(5);
  const [userRatingCount, setUserRatingCount] = useState<number | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!GOOGLE_API_KEY || !PLACE_ID) {
      console.error("❌ Missing Google API Key or Place ID!");
      return;
    }

    const fetchGoogleReviews = async () => {
      try {
        const response = await fetch(
          `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=id,displayName,rating,userRatingCount,reviews&key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();
        console.log("✅ Google Reviews API Response:", data);
        if (data.userRatingCount) {
          setUserRatingCount(data.userRatingCount);
        }

        if (data.reviews) {
          const formattedReviews: GoogleReview[] = data.reviews
            .map((review: any) => ({
              name: review.name,
              relativePublishTimeDescription:
                review.relativePublishTimeDescription,
              rating: review.rating,
              text: {
                text: review.text.text,
              },
              authorAttribution: {
                displayName: review.authorAttribution.displayName,
                uri: review.authorAttribution.uri,
                photoUri: review.authorAttribution.photoUri,
              },
              googleMapsUri: review.googleMapsUri,
            }))
            // ✅ Keep only reviews with 5 stars
            .filter((review) => review.rating === 5);
          setReviews(formattedReviews);
        }
      } catch (error) {
        console.error("⚠️ Error fetching Google Reviews:", error);
      }
    };

    fetchGoogleReviews();
  }, [GOOGLE_API_KEY, PLACE_ID]);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollInterval = setInterval(() => {
      if (!scrollContainer) return;

      const scrollAmount = 400; // Adjust based on card width
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      // Reset to start if at end
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(scrollInterval);
  }, []);
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Typography
            variant="h6"
            className="text-lg font-medium text-gray-600"
            placeholder="" // Dummy value to satisfy TS
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Real Customer Reviews from Google
          </Typography>
          <Typography
            variant="h2"
            className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl"
            placeholder="" // Dummy value to satisfy TS
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            What Our Clients Say
          </Typography>
        </div>

        <div className="relative mt-10 md:mt-24">
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
          >
            <div className="flex mb-12 gap-6 md:gap-8 px-2 w-max">
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <Card
                    key={index}
                    className="w-[350px] flex-shrink-0 overflow-hidden shadow-xl"
                    placeholder="" // Dummy value to satisfy TS
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                      <Typography
                        variant="paragraph"
                        className="text-lg leading-relaxed text-gray-900"
                        placeholder="" // Dummy value to satisfy TS
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        “{review.text.text}”
                      </Typography>
                      <div className="mt-8 text-center md:mt-16">
                        <Rating
                          value={5}
                          readonly
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        />
                      </div>
                      <div className="flex items-center mt-8">
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src={review.authorAttribution.photoUri}
                          alt={review.authorAttribution.displayName}
                        />
                        <div className="ml-4">
                          <Typography
                            variant="h6"
                            className="text-base font-bold text-gray-900"
                            placeholder="" // Dummy value to satisfy TS
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                          >
                            {review.authorAttribution.displayName}
                          </Typography>
                          <Typography
                            variant="small"
                            className="mt-0.5 text-sm text-gray-600"
                            placeholder="" // Dummy value to satisfy TS
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                          >
                            {review.relativePublishTimeDescription}
                          </Typography>
                        </div>

                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Typography
                  variant="h6"
                  className="text-center text-gray-500 mt-8"
                  placeholder="" // Dummy value to satisfy TS
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  Loading reviews...
                </Typography>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:mt-16">
          <Rating
            value={5}
           readonly
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          />
          <Typography
            color="blue-gray"
            className="font-medium text-blue-gray-500"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Based on {userRatingCount ?? "..."} Reviews
          </Typography>
        </div>
        <div className="mt-8 text-center md:mt-16">
          <a
            href={`https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pb-2 text-base font-bold leading-7 text-gray-900"
          >
            Check All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
