import {useState} from 'react'
import GreetingTab from './Components/GreetingTab'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () => {
  const [idElement, setIdElement] = useState(languageGreetingsList[0].id)

  const changeState = id => {
    setIdElement(id)
  }

  const getGreeting = () => {
    const result = languageGreetingsList.find(i => i.id === idElement)
    return result
  }

  const {imageAltText, imageUrl} = getGreeting()

  return (
    <div className="container">
      <h1 className="heading">Multilingual Greetings</h1>
      <ul className="tabs-list">
        {languageGreetingsList.map(each => (
          <GreetingTab
            details={each}
            key={each.id}
            changeState={changeState}
            isActive={idElement === each.id}
          />
        ))}
      </ul>
      <img src={imageUrl} alt={imageAltText} className="image" />
    </div>
  )
}

export default App
