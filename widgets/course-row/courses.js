import React from "react";
import classes from "./page.module.css";
import H3 from "../heading/h3";
import Row from "../row/row";
import Course from "../cards/course";

export default function CourseRow({ data }) {
  return (
    <div className={classes.sections}>
      <H3 className={classes.stream}>{data.title}</H3>
      <Row className={classes.row}>
        {data.course.map((course) => (
          <Course
            image={course.image}
            name={course.name}
            duration={course.duration}
            href={course.href}
          />
        ))}
      </Row>
    </div>
  );
}
