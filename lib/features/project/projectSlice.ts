// project/projectSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Project {
  title: string;
  subtitle?: string;
  githubLink?: string;
  webLink?: string;
  images: string[];
  tags?: string[];
}

interface ProjectState {
  project: Project | null;
}

const initialState: ProjectState = {
  project: null,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject: (state, action: PayloadAction<Project>) => {
      state.project = action.payload;
    },
    clearProject: (state) => {
      state.project = null;
    },
  },
});

export const { setProject, clearProject } = projectSlice.actions;
export default projectSlice.reducer;
