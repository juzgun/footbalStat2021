import React from 'react';
import classes from "./ECStat.module.css"
import Seasons from '../Sesons/Seasons';


const ECStat = (props) => {
    return (
        <div id="match_table" className="col-sm-12">
            <div className={classes.navbar}>
                <Seasons />
            </div>
            178 matches in selection:
            <table className="table table-sm table-striped table-hover matches">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>MD</th>
                        <th></th>
                        <th>Fixture</th>
                        <th className="xls-only">Odds (1/x/2)</th><th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="6123" className="open_match_view">
                        <td className="datetime">
                            <span className="badge badge-pill badge-primary">FINISHED</span>
                            <span className="match_date ls-only">08.08.20</span>
                        </td>
                        <td className="matchday">

                        </td>
                        <td data-toggle="tooltip" data-placement="top" title="UEFA Champions League">
                            <img className="flag_matchview" src="/assets/flags/EUR.svg" />
                            &nbsp;
                        </td>
                        <td className="fixture">
                            <span className="homeTeam">
                                <img className="flag_matchview" src="" /><span className="ls-only">&nbsp;SP Tre Fiori</span><span className="sm-only">&nbsp;TRF</span>
                            </span>
                            <span className="awayTeam">
                                <span className="ls-only"> vs. </span>
                                <span className="sm-only">-</span>
                                <img className="flag_matchview" src="https://crests.football-data.org/1896.svg" /><span className="ls-only">&nbsp;Linfield</span><span className="sm-only">&nbsp;LIN</span>
                            </span>
                        </td>
                        <td className="odds xls-only">
                            /  /
                        </td>
                        <td className="score">
                            0:2
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ECStat;