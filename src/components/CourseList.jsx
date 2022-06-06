import React from "react";

import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toogleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toogleCourseStatus: state.toogleCourseStatus,
    })
  );

  return (
    <>
      <ul>
        {courses.map((course, id) => {
          return (
            <React.Fragment key={id}>
              <li
                className="course-item"
                style={{
                  backgroundColor: course.completed ? "green" : "#666",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    checked={course.completed}
                    onChange={(event) => {
                      toogleCourseStatus(course.id);
                    }}
                    type="checkbox"
                  ></input>
                </span>
                <span>{course?.title}</span>
                <button
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                  className="delete btn"
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
