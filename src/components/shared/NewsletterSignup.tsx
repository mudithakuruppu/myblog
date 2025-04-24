
export const NewsletterSignup = () => {
  return <div className="rounded-lg bg-blue-50">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute bottom-0 left-0">
            <img src="/src/img/food2.png" alt="Decorative vegetables" className="h-auto max-w-40" />
          </div>
          <div className="absolute bottom-0 right-0">
            <img src="/src/img/food1.png" alt="Decorative salad" className="w-24 h-auto" />
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Deliciousness to your inbox
            </h2>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqui enim ad
              minim
            </p>
            <form className="justify-center mt-8 sm:flex">
              <input type="email" placeholder="Your email address..." className="w-full px-4 py-3 border border-gray-300 rounded-md sm:w-96 focus:ring-black focus:border-black" />
              <button type="submit" className="w-full px-6 py-3 mt-3 font-medium text-white bg-black rounded-md sm:mt-0 sm:ml-3 sm:w-auto hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>;
};