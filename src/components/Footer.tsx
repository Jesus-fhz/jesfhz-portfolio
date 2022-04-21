import React from "react";

import '../styles/global.scss'

const Footer: React.FC = () => {

    return( 
        <section className="footer">
            <p>We rise by lifting others.</p>
            Jesus Flores - {(new Date().getFullYear())}
        </section>
    )

}

export default Footer