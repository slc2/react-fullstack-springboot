import { useEffect, useState } from "react";
import { Course, deleteCourse, retrieveAllCourses } from "../service/CourseDataService";
import { redirect } from "react-router-dom";

export function ListCourses() {
  const [data, setData] = useState<Course[]>([]);

  useEffect(() => {
    // immediately invoked function expression
    // (async () => {
    //   const results = await retrieveAllCourses();
    //   //console.log('in useEffect, results: ', JSON.stringify(results));
    //   setData(results);
    // })();
    refreshCourses();
  }, []);

  function deleteCourseHandler(id: number) {
    (async () => {
        const results = await deleteCourse(id);
        console.log('in deleteCourseHandler, results: ', results);
        if (results == 204)  // 204 is no content success
            refreshCourses();
      })();
  }
  function updateCourseHandler(id: number) {
    // navigate to /courses/${id}
    console.log('updateCourseHandler, id: ', id, ' redirecting to: ', `courses/${id}`);
    // the following doesn't work with or without a leading /
    // better way to handle this would be with routing.
    redirect(`courses/${id}`);
  }
  async function refreshCourses() {

        const results = await retrieveAllCourses();
        //console.log('in useEffect, results: ', JSON.stringify(results));
        setData(results);

  }

  return (
    <div className="container">
      {data?.length === 0 && <h3>No Courses</h3>}
      {data?.length > 0 && (
        <>
          <h3>All Courses</h3>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((course) => {
                  return (
                    <tr key={course.id}>
                      <td>{course.id}</td>
                      <td>{course.description}</td>
                      <td><button className="btn btn-success" onClick={() => updateCourseHandler(course.id)}>Update</button></td>
                      <td><button className="btn btn-warning" onClick={() => deleteCourseHandler(course.id)}>Delete</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
