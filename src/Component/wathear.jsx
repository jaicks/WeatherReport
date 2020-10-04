import React, { Component } from 'react'

export default class wathear extends Component {
    render() {
        return (
            <div className = "bg">
            <div className="container">
            <div className="row text-center">
                <div className="border col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-1 col-xs-10">
                    <div className="row" id="location"></div>
                    <p className="hor-line"></p>
                    <div className="row">
                        <div className="col-xs-6 col-ms-6 text-center">
                            <div id="date"></div>
                        </div>
                        <div className="col-xs-6 col-ms-6 text-center">
                            <div id="time"></div>
                        </div>
                    </div>
                    <p id="description"></p>
                    <div className="row">
                        <div className="col-xs-6 col-ms-6 text-center temp">
                            <div id="icon"></div>
                        </div>
                        <div className="col-xs-6 col-ms-6 text-center temp">
                            <div><span id="temp"></span><span className="temp_unit"></span></div>
                        </div>
                    </div>
                    <p className="hor-line"></p>
                    <div className="row">
                        <div className="col-xs-6 col-ms-6 text-center border-right">
                            <div className="text-left"><span><i className="wi wi-strong-wind"></i> Wind: </span><span id="wind"></span></div>
                            <div className="text-left"><span><i className="wi wi-windy"></i> Direction: </span><span id="wind_dir"></span></div>
                        </div>
                        <div className="col-xs-6 col-ms-6 text-center">
                            <div className="text-left"><span><i className="wi wi-thermometer"></i> Max: </span><span id="temp_max"></span><span className="temp_unit"></span></div>
                            <div className="text-left"><span><i className="wi wi-thermometer-exterior"></i> Min: &nbsp;</span><span id="temp_min"></span><span className="temp_unit"></span></div>
                        </div>
                    </div>
                    <p className="hor-line"></p>

                    <div className="row">
                        <div className="col-xs-6 col-ms-6 text-center border-right">
                            <div className="text-left">
                                <span><i className="wi wi-humidity"></i> Humidity: </span>
                                <span id="humidity"></span>
                            </div>
                            <div className="text-left">
                                <span><i className="wi wi-barometer"></i> Pressure: </span>
                                <span id="pressure"></span>
                            </div>
                        </div>
                        <div className="col-xs-6 col-ms-6 text-center">
                            <div className="text-left">
                                <i className="wi wi-sunrise"></i> Sunrise: <span id="sunrise"></span>
                            </div>
                            <div className="text-left">
                                <i className="wi wi-sunset"></i> Sunset: &nbsp;<span id="sunset"></span>
                            </div>
                        </div>
                    </div>
                    <p className="hor-line"></p>
                    <div className="row">
                        <div className="col-xs-6 col-ms-6 text-center border-right">
                            <div className="text-left">
                                <span>temp in </span>
                                <span><button className="settings settings_selected" id="far">F</button></span>
                                <span> / </span>
                                <span><button className="settings" id="cel">C</button></span>
                            </div>
                        </div>
                        <div className="col-xs-6 col-ms-6 text-center">
                            <div className="text-left">
                                <span><button className="settings settings_selected" id="twelve">12</button></span>
                                <span> / </span>
                                <span><button className="settings" id="twentyfour">24</button></span>
                                <span>hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        )
    }
}

export default wathear;