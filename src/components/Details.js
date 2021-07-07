import React from 'react';
import { useParams } from 'react-router-dom';
import { getStorage } from '../services/storage';

import textCleaning from '../services/textCleaning';

const Details = () => {

    const storage = getStorage();

    const { id } = useParams();

    const mod = id.substring(1)

    const patent = storage.filter( ( item ) => mod === item[0] )

    const detailsPatent = patent[0];

    const patentDescription = textCleaning(detailsPatent[3]);
    const patentTitle = textCleaning(detailsPatent[2]);

    return(
        <div className="container">
            <div className="wp-100 center size">
                <div className="col-sm-12 col-md-4">
                    <img className="img-max" src={detailsPatent[10]} alt=""/>
                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="wp-100 text-whites">
                            <p className="card-title">{detailsPatent[1]}</p>
                            <h1 className="h1">
                                {patentTitle}
                            </h1>
                            <p className="text-muted py-1">
                                {detailsPatent[5]}
                            </p>
                            <p className="card-text h3 line-height-25">
                                {patentDescription}
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Details;