// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, clickOnSuggestion} = props
  const {suggestion} = item

  const onClickArrow = () => {
    clickOnSuggestion(suggestion)
  }

  return (
    <li className="list-container">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arr-icon"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
