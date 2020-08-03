import React, { useContext } from 'react';
// Context
import { GlobalContext } from '../../context/context';
// Types
import { DataModifier, QuizData } from '../../types';
// Styles
import { Wrapper } from './StartQuiz.styles';

type Props = {
    quizReader: any;
    dataModifier: DataModifier;
    setAppState: React.Dispatch<React.SetStateAction<number>>;
}

const StartQuiz: React.FC<Props> = ({ quizReader, dataModifier, setAppState }) => {
    const { selectedCategory, categories, selectedType, quizType, slectedDifficulty, quizDifficulty, 
        selectedNumOfQuestions, startQuiz } = useContext(GlobalContext);
    const quizData: QuizData = quizReader(dataModifier);
    const clickHandler = () => {
        startQuiz && startQuiz(quizData);
        setAppState(2); // Show QuestionCard component on next render.
    }
    return (
        <Wrapper>
            <div>Your following quiz is ready</div>
            <div>
                <span>{`Category: `}</span>
                <span>{categories[selectedCategory]}</span>
            </div>
            <div>
                <span>{`Type: `}</span>
                <span>{quizType[selectedType]}</span>
            </div>
            <div>
                <span>{`Difficulty: `}</span>
                <span>{quizDifficulty[slectedDifficulty]}</span>
            </div>
            <div>
                <span>{`Total Questions: `}</span>
                <span>{selectedNumOfQuestions}</span>
            </div>
            <button onClick={clickHandler}>
                Start Quiz
            </button>
        </Wrapper>
    )
}

export default StartQuiz;