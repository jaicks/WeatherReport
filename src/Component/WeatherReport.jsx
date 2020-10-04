import axios from "axios";
import React, { Component } from "react";
import moment from "moment";
class WeatherReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedCityDetails: [],
      fiveDaysDataList: [],
      activeDay: "",
      cityName: "patna",
      daysList: [],
    };
  }

  getFiveDaysWeatherReport = () => {
    axios
      .get("https://api.openweathermap.org/data/2.5/forecast", {
        params: {
          appid: "c85926f783685bd4203a4255e5b93c4f",
          lat: 51.51,
          lon: -0.13,
          cnt: 40,
        },
      })
      .then((res) => {
        const resData = res.data.list;
        let toDays = moment(resData[0].dt_txt).format("dddd");
        let daysList = [];
        var i;
        for (i = 0; i < 5; i++) {
          daysList.push(
            moment(resData[0].dt_txt).add(i, "days").format("dddd")
          );
        }
        this.setState({
          fiveDaysDataList: resData,
          activeDay: toDays,
          daysList,
        });
      });
  };

  getCityWeatherReport = () => {
    const { cityName } = this.state;
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          appid: "c85926f783685bd4203a4255e5b93c4f",
          q: cityName,
        },
      })
      .then((res) => {
        const resData = res.data;
        this.setState({ searchedCityDetails: resData }, () =>
          this.getFiveDaysWeatherReport()
        );
      });
  };

  componentDidMount() {
    this.getCityWeatherReport();
  }

  handleActiveDay = (day) => {
    this.setState({ activeDay: day });
  };

  handleSearchCity = (search) => {
    this.setState({ cityName: search });
  };
  render() {
    const {
      fiveDaysDataList,
      activeDay,
      searchedCityDetails,
      daysList,
    } = this.state;
    return (
      <div class="bg">
        <div class="container">
          <div className="row pt-5 ">
            <div className="col-9">
              <input
                class="form-control"
                type="text"
                placeholder="Enter City Name "
                aria-label="Search"
                onChange={(e) => this.handleSearchCity(e.target.value)}
              />
            </div>
            <div className="col-3">
              <button
                className="search_button"
                onClick={() => this.getCityWeatherReport()}
              >
                Search
              </button>
            </div>
          </div>
          <div class="row pt-5">
            {daysList &&
              daysList.map((data, index) => {
                return (
                  <div className="col " key={index}>
                    <div
                      className={`card al_card ${activeDay === data ? "active_card " : ""
                        }`}
                      onClick={() => this.handleActiveDay(data)}
                    >
                      <div class="card-body">
                        <h5 class="card-title text-center">{data}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <h2 className="mt-5 text-center text-info ">
            weather forecast 3 hours Duration basis..
          </h2>
          <div class="row text-center justify-content-center mt-5 pb-5">
            {fiveDaysDataList &&
              fiveDaysDataList.length > 0 &&
              fiveDaysDataList.map((data, index) => {
                return (
                  <>
                    {activeDay === moment(data.dt_txt).format("dddd") && (
                      <div class=" mt-2 mr-2 border  detailed_report_bg col-md-offset-4 col-md-5 col-sm-offset-3 col-sm-6 col-xs-offset-1 col-xs-10" key={index}>
                        <p className="title">{searchedCityDetails.name}</p>
                        <p class="hor-line"></p>
                        <div class="row">
                          <div class="col-xs-6 col-md-6 col-ms-6 text-center">
                            <div id="date">
                              {moment(data.dt_txt).format("DD/MMM/YYYY")}
                            </div>
                          </div>
                          <div class="col-xs-6 col-md-6 col-ms-6 text-center">
                            <div id="time">
                              {moment(data.dt_txt).format("HH A")}
                            </div>
                          </div>
                        </div>
                        <p id="description">{data.weather[0].description}</p>
                        <div class="row">
                          <div class="col-xs-6 col-md-6 col-ms-6 text-center temp">
                            <div className="detailed_report_icon">
                              <span>
                                <i
                                  className={`wi wi-owm-${data.weather[0].id}`}
                                ></i>
                              </span>
                            </div>
                          </div>
                          <div class="col-xs-6 col-md-6 col-ms-6 text-center temp">
                            <div>
                              <span id="temp">
                                {data.main.temp_max.toFixed(0)}°
                              </span>
                              <span class="temp_unit"> F</span>
                            </div>
                          </div>
                        </div>
                        <p class="hor-line"></p>
                        <div class="row">
                          <div class="col-xs-6  col-md-6 col-ms-6 text-center border-right">
                            <div class="text-left">
                              <span>
                                <i class="wi wi-strong-wind"></i> Wind:{" "}
                              </span>
                              <span id="wind">{data.wind.speed} mi/h</span>
                            </div>
                            <div class="text-left">
                              <span>
                                <i class="wi wi-windy"></i> Direction:{" "}
                              </span>
                              <span id="wind_dir">{data.wind.deg} ESE</span>
                            </div>
                          </div>
                          <div class="col-xs-6 col-ms-6 text-center">
                            <div class="text-left">
                              <span>
                                <i class="wi wi-thermometer"></i> Max:{" "}
                              </span>
                              <span id="temp_max"> {data.main.temp_max}°</span>
                              <span class="temp_unit">F</span>
                            </div>
                            <div class="text-left">
                              <span>
                                <i class="wi wi-thermometer-exterior"></i> Min:
                                &nbsp;
                              </span>
                              <span id="temp_min">{data.main.temp_min}°</span>
                              <span class="temp_unit">F</span>
                            </div>
                          </div>
                        </div>
                        <p class="hor-line"></p>

                        <div class="row">
                          <div class="col-xs-6 col-md-6 col-ms-6 text-center border-right">
                            <div class="text-left">
                              <span>
                                <i class="wi wi-humidity"></i> Humidity:{" "}
                              </span>
                              <span id="humidity"> {data.main.humidity} %</span>
                            </div>
                            <div class="text-left">
                              <span>
                                <i class="wi wi-barometer"></i> Pressure:{" "}
                              </span>
                              <span id="pressure">{data.main.pressure}</span>
                            </div>
                          </div>
                          <div class="col-xs-6 col-md-6 col-ms-6 text-center">
                            <div class="text-left">
                              <i class="wi wi-sunrise"></i> Sunrise:{" "}
                              <span id="sunrise">
                                {moment(
                                  new Date(
                                    searchedCityDetails.sys.sunrise * 1000
                                  )
                                ).format("HH:MM A")}{" "}
                              </span>
                            </div>
                            <div class="text-left">
                              <i class="wi wi-sunset"></i> Sunset: &nbsp;
                              <span id="sunset">
                                {moment(
                                  new Date(
                                    searchedCityDetails.sys.sunset * 1000
                                  )
                                ).format("HH:MM A")}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p class="hor-line"></p>
                        <div class="row">
                          <div class="col-xs-6 col-md-6 col-ms-6 text-center border-right">
                            <div class="text-left">
                              <span>Sea Level: </span>
                              <span id="sea_level">
                                {" "}
                                {data.main.sea_level} %
                              </span>
                            </div>
                          </div>
                          <div class="col-xs-6 col-md-6 col-ms-6 text-center">
                            <div class="text-left">
                              Ground Level:{" "}
                              <span id="grnd_level">
                                {data.main.grnd_level}{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherReport;
