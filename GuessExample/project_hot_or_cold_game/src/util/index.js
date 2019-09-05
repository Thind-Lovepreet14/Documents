export const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export const getInitialState = () => ({
  actual: generateRandomNumber(),
  guess: undefined,
  allGuesses: [],
  attempt: 0,
  feedbackMessage: 'Expert',
  feedbackColor: '#fff',
  block: false,
});

export const getFeedback = (absDiff) => {
  let feedbackMessage;
  // let feedbackColor;

  if (absDiff === 0) {
    // feedbackColor = '#000';
    feedbackMessage = 'You Won! Reset the game to play again.';
  } else if (absDiff < getInitialState.guess) {
    // feedbackColor = '#ff5722';
    feedbackMessage = 'Too Low';
  } 
   else {
    // feedbackColor = '#5bc0de';
    feedbackMessage = 'Too High';
  }

  return {
    feedbackMessage
    // feedbackColor,
  };
};
