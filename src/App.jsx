import './App.css'
import apple from "../src/assets/apple.png"
import google from "../src/assets/google.png"
function App() {

  return (
    <div className='background'>
      <div className='box1'>
      <div className='box2 inner'>ErrandBrij</div>
      </div>
      <div className='box2'>We are not just seeing delivery, we see you!</div>
    <div>
      <img width={120} src={google} />
      <img width={120} src={apple} />
    </div>
    </div>
  )
}

export default App
