import axios from "axios";

export interface Course  {
    id: number;
    username: string;
    description: string;
}

// export interface CoursesResponse  {
//     data: Course[];
// }

async function getData<T>(path: string) : Promise<T> {
    const { data } = await axios.get(path);
    return data;
}

const INSTRUCTOR = 'in28minutes'; // when I changed to "lynn" I got the expected 2 items
const COURSE_API_URL = 'http://localhost:8080';
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`;
// http://localhost:8080/instructors/in28minutes/courses

//eventually, add instructor name parameter
export async  function retrieveAllCourses() {
    const results  = await getData<Course[]>(`${INSTRUCTOR_API_URL}/courses`);
    //console.log('retrieveAllCourses: ', JSON.stringify(results));
    return results;
   //return []; //checking ui behavior when no results returned
}

//eventually, add instructor name parameter
export async function deleteCourse(id: number) {
    const results = await axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
    return results.status;
}