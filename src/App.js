import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import FAQ from './FAQ';


function App() {
    const [QA, setQA] = useState([
        { title: 'When did you learn React?', answer: 'I watched 4 hour introduction course on the day i received the email with the task, to prepare myself :)', open: false },
        { title: 'Why did you choose JavaScript?', answer: 'It gives me the freedom to mix my creative background with engineering, which i\'m very keen to learn.', open: false },
        { title: 'Do you like challenges?', answer: 'I certainly do and this is a small sample :)', open: false },
        { title: 'What is your motivation?', answer: 'I take pride in everything i do, as i\'m result driven person, that motivates me to get things done!', open: false },
        { title: 'What do you expect from us?', answer: 'Possibilities, that will put me in a position to grow and nothing less!', open: false },
        { title: 'Any final message for us?', answer: 'I enjoyed the process of creating this task, and i\'m looking forward to the next step :)!', open: false }
    ]);

    const [title, setTitleColor] = useState(false);

    const toggleTitleColor = faq => {
        faq.open ? setTitleColor(true) : setTitleColor(false);
    }

    const toggleQA = index => {
        setQA(QA.map((faq, i) => {
            if (index === i) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }

    return (
        <div className="App">
            <Header titleColor={title} />
            {QA.map((faq, index) => {
                return (
                    <div className="faqs" key={index}>
                        <FAQ faq={faq} index={index} toggleQA={toggleQA} toggleTitleColor={toggleTitleColor} />
                    </div>
                )
            })}
        </div>
    )
}


export default App;




