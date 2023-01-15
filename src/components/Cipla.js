import React from "react";
import Plot from "react-plotly.js";
import Ciplas from "../cipla.json";

class Cipla extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
    };
  }
  componentDidMount() {
    this.fetchStock();
  }
  fetchStock() {
    const pointerToThis = this;
    // const API_KEY = "E3K422B72LSDI7LO";
    // let StockSymbol = "AMZN";
    // // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TATASTEEL.BSE&outputsize=compact&apikey=${API_KEY}`;

    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    // fetch(API_Call)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //     for (var key in data["Time Series (Daily)"]) {
    //       stockChartXValuesFunction.push(key);
    //       stockChartYValuesFunction.push(
    //         data["Time Series (Daily)"][key]["1. open"]
    //       );
    //     }
    {
      Ciplas.map((cipla) => {
        stockChartXValuesFunction.push(cipla.Date);
        stockChartYValuesFunction.push(cipla.Open);
      });
    }
    pointerToThis.setState({
      stockChartXValues: stockChartXValuesFunction,
      stockChartYValues: stockChartYValuesFunction,
    });
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>Cipla</h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: "scatter",
              mode: "lines",
              marker: { color: "red" },
              fillcolor: "#F3FFF8",
              fill: "tozeroy",
            },
          ]}
          layout={{
            width: 1000,
            height: 500,
            title: `Cipla Ltd
            NSE: CIPLA`,

            xaxis: {
              // autorange: true,
              range: ["2018-01-15", "2023-01-12"],
              rangeselector: {
                buttons: [
                  {
                    count: 1,
                    label: "1d",
                    step: "day",
                    stepmode: "backward",
                  },
                  {
                    count: 7,
                    label: "1w",
                    step: "day",
                    stepmode: "backward",
                  },
                  {
                    count: 1,
                    label: "1m",
                    step: "month",
                    stepmode: "backward",
                  },
                  {
                    count: 3,
                    label: "3m",
                    step: "month",
                    stepmode: "backward",
                  },
                  {
                    count: 6,
                    label: "6m",
                    step: "month",
                    stepmode: "backward",
                  },
                  {
                    count: 12,
                    label: "1y",
                    step: "month",
                    stepmode: "backward",
                  },
                  {
                    count: 36,
                    label: "3y",
                    step: "month",
                    stepmode: "backward",
                  },
                  { step: "all" },
                ],
              },
              rangeslider: { range: ["2018-01-15", "2023-01-12"] },
              type: "date",
            },
          }}
        />
      </div>
    );
  }
}

export default Cipla;
