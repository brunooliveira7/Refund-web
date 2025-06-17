export function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-gray-100 font-semibold text-2xl mb-10">
        Op's! - Not Found - 😥
      </h1>
      <a
        href="/"
        className="font-semibold text-center text-green-100
         hover:text-green-200 transition ease-linear"
      >
        Click here to return
      </a>
    </div>
  );
}
