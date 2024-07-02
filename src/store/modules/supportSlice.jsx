import { createSlice } from '@reduxjs/toolkit';
import faqList from '../../assets/api/Support';

const initialState = {
    faqLists: faqList,
    mypageCounsel: localStorage.getItem('mypageCounsel')
        ? JSON.parse(localStorage.getItem('mypageCounsel'))
        : [
              {
                  id: 1,
                  category: '상품추천',
                  title: '용도에 적절한 제품을 추천해 주세요',
                  details:
                      '30석 정도의 규모로 회의실을 구성할 예정입니다. 총 예산은 1천만 원 내외입니다. 적당한 제품을 추천받을 수 있을까요?',
              },
          ],
    mypageAS: localStorage.getItem('AS')
        ? JSON.parse(localStorage.getItem('AS'))
        : [
              {
                  id: 1,
                  category: 'A/S 접수',
                  details:
                      '제품을 사용하는데 어느날 갑자기 의자의 바퀴가 굴러가질 않네요. 수리를 요청하고 싶습니다.',
                  done: true,
              },
          ],
};
let no1 = 1;
let no2 = 1;

export const supportSlice = createSlice({
    name: 'support',
    initialState,
    reducers: {
        filteringList: (state, action) => {
            state.faqLists = faqList.filter((listItem) => listItem.category === action.payload);
        },
        resetFiltering: (state) => {
            state.faqLists = faqList;
        },
        toggleFaqVisibility: (state, action) => {
            const faqItem = state.faqLists.find((item) => item.id === action.payload);
            if (faqItem) {
                faqItem.isShow = !faqItem.isShow;
            }
        },
        counselToMypage: (state, action) => {
            const counselData = {
                id: no1++,
                ...action.payload,
            };
            state.mypageCounsel.push({
                counselData,
            });
            localStorage.setItem('mypageCounsel', JSON.stringify(state.mypageCounsel));
        },
        asToMypage: (state, action) => {
            state.as_List.push({
                id: no2++,
                category: action.payload,
                details: action.payload,
                done: false,
            });
        },
    },
});

export const { filteringList, resetFiltering, counselToMypage, toggleFaqVisibility } =
    supportSlice.actions;
export default supportSlice.reducer;
