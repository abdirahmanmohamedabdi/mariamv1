import Image from 'next/image'
import Self from "../../public/Self.jpg"
const About2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <p className="text-lg font-abc text-gray-700 mb-6">
        5 years ago, if you had told me that I would one day be deeply in love with the service of photographing weddings, I would not have believed it. So how exactly did I get here?
Well, it all started with a friend of mine who was getting married about 6 years ago.

        </p>
        <p className="text-lg  font-abc text-gray-700 mb-6">
          Aenean tincidunt turpis eu dui pharetra, vitae malesuada ante
          bibendum. Sed vel tincidunt nibh. Suspendisse ac gravida velit.
          Nulla sit amet dui id ex maximus interdum. Proin pellentesque,
          mi vel auctor tristique, nulla nulla dignissim lacus, nec blandit
          enim nisl sit amet lectus. In euismod, ante eu tempor bibendum,
          elit lectus fringilla lectus, in congue arcu urna sed dui.
        </p>
        <p className="text-lg font-abc text-gray-700 mb-6">
          Fusce eget tempor ex. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Vestibulum eget varius
          erat. Sed convallis est quis odio feugiat tristique. Sed euismod,
          mauris auctor egestas bibendum, tellus nisl congue arcu, id
          tincidunt velit justo vitae tortor. Praesent in suscipit lorem.
          Etiam eu eros rutrum, accumsan urna non, tristique lorem. Sed
          vestibulum consectetur scelerisque. Nulla porttitor, sapien quis
          egestas pellentesque, odio urna imperdiet nisi, sed scelerisque
          neque ipsum nec ex. Fusce auctor nunc vel risus imperdiet lacinia.
        </p>
      </div>
    </div>
  </div>
  )
}

export default About2
