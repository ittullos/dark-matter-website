import { getProviders, signIn } from "next-auth/react";

const SignIn = ({ providers }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Logo Container with Aspect Ratio */}
      <div className="w-48 aspect-w-1 aspect-h-1 mb-6 mt-[-10vh]">
        <img
          src="/lambda.png" // Replace with the actual path to your logo
          alt="Logo"
          className="w-full h-full object-contain" // Ensures proportional scaling
        />
      </div>

      {/* Sign In Heading */}
      <h1 className="text-4xl font-bold mb-6">Sign In</h1>
      <p className="mb-4 text-gray-400">Choose a provider to sign in:</p>

      {/* Sign In Buttons */}
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="mb-4">
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/profile" })} // Added callbackUrl
            className="flex items-center bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            {/* Google Logo */}
            {provider.name === "Google" && (
              <img
                src="/google-logo.png" // Replace with the actual path to your Google logo
                alt="Google"
                className="h-6 w-6 mr-3"
              />
            )}
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignIn;
