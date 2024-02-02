export default function ProductDetailsShimmer() {
    return (
      <div className="w-full h-full flex justify-center items-center gap-10">
        <div className="w-[30%] h-[60%] bg-gray-100 rounded-lg"></div>
        <div className="w-[40%] h-[60%]">
          <small className=" bg-gray-100 w-[40%] h-[5%]  rounded"></small>
          <h1 className=" mb-5 w-[70%] bg-gray-100 mt-10 h-[20%] rounded"></h1>
          <h3 className="mb-4 w-[60%] text-s mt-10  bg-gray-100 h-[20%] rounded"></h3>
          <h4 className=" mt-8  bg-gray-100 h-[10%] w-[20%] rounded"></h4>
          <div className=" flex gap-5 ">
            <button className="w-[15%] p-5  mt-10 rounded-lg  bg-gray-100"></button>
            <button className="w-[15%] p-5  mt-10 rounded-lg  bg-gray-100"></button>
          </div>
        </div>
      </div>
    );
  }
  