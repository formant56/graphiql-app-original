import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div
      className="text-center bg-gray-50 my-10 dark:bg-gray-900"
      data-testid="not-found-page"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600">Page Not Found</p>
      <p className="text-gray-500 mt-2">
        The page you are looking for might be in another universe.
      </p>
      <Link
        href="/"
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
