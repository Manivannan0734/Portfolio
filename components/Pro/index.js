import React from 'react';
import Image from 'next/image';
import One from '../../public/one.png';
import Four from '../../public/four.png';
import Three from '../../public/three.png'

import Challenge from '../../public/challenge.jpg'
import Link from 'next/link';
function Pro() {
  return (
    <div className="mt-10 container mx-auto px-4">
      <div className="flex flex-col md:flex-row space-between gap-4"> {/* Updated flex class */}
        <div className="rounded-lg shadow-md overflow-hidden w-full md:w-1/2 px-4 mb-4 md:mb-0 transition-all ease-out duration-300"> {/* Updated width class */}
         
        <Link  href="https://spline-iota.vercel.app/">
            <Image
              className="w-full object-cover hover:scale-110 transition-all ease-out duration-300"
              src={Three}
              alt="Card image 2"
            />
            </Link>
            <div className="p-4">
            <h5 className="text-lg font-medium">3D Modeling Integration: Next.js and Spline</h5>
            <p className="text-sm text-gray-500">Experience seamless integration of a 3D modeling tool with web technology. With Next.js and Spline, I've redefined the way users interact with 3D models online.</p>
          </div>

          <Link  href="https://myfuse-omega.vercel.app/">
            <Image
              className="w-full object-cover hover:scale-110 transition-all ease-out duration-300"
              src={Challenge}
              alt="Card image 2"
            />
            </Link>
            <div className="p-4">
            <h5 className="text-lg font-medium">Website Clone Competition Entry: Showcasing Next.js Mastery</h5>
            <p className="text-sm text-gray-500">Join me in exploring my latest project, an entry in a website clone competition, meticulously crafted using Next.js. Experience firsthand the seamless replication of design and functionality in this immersive digital showcase.</p>
          
          </div>

         <Link href="https://hdr-media.vercel.app/" ><div className="relative rounded-lg overflow-hidden"  >
            <Image
              className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
              src={One}
              alt="Card image 1"
            />


          </div></Link> 

          
          
          <div className="p-4">
            <h5 className="text-lg font-medium">HDR Media Business Website</h5>
            <p className="text-sm text-gray-500">The HDR Media Business Website, seamlessly integrated with Firebase as the backend. Experience the power of Firebase in driving dynamic content and robust functionality on this sleek digital platform.</p>
          </div>
        </div>
        <div className="rounded-lg shadow-md overflow-hidden w-full md:w-1/2 px-4 mb-4 md:mb-0 transition-all ease-out duration-300"> {/* Updated width class */}
          <div className="relative rounded-lg overflow-hidden">

            

            <Link  href="https://arusuvaionline01.vercel.app/">
            <Image
              className="w-full object-cover hover:scale-110 transition-all ease-out duration-300"
              src={Four}
              alt="Card image 2"
            />
            </Link>
          </div>
          <div className="p-4">
            <h5 className="text-lg font-medium">Arusuvai Online</h5>
            <p className="text-sm text-gray-500">Introducing Arusuvai Online, your go-to platform for convenient and hassle-free food ordering. With a user-friendly interface and seamless functionality, Arusuvai Online brings the flavors of your favorite dishes right to your doorstep.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pro;
