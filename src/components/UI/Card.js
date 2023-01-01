import Classes from './card.module.css';

function Cards (props) {
    return <div className={Classes.cards}>{props.children}</div>
}


export default Cards;