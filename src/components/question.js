import React from "react"

const Question = ({ question, nextStep }) => {
  return (<div className="message-container">
    <div className="message">
      <h3 className="pergunta">{question.question}</h3>
      <div className="button-container">
        {
          question.answers.map((answer, index) => {
            return <button className="button" onClick={() => nextStep(answer)} key={index}>{answer}</button>
          })
        }
      </div>
    </div>
  </div>)
}
export default Question