import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface PlanState {
  model: string;
  category: string | null;
  platform: string | null;
  allPlan: object | null;
  selectedModelPlan: Array<object> | null;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: PlanState = {
  model: "Evaluation",
  category: null,
  platform: "mt4",
  allPlan: null,
  selectedModelPlan: null,
  isLoading: false,
};
export const fetchMyPlan = createAsyncThunk("fetchMyPlan", async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/me`, {
    // headers: { Authorization: `Bearer ${token}` },
  });

  const {
    data: { user },
  } = await res.json();

  return user;
});
export const planSlice = createSlice({
  name: "plan",

  initialState,
  reducers: {
    setModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setPlatForm: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
    },
    setSelectedModelPlan: (state, action) => {
      state.platform = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyPlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMyPlan.fulfilled, (state, { payload }) => {
        state.allPlan = payload;
        state.isLoading = false;
      })
      .addCase(fetchMyPlan.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setModel, setCategory, setPlatForm, setSelectedModelPlan } =
  planSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default planSlice.reducer;
