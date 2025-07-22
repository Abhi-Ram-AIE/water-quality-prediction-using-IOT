// // import React from "react";

// // const PredictionResult = ({ prediction }) => {
// //   return prediction ? (
// //     <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-500 w-full max-w-2xl mx-auto">
// //       <p className="font-semibold">Water Status: {prediction.status}</p>
// //       <p>Reason: {prediction.reason}</p>
// //       <p>Filtration Method: {prediction.filtration}</p>
// //     </div>
// //   ) : null;
// // };

// // export default PredictionResult;
// import React from "react";

// const PredictionResult = ({ prediction }) => {
//   return prediction ? (
//     <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-500 w-full max-w-2xl mx-auto">
//       <p className="font-semibold">Water Status: {prediction.status}</p>
//       <p><strong>Reason:</strong> {prediction.reason}</p>
//       <p><strong>Filtration Method:</strong> {prediction.filtration}</p>
//       <p><strong>AI Explanation:</strong> {prediction.explanation}</p>
//     </div>
//   ) : null;
// };

// export default PredictionResult;
import React from "react";

const PredictionResult = ({ prediction }) => {
  return prediction ? (
    <div
      className={`mt-4 p-6 border-l-8 w-full mx-auto rounded-lg shadow-md ${
        prediction.status === "Unsafe" ? "bg-red-100 border-red-500" : "bg-green-100 border-green-500"
      }`}
    >
      {/* Main Heading: Water Status */}
      <h2 className="text-xl font-bold">
        Water Status:{" "}
        <span className={prediction.status === "Unsafe" ? "text-red-600" : "text-green-600"}>
          {prediction.status}
        </span>
      </h2>
      <p className="text-gray-700 text-base"><strong>Reason:</strong> {prediction.reason}</p>
      <p className="text-gray-700 text-base"><strong>Filtration Method:</strong> {prediction.filtration}</p>

      {/* AI Explanation Section */}
      {prediction["AI Explanation"] && (
        <div className="mt-5 p-5 bg-white border border-gray-300 rounded-lg w-full">
          <h3 className="text-lg font-bold text-gray-900">AI Explanation</h3>
          <ul className="list-disc list-inside text-gray-700 mt-3 text-base">
            {prediction["AI Explanation"]
              .replace(/[*#]/g, '') // Remove all * (stars) and # (hash symbols)
              .split("\n") // Split explanation by new lines
              .filter((point) => point.trim() !== "") // Remove empty lines
              .map((point, index) => {
                const boldMatch = point.match(/^(\d+️⃣)\s(.*)$/); // Detect numbered headings
                return (
                  <li key={index} className="mt-2">
                    {boldMatch ? (
                      <strong className="text-gray-900 text-lg">{boldMatch[1]} {boldMatch[2]}</strong>
                    ) : (
                      <span className="text-base">{point}</span>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  ) : null;
};

export default PredictionResult;
