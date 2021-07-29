import React from 'react'; 
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api'

import coronaImage from './images/image.png'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state

    return (
      <div>
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={ data }/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
        <br></br>
        <br></br>
        <br></br>
        </div>
        <div className={styles.footer}>
          <p className={styles.footer1}>API utilizada: <a href="https://covid19.mathdro.id/api/">https://covid19.mathdro.id/api/</a> </p>
          <p className={styles.footer2}><a href="https://github.com/adrianhajdin/project_corona_tracker">Repositorio en GitHub</a></p>
          <p className={styles.footer3}><a href="https://github.com/adrianhajdin/project_corona_tracker">Repositorio Proyecto original (ingles)</a> </p>

        </div>
      </div >
    );
  }
}

export default App;