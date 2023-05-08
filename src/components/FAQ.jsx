import Link from "next/link"



const faqs = [
    {
      id: 1,
      question: "I've sent a request whats next ?",
      answer:
        " Next you'll receive a personal email from me confirming Ive received your email and outlining the next steps in the process. So run to your email        ",
    },

    {
        id: 2,
        question: "Is there a deposit ?",
        answer:
          " Yes there is .The next step to reserve my services for your Wedding Day is through a retainer of 500 pounds",
      },


      {
        id: 3,
        question: "Do we meet in person before the wedding ?",
        answer:
          " Absolutely! I strongly believe in meeting with you to get clarity on your needs, desires and no-nos for your Wedding Day photography. I also believe it allows us to get familiar with our different personalities & see if we can work well together.So as a part of my client process, we'll have at least 2 planning meetings bekre the Wedding Day to make sure everything runs as smooth as possible on the Day. If meeting in person isn't a possibility. I'm always available to meet via Facetime or Zoom.",
      },

      {
        id: 4,
        question: "Do you travel for  weddings?",
        answer:
          " Yes! I'm always down the chance to travel and capture the beginning of your forever. Travel to weddings within a 50 mile radius of Buckinghamshire is included in my pricing. Additional travel expenses are provided upon inquiry.",
      },
      {
        id: 5,
        question: "How long does photo delivery take?",
        answer:
          " A password protected online wedding gallery of individually edited photos is available within 6-8 weeks after the Wedding Day But while you wait, you'll get some sneak peeks shortly after Wedding Day..",
      },
      {
        id: 6,
        question: "My wedding is still far off, should i book now ?",
        answer:
          " Honestly, the sooner the better. As soon as you have a date and venue finalized, book your photographer.The last 2 years completely upended the wedding industry with all the numerous lockdowns & reschedules so all wedding vendors are stretched to capacity. If you have an eye on a photographer, get in touch as soon as possible. No matter how far out your Wedding Day is..",
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
                <dd className="mt-2 text-base font-abc text-gray-500">{faq.answer}</dd>
                
              </div>
              
              
            ))}
            
          </dl>
   

        </div>
       
  
      </div>
    </div>

 </div>

)
}



