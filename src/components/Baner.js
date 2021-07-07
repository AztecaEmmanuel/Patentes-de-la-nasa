import React from 'react'

const Rutas = props => {
    const backgrondUrl = 'https://revistacosmos.com/wp-content/uploads/2015/10/Cosmos-Background.jpg'
    const logoUrl = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FNASA-Logo-PNG-Download-Image.png&f=1&nofb=1'

    return (
        <div className="relative wp-100 vh-100">

            <div className="absolute around wp-100 vh-90" style={ { left: 0 } }>

                <div className="col-0 col-sm-3 col-md-4">
                    <img className="img-max" src={logoUrl} alt="Nasa"/>
                </div>
                <div className="card col-sm-12 col-md-6 text-whites">
                    <h1 className="display-4 text-center pb-1">Patentes de la nasa</h1>
                    <p className="h2 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores voluptatem voluptate iusto nostrum voluptatibus saepe dolor iste,
                        debitis placeat reiciendis minus nam esse blanditiis perferendis natus distinctio. Quasi, vero soluta.
                    </p>
                </div>

                <div className="col-md-12 center">
                    <a href="#lista" className="btn btn-primary">Preciona click para iniciar</a>
                </div>

            </div>

            <img className="img-max" src={backgrondUrl} alt="cosmos"/>
            
        </div>
    )
}


export default Rutas
