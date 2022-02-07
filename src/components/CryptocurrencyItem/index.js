// Write your JS code here
import './index.css'

const CryptucurrencyItem = props => {
  const {item} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = item
  return (
    <li className="eachItemContainer">
      <div className="logoNameContainer">
        <img className="currencyLogo" src={currencyLogo} alt={currencyName} />
        <p className="currencyName1">{currencyName}</p>
      </div>
      <div className="euroUsdContainer">
        <p className="euroUsdValues">{euroValue}</p>
        <p className="spanEuroUsdValues">{usdValue}</p>
      </div>
    </li>
  )
}

export default CryptucurrencyItem
