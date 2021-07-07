import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div className="wp-100 center my-5" style={ { border: 'thin solid #132D46' } }>
                <div className="col-md-9">
                    <div className="card wp-100">
                        <div className="card-body text-center text-whites">
                            <h1 className="h1 pb-2">ABOUT</h1>
                            <p className="card-text line-height-40">
                            mutiny is a creatively driven advertising and marketing agency. We're not a digital, new media, innovation, social or content agency. We do those things, but refuse to be placed in such a tidy little box. We're an agency that listens, understands and then offers ideas to help our clients achieve their goals. We believe that it doesn't matter where, how or in what medium the solution is expressed, as long as it solves the problem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

         );
    }
}
 
export default About;