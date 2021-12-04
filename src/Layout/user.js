import react, {Component} from 'react';
import ScriptTag from 'react-script-tag';
import "../assets/css/lib/amchart/export.css"
import "../assets/css/lib/bootstrap/bootstrap.min.css"
import "../assets/css/animate.css"
import "../assets/css/custom.css"
//import "../assets/css/owl.carousel.min.css"
import "../assets/css/owl.theme.default.min.css"
import "../assets/css/style.css"

class user extends Component {

    render() {
        return (
            <react.Fragment>
                <head>
                    <meta charset="utf-8" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Web site created For using Banking Services By API" />
                    <title>CoinDash - Cryptocurrency Dashboard with Landing Page</title>



                </head>
                <body>
                    {this.props.children}
                    <footer>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/jquery/jquery.min.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/bootstrap/js/popper.min.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/bootstrap/js/bootstrap.min.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/jquery.slimscroll.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/sidebarmenu.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/sticky-kit-master/dist/sticky-kit.min.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/sparklinechart/jquery.sparkline.min.js"></ScriptTag>
                    <ScriptTag isHydrating={true} type="text/javascript" src="js/lib/sparklinechart/sparkline.init.js"></ScriptTag>

<ScriptTag isHydrating={true} type="text/javascript" src="../../../../../www.amcharts.com/lib/3/amcharts.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/chart-amchart/serial.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/chart-amchart/export.min.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src="js/lib/chart-amchart/light.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/chart-amchart/ammap.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/chart-amchart/worldLow.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/chart-amchart/pie.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/chart-amchart/amstock.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/chart-amchart/amchart-init.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/weather/jquery.simpleWeather.min.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/weather/weather-init.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/owl-carousel/owl.carousel.min.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/lib/owl-carousel/owl.carousel-init.js"></ScriptTag>
<ScriptTag isHydrating={true} type="text/javascript" src=".././assets/js/scripts.html"></ScriptTag>

<ScriptTag isHydrating={true} type="text/javascript" src="js/custom.min.js"></ScriptTag>
                    </footer>
                </body>
            </react.Fragment>

        )
    }
}
export default user;