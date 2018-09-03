import React from 'react';

const NotFountPage = ({ staticContext = {} }) => {

  staticContext.notFound = true;

  return (
    <h1>Oops, route not found.</h1>
  );
};

export default {
  component: NotFountPage
};