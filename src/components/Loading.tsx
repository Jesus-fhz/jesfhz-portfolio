import React from "react";
import loading from "../images/loading.gif"

const Loading: React.FC = () => {

    return( 
        <div className="loading">
            <img src={loading} alt="loading" />
        </div>
    )

}

export default Loading