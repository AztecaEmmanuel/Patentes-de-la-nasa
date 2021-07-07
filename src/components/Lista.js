import React from 'react'
import Card from './Card'


const Lista = props => {

    const { data } = props;
        
    return (
        <>
            {data.map( (item,index) => <Card key={index.toString()} patent={item}></Card> )}
        </>
    )

}

export default Lista;
