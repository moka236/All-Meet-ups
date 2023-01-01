import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList (props){
    return <ul className={classes.list}>
        {props.Meetup.map(Meetup => 
        <MeetupItem key={Meetup.id} 
        id={Meetup.id}
         image={Meetup.image}
          title={Meetup.title}
          address={Meetup.address}
          description={Meetup.description}
         />)}
    </ul>
}
export default MeetupList;