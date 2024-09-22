import React from 'react'

const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
      <div className="my-4 border-4 border-primary rounded-full border-dashed animate-spin w-8 h-8 sm:w-6 sm:h-6"></div>
    </div>
  );

export default LoadingSpinner