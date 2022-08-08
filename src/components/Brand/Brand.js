import React from "react";
import { Link } from "react-router-dom";
import "./Brand.scss"

function Brand() {
    return (
        <div  className={"brand"}>
            <Link to={"/home"}>
                <h1>
                    V
                    <img src={""} width={"24px"} alt=""/>
                    sic
                </h1>
            </Link>
        </div>
    );
}

export default Brand;
