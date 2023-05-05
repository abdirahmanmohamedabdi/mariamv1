import Image from "next/image";
import pic1 from "../../public/pic1.jpg"
import Link from "next/link";

const Package = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-abc text-gray-800 mb-6">
            Wedding Photography Package
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                className="rounded-lg shadow-lg object-cover object-center w-full h-full"
                src={pic1}
                alt="Wedding Photography Package"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg text-gray-700 font-abc leading-loose mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                odio sit amet eros malesuada fringilla. Proin ac elementum nulla.
                Nam dictum mauris ut tellus efficitur imperdiet.
              </p>
              <ul className="text-lg text-gray-700 mb-6 font-abc list-disc list-inside">
                <li>Full-day coverage of your wedding</li>
                <li>Second photographer</li>
                <li>400+ edited digital photos</li>
                <li>Online gallery for viewing and sharing photos</li>
              </ul>
              <div className="text-3xl md:text-4xl font-abc font-bold text-gray-800">
                <span className="text-lg md:text-xl">$</span>1999
              </div>
              <p className="text-gray-700 font-abc text-sm md:text-base">
                *Additional travel fees may apply
              </p>
              <button className="bg-brown  font-abc  text-white font-bold py-2 px-4 rounded mt-8">
              <Link href="/contact">Book now</Link>
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
