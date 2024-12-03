import { IoMdSearch } from "react-icons/io";
const SearchBox = () =>{
    return (
        <div className="searchBox position-relative allign-items-center">
            <IoMdSearch className="mr-2"/>
            <input type="text" placeholder="Search here"/>
        </div>
    )
}

export default SearchBox;