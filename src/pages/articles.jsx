/* This example requires Tailwind CSS v2.0+ */
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
const posts = [
    {
      title: 'PREPARING FOR YOUR ENGAGEMENT SESSION',
      href: '/articles/article1',
      category: { name: 'Article', href: '/articles/article1' },
      description:
        'Getting ready for an engagement photo session can be both exciting and nerve-wracking. You want to look your best and capture the love and happiness between you and your partner. To make sure your engagement photos are a success, there are two important things you should know before your session: how long it takes and what to wear.',
      
      imageUrl:
        'https://res.cloudinary.com/dyijvml1y/image/upload/v1681524533/mariam/Sobia___Tawfiq-41_yhxfbt.jpg',
      
    },
    {
        title: 'PREPARING FOR YOUR ENGAGEMENT SESSION (Pt. 2)',
        href: '/articles/article2',
        category: { name: 'Article', href: '/articles/article2' },
        description:
          'Let’s continue with tips on getting ready for your engagement photo session. Remember, this is an exciting time for you and your partner, and you want your photos to reflect your love and happiness. To make sure your engagement photos are a success, there are a few things more you can do to prepare. Here are four ways to prepare for an engagement photo session          ',
        
        imageUrl:
          'https://res.cloudinary.com/dyijvml1y/image/upload/v1681524532/mariam/Portfolio-6_kenzqf.jpg',
        
      },
      {
        title: 'WHY HAVE AN ENGAGEMENT PHOTO SESSION?        ',
        href: '/articles/article3',
        category: { name: 'Article', href: '/articles/article3' },
        description:
          'Your engagement is a special time in your life, and it deserves to be captured in beautiful photographs. But engagement sessions arent just about taking pretty pictures.',
        
        imageUrl:
          'https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Nael___Lamyae-1_spmp1i.jpg',
        
      },
      {
        title: 'DON’T REGRET YOUR WEDDING PHOTOS ',
        href: '/articles/article4',
        category: { name: 'Article', href: '/articles/article4' },
        description:
          'Your wedding day is one of the most important days of your life, and you want to make sure that every moment is captured perfectly. Unfortunately, there are some common mistakes that can lead to wedding photo regrets. Here are the top four biggest regrets I’ve heard couples express about their wedding photo.',
        
        imageUrl:
          'https://res.cloudinary.com/dyijvml1y/image/upload/v1681524532/mariam/Portfolio-11_us4m2j.jpg',
        
      },
      {
        title: 'REMEMBER THIS WHEN BOOKING A WEDDING PHOTOGRAPHER',
        href: '/articles/article5',
        category: { name: 'Article', href: '/articles/article5' },
        description:
          'Choosing the right wedding photographer is crucial to ensuring that your memories of one of the most important days of your life are captured beautifully. Here are some important things to remember when booking your wedding photographer          .',
        
        imageUrl:
          'https://res.cloudinary.com/dyijvml1y/image/upload/v1682953597/mariam/blog/annabelle/Annobelle___Jamie-2_fr2kxs.jpg',
        
      },
      {
        title: 'QUESTIONS TO HELP YOU CHOOSE YOUR WEDDING PHOTOGRAPHER        ',
        href: '/articles/article6',
        category: { name: 'Article', href: '/articles/article6' },
        description:
          'Your wedding day is one of the most important days of your life, and choosing the right photographer to capture those memories is crucial. But how do you find the right photographer? Here are some important questions to ask when looking for your wedding photographer          .',
        
        imageUrl:
          'https://res.cloudinary.com/dyijvml1y/image/upload/v1681524533/mariam/Portfolio-48_swo69m.jpg',
        
      },
      {
        title: 'PRECIOUS WEDDING DAY MEMORIES',
        href: '/articles/article7',
        category: { name: 'Article', href: '/articles/article7' },
        description:
          'A wedding day is full of precious moments that youll want to remember for a lifetime. As a wedding photographer its important to capture all the important parts of the day so that the couple can relive those memories for years to come. Here are some of the most important parts of the wedding day to photograph',
        
        imageUrl:
          'https://res.cloudinary.com/dyijvml1y/image/upload/v1682954123/mariam/blog/Pritisha/Pritisha___Ram-5_x6g1sr.jpg',
        
      },
  ]
  
  export default function Articles() {
    return (
      <div>
<Head>
<title>Articles - Mariam Photography</title>
	<link rel="canonical" href="https://mariamphotography.co.uk/articles" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Articles - Mariam Photography" />
	<meta property="og:url" content="https://mariamphotography.co.uk/articles/" />
	<meta property="og:site_name" content="Mariam Photography" />
</Head>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">

            
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col rounded-lg shadow-lg font-abc overflow-hidden">
                <div className="flex-shrink-0">
                  <Image className="h-48 w-full object-cover" src={post.imageUrl}   width={1200}
          height={800}alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-abc font-medium text-brown">
                      <Link href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </Link>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold font-abc text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base font-abc text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    )
  }
  