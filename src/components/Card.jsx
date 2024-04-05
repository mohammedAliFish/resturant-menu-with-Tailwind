const Card = ({ itemsData }) => {
  return (
    <div className="grid justify-center">
      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex  h-[200px] my-3 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
            >
              <img
                className="h-96 w-full rounded-[5px] object-center md:h-auto md:w-48"
                src={item.imgUrl}
                alt=""
              />
              <div className=" p-6 lg:w-[1100px] md:w-[500px]">
                <div className="flex flex-row justify-between">
                  <h5 className="mb-11 text-xl font-semibold text-neutral-800">
                    {item.title}
                  </h5>
                  <h5 className="mb-2 text-xl font-semibold text-[#b45b35]">
                    {item.price}
                  </h5>
                </div>
                <p className=" text-base text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <h1>كلشي ماكو </h1>
      )}
    </div>
  );
};

export default Card;
