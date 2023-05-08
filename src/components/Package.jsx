import Image from "next/image";
import pic1 from "../../public/pic1.jpg"
import Link from "next/link";

const Package = () => {
  return (
    <div className="container mx-auto px-1 sm:px-6 lg:px-2 py-16">
    <div className="max-w-2xl mx-auto mb-12">
      <h1 className="text-4xl text-center font-abc font-bold mx-21 mb-2 mt-16">PACKAGES</h1>
      <p className="text-lg font-abc mb-8">After all the makeup, dancing, eating and laughter, your memories and photographs are all that will remain. Every single image is individually edited to the highest resolution and available for you to enjoy however you’d like. Have your memories up as screensavers on all your devices AND decorate your spaces with beautiful sentimental wall art. Each couple I work with receives a custom designed Wedding Album capturing the story of some of their favorite moments of the day. What a wonderful way to cherish & enjoy your wedding memories!</p>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-12">
        <div className="w-full sm:w-1/2">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="https://res.cloudinary.com/dyijvml1y/image/upload/v1682953602/mariam/blog/annabelle/Annobelle___Jamie-15_nt8dy6.jpg" layout="fill" objectFit="cover" alt="Engagement Session" />
          </div>
          <h2 className="text-3xl font-bold text-center font-abc mt-8 mb-4">Engagement Sessions</h2>
          <p className="text-lg text-center font-abc mb-8">Starting at £200</p>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="https://res.cloudinary.com/dyijvml1y/image/upload/v1683274300/mariam/blog/joanna/Joanna___Nanfa-35_azcdak.jpg" layout="fill" objectFit="cover" alt="Wedding" />
          </div>
          <h2 className="text-3xl font-bold font-abc text-center mt-8 mb-4">Weddings</h2>
          <p className="text-lg text-center font-abc mb-8">Starting at £1,000</p>
        </div>
      </div>
    </div>
    <div className="max-w-2xl mx-auto">
      <p className="text-lg font-abc mb-8">To deliver my best as your wedding photographer, it is essential to establish contact with you. I want to hear all about your plans for the day, understand your wants for the memories and answer any questions you have. So, for each inquiry received I always schedule a video call where we chat and get to know each other a bit before confirming a booking. Once you feel that we are a good fit to work together on your special day, we’ll move forward with securing your date. With the date secured, the fun work to prep for your day begins. I’m so excited to hear from you soon!</p>
    </div>
  </div>
  );
};

export default Package;
