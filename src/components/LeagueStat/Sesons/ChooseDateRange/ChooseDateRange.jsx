import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ChooseDateRange.module.css';


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ChooseDateRange = (props) => {
    let [dateRange, setDateRange] = useState(['', '']);
    let [startDate, endDate] = dateRange;

    function changeDates(dateRange) {
        debugger;
        props.changeDates(dateRange);
        setDateRange(dateRange);
        // console.log(`${((dateRange[0]).getFullYear())} - ${((dateRange[0]).getMonth())} - ${((dateRange[0]).getDate())}`)
    };

    return (
        <div>
            <DatePicker
                dateFormat="yyyy-MM-dd"
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    changeDates(update);
                }}
                isClearable={true}
            />
        </div>
    );
};


export default ChooseDateRange;
