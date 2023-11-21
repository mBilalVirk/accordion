import { useState } from 'react';
import data from './data'
import './App.css';
import SinglQuestion from './Question'
import questions from './data';
function App() {
  //const [question, setQuestion] = useState(data);
  return (
    
      <main>
        <div className="container">
          <div><h3>Question</h3></div>
          <section className="info">
          <section>
          {
            questions.map((question)=>{
              return <SinglQuestion key={question.id} {...question} />
            })
          }
        </section>
          </section>
        </div>
        
      </main>
   
  )
}

export default App
