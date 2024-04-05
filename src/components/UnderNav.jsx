const UnderNav = ({ filterByCategory, allCategory }) => {
  const onFilter = (cat) => {
    filterByCategory(cat);
  };

  return (
    <div className="my-[20px] grid justify-center ">
      <h1 className="inline border-b-2 border-solid font-semibold mx-auto text-4xl pb-3 px-3 border-[#b45b35]">
        قائمة الطعام
      </h1>
      <div  className="my-[20px] ">
      {allCategory.length >= 1 ? (
        allCategory.map((cat) => {
          return (
           
              <button
                type="button"
                key={cat.id}
                onClick={() => onFilter(cat)}
                className=" mx-[3px] rounded-[5px] bg-[#224f61] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                {cat}
              </button>
             
           
          );
        })
      ) : (
        <h4>طييط</h4>
      )}
       </div>
    </div>
  );
};

export default UnderNav;
