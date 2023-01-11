import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabId = () => {
    updateActiveId(tabId)
  }

  const activeBtnClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeBtnClassName}`}
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
