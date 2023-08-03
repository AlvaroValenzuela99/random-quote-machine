import React from 'react';
import '../QuoteBox.css';

class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            randomIndex: 0
        }
        this.newQuote = this.newQuote.bind(this);
    }

    newQuote(){
        this.setState({
            randomIndex: Math.floor(Math.random()*10)
        })
    }

    render(){

        const possibleQuotes = [
            {
                quote: 'Nadie me puso alas, pero aprendí a volar. No detuve vuestras balas, pero aprendí a esquivar. Me quisisteis evitar y eliminar, dejándome como un náufrago perdido en la inmensidad del mar',
                author: 'Nach'
            },
            {
                quote: 'Me ajusto a la vida, pero la vida no es justa, quien me gusta no me quiere y quien me quiere no me gusta',
                author: 'Juaninacka'
            },
            {
                quote: 'La vida sale cara confío en que la amortices, hablo de ser feliz ¿¡eh!? No dejes que nadie ni nada a ti te desquicie',
                author: 'The Louk'
            },
            {
                quote: 'Son tan pocos años y tantos recuerdos, tantos peldaños a un cielo que esta en tus ojos, el mundo esta roto llorando en cada nube, versos dedicados a un corazón que nunca tuve',
                author: 'Dolcce Rotta'
            },
            {
                quote: 'Vivo la edad dorada bro, añorando la del pavo',
                author: 'Juancho Marqués (Suite Soprano)'
            },
            {
                quote: 'Con un lanzallamas a buscar a los del Ku Klux, van a arder sus sábanas, van a acabar negros. La vida tiene esa magia, qué ironía',
                author: 'Ayax'
            },
            {
                quote: 'La vida es simple recibes de lo que has dado y para ser feliz tan solo hay que olvidar el pasado',
                author: 'Kase.O'
            },
            {
                quote: 'Eres tan pobre que solo tienes dinero',
                author: 'Tote King'
            },
            {
                quote: 'Salgo a la calle y dejo en casa los prejuicios, he saltado tantas veces que conozco el precipicio',
                author: 'Zatu (SFDK)'
            },
            {
                quote: 'Fui la oveja negra por salirme del rebaño, cinco años después soy el dueño del establo',
                author: 'Natos (Natos y Waor)'
            }
        ]

        let quoteText = possibleQuotes[this.state.randomIndex].quote;
        let quoteAuthor = possibleQuotes[this.state.randomIndex].author;
        
        return (
            <div id="quote-box">
                <div id="text">
                    <p className="quoteText">{quoteText}</p>
                </div>

                <div id="author">
                    <p className="quoteAuthor">- {quoteAuthor}</p>
                </div>

                <div className="bottom-container">

                    <a target="top" id="tweet-quote" href={`twitter.com/intent/tweet?text=${quoteText}${quoteAuthor}`}>Tweet</a>
                            
                    <div id="new-quote">
                        <button onClick = {this.newQuote}>New quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuoteBox;