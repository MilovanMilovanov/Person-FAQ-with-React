import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import FAQ from './FAQ';
import data from './data';

function App() {
    const [QandA, setQandA] = useState(data);

    const [title, setTitleColor] = useState(false);

    const toggleTitleColor = faq => {
        faq.open ? setTitleColor(true) : setTitleColor(false);
    }

    const toggleQandA = index => {
        setQandA(QandA.map((faq, i) => {
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
            {QandA.map((faq, index) => {
                return (
                    <div className="faqs" key={index}>
                        <FAQ faq={faq} index={index} toggleQandA={toggleQandA} toggleTitleColor={toggleTitleColor} />
                    </div>
                )
            })}
        </div>
    )
}


export default App;




