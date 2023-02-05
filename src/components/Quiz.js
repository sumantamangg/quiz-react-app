import react from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';
import { useSelector, useDispatch} from 'react-redux'
import { fetchQuestions } from '../Features'
import { useEffect } from 'react';




export default function Quiz() {
    const dispatch = useDispatch()
    // useEffect(() => {
    //   dispatch(userActions.fetchQuestions())
    // }, [])
    
    function handleSubmit(e){

    }
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'> Question goes here</h2>
            <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
            {/* <Form.Label as="legend" column sm={2}>
                Select your Answers
            </Form.Label> */}
            <Col sm={10}>
                <Form.Check
                type="radio"
                label="first radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                />
                <Form.Check
                type="radio"
                label="second radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={10}>
                    <Button type="button" >
                        Previous
                    </Button>
                    <Button disabled={false} type="button" style={{marginLeft: "30%"}}>
                        Next
                    </Button>
                    
                </Col>
            </Form.Group>
            <Form.Group>
                <Col sm={10}>
                <Button disabled={false} type="submit" >
                        Submit
                    </Button>
                </Col>
            </Form.Group>
                
            </Form>
        </Card.Body>
    </Card>
</>
  )
}
