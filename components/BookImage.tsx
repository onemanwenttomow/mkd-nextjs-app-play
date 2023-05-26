"use client";

import { Book } from "@/types/book";
import { calculateBookDimensions } from "@/utils";
import Image from "next/image";

export default function BookImage({ book }: { book: Book }) {
  const { page_num, title, author, image_url } = book;
  const { width, translateX, translateZ } = calculateBookDimensions(page_num);

  return (
    <div className="bookContainer">
      <div className="book">
        <style jsx>{`
          .book::before {
            width: ${width};
            transform: translateX(${translateX}) rotateY(90deg);
          }

          .book::after {
            transform: translateZ(-${translateZ});
          }
        `}</style>
        <Image
          src={image_url}
          alt={`${title} by ${author}`}
          title={`${title} by ${author}`}
          style={{ transform: `translateZ(${translateZ})` }}
          width="111"
          height="173"
        />
      </div>
    </div>
  );
}
