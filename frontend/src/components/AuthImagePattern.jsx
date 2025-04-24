<<<<<<< HEAD
// const AuthImagePattern = ({ title, subtitle }) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-2xl bg-primary/10 ${
//                 i % 2 === 0 ? "animate-pulse" : ""
//               }`}
//             />
//           ))}
//         </div>
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-base-content/60">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default AuthImagePattern;



import { useState, useEffect } from "react";

const countryImages = {
  us: "https://images.unsplash.com/photo-1517841905240-472988babdf9", // USA
  uk: "https://www.youthemployment.org.uk/dev/wp-content/uploads/2022/06/news-policy-22-600x300.jpg", // UK
  india: "https://images.unsplash.com/photo-1607746882042-944635dfe10e", // India
  japan: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", // Japan
  brazil: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", // Brazil
  nigeria: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b", // Nigeria
  france: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", // France
  australia: "https://images.unsplash.com/photo-1504593811423-6dd665756598", // Australia
  mexico: "https://media.sciencephoto.com/image/p9800257/800wm/P9800257.jpg", // Mexico
};

const AuthImagePattern = ({ title, subtitle }) => {
  const [countries, setCountries] = useState([
    "us",
    "uk",
    "india",
    "japan",
    "brazil",
    "nigeria",
    "france",
    "australia",
    "mexico",
  ]);

  const [animationState, setAnimationState] = useState("cross-visible");

  // Shuffle on mount
  useEffect(() => {
    const shuffled = [...countries].sort(() => 0.5 - Math.random());
    setCountries(shuffled);
  }, []);

  // Toggle animation state every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) =>
        prev === "cross-visible" ? "corners-visible" : "cross-visible"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Helper to check cross pattern
  const isInCross = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    return row === 1 || col === 1;
  };

=======
const AuthImagePattern = ({ title, subtitle }) => {
>>>>>>> saved-changes
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
<<<<<<< HEAD
          {countries.map((country, i) => {
            const isCross = isInCross(i);
            const isVisible =
              (animationState === "cross-visible" && isCross) ||
              (animationState === "corners-visible" && !isCross);

            return (
              <div
                key={i}
                className={`aspect-square rounded-2xl overflow-hidden bg-primary/10 transition-opacity duration-1000 ${
                  isVisible ? "opacity-100" : "opacity-30"
                }`}
              >
                <img
                  src={`${countryImages[country]}?w=200&h=200&fit=crop&auto=format`}
                  alt={`Person from ${country}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            );
          })}
=======
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
>>>>>>> saved-changes
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
