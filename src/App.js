import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Instructions from "./Components/Instructions/Instructions";
import Smize from "./Components/Smize/Smize";
import Share from "./Components/Share/Share";
import BackgroundVideo from "./Videos/backgroundVideo.mp4";
import Footer from "./Components/Footer/Footer";
import Context from "./Context";
import config from "./config";

class App extends React.Component {
    //primary state used with context
    state = {
        error: null,
        //publicly accessible variables
        currentPage: "home",
        categories: [],
        sayings: [],
        previousRnd: 0,
        currentCategory: 1,
        timer: 3,
        seconds: 3,
        animSpeed: "three",
        currentSaying: "Collecting your first smize.",
        counting: false,
        //publicly accessible functions
        //stop timer
        stopCounting: () => {
            this.setState({
                counting: false,
            });
        },
        //add saying to context
        addSaying: (sayings) => {
            this.setState({
                sayings: [...this.state.sayings, sayings],
            });
        },
        //deletes saying from context
        deleteSaying: (id) => {
            const newSayings = this.state.sayings.filter((ns) => parseInt(ns.id) !== parseInt(id));
            this.setState({
                sayings: newSayings,
            });
        },
        //sets current setting to be displayed
        setCurrentSaying: (str) => {
            this.setState({
                currentSaying: str,
            });
        },
        //sets page currently selected and ensures that timer has stopped
        setCurrentPage: (selection, count) => {
            this.setState({
                currentPage: selection,
                counting: count,
            });
        },
        //sets currently selected category
        setCurrentCategory: (id) => {
            this.setState({
                currentCategory: id,
            });
        },
        //set timer length and start timer
        setCount: () => {
            this.setState({
                counting: true,
            });
            this.state.startTimer();
        },
        //begin timer
        startTimer: () => {
            this.myInterval = setInterval(() => {
                if (!this.state.counting) {
                    clearInterval(this.myInterval);
                    return;
                }
                const seconds = this.state.seconds;

                if (seconds > 0) {
                    this.setState(({ seconds }) => ({
                        seconds: seconds - 1,
                    }));
                }

                if (seconds === 0) {
                    clearInterval(this.myInterval);
                    this.state.chooseRandom();
                }
            }, 1000);
        },
        //choose a random saying to display
        chooseRandom: () => {
            //filter sayings based on chosen category
            const currentSayings = this.state.sayings.filter(
                (s) => parseInt(s.category_id) === parseInt(this.state.currentCategory)
            );

            //get random number
            let rnd = Math.floor(Math.random() * Math.floor(currentSayings.length));
            //prevents same random value in a row
            if (rnd === this.state.previousRnd) {
                rnd = Math.floor(Math.random() * Math.floor(currentSayings.length));
            }
            this.setState({
                previousRnd: rnd,
            });

            //get random saying
            const str = currentSayings[rnd].saying_content;
            this.setState({
                currentSaying: str,
                seconds: this.state.timer,
            });

            //start countdown timer again
            this.state.startTimer();
        },
        //check current timer length
        handleTimer: (num) => {
            switch (num) {
                case 0:
                    this.setState({ timer: 3, seconds: 3, animSpeed: "three" });
                    break;
                case 3:
                    this.setState({ timer: 5, seconds: 5, animSpeed: "five" });
                    break;
                case 5:
                    this.setState({ timer: 7, seconds: 7, animSpeed: "seven" });
                    break;
                case 7:
                    this.setState({ timer: 10, seconds: 10, animSpeed: "ten" });
                    break;
                case 10:
                    this.setState({ timer: 15, seconds: 15, animSpeed: "fifteen" });
                    break;
                case 15:
                    this.setState({ timer: 20, seconds: 20, animSpeed: "twenty" });
                    break;
                default:
                    this.setState({ timer: 3, seconds: 3, animSpeed: "three" });
                    break;
            }
        },
    };

    componentDidMount() {
        //get all categories from api and pass into state
        fetch(`${config.API_ENDPOINT}/api/categories`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((error) => Promise.reject(error));
                }
                return response.json();
            })
            .then((categories) => {
                this.setState({ categories });
            })
            .catch((error) => {
                console.error("Category error: ", error);
            });

        //get all sayings from api and pass into state
        fetch(`${config.API_ENDPOINT}/api/sayings`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((error) => Promise.reject(error));
                }
                return response.json();
            })
            .then((sayings) => {
                this.setState({ sayings });
            })
            .catch((error) => {
                console.error("Course error: ", error);
            });
    }

    render() {
        return (
            <main className="App">
                <Context.Provider value={this.state}>
                    <NavBar />
                    <video className="background-video" autoPlay loop muted>
                        <source src={BackgroundVideo} type="video/mp4" />
                    </video>
                    <div className="cover" />
                    <div className="content" aria-live="polite">
                        <Route exact path="/" component={Instructions} />
                        <Route path="/smize" component={Smize} />
                        <Route path="/share" component={Share} />
                    </div>
                    <Footer />
                </Context.Provider>
            </main>
        );
    }
}

export default App;
