"use client";

import { useState } from "react";
import {SearchManufacturer} from "./";

function SearchBar() {
    const[manufacturer, setManufacturer] =  useState('');

    const handlesearch = () => {}
    
    return (
    <form className='searchbar' onSubmit=
    {handlesearch}>
        <div className="searchbar__item">
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            
            />

        </div>
    </form>
  )
}


export default SearchBar