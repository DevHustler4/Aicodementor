"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const AllCourses = () => {
  type courseType = {
    image: string;
    name: string;
    lessons: number;
  };

  const coursesList: courseType[] = [
    {
      image: "/languages/html.png",
      name: "HTML",
      lessons: 20,
    },
    {
      image: "/languages/csslogo.png",
      name: "CSS",
      lessons: 28,
    },
    {
      image: "/languages/js.png",
      name: "JavaScript",
      lessons: 50,
    },
    {
      image: "/languages/ts.png",
      name: "TypeScript",
      lessons: 30,
    },
    {
      image: "/languages/python.png",
      name: "Python",
      lessons: 60,
    },
    {
      image: "/languages/mongodb.png",
      name: "Mongodb",
      lessons: 44,
    },
  ];

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  //   seletindex or setselectedindex . seletindex me seletindex ka numer ho ga jo 1,2,3 ho sakta ha ya null bhi ho sakta ha agar null hoga to koi bhi selected index nahi hoga wo  null hoga

  // setselectedindex index le raha ha aur check kar raha hai ky wo index selected index se match karta hai toh ye null de dega jisse jo select that us par user dubara click karega toh wo unselect ho jayga . agar wo match nahi karta to wo naya index slected index me dal dega

  const selecthandler = (index: number) => {
    setSelectedItemIndex(index === selectedItemIndex ? null : index);
  };

  const confirmCourse = (selectedIndex: number | null) => {
    if (selectedIndex !== null) {
      console.log("Confirmed Course:", coursesList[selectedIndex]);
    } else {
      console.log("No course selected!");
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      <h1 className="text-2xl text-center"> What You Want To Learn...</h1>
      <div className="flex flex-wrap gap-7 items-center justify-center mx-20 ">
        {coursesList.map((item, index) => (
          <div
            key={item.name}
            onClick={() => selecthandler(index)}
            className={`size-48 flex flex-col items-center justify-center rounded-lg border-2 border-blue-500 hover:scale-105 hover:bg-blue-400 hover:cursor-pointer ${
              index === selectedItemIndex ? "bg-blue-400" : "bg-blue-200"
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="mb-5"
            />
            <h1 className="font-semibold text-xl">{item.name}</h1>
            <p>
              {" "}
              <span className="font-semibold ">{item.lessons}</span> Lessons
            </p>
          </div>
        ))}
      </div>
      <Button
        onClick={() => confirmCourse(selectedItemIndex)}
        variant={"destructive"}
        disabled={!selectedItemIndex}
      >
        <Link href="/subscription">Confirm</Link>
      </Button>
    </div>
  );
};

export default AllCourses;
