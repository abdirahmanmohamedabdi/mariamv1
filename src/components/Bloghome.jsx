import Link from "next/link"
import Image from "next/image"
const Bloghome = () => {
  return (
    <div>
        <section className="text-gray-600 py-2 body-font">
  <div className="container px-5 py-1 mx-auto">
    <div className="flex flex-col">
    
    
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="content" className="object-cover object-center h-full w-full"  width="2000"
             height="2000" src="https://res.cloudinary.com/dyijvml1y/image/upload/v1682953746/mariam/blog/jay/Jay___Sachi-17_ayix68.jpg"/>
          
        </div>
       
        <h2 className="text-l font-medium title-font font-abc text-brown mt-1">Proposal</h2>
        <h2 className="text-xl font-medium title-font font-abc text-gray-900 mt-5">Jay & Saachi</h2>
        <p className="text-base leading-relaxed font-abc mt-1"> Jay and Saachi had been dating for a few years, and Jay knew
                that he wanted to spend the rest of his life with her. Because
                Jay lives outside England, he recruited the help of Lisa of
                LLProposals to help pull it off.</p>
                <div className="flex">
                <button className=" mt-9 inline-flex text-white bg-brown border-0 py-2 px-6 focus:outline-none bg-brown rounded font-abc font-abc  text-lg">
                  <Link href="/blog/jayandsaachi">Read</Link>
                </button>
              </div>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-2">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="content" className="object-cover object-center h-full w-full"  width="2000"
             height="2000" src="https://res.cloudinary.com/dyijvml1y/image/upload/v1682953797/mariam/blog/joanna/Joanna___Nanfa-14_a40z3i.jpg"/>
        </div>
        <h2 className="text-l font-medium title-font font-abc text-brown mt-1">Wedding</h2>
        <h2 className="text-xl font-medium title-font font-abc text-gray-900 mt-7">Joanna & Nanfa</h2>
        <p className="text-base leading-relaxed  font-abc mt-2"> Joanna and Nanfa tied the knot in a beautiful and intimate
                wedding ceremony at Northbrook Park Wedding Venue in Hampshire
                on a warm summer August day. This stunning venue provided the
                perfect backdrop for their special day, which was filled with
                elegance, beauty, and love..</p>
        <div className="flex">
                <button className=" mt-2 inline-flex text-white bg-brown border-0 py-2 px-6 focus:outline-none bg-brown rounded font-abc font-abc  text-lg">
                  <Link href="/blog/joannandnanfa">Read</Link>{" "}
                </button>
              </div>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="content" className="object-cover object-center h-full w-full"  width="2000"
             height="2000"src="https://res.cloudinary.com/dyijvml1y/image/upload/v1682954125/mariam/blog/Pritisha/Pritisha___Ram-4_ucnlzv.jpg"/>
        </div>
        <h2 className="text-l font-medium title-font font-abc text-brown mt-1">Engagement</h2>
        <h2 className="text-xl font-medium title-font font-abc text-gray-900 mt-7">Pritisha & Ram</h2>
        <p className="text-base leading-relaxed font-abc mt-2">Engagement photography sessions are a great way for couples to
                capture their love and excitement before their big day. Pritisha
                and Ram celebrated their engagement with a romantic photography
                session at the Birmingham Botanical Garden in Birmingham UK.</p>
        <button className=" mt-2 inline-flex text-white bg-brown border-0 py-2 px-6 focus:outline-none bg-brown rounded font-abc font-abc  text-lg">
                  <Link href="/blog/pritishaandram">Read</Link>{" "}
                </button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Bloghome
