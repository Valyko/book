import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPages = createAsyncThunk(
    'products/fetchProducts',
    async function (_, { rejectWithValue }) {
      try {
        const respons = await fetch('./pages.json')
        if (!respons.ok) {
          throw new Error('Server Error!')
        }
        const data = await respons.json()
        return data
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  )

const initialState = {
  data: [],
  status: null,
  error: null
}

export const productSlice = createSlice({
  name: 'pages',
  initialState,
  extraReducers: {
    [fetchPages.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchPages.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.data = action.payload
    },
    [fetchPages.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

export default productSlice.reducer