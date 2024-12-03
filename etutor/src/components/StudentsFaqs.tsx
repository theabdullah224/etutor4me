import React from 'react'
import FAQs from './FAQs';
interface FAQItem {
    question: string;
    answer: string;
  }
const StudentsFaqs:React.FC = () => {
    const studentsFaqs:FAQItem[] = [
        { question: 'How do I get started with eTutor4Me?', answer: 'You can get started by signing up on our website and choosing your preferred subjects.' },
        { question: 'How are eTutors selected?', answer: 'Our eTutors are selected based on their expertise, experience, and a rigorous interview process.' },
        { question: 'What subjects do you offer tutoring in?', answer: 'We offer tutoring in a wide range of subjects, including mathematics, science, languages, and more.' },
        { question: 'How does the free lesson work?', answer: 'The free lesson allows you to experience our tutoring service without any commitment. Simply book a session with a tutor of your choice.' },
        { question: 'How do I schedule a session with my eTutor?', answer: 'To schedule a session, log into your account, select your tutor, and choose an available time slot that works for you.' },
        { question: 'What if I am not satisfied with my eTutor?', answer: 'If you are not satisfied with your eTutor, you can request a replacement or a refund within the first 15 minutes of the session.' },
      ];

  return (
    <div className='pl-40 lg:pl-24 xl:pl-32 mb:pl-0'>
                <FAQs display='' faqData={studentsFaqs} morequestion={''}/>
    </div>
  )
}

export default StudentsFaqs
