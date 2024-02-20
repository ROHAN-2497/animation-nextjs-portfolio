import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2">
        <Image
          src="/rohan.jpg" alt="fill" width={100} height={100}
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2">
        <h1>Crafting  Digital Expreiences , Desining Tomorrow</h1>
        <p>Welcome to my digital canvas, Where innovation and creativity converge. With a keen eye for aesthetics and mastery of code , my portfolio showcases a diverse collection of projects that reflect my commeitment to excellence</p>
      </div>
    </div>
  );
}
