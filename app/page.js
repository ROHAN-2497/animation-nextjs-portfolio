import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image
          src="/hero.png" alt="" fill className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
        {/* TITLE */}
        <h1 className=" md:text-6xl text-4xl font-bold">Crafting  Digital Expreiences, Desining Tomorrow.</h1>
        {/* DESC  */}
        <p className="md:text-xl">Welcome to my digital canvas, Where innovation and creativity converge. With a keen eye for aesthetics and mastery of code, my portfolio showcases a diverse collection of projects that reflect my commeitment to excellence</p>
        {/* BUTTON  */}
        <div className="flex gap-4 w-full">
          <button className="rounded p-4 ring-1 ring-black bg-black text-white">View My Work</button>
          <button className="rounded p-4 ring-1 ring-black ">Contact Me</button>
        </div>
      </div>
    </div>
  );
}







// <div className="  h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
//       <div className="w-1/2"><Image
//         src='/rohan.jpg' alt="" width={500} height={500} className="object-contain "
//       /></div>
//       <div className="lg:h-full lg:w-1/2 flex flex-col gap-8 ">
//         {/* TITLE  */}
//         <h1 className="text-4xl font-bold py-4 md-6xl">Crafting  Digital Expreiences, Desining Tomorrow</h1>
//         {/* DESC  */}
//         <p className="md:text-xl pb-4">Welcome to my digital canvas, Where innovation and creativity converge. With a keen eye for aesthetics and mastery of code , my portfolio showcases a diverse collection of projects that reflect my commeitment to excellence</p>
//         {/* BUTTON  */}
        
//       </div>
//     </div>