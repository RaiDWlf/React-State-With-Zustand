import React, { useState } from "react";

import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [courseTitle, setCourseTitle] = useState("");

  console.log("COURSE FORM RENDERED");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("PLEASE ADD A COURSE TITLE");

    addCourse({
      id: Math.ceil(Math.random() * 10000000),
      title: courseTitle,
    });
    setCourseTitle("");
  };
  return (
    <div className="form-container">
      <input
        value={courseTitle}
        onChange={(event) => {
          setCourseTitle(event.target.value);
        }}
        className="form-input"
      />
      <button
        onClick={() => {
          handleCourseSubmit();
        }}
        className="form-submit-btn"
      >
        Add Item
      </button>
    </div>
  );
};

export default CourseForm;
