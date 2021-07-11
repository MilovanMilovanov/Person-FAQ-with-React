import React from 'react';

function FAQ({ faq, index, toggleQA, toggleTitleColor }) {
    return (
        <div
            className={'faq ' + (faq.open ? 'open' : '')}
            onClick={() => {
                toggleQA(index);
                toggleTitleColor(faq);
            }}
            key={index}
        >
            <h3 className={'faq-question'}>{faq.title}</h3>
            <div className={'faq-answer'}>{faq.answer}</div>
        </div >
    )
}

export default FAQ
