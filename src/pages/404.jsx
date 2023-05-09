/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link"

export default function Example() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main
          className="min-h-full bg-cover bg-top sm:bg-top"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dyijvml1y/image/upload/v1682953873/mariam/blog/N_j/N___J-22_owafpi.jpg")',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
            <p className="text-sm font-semibold text-white   font-abc uppercase tracking-wide">404 error</p>
            <h1 className="mt-2 text-4xl font-abc font-extrabold text-white tracking-tight sm:text-5xl">
              Uh oh! I think you’re lost.
            </h1>
            <p className="mt-2 text-lg font-medium text-white ">
              It looks like the page you’re looking for doesn't exist.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white   "
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }
  