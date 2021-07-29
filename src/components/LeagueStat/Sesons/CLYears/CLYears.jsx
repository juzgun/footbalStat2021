import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './CLYears.module.css';



function CLYears(props) {
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);
    let [items, setItems] = useState([]);
    let [season, setSeason] = useState(props.season);

    let showCommands = (event) => {
        props.showCommands(event.target.dataset.season);
    };

    useEffect(() => {
        fetch(`https://api.football-data.org/v2/competitions/CL`, {
            headers: { 'x-Auth-Token': '5dcd489dcd6842c68d4d7808b50209d9' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.seasons);
                },
                (error) => {
                    isLoaded(true);
                    setError(error);
                }
            )
    }, [season, isLoaded]);
    if (error) {
        return <p>` Error {error.message} try reload page later `</p>
    } else if (!isLoaded) {
        return <p>` Loading... `</p>
    } else if (items) {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <NavLink to={`/commands/chamionleague/${item.startDate.slice(0, 4)}`}>
                            <button data-season={Number(item.startDate.slice(0, 4))} onClick={showCommands}>
                                {item.startDate.slice(0, 4)}
                            </button>
                        </NavLink>
                    </li>
                ))}
            </ul>)
    } else {
        return (
            <p>Sorry there is no data, please try later.</p>
        )
    };
};


export default CLYears;



// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import classes from './CLYears.module.css';


// export default class CLYears extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         };
//         this.showCommands = (event) => {
//             props.showCommands(event.target.dataset.season);
//         };
//     }

//     async componentDidMount() {
//         await fetch('https://api.football-data.org/v2/competitions/CL', {
//             headers: { 'x-Auth-Token': '5dcd489dcd6842c68d4d7808b50209d9' }
//         })
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     this.setState({
//                         isLoaded: true,
//                         items: result.seasons
//                     });
//                 },
//                 (error) => {
//                     this.setState({
//                         isLoaded: true,
//                         error
//                     });
//                 }
//             )
//     }


//     render() {
//         const { error, isLoaded, items } = this.state;
//         if (error) {
//             return <p>` Error {error.message} `</p>
//         } else if (!isLoaded) {
//             return <p>` Loading... `</p>
//         } else {
//             return (
//                 <ul>
//                     {items.map(item => (
//                         <li key={item.id}>
//                             <NavLink to={`/commands/chamionleague/${item.startDate.slice(0, 4)}`}>
//                                 <button data-season={Number(item.startDate.slice(0, 4))} onClick={() => { return (this.showCommands) }}>
//                                     {item.startDate.slice(0, 4)}
//                                 </button>
//                             </NavLink>
//                         </li>
//                     ))}
//                 </ul>
//             )
//         }
//     }
// }