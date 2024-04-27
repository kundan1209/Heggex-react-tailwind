import React from 'react'
import { QafItem } from './QafItem';
const QNAS = [
      {
        Question: 'Can education flashcards be used for all age groups?',
        Answer: 'Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.'
      },
      {
        Question: 'How do education flashcards work?',
        Answer: 'Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.'
      },
      {
        Question: 'Can education flashcards be used for test preparation?',
        Answer: 'Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.'
      }
]
export const Qaf = () => {
  // const arrayQAs = QNAS.map((qna) => <QafItem question={qna.Question} answer = {qna.Answer}/>);
  const arrayQAs = QNAS.map((qna) =>
    <div>
      <QafItem question={qna.Question} answer = {qna.Answer}/>
    </div>);

  return (
    <div>
      <p class="faq-text mb-8">FAQ</p>
      <ul>{arrayQAs}</ul>
    </div>
  )
}
