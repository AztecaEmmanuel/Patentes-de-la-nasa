import React, {Component} from 'react';



class Contact extends Component {
    

    entrada = (e) => {

        e.preventDefault();
        setTimeout( () => { alert('Mensaje Enviado') },1000 )
        this.form.reset()
        console.log(e)
    
    }

    render() { 
        return (

            <div className="wp-100 center my-5">
                <div className="card wp-100">
    
                    <div className="row center">
                        <div className="col-sm-12 col-md-5 center" style={ { background: '#132D46' } }>
                            <h1 className="display-4 pb-1 text-center">Informacion <br/> & <br/> Contacto </h1>
                            <p className="card-title text-center">¿Name?</p>
                            <p className="card-title text-center">¿Email?</p>
                            <p className="card-title text-center">¿Phone?</p>
                        </div>
    
                        <div className="col-sm-12 col-md-5 bg-light">
                            <form ref={form => this.form = form} onSubmit={this.entrada}>
                                <h1 className="h1 text-center">Enviame un mensaje</h1>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input id="name" className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tel">Telefono/Celular</label>
                                    <input id="tel" className="form-control" type="tel" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" className="form-control" type="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje</label>
                                    <textarea id="mensaje" className="form-control"></textarea>
                                </div>
                                <div className="end">
                                    <button className="btn btn-primary" type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
    
                </div>
            </div>
        );
    }
}
 
export default Contact;