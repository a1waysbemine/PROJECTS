import { EventLi } from '../../pages/eventpage/eventPageStyle';

const EventItem = ({ event }) => {
    const { title, startDate, endDate, imgurl, detailUrl, isEvent } = event;

    const onDetail = () => {
        window.open(detailUrl, '_blank');
    };

    return (
        <EventLi>
            <img src={imgurl} alt={title} />
            <strong>{title}</strong>
            <span>
                {startDate} ~ {endDate}
            </span>
            {isEvent ? (
                <p className="active">
                    <button onClick={onDetail}>GO</button>
                </p>
            ) : (
                <p className="end">
                    <button>이벤트 종료</button>
                </p>
            )}
        </EventLi>
    );
};

export default EventItem;
