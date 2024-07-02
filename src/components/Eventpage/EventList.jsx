import { EventUl } from '../../pages/eventpage/eventPageStyle';
import EventItem from './EventItem';
import data from '../../assets/api/eventData';

const EventList = () => {
    return (
        <EventUl>
            {data.map((event) => (
                <EventItem key={event.id} event={event} />
            ))}
        </EventUl>
    );
};

export default EventList;
