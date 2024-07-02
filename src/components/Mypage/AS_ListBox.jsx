import { useSelector } from 'react-redux';
import { ASListTable } from './MypageStyle';

const AS_ListBox = () => {
    const { mypageAS } = useSelector((state) => state.support);
    return (
        <ASListTable>
            <thead>
                <tr>
                    <td className="category">분류</td>
                    <td className="details">내용</td>
                    <td className="done">처리상태</td>
                </tr>
            </thead>
            <tbody>
                {mypageAS.map((item) => (
                    <tr key={item.id}>
                        <td className="category">{item.category}</td>
                        <td className="details">{item.details}</td>
                        <td className="done">{item.done ? '처리완료' : '처리중'}</td>
                    </tr>
                ))}
            </tbody>
        </ASListTable>
    );
};

export default AS_ListBox;
