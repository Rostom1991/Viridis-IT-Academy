import { createSlice } from "@reduxjs/toolkit";
const initialAcademyState = {
  categories: [],
  selectedCategory: JSON.parse(localStorage.getItem("category")) || [],
  filteredCategories: [],
  selectedCourse: JSON.parse(localStorage.getItem("course")) || null,
  selectedId: null,
  search: [],
};

const academySlice = createSlice({
  name: "academy",
  initialState: initialAcademyState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    selectCategory: (state, action) => {
      const { id } = action.payload;
      state.selectedCategory =
        state.categories.find((category) => category.id === id) || null;
      state.selectedId = id;
      localStorage.setItem("category", JSON.stringify(state.selectedCategory));
    },
    filterCategories: (state, action) => {
      const selectCat = state.filteredCategories.find(
        (cat) => cat.id === action.payload.id
      );
      if (selectCat) {
        state.filteredCategories = state.filteredCategories.filter(
          (category) => category.id !== action.payload.id
        );
      } else {
        state.filteredCategories = [
          ...state.filteredCategories,
          action.payload,
        ];
      }
    },
    selectCourse: (state, action) => {
      const { id } = action.payload;
      for (const category of state.categories) {
        const selectedCourse = category.courses.find(
          (course) => course.id === id
        );
        if (selectedCourse) {
          state.selectedCourse = selectedCourse;
          break;
        }
      }
      localStorage.setItem("course", JSON.stringify(state.selectedCourse));
    },
    searchQuery: (state, action) => {
      const searchCourse = action.payload.toLowerCase();
      const searchResults = [];

      state.categories.forEach((category) => {
        const foundCourse = category.courses.filter((course) =>
          course.title.toLowerCase().includes(searchCourse)
        );

        foundCourse.forEach((course) => {
          if (!searchResults.some((result) => result.id === course.id)) {
            searchResults.push(course);
          }
        });
      });

      state.search = searchResults;
    },
  },
});

export const {
  setCategories,
  selectCategory,
  selectCourse,
  filterCategories,
  searchQuery,
} = academySlice.actions;
export default academySlice.reducer;
