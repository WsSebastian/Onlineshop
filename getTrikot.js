import React, { useState, useEffect } from 'react';

function getTrikot() {


    return (
        <div className="trikot">
            <div className="card" style="width: 18rem;">
                <img src="pictures/Gladbach.webp" className="card-img-top" alt="1. Bundesliga"></img>
                <div className="card-body">
                    <h5 className="card-title">Borussia Mönchengladbach Heim 22/23</h5>
                    <p className="card-text">Heimtrikot von Borussia Mönchengladbach der Bundesligasaison 22/23</p>
                    <a href="details.html" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    );
}