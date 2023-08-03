import React from 'react';
import '../QuoteBox.css';

class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quote: ''
        }
    }
    render(){

        const possibleQuotes = [
            {
                quote: 'Nadie me puso alas, pero aprendí a volar. No detuve vuestras balas, pero aprendí a esquivar. Me quisisteis evitar y eliminar, dejándome como un náufrago perdido en la inmensidad del mar',
                author: 'Nach'
            }
        ]

        return (
            <div id="quote-box">
                <div id="text"></div>
                <div id="author"></div>
                <div id="new-quote"></div>
                <div id="tweet-quote"></div>
            </div>
        )
    }
}

export default QuoteBox;