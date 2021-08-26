import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoCurrenciesData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrencyList()
  }

  getCryptoCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogoUrl: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    this.setState({cryptoCurrenciesData: formattedData, isLoading: false})
  }

  renderCryptocurrenciesList = () => {
    const {cryptoCurrenciesData} = this.state
    return <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
