import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Links from '@/components/links';
import Package from '@/components/package';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col h-screen md:bg-white bg-white">
      <Header />
      <Links />
      <Hero />
      <Services />
      <Package />
      <hr />
      <Footer />
      
      <a href="https://wa.me/1234567890?text=Hello%20there!" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/whatsapp.png"
          alt="WhatsApp Chat"
          width={40}
          height={40}
          className="fixed bottom-10 sm:right-12 right-5 z-50 cursor-pointer"
        />
        <p className="fixed bottom-2 sm:right-8 right-2 z-50 text-white font-semibold text-sm bg-green-500 p-1 rounded-lg">
          Chat with us?
        </p>
      </a>
    </div>

  );
}
