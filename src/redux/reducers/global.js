import { createSlice } from '@reduxjs/toolkit';

let date = new Date();
let todayDate = date.toISOString().slice(0, 10);
let hours = date.getHours();
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = minutes.toString().padStart(2, '0');
}
let currentTime = hours + ':' + minutes + ':00';

const initialState = {
  pageNumber: 1,
  bids: [],
  currentBid: {},
  currentCountdown: '',
};

const global = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeCurrentPage: (state, action) => {
      state.pageNumber = action.payload;
    },
    setBids: (state, action) => {
      state.bids = action.payload;
    },
    setCurrentBid: state => {
      const todayBids = state.bids.filter(bid => bid.Bidding_date == todayDate);
      const res = todayBids?.find(bid => currentTime >= bid.Bidding_Start && currentTime < bid.Bidding_End);
      if (res) {
        state.currentBid = res;
        state.currentCountdown = res.Bidding_date + 'T' + res.Bidding_End;
      }
    },
    updateCurrentBid: (state, action) => {
      state.currentBid = action.payload;
    },
  },
});

export const { changeCurrentPage, setBids, setCurrentBid, updateCurrentBid } = global.actions;

export default global.reducer;
