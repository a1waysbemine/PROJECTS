import { Link } from 'react-router-dom';
import { EventWrap } from './eventPageStyle';
import EventList from '../../components/Eventpage/EventList';

const EventPage = () => {
    return (
        <EventWrap>
            <ul className="subMenu">
                <li className="on">이벤트</li>
            </ul>

            <div className="subInner">
                <h2>EVENT</h2>
                <div className="content">
                    <h3>SIDIZ EVENT</h3>
                    <EventList />
                </div>
            </div>
        </EventWrap>
    );
};

export default EventPage;
