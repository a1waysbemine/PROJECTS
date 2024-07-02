import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataList: localStorage.getItem("dataList")
    ? JSON.parse(localStorage.getItem("dataList"))
    : [],
  user: localStorage.getItem("loggedInUser")
    ? JSON.parse(localStorage.getItem("loggedInUser"))
    : null,
  authed: !!localStorage.getItem("loggedInUser"),
};

let no = initialState.dataList.length + 1;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { userid, password } = action.payload;
      const newUser = state.dataList.find((users) => users.userid === userid);
      if (newUser && newUser.password === password) {
        state.user = newUser;
        localStorage.setItem("loggedInUser", JSON.stringify(newUser));
        state.authed = true;
      } else {
        alert("아이디 또는 비밀번호를 다시 입력해주세요.");
      }
    },
    logout: (state) => {
      state.user = null;
      state.authed = false;
      localStorage.removeItem("loggedInUser");
    },
    join: (state, action) => {
      const { userid } = action.payload;
      const idCheck = state.dataList.find((users) => users.userid === userid);
      if (idCheck) return;
      state.dataList = [...state.dataList, { id: no++, ...action.payload }];
      localStorage.setItem("dataList", JSON.stringify(state.dataList));
    },

    idChk: (state, action) => {
      const { userid } = action.payload;
      const idCheck = state.dataList.find((users) => users.userid === userid);
      if (!userid || userid.trim() === "") {
        alert("아이디를 입력하세요.");
      } else if (idCheck) {
        alert("중복된 아이디 입니다.");
      } else {
        alert("사용가능한 아이디 입니다.");
      }
    },
  },
});

export const { login, logout, join, idChk } = authSlice.actions;
export default authSlice.reducer;
