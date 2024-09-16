import Link from "next/link"

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-8">
      <Link className="font-semibold text-lg px-4 py-2 rounded-md text-gray-500 bg-lamaSky border" href="/admin"> Admin </Link>
      <Link className="font-semibold text-lg px-4 py-2 rounded-md text-gray-500 bg-lamaPurple border" href="/teacher"> Teacher </Link>
      <Link className="font-semibold text-lg px-4 py-2 rounded-md text-gray-500 bg-lamaYellow border" href="/parent"> Parent </Link>
      <Link className="font-semibold text-lg px-4 py-2 rounded-md text-gray-500 bg-green-300 border" href="/student"> Student </Link>
    </div>
  )
}

export default Homepage