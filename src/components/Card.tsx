import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function Card(cardInfo: { venueName: string; imgSrc: string }) {

  return (
    <InteractiveCard contentName={cardInfo.venueName}>
      <div className='w-full h-[70%] relative rounded-t-lg overflow-hidden'>
        <Image
          src={cardInfo.imgSrc}
          alt="card"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className='w-full h-[30%] p-[10px]'>
        <h3 style={{ padding: '10px' }} className="text-lg font-medium text-green-500">{cardInfo.venueName}</h3>
      </div>
    </InteractiveCard>
  );
}
