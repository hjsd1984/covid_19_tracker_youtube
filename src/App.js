import React, {Component} from "react";

import { Cards, Chart, CountryPicker } from "./components"
import styles from './App.module.css'
import { fetchData } from './api'

class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData()
        //console.log(data);
        this.setState({ data: data })
    }

    handlerCountryChange = async (country) => {
        console.log(country);
    }

    render() {

        const { data } = this.state
        return (
            <div className={styles.container}>
                <Cards data={ data } />
                <CountryPicker handleCountryChange={ this.handlerCountryChange } />
                <Chart />
            </div>
        )
    }
}

export default App