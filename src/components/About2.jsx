import Image from 'next/image'
import Self from "../../public/Self.jpg"
const About2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-white lg:px-8">
    <div className="flex flex-col items-center justify-center py-16 md:py-32">
      <div className="mb-20">
        <Image
          src={Self}
          alt="About photo"
          width={1200}
          height={800}
          layout="responsive"
          className="rounded-lg"
        />
      </div>
      <div className="w-full md:w-3/4 lg:w-2/2">
        <h2 className="text-3xl md:text-4xl font-abc px-30 font-bold mb-4 mx-auto px-15 text-gray-800">
          Hi im Mariam
        </h2>
        <p className="text-lg font-abc tracking-wide text-gray-700 mb-6">
        5 years ago, if you had told me that I would one day be deeply in love with the service of photographing weddings, I would not have believed it. So how exactly did I get here?
Well, it all started with a friend of mine who was getting married about 6 years ago.

        </p>
        <p className="text-lg  font-abc tracking-wide text-gray-700 mb-6">
          As her Wedding Day drew closer, she found herself finalizing payments for the different vendors, running to final dress fittings, finishing the many other little things that have to be done before the Wedding Day but still struggling to find that right photographer for her day.
She was looking for a photographer who would capture the heart of the significance of her day; one who could really capture *those*  moments that make up the day like moments with her loved ones that mean so much but pass by in the blink of an eye
        </p>
        <p className="text-lg font-abc text-gray-700  tracking-wide mb-6">
        Without her knowledge, on her Wedding Day, I grabbed one of my cameras and took it along with me to grab a few photos of my own…just for memories sake. When I shared my photos of the day with her, she was stunned.
And that set me on this beautiful journey of preserving wedding memories.

It took me a couple of years after that wedding but eventually, Mariam Photography was born out of the desire to serve you on one of the most memorable days of your life.
I want to give you peace of mind and confidence in knowing that you have chosen a wedding photographer who is incredibly passionate about capturing the memories of your Wedding Day in the most CANDID, VIBRANT AND REAL way.
My goal is for you to look back at the memories of that day many years later -maybe with your children and grandchildren- and remember the feelings you had on Your Wedding Day.
        </p>
      </div>
      <div className="mt-15">
        <h2 className="text-2xl font-bold font-abc  px-2 mb-9">Enjoy these snapshots from some of my most memorable travels:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Image src="https://res.cloudinary.com/dyijvml1y/image/upload/v1683458386/Serengeti_Tanzania_fm9yo6.jpg" width={200}
          height={400}alt="Travel photo 1" />
          <Image src="https://res.cloudinary.com/dyijvml1y/image/upload/v1683458384/Taj_Mahal_India_hsq6v3.jpg"alt="Travel photo 2" width={200}
          height={400}/>
          
          <Image src="https://res.cloudinary.com/dyijvml1y/image/upload/v1683458397/Washington_DC_USA_bqdt04.jpg"alt="Travel photo 2" width={200}
          height={400}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About2
