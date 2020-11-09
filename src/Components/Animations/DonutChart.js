import React from "react";
import "./DonutChart.css";
import Context from "../../Context";

export default class DonutChart extends React.Component {
    ///TEMPORARILY ON HOLD
    static contextType = Context;
    render() {
        return (
            <div id="donut" className="donut-section">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-50 -50 100 100"
                    width="250"
                    height="250"
                >
                    <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle
                            className={this.context.animSpeed}
                            transform="scale(-1 1) rotate(-90)"
                            r="46"
                            stroke-width="8"
                            pathLength="1"
                        />
                        <path d="M -20 -0 l 15 15 25 -25" stroke-width="10" pathLength="1" />
                    </g>
                </svg>
            </div>
        );
    }
}
