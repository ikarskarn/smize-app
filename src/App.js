import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Instructions from "./Components/Instructions/Instructions";
import Smize from "./Components/Smize/Smize";
import BackgroundVideo from "./Videos/backgroundVideo.mp4";
import Footer from "./Components/Footer/Footer";
import Context from "./Context";
import STORE from "./STORE";

class App extends React.Component {
    //primary state used with context
    state = {
        error: null,
        //publicly accessible variables
        currentPage: "home",
        categories: STORE.categories,
        sayings: STORE.sayings,
        previousRnd: 0,
        currentCategory: 1,
        timer: 3,
        seconds: 3,
        currentSaying: "",
        counting: false,
        //publicly accessible functions
        setCurrentSaying: (str) => {
            this.setState({
                currentSaying: str,
            });
        },
        setCurrentPage: (selection, count) => {
            this.setState({
                currentPage: selection,
                counting: count,
            });
        },
        setCurrentCategory: (id) => {
            this.setState({
                currentCategory: id,
            });
        },
        setCount: () => {
            this.setState({
                counting: true,
            });
            this.state.startTimer();
        },
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
            const str = currentSayings[rnd].content;
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
                    this.setState({ timer: 3, seconds: 3 });
                    break;
                case 3:
                    this.setState({ timer: 5, seconds: 5 });
                    break;
                case 5:
                    this.setState({ timer: 7, seconds: 7 });
                    break;
                case 7:
                    this.setState({ timer: 10, seconds: 10 });
                    break;
                case 10:
                    this.setState({ timer: 15, seconds: 15 });
                    break;
                case 15:
                    this.setState({ timer: 20, seconds: 20 });
                    break;
                default:
                    this.setState({ timer: 3, seconds: 3 });
                    break;
            }
        },
    };

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
                    </div>
                    <Footer />
                </Context.Provider>
            </main>
        );
    }
}

export default App;
