// components/Loading.tsx
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

type LoadingProps = {
  loading: boolean;
};

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-white/70">
      <ClipLoader
        color="#FF6D6D"
        loading={loading}
        size={64}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
