import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card(props) {
  return (
    <Link href={props.href}>
      <div className="shadow-2xl bg-[#1B98F5] w-[260px] rounded-lg text-center py-3 px-10 mt-[60px] cursor-pointer">
        <a>
          <h2 className="text-lg mb-2 text-white">{props.name}</h2>
          <Image
            src={props.imgUrl}
            width={260}
            height={160}
            objectFit="cover"
          />
        </a>
      </div>
    </Link>
  );
}

export default Card;
