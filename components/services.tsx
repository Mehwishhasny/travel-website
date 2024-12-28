import Image from 'next/image';
import Link from 'next/link';

export function Services() {
  return (
    <div className="w-full flex md:flex-row flex-col bg-[url('/images/bg-gold.jpg')] bg-cover bg-center">

      {/* Colored part for the content */}
      <div className="w-full flex flex-col justify-center items-center px-4 sm:px-6 py-6 sm:py-16">
        
        
        <div className="text-[#B88E2F] md:w-[800px] w-full">
          <h2 className="md:text-4xl text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center justify-center items-center">
            Our Services
          </h2>

          <div className="flex md:justify-center md:items-center">
        <Image src="/images/ramzan.jpg" width={500} height={500} alt="ramzan-image" />
        </div>

          <p className="text-gray-800 w-full mt-4 text-sm sm:text-lg justify-center items-center text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel dolor placerat
            tempor et vitae ipsum. Donec non velit in velit dignissim ultricies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cum dolor asperiores. Non, voluptatem labore minus dolorem deleniti iste, libero officiis animi cum ipsum enim numquam, nihil molestiae dolores quae.
          </p>
        </div>
          
    
        <button
          type="button"
          className="border-2 md:m-4 m-1 text-[#B88E2F] bg-white px-4 py-2 justify-center items-center rounded-md hover:bg-gray-800 hover:text-white sm:text-lg text-sm transition-colors duration-300"
        >
          <Link href="/about">Learn More</Link>
        </button>
      </div>

      {/* White part for the image */}
      <div className="bg-white clip-left flex justify-center items-center py-4 sm:py-6">
        <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-6">

          {/* Airline Tickets */}
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/tickets.jpg" width={200} height={200} alt="tickets" className="rounded-lg" />
            <p className="text-black font-bold text-sm sm:text-base">Airline Tickets</p>
          </div>

          {/* Visa & Immigration */}
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/visa.jpg" width={180} height={180} alt="visa" className="rounded-lg" />
            <p className="text-black font-bold text-sm sm:text-base">Visa & Immigration</p>
          </div>

          {/* Hotel Rooms */}
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/hotel.jpg" width={200} height={200} alt="hotel" className="rounded-lg" />
            <p className="text-black font-bold text-sm sm:text-base">Hotel rooms</p>
          </div>

          {/* Souvenirs */}
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/souvenirs.jpg" width={280} height={280} alt="souvenir" className="rounded-lg" />
            <p className="text-black font-bold text-sm sm:text-base">Hajj & Umrah souvenirs</p>
          </div>

          {/* Transport Services */}
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/bus.jpg" width={260} height={260} alt="bus" className="rounded-lg" />
            <p className="text-black font-bold text-sm sm:text-base">Outclass Transport services</p>
          </div>

          {/* Luggage Bags */}
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/bag.jpg" width={200} height={200} alt="bag" className="rounded-lg" />
            <p className="text-black font-bold text-sm sm:text-base">Luggage bags</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Services;
