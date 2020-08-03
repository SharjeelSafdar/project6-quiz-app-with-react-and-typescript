import React, { Suspense, useState } from 'react';
import { useAsyncResource } from 'use-async-resource';
// Components
import { SelectQuiz, StartQuiz, QuestionCard } from './components/components';
// Context
import { GlobalProvider } from './context/context';
// Api function
import { fetchQuestions, dataModifier } from './API/API';
// Styles
import { GlobalStyle, Title } from './App.styles';

const App = () => {
  const [ quizReader, fetchNewQuiz ] = useAsyncResource(fetchQuestions)
  const [ appState, setAppState ] = useState(0);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <GlobalProvider>
        <GlobalStyle />
        <Title>It's Quiz Time</Title>
        {appState === 0 && <SelectQuiz fetchNewQuiz={fetchNewQuiz} setAppState={setAppState} />}
        {appState === 1 && <StartQuiz quizReader={quizReader} dataModifier={dataModifier} setAppState={setAppState} />}
        {appState === 2 && <QuestionCard setAppState={setAppState} />}
        {/* {appState === 3 && <Results setAppState={setAppState} />} */}
      </GlobalProvider>
    </Suspense>
  );
}

export default App;
