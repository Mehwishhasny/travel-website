import Image from "next/image";
import { Check } from 'lucide-react';

export function Package() {
  return (
    <div className="flex md:flex-row flex-col">
    <div className="flex w-full md:mt-10 mt-6 flex-col">
      <h2 className="flex md:items-start items-center md:text-6xl px-12 text-3xl text-[#B88E2F] font-bold">
        Packages 
        <br />
        We 
        <br />
        Offer
      </h2>

      <p className="items-start md:w-1/2 w-full md:text-xl px-12 text-md mt-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sapiente, fuga perferendis ducimus recusandae repellendus, facilis rerum eum voluptas architecto, necessitatibus fugiat. Aliquam velit repellat non, similique consectetur fugit reiciendis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni enim est fuga perspiciatis, aperiam aliquam omnis voluptatibus distinctio! Similique, eveniet esse? </p>

      <div className="flex flex-row">
        <div className="md:flex hidden flex-start w-1/2 px-8 mt-[100px]">
          <div className="hexagon-border">
            <div className="hexagon">
              <Image
                src="/images/makkah2.jpg"
                alt="makkah"
                width={500}
                height={500}
                className="hexagon-img"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:translate-y-[-30%]">
          

          <div className="flex md:flex-row flex-col md:ml-0 ml-10">
                <div className="flex px-4">
              <div className="hexagon-border1">
                <div className="hexagon1">
                  <Image
                    src="/images/ramzan.jpg"
                    alt="makkah"
                    width={260}
                    height={300}
                    className="img opacity-70"
                  />
                </div>
                <h2 className="absolute inset-0 flex items-center justify-center text-black font-bold auto-color">
                  Diamond Package
                </h2>
              </div>
                </div>

                <div className="flex px-4 w-1/2 mt-10 flex-col">
                <h2 className="flex text-[#B88E2F] text-3xl font-bold items-center justify-center"> $ 1200 </h2>
                <div className="flex items-center">
      <Check size={30} className="text-[#B88E2F] mr-2" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="flex items-center">
      <Check size={30} className="text-[#B88E2F] mr-2" />
      <p>Perferendis, quia natus eum laborum itaque culpa rem sequi dolor voluptatibus vitae.</p>
    </div>
    <div className="flex items-center">
      <Check size={30} className="text-[#B88E2F] mr-2" />
      <p>Accusantium expedita blanditiis rerum quasi ducimus voluptates facere commodi enim.</p>
    </div>

                </div>
            </div>
          

          <div className="md:flex hidden justify-center md:flex-row flex-col md:ml-0 ml-10">
            
          <div className="flex px-4 w-1/2 mt-10 flex-col">
                <h2 className="flex text-[#B88E2F] text-3xl font-bold items-center justify-center"> $ 1200 </h2>
                <div className="flex items-center">
      <Check size={30} className="text-[#B88E2F] mr-2" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="flex items-center">
      <Check size={30} className="text-[#B88E2F] mr-2" />
      <p>Perferendis, quia natus eum laborum itaque culpa rem sequi dolor voluptatibus vitae.</p>
    </div>
    <div className="flex items-center">
      <Check size={30} className="text-[#B88E2F] mr-2" />
      <p>Accusantium expedita blanditiis rerum quasi ducimus voluptates facere commodi enim.</p>
    </div>

                </div>
            <div className="hexagon-border1">
              <div className="hexagon1">
                <Image
                  src="/images/ramzan.jpg"
                  alt="makkah"
                  width={260}
                  height={300}
                  className="img opacity-70"
                />
              </div>
              <h2 className="absolute inset-0 flex items-center justify-center text-black font-bold auto-color">
                Gold Package
              </h2>
            </div>
          </div>

          
            <div className="justify-center flex md:flex-row flex-col md:ml-0 ml-10">
              <div className="hexagon-border1">
                <div className="hexagon1">
                  <Image
                    src="/images/ramzan.jpg"
                    alt="makkah"
                    width={260}
                    height={300}
                    className="img opacity-70"
                  />
                </div>
                <h2 className="absolute inset-0 flex items-center justify-center text-black font-bold auto-color">
                  Silver Package
                </h2>

                
              </div>
              
              <div className="flex px-4 w-1/2 mt-10 flex-col">
                <h2 className="flex text-[#B88E2F] text-3xl font-bold items-center justify-center"> $ 1200 </h2>
                <div className="flex items-center">
      <Check size={30} className="text-[#B88E2F] mr-2" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="items-center">
      <Check size={30} className="text-[#B88E2F] mr-2" />
      <p>Perferendis, quia natus eum laborum itaque culpa rem sequi dolor voluptatibus vitae.</p>
    </div>
    <div className="flex items-center">
      <Check size={30} className="text-[#B88E2F] mr-2" />
      <p>Accusantium expedita blanditiis rerum quasi ducimus voluptates facere commodi enim.</p>
    </div>

                </div>
            </div>

            <div className="justify-center md:flex hidden md:flex-row flex-col md:ml-0 ml-10">
                
            <div className="flex px-4 w-1/2 mt-10 flex-col">
                <h2 className="flex text-[#B88E2F] text-3xl font-bold items-center justify-center"> $ 1200 </h2>
                <div className="flex items-center">
      <Check size={30} className="text-[#B88E2F] mr-2" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="flex items-center">
      <Check size={30} className="text-[#B88E2F] mr-2" />
      <p>Perferendis, quia natus eum laborum itaque culpa rem sequi dolor voluptatibus vitae.</p>
    </div>
    <div className="flex items-center">
      <Check size={30} className="text-[#B88E2F] mr-2" />
      <p>Accusantium expedita blanditiis rerum quasi ducimus voluptates facere commodi enim.</p>
    </div>

                </div>
            
              <div className="hexagon-border1">
                <div className="hexagon1">
                  <Image
                    src="/images/ramzan.jpg"
                    alt="makkah"
                    width={260}
                    height={300}
                    className="img opacity-70"
                  />
                </div>
                <h2 className="absolute inset-0 flex items-center justify-center text-black font-bold auto-color">
                  Custom Package
                </h2>
              </div>
            </div>
        </div>

    

      </div>
    </div>

    <div className="md:hidden sm:flex flex-col justify-center items-center md:ml-0 ml-24 mt-10 mb-4">
  <button className="border-2 bg-[#B88E2F] text-white text-[12px] md:text-[16px] px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white">
    See more Packages
  </button>
</div>


    </div>
  );
}

export default Package;
