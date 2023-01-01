import { useRef } from "react";
import Cards from "../UI/card";
import classes from './NewMeetupform.module.css';

function NewMeetupform (props) {
    const titleinputRef = useRef();
    const imageinputRef = useRef();
    const addressinputRef = useRef();
    const descriptioninputRef = useRef();
    function SumbitHandler (event) {
        event.preventDefault();
        const enteredtitle = titleinputRef.current.value;
        const enteredimage= imageinputRef.current.value;
        const enteredaddress= addressinputRef.current.value;
        const entereddescription= descriptioninputRef.current.value;
        const meetupdata={
            title: enteredtitle,
            image: enteredimage,
            address: enteredaddress,
            description: entereddescription,
        };

        props.onAddMeetup(meetupdata);
        
    }
    return <Cards>
        <form className={classes.form} onSubmit={SumbitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleinputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id="image" ref={imageinputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">address</label>
                <input type="text" required id="address" ref={addressinputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea id="description" required rows='5' ref={descriptioninputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add New Meetup</button>
            </div>



        </form>
    </Cards>

}

export default NewMeetupform;