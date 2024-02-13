import './index.css'

const GreetingTab = props => {
  const {details, changeState, isActive} = props
  const {id, buttonText} = details
  const buttonEl = isActive === true ? 'activeEl' : 'notActiveEl'

  const click = () => {
    changeState(id)
  }

  return (
    <li className="button-list">
      <button className={buttonEl} type="button" onClick={click}>
        {buttonText}
      </button>
    </li>
  )
}

export default GreetingTab
