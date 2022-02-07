// Write your JS code here
import CryptucurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {listItems} = props

  return (
    <div className="CryptocurrenciesListContainer">
      <h1 className="title">Cryptocurrency Tracker</h1>
      <img
        className="image1"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <ul className="itemsContainer">
        <div className="currencyType">
          <p className="currency">Coin Type</p>
          <p className="currency">
            USD <span className="spanEuro">EURO</span>
          </p>
        </div>
        {listItems.map(item => (
          <CryptucurrencyItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
