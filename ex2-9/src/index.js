import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'tarun',
    number: 7056472001
  },
  {
    id: 2,
    name: 'lagadapati',
    number: 9100226124
  },
  
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)