// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFrownOpen } from "react-icons/fa";

import React from "react";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
//   <h1 className="text-6xl font-extrabold text-yellow-500">404</h1>
//   <p className="text-2xl font-light text-gray-300 mt-4">
//     Oops! The page you're looking for doesn't exist.
//   </p>
//   <Link
//     to="/"
//     className="mt-8 px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
//   >
//     Go Back Home
//   </Link>
// </div>

// <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//   <div className="text-9xl text-gray-500 mb-8">
//     <FaFrownOpen />
//   </div>
//   <h1 className="text-4xl font-bold text-gray-800 mb-4">
//     404 - Page Not Found
//   </h1>
//   <p className="text-gray-600 mb-8">
//     Sorry, the page you were looking for could not be found.
//   </p>
//   <Link
//     to="/"
//     className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
//   >
//     Go Back Home
//   </Link>
// </div>

const rocketAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #1a202c;
  color: #fff;
  text-align: center;
  padding: 2rem;
`;

const StyledIcon = styled(FaRocket)`
  font-size: 6rem;
  margin-bottom: 2rem;
  animation: ${rocketAnimation} 2s infinite;
  color: #4299e1;
`;

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StyledMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #cbd5e0;
`;

const StyledLink = styled(Link)`
  background-color: #4299e1;
  color: #fff;
  padding: 0.8rem 1.6rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2b6cb0;
  }
`;
const NotFound = () => {
  return (
    <StyledContainer>
      <StyledIcon />
      <StyledHeading>404 - Page Not Found</StyledHeading>
      <StyledMessage>
        Oops! Looks like the page you were looking for got lost in space.
      </StyledMessage>
      <StyledLink to="/">Back to Earth</StyledLink>
    </StyledContainer>
  );
};

export default NotFound;
