import React from "react";

const Result = ({ result }) => {
  if (!result) return null;

  return (
    <div className="text-center py-6">
      <h3
        className={`text-2xl font-bold ${
          result.includes("Safe") ? "text-green-600" : "text-red-600"
        }`}
      >
        {result}
      </h3>
    </div>
  );
};

export default Result;
