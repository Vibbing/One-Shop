export default function Loading() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {arr.map((_, index) => (
        <div
          key={index}
          className="w-[18%] h-[40vh] shadow-2xl rounded-2xl p-2 flex flex-col justify-center items-center gap-2"
        >
          <div className="w-[70%] h-[25vh] bg-gray-100 rounded-lg"></div>
          <span className="w-[40%] h-[5%] bg-gray-100"></span>
          <span className="w-[40%] h-[5%] bg-gray-100"></span>
        </div>
      ))}
    </>
  );
}
