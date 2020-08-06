import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
    return (
        <div className={'search_header'}>
            <div className={'search_icon'}>
                <SearchIcon style={{fontSize: 25}}/>
            </div>
            <input
                className={'search_input'}
                type={'search'}
                placeholder={'Поиск по названию товара, марке или категории'}
                autoComplete={'off'}
                tabIndex={'1'}
            />
        </div>
    )
}

export default Search;