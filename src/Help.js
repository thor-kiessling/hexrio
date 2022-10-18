import './App.css';
import React from 'react';
import Nav2 from './Nav2.js';


const Help = () => {
    return (
        <div>

                <div className="App-navigation">
                    <img src="https://www.uscis.gov/sites/default/files/images/site/DHS_cis_W.svg" alt="DHS Logo" width="400"></img>


                    <Nav2 />
                </div>
            <div>
            <header className="Help-header">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Seal_of_the_U.S._Department_of_Homeland_Security.svg/1280px-Seal_of_the_U.S._Department_of_Homeland_Security.svg.png"
                    alt="DHS Logo" width="200"></img>
                <p>Help and Support</p>

            </header>
                </div>
            <div>
                <body className= "Help-body">
                <p>
                    <img src="https://www.citypng.com/public/uploads/small/11641123688oinq8oxqwrgkedykcdiqt9wd5pfihw0mu52084avpumpyc3byuwemjm0wcvccgikkpyhs5phnsypkc9mtlpw0qclyzcixe1jnbxy.png"
                         width="45" height="45"></img>
                     Verify your identity
                    <br></br><br></br>
                    <img src="https://cdn.onlinewebfonts.com/svg/img_519880.png" width="40" height="40"></img>
                     Trouble signing in?
                    <br></br>
                </p>

                </body>
            </div>
            <div>
                <footer className="Help-footer">
                    <p> More information </p>
                </footer>
            </div>


        </div>
    );
};

export default Help;