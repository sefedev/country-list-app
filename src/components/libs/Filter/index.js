import * as React from 'react';
import { FILTER_LIST } from "./filter-list"
import { FilterStyle } from './style';


export default function Filter() {
    return (
        <form>
            <FilterStyle>
                <option>Filter By Region</option>
            {FILTER_LIST.map((item) => 
                (
                <option key={item} value={item}>
                    {item}
                </option>)
            )}
            </FilterStyle>
        </form>
    )
}