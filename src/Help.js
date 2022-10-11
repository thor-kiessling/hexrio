import './App.css';
import React from 'react';


const Help = () => {
    return (
        <div>

                <div className="App-navigation">
                    <img src="https://www.uscis.gov/sites/default/files/images/site/DHS_cis_W.svg" alt="DHS Logo" width="400"></img>


                    <div className="nav2">

                        <a href="./Help" class="button" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIaOdsZm0MOEw4Gisgm2D910hdg6Ebr_FkfCG9IzIKp4yGs6m4qHY7CbW420hp2BPxf0&usqp=CAU" width="20" height="20"></img>Help </a>
                        <a href="/" class="button">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" width="17" height="17"></img> Home </a>
                        <a href='/About' class="button">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png" width="15" height="15"></img>About</a>
                        <a href='/DataEntry' className="button">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png"
                                width="15" height="15"></img>Data Entry</a>

                    </div>
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