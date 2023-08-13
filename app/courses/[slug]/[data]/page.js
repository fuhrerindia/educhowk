import Row from "@/widgets/row/row";
import React from "react";
import Image from "next/image";
import classes from "../../../collages/[slug]/style.module.css";
import Rating from "@/widgets/rating/rate";
import mod from "@/widgets/styles/main.module.css";
import studyGif from "@/public/studying.gif";
import TabView from "@/widgets/tab-view/tab-view";

export default function Page({ params }) {
  return (
    <main className={mod.main}>
      <Row className={mod.heading}>
        <Image
          src={studyGif}
          width={200}
          height={200}
          className={classes.logo}
          alt="Some name and it's logo"
        />
        <div>
          <h1>B.Tech (CS)</h1>
          <Rating value={1.5} />
        </div>
      </Row>
      <TabView
        slug={params.slug}
        data={params.data}
        main="courses"
        buttons={[
          {
            label: "About",
            content: (
              <div>
                <p>Hello</p>
              </div>
            ),
            href: "",
          },
          {
            label: "Admission Process",
            href: "admission",
            content: <h1>Home Page</h1>,
          },
        ]}
      />
    </main>
  );
}
