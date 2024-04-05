import { useState } from "react";

const Header = ({ filterBySearch }) => {

    const [searchValue , setSearchValue] = useState('')

    const onSearch = () =>{filterBySearch(searchValue)
    setSearchValue('')}

  return (
    <header>
      <nav className=" border-gray-200 sm:px-2 lg:px-6 py-2.5 bg-[#224f61]">
        <div className="flex flex-wrap justify-between  items-center mx-auto max-w-screen-xl">
          <a className="flex items-center">
            <h2 className="text-white font-semibold"> مطعم جديد</h2>
          </a>
          <div className="flex items-center lg:order-2">
            <input
              type="text"
              onChange={e=>setSearchValue(e.target.value)}
              className="rounded-[4px] p-[5px] outline-none"
              value={searchValue}
              placeholder="ابحث ..."
            />
            <button onClick={()=>onSearch()} className="bg-white mx-[5px] rounded-[4px] p-[5px]">
              ابحث
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
