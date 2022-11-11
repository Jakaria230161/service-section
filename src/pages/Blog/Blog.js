import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-bold">
                Difference between SQL and NoSQL SQL?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                SQL databases are vertically scalable, while NoSQL databases are
                horizontally scalable. SQL databases are table-based, while
                NoSQL databases are document, key-value, graph, or wide-column
                stores. SQL databases are better for multi-row transactions,
                while NoSQL is better for unstructured data like documents or
                JSON.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                What is the difference between javascript and NodeJS? ?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                JavaScript is a simple programming language that can be used
                with any browser that has the JavaScript Engine installed. Node.
                js, on the other hand, is an interpreter or execution
                environment for the JavaScript programming language
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                What is JWT, and how does it work?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
                standard (RFC 7519) for securely transmitting information
                between parties as JSON object. It is compact, readable and
                digitally signed using a private key/ or a public key pair by
                the Identity Provider(IdP).
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                How does NodeJS handle multiple requests at the same time?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                How NodeJS handle multiple client requests? NodeJS receives
                multiple client requests and places them into EventQueue. NodeJS
                is built with the concept of event-driven architecture. NodeJS
                has its own EventLoop which is an infinite loop that receives
                requests and processes them.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Blog;