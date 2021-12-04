import react, { Component } from 'react';
import ScriptTag from 'react-script-tag';

import ".././asset/css/bootstrap/bootstrap.css"
import ".././asset/css/style.css"
import ".././asset/css/animated.css"
import ".././asset/css/newcustom.css"

class Front extends Component {

    render() {
        return (
            <react.Fragment>
                <head>
                    <meta charset="utf-8" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Web site created For using Banking Services By API" />
                    <title>EBANKAPI</title>



                </head>
                <body>
                    {this.props.children}
                    <footer>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././asset/js/jquery.min.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././asset/js/popper.min.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././asset/js/bootstrap.min.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././asset/js/bootstrap.bundle.min.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././asset/js/owl-carousel.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././asset/js/animation.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././asset/js/custom.js"></ScriptTag>
                    </footer>
                </body>
            </react.Fragment>

        )
    }
}
export default Front;