import { useRef, useEffect } from "react";

const BookDetail = ({
  genere,
  description,
  handleClickOutside,
}: {
  genere: string;
  description: string;
  handleClickOutside: () => void;
}) => {
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        descriptionRef.current &&
        !descriptionRef.current.contains(event.target as Node)
      ) {
        handleClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClickOutside]);

  return (
    <div
      ref={descriptionRef}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-85"></div>
      <div className="z-10 text-white p-2">
        <h5 className="text-2xl font-semibold mb-2">{genere}</h5>
        <hr /> <p>{description}</p>
      </div>
    </div>
  );
};

export default BookDetail;
