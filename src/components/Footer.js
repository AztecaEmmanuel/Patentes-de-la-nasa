import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer className="wp-100">
                <div className="wp-100 text-center">
                    <p className="text-muted">
                        Todos los derechos reservados AC CV Copy
                    </p>
                </div>
            </footer>
         );
    }
}
 
export default Footer;