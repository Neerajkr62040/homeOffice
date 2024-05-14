import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = ({ unauthorized }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <FaExclamationCircle className="mx-auto mb-4 text-6xl text-red-500" />
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          {unauthorized ? '401 - Unauthorized' : '404 - Not Found'}
        </h1>
        <p className="mb-4 text-gray-600">
          The page you are looking for might be in another castle.
        </p>
        <Link
          to="/"
          className="inline-block rounded-full bg-blue-500 px-6 py-2 text-white transition duration-300 hover:bg-blue-700"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
