import CourseRow from "@/widgets/course-row/courses";
import banner from "@/public/banner.png";

export default function Home() {
  return (
    <main>
      <CourseRow
        data={{
          title: "Science and Technology",
          course: [
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/courses/btech-cs",
            },
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/",
            },
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/",
            },
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/",
            },
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/",
            },
          ],
        }}
      />
      <CourseRow
        data={{
          title: "Commerce, Finance And Management",
          course: [
            {
              image: banner,
              name: "BBA",
              duration: "4 Years",
              href: "/",
            },
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/",
            },
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/",
            },
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/",
            },
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/",
            },
          ],
        }}
      />
      <CourseRow
        data={{
          title: "Arts Courses",
          course: [
            {
              image: banner,
              name: "BBA",
              duration: "4 Years",
              href: "/",
            },
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/",
            },
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/",
            },
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/",
            },
            {
              image: banner,
              name: "B.Tech(CS)",
              duration: "4 Years",
              href: "/",
            },
          ],
        }}
      />
    </main>
  );
}
