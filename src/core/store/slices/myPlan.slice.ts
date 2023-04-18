import { SinglePlanType } from "@/core/components/MyPlan/PricingCard/PricingCard.type";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface PlanState {
  model: string;

  platform: string | null;
  allPlan: Array<object> | null;
  selectedModelPlan: Array<object> | null;
  currentPlan: SinglePlanType | null;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: PlanState = {
  model: "evaluation fund",
  platform: "mt4",
  allPlan: null,
  currentPlan: null,
  selectedModelPlan: null,
  isLoading: false,
};
export const fetchMyPlan = createAsyncThunk("my/plan", async (thunkApi) => {
  const res = await fetch(
    `${"https://backend-evalution.fundednext.com"}/api/v1/plans`
  );

  const { data } = await res.json();

  return data;
});
export const planSlice = createSlice({
  name: "plan",

  initialState,
  reducers: {
    setModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload;
    },

    setPlatForm: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
    },
    setSelectedModelPlan: (state, action) => {
      state.selectedModelPlan = action.payload;
    },
    setCurrentPlan: (state, action) => {
      state.currentPlan = action.payload;
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
        state.allPlan = null;
        state.isLoading = false;
      });
  },
});

export const { setModel, setPlatForm, setSelectedModelPlan, setCurrentPlan } =
  planSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default planSlice.reducer;
