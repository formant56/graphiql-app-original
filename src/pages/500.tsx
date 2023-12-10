import Link from 'next/link';
const NotFoundPage = () => {
  return (
    <div
      className="text-center bg-gray-50 my-10 dark:bg-gray-900"
      data-testid="server-error-page"
    >
      <h1 className="text-4xl font-bold text-red-500 mb-4">500</h1>
      <p className="text-lg text-gray-600">Oops! Something went wrong.</p>
      <p className="text-gray-500 mt-2">
        Our team of highly trained monkeys has been dispatched to deal with this
        situation.
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
