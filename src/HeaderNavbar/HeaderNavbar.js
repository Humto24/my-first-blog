import React from "react";
import PolymerIcon from '@material-ui/icons/Polymer';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import IconButton from "@material-ui/core/IconButton";
import "./HeaderNavbar.css"


const header = () => {
    return (
        <div>
            <header>
                <div className="topNav">
                    <IconButton>
                        <PolymerIcon className="topNav-left"/>
                    </IconButton>
                    <div className="topNav-rightContainer">
                        <IconButton>
                            <SearchIcon className="topNav-right"/>
                        </IconButton>
                        <IconButton>
                            <BookmarkBorderIcon className="topNav-right"/>
                        </IconButton>
                        <IconButton>
                            <VpnKeyIcon className="topNav-right"/>
                        </IconButton>
                        <button className="topNav-right">Upgrade</button>
                    </div>
                </div>
                <div className="header-banner">
                    <h1 className="header-banner-h1">This is my new Blog! Come and check it out!</h1>
                </div>
            </header>
            <div className="blog-container">
                <h1>This is my first Post please read and comment carefully.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aperiam cumque cupiditate
                    deserunt dignissimos dolore dolorem doloribus dolorum est eveniet excepturi, hic illo illum ipsum
                    iste labore laboriosam laudantium maiores maxime natus non numquam odit porro, possimus quaerat quia
                    quod recusandae rem repellat reprehenderit sit vero, voluptatum! Accusamus consectetur deleniti ea
                    incidunt, ipsam magnam quia rem repellendus saepe veritatis. Aliquam consectetur dignissimos, earum
                    in laborum maxime minus placeat quis. Alias animi architecto asperiores aspernatur atque autem
                    commodi, corporis culpa dignissimos distinctio dolorum eaque earum eligendi eum exercitationem illum
                    iste labore maxime nam numquam perspiciatis placeat possimus saepe vero voluptate.</p>
            </div>
        </div>
    );
}

export default header;