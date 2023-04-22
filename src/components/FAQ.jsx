import Link from "next/link"



const faqs = [
    {
      id: 1,
      question: "How much do you charge",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo expedita voluptas culpa sapiente alias molestiae Numquam corrupti in laborum sed rerum et corporis.",
    },

    {
        id: 2,
        question: "How much do you charge",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo expedita voluptas culpa sapiente alias molestiae Numquam corrupti in laborum sed rerum et corporis.",
      },


      {
        id: 3,
        question: "How much do you charge",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo expedita voluptas culpa sapiente alias molestiae Numquam corrupti in laborum sed rerum et corporis.",
      },


   
  ]
  


export default function Faq() {
    return (
 <div>

<div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 font-abc text-center">Frequently asked questions</h2>
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg leading-6 font-abc text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                
              </div>
              
              
            ))}
            
          </dl>
   

        </div>
       
        <div class="flex justify-center">
        <button class="ml-6inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none bg-brown rounded font-abc  text-lg"><Link href="/Contact">Contact</Link> </button>
      </div>
       
  
      </div>
    </div>

 </div>

)
}



