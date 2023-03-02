export const getQuestions = async () => {
  const response = await fetch(
    'https://opentdb.com/api.php?amount=3&category=17&difficulty=easy&type=multiple'
  );

  return await response.json();
};
