import React from 'react';
import { Link } from 'gatsby';

const Page = () => {
  return (
    <main>
      <h1>Index Page</h1>
      <p>
        Hello canroots, Welcome to demo Web App :)
      </p>
      <Link to="/about">About</Link>
    </main>
  );
};

export default Page;
