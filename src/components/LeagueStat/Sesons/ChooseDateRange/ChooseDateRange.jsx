import React, { useState } from 'react';
import classes from './ChooseDateRange.module.css';


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ChooseDateRange = (props) => {
    let [dateRange, setDateRange] = useState(['', '']);
    let [startDate, endDate] = dateRange;


    function changeDates(dateRange) {
        props.changeDates(dateRange);
        setDateRange(dateRange);
    };

    return (
        <div className={classes.filter}>
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
