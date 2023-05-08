import Image from "next/image";

export default function article5() {
  return (
    <div className="container mx-auto pt-7">
      <div className="max-w-6xl mx-auto  mb-17 sm:px-6 sm:px-12">
        <h1 className="text-2xl font-bold pt-24 font-abc text-center ">
          REMEMBER THIS WHEN BOOKING A WEDDING PHOTOGRAPHER
        </h1>
        <p className="font-abc mb-4">
          Choosing the right wedding photographer is crucial to ensuring that
          your memories of one of the most important days of your life are
          captured beautifully. Here are some important things to remember when
          booking your wedding photographer:
        </p>

        <div className="my-8">
          <h2 className="text-2xl font-abc font-bold mb-4">
            Photography Style
          </h2>
          <p className="font-abc mb-4">
            Every photographer has a unique style when it comes to posing,
            lighting, and editing. It's important to choose a photographer whose
            style aligns with your vision for your wedding photos. Look through
            their portfolio to see if their work matches the style and aesthetic
            you are going for. Consider whether you want more candid shots or
            posed portraits, and if you prefer light and airy or moody and
            dramatic editing.
          </p>
          <h2 className="text-2xl font-abc font-bold mb-4">
            Availability for Your Wedding Date
          </h2>
          <p className="font-abc mb-4">
            Before falling in love with a photographer's work, make sure they
            are available for your wedding date. It's important to book your
            photographer as early as possible to ensure they are available on
            your chosen date. This is especially important if you are getting
            married during the busy wedding season.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="relative h-96">
              <Image
                src="https://res.cloudinary.com/dyijvml1y/image/upload/v1681524533/mariam/Portfolio-27_uvn08a.jpg"
                layout="fill"
                objectFit="cover"
                alt="Engagement photo 1"
              />
            </div>
            <div className="relative h-96">
              <Image
                src="https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Joanna___Nanfa-41_zbegtm.jpg"
                layout="fill"
                objectFit="cover"
                alt="Engagement photo 1"
              />
            </div>
            <div className="relative h-96">
              <Image
                src="https://res.cloudinary.com/dyijvml1y/image/upload/v1681524532/mariam/Portfolio-11_us4m2j.jpg"
                layout="fill"
                objectFit="cover"
                alt="Engagement photo 1"
              />
            </div>
            <div className="relative h-96">
              <Image
                src="https://res.cloudinary.com/dyijvml1y/image/upload/v1683538033/mariam/blog/sobia/Sobia___Tawfiq-34_yebjpd.jpg"
                layout="fill"
                objectFit="cover"
                alt="Engagement photo 1"
              />
            </div>
          </div>
          <h2 className="text-2xl font-abc font-bold mb-4">
            Offered Finished Products
          </h2>
          <p className="mb-4">
            Consider what kind of finished products you want from your wedding
            photographer. Do you want a photo album, prints, digital images, or
            all of the above? Some photographers may offer different packages
            that include different finished products, so make sure to discuss
            your preferences with your photographer before booking.
          </p>

          <h2 className="text-2xl font-abc font-bold mb-4">Delivery Time</h2>
          <p className="mb-4">
            Finally, consider the delivery time for your wedding photos. How
            long will it take for you to receive your edited photos? Make sure
            to discuss the timeline with your photographer before booking. You
            don't want to be left waiting for months after your wedding day to
            receive your photos.
          </p>

          <p className="font-abc mb-4">
            By keeping these important factors in mind, you can make an informed
            decision when choosing your wedding photographer. Take the time to
            research different photographers and ask plenty of questions before
            making a decision. With the right photographer, you can be sure that
            your wedding memories will be captured beautifully for years to
            come.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="relative h-96">
            <Image
              src="https://res.cloudinary.com/dyijvml1y/image/upload/v1682953890/mariam/blog/N_j/N___J-29_gi3z4z.jpg"
              layout="fill"
              objectFit="cover"
              alt="Engagement photo 1"
            />
          </div>
          <div className="relative h-96">
            <Image
              src="https://res.cloudinary.com/dyijvml1y/image/upload/v1682953667/mariam/blog/hazel/Hazel___Etse-8_dmeajf.jpg"
              layout="fill"
              objectFit="cover"
              alt="Engagement photo 1"
            />
          </div>
          <div className="relative h-96">
            <Image
              src="https://res.cloudinary.com/dyijvml1y/image/upload/v1682953664/mariam/blog/hazel/Hazel___Etse-5_ygphyr.jpg"
              layout="fill"
              objectFit="cover"
              alt="Engagement photo 1"
            />
          </div>
          <div className="relative h-96">
            <Image
              src="https://res.cloudinary.com/dyijvml1y/image/upload/v1682953934/mariam/blog/sobia/Sobia___Tawfiq-8_jokdty.jpg"
              layout="fill"
              objectFit="cover"
              alt="Engagement photo 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
