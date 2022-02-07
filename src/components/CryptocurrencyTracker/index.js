// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {listItems: [], notFetched: true}

  componentDidMount() {
    this.apiCall()
  }

  apiCall = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const freshData = data.map(item => ({
      currencyLogo: item.currency_logo,
      currencyName: item.currency_name,
      euroValue: item.euro_value,
      id: item.id,
      usdValue: item.usd_value,
    }))
    this.setState({listItems: freshData, notFetched: false})
  }

  render() {
    const {listItems, notFetched} = this.state

    return (
      <div className="bgContainer">
        {notFetched ? (
          <div testid="loader">
            <Loader type="Rings" color="#6df7e5" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList listItems={listItems} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
