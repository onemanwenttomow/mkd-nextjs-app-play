import { Book } from "@/types/book";
import { getData } from "@/utils";
import BookImage from "@/components/BookImage";

export default async function AllBooks() {
  const { books } = await getData();

  return (
    <main>
      {books.map((book: Book) => (
        <BookImage key={book.id} book={book} />
      ))}
    </main>
  );
}
