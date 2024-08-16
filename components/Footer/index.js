import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
        
          <h1 className="text-2xl text-bold">Contact</h1>
          <h1 className="text-2xl text-bold">9345483471</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
             <Link href="https://drive.google.com/file/d/1cZY_EkV7-ghUrLFI1yRpmeSsMVl5pw6T/view?usp=sharing">
            <Button>See My Resume</Button>
            </Link>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Footer;
