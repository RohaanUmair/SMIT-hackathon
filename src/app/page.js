import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Loan Management System</h1>
        
        <p className="text-lg text-center mb-6">Choose your desired action below:</p>
        
        <div className="flex flex-col space-y-4">
          <Link href="/req-form">
            <p className="bg-blue-500 text-white py-2 px-4 rounded-md text-center">Request a Loan</p>
          </Link>
          <Link href="/calculator">
            <p className="bg-green-500 text-white py-2 px-4 rounded-md text-center">Loan Calculator</p>
          </Link>
          <Link href="/login">
            <p className="bg-gray-500 text-white py-2 px-4 rounded-md text-center">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
