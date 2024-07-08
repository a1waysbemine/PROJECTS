import { useSelector } from 'react-redux';
import { CounselListTable } from './MypageStyle';

const CounselBox = () => {
    const { mypageCounsel } = useSelector((state) => state.support);
    return (
        <CounselListTable>
            <thead>
                <tr>
                    <td className="category">분류</td>
                    <td className="title">제목</td>
                    <td className="details">내용</td>
                </tr>
            </thead>
            <tbody>
                {mypageCounsel.map((item) => (
                    <tr key={item.id}>
                        <td className="category">{item.categorize}</td>
                        <td className="title">{item.title}</td>
                        <td className="details">{item.details}</td>
                    </tr>
                ))}
            </tbody>
        </CounselListTable>
    );
};

export default CounselBox;
