import React from "react";
import { Route } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <main className="App">
                <div className="content" aria-live="polite">
                    <h1>App Page</h1>
                </div>
            </main>
        );
    }
}

export default App;
