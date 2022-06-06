import create from "zustand"; // importing zustand

import { devtools, persist } from "zustand/middleware"; // persist is used to store date locally in browser itself

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId), // filter func used to filter out every false state
    }));
  },
  toogleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});

// creating the store
const useCourseStore = create(
  devtools(persist(courseStore, { name: "courses" }))
);

export default useCourseStore;
