import React from 'react';
import { Button } from '../ButtonWrapper';

type Props = {
    setAppState: React.Dispatch<React.SetStateAction<number>>;
}

const Error: React.FC<Props> = ({ setAppState }) => {
    return (
        <>
            <h1
                style={{
                    color: 'white',
                    textAlign: 'center',
                    padding: '20px',
                    width: '500px',
                    margin: '20px auto',
                }}
            >
                Oops... Something went wrong. Please try again with different options.
            </h1>
            <Button onClick={() => setAppState(-1) /* Render SelectQuiz component. */}>
                Select New Quiz
            </Button>
        </>
    )
}

export default Error
