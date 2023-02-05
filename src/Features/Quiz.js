import react, { useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';
import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { fetchQuiz, selectAnswer, nextQuestion, previousQuestion, calculateResult } from './QuizSlice';


export default function Quiz() {
    const dispatch = useDispatch()
    const { allQuestions, loading, error, currentQuestion, totalQuestions, answers, nextQuestionNumber } = 
        useSelector(state => state.quiz)
    //const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        //setSelectedOption(e.target.value);
        dispatch(selectAnswer(e.target.value))
    };
  
    useEffect(() => {
      dispatch(fetchQuiz())
    }, [])
  
    function handleNextButton(){
        dispatch(nextQuestion())
    }

    function handlePreviousButton(){
        dispatch(previousQuestion())
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(calculateResult())
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'> 
                <>
                    {allQuestions[currentQuestion]?.question}
                </>
            </h2>
            <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
            <div>
                {allQuestions[currentQuestion]?.all_answers.map((option) => (
                    <div key={option}>
                    <input
                        type="radio"
                        value={option}
                        //checked={selectedOption === option}
                        checked={answers[currentQuestion] === option}
                        onChange={handleOptionChange}
                    />
                    <label>{option}</label>
                    </div>
                ))}
            </div>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={10}>
                    {currentQuestion > 0 && <Button 
                        type="button" 
                        onClick= {()=>{handlePreviousButton()}}>
                        Previous 
                    </Button>}
                    {nextQuestionNumber != totalQuestions &&<Button 
                        disabled={ nextQuestionNumber > answers.length } 
                        type="button" 
                        onClick={()=>{handleNextButton()}}
                        style={{marginLeft: "30%"}}>
                        Next
                    </Button>}
                </Col>
            </Form.Group>
            <Form.Group>
                <Col sm={10}>
                {nextQuestionNumber === totalQuestions &&<Button 
                    disabled={ answers.length != totalQuestions} 
                    type="submit" 
                    >
                    Submit
                </Button>}
                </Col>
            </Form.Group>
            </Form>
        </Card.Body>
    </Card>
</>
  )
}
