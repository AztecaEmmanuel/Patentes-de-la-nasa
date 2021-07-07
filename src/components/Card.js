import React from 'react';
// import { Link } from 'react-router-dom';

import textCleaning from '../services/textCleaning';




const Card = ({patent}) => {
    // let idDetails = `/details:${patent[0]}`;

    const patentDescription = textCleaning(patent[2]);
    

    return(
        <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card relative h-500" style={{left:0}}>
                <div className="card-body wp-100 absolute bottom-10 text-light" style={{left:0}}>

                    <p className="h5 pb-1">{patent[9]}</p>
                    <p className="h5 pb-1">{patent[5]}</p>
                    <h1 className="card-title">{patent[1]}</h1>
                    <p className="card-text">{patentDescription}</p>

                    <div className="center">
                            {/* <Link to={idDetails} className="btn btn-primary text-center"> */}
                                <a className="btn btn-primary text-center" href="/#">More Details</a>
                            {/* </Link> */}
                    </div>

                </div>
            
                <img className="img-max radiuspx-10" src={patent[10]} alt="si" />
            </div>
        </div>
    )

}

export default Card;