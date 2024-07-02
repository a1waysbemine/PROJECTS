import { ListUl } from '../../../../pages/product/productStyle';
import RingoItem from './RingoItem';

const RingoList = ({ ringo }) => {
    return (
        <ListUl>
            {ringo.map((item) => (
                <RingoItem key={item.id} item={item} />
            ))}
            <li className="blank"></li>
            <li className="blank"></li>
        </ListUl>
    );
};

export default RingoList;
