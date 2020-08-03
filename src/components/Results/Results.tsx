import React, { useContext } from 'react';
// Context
import { GlobalContext } from '../../context/context';
// Styles
import { Wrapper, ButtonWrapper } from './Results.styles';
// Types
import { Question } from '../../types';
type Props = {
    setAppState: React.Dispatch<React.SetStateAction<number>>;
}

const Results: React.FC<Props> = ({ setAppState }) => {
    const { quizData: { 
        score, 
        totalQuestions, 
        questions, 
        correctAnswers, 
        userAnswers 
    } } = useContext(GlobalContext);
    return (
        <Wrapper>
            <div className="heading">Quiz Results</div>
            <div className="score">{`Score: ${score}/${totalQuestions}`}</div>
            {questions.map( (question: Question, i: number) => (
                <div className="qDiv">
                    <div className="qNum">{`Question # ${i + 1}/${totalQuestions}`}</div>
                    <div className="qStatement">{question.questionStatement}</div>
                    {question.options.map( (option: string) => (
                        <ButtonWrapper
                            key={option}
                            correct={correctAnswers[i] === option}
                            userClicked={userAnswers[i] === option}
                        >
                            <button disabled value={option}>
                                <span dangerouslySetInnerHTML={{ __html: option }} />
                            </button>
                        </ButtonWrapper>
                    ))}
                </div>
            ))}

            <button className="next" onClick={ () => setAppState(0) }>
                Start New Quiz
            </button>
        </Wrapper>
    );
}

export default Results;
