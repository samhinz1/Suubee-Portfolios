import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-mint text-black font-medium rounded-full hover:bg-mint/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 