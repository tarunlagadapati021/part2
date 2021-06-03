import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'tarun'
  },
  {
    id: 2,
    name: 'lagadapati'
  },
  ]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)