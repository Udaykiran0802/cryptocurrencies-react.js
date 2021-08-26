import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoCurrencyView = () => {
    const {cryptoCurrenciesData} = this.props

    return (
      <div className="crypto-curriencies-List">
        <div className="list-header">
          <p className="list-coin-type-heading">Coin Type</p>
          <div className="usd-and-euro-values-container">
            <p className="list-coin-value-heading">USD</p>
            <p className="list-coin-value-heading">EURO</p>
          </div>
        </div>
        <ul className="list-body">
          {cryptoCurrenciesData.map(eachItem => (
            <CryptocurrencyItem
              key={eachItem.id}
              cryptoCurrenciesData={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-currencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency tracker"
          className="cryptocurrency-image"
        />
        {this.renderCryptoCurrencyView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
