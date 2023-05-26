export async function getData() {
  const res = await fetch(
    "https://my-kindle-deals.herokuapp.com/get-user-books"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const SMALLEST_PAGE_NUMBER = 50;
const LARGEST_PAGE_NUMBER = 1000;

function mapToRange(value: string, x2: number, y2: number) {
  return (
    ((Number(value) - SMALLEST_PAGE_NUMBER) * (y2 - x2)) /
      (LARGEST_PAGE_NUMBER - SMALLEST_PAGE_NUMBER) +
    x2
  );
}

export function calculateBookDimensions(numberOfPages: string) {
  const width = mapToRange(numberOfPages, 13, 73) + "px";
  const translateZ = mapToRange(numberOfPages, 7.5, 37.5) + "px";
  const translateX = mapToRange(numberOfPages, 100.5, 70.5) + "px";
  return { width, translateZ, translateX };
}
