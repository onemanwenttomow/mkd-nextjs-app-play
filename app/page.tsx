import { getData } from "@/utils";
import { Book } from "@/types/book";
import BookImage from "@/components/BookImage";

export default async function Home() {
  const { books, numberOf99ps } = await getData();
  const current99ps = books.filter((book: Book) => book.price === "0.99");
  return (
    <main>
      <div>Number of 99ps: {numberOf99ps}</div>

      {current99ps.map((book: Book) => (
        <BookImage key={book.id} book={book} />
      ))}
    </main>
  );
}
