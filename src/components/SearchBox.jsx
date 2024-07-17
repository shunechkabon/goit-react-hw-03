import s from "./SearchBox.module.css";

const SearchBox = ({ searchQuery, onSearchChange }) => { 
    return (
        <div className={s.searchBox}>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={searchQuery}
                onChange={onSearchChange}
            />
        </div>
        );
}

export default SearchBox;