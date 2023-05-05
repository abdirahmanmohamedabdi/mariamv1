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
        question: "Do you travel to other countries",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo expedita voluptas culpa sapiente alias molestiae Numquam corrupti in laborum sed rerum et corporis.",
      },


      {
        id: 3,
        question: "How can i contact you",
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
       
  
      </div>
    </div>

 </div>

)
}



