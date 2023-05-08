import Image from "next/image";

export default function Hometext() {
  return (
    <section className="py-28 px-30 bg-warm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold font-abc tracking-tight text-gray-900 sm:text-4xl">
            Your wedding day is finally here!
          </h2>
          <p className="mt-4 text-lg font-abc text-gray-500">
            After all that planning & waiting & hoping,{" "}
            <span className="font-abc font-bold">
              I just know you’re ready to celebrate your day with those dearest
              to you.
            </span>{" "}
            Sadly, too many couples worry that their wedding memories won’t
            show the moments of the day that matter the most to them. Or the
            true essence of who they are. That’s where I come in.
          </p>
          <p className="mt-4 text-lg font-abc text-gray-500">
            I want you & your loved ones to look at your photos and say,{" "}
            <span className="font-abc font-bold">
              “Oh my God! This is everything!”
            </span>{" "}
            All precious moments when emotions unfold naturally will be there;
            the unexpected tear when reading your vows, the first tight handhold
            or hug as a married couple, the laughter at the reception, all of
            it.
          </p>
          <p className="mt-4 font-abc text-lg text-gray-500">
            I want you to relax & wholeheartedly enjoy your Wedding Day. While I
            buzz around capturing those oh-so-precious fleeting moments so that
            when you look back on your Wedding Day photos many years later, you’ll
            feel the day all over again.
          </p>
        </div>
       
      </div>
    </section>
  );
}
