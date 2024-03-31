import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { IoMdArrowBack } from "react-icons/io";
const Lessons = () => {
  const syllabus = [
    {
      topic: "Introduction to JavaScript",
      subtopics: [
        "What is JavaScript?",
        "History and evolution",
        "Setting up a development environment",
      ],
    },
    {
      topic: "Basic Syntax and Variables",
      subtopics: [
        "Variables and data types",
        "Operators",
        "Comments",
        "Basic output using console.log()",
      ],
    },
    {
      topic: "Control Flow and Loops",
      subtopics: [
        "Conditional statements (if, else if, else)",
        "Switch statements",
        "Loops (for, while, do-while)",
      ],
    },
    {
      topic: "Functions",
      subtopics: [
        "Declaring functions",
        "Parameters and return values",
        "Function expressions",
        "Arrow functions",
      ],
    },
    {
      topic: "Arrays",
      subtopics: [
        "Declaring and initializing arrays",
        "Array methods (push, pop, shift, unshift, splice, etc.)",
        "Iterating over arrays",
      ],
    },
    {
      topic: "Objects",
      subtopics: [
        "Object literals",
        "Accessing object properties",
        "Adding and removing properties",
        "Object methods",
      ],
    },
    {
      topic: "Scope and Closures",
      subtopics: [
        "Lexical scope",
        "Global scope",
        "Function scope",
        "Closure concept and practical use cases",
      ],
    },
    {
      topic: "ES6 Features",
      subtopics: [
        "let, const",
        "Template literals",
        "Destructuring assignment",
        "Spread and rest operators",
        "Classes and inheritance",
        "Modules (import/export)",
      ],
    },
    {
      topic: "Asynchronous JavaScript",
      subtopics: [
        "Callback functions",
        "Promises",
        "Async/await syntax",
        "Error handling with try...catch",
      ],
    },
    {
      topic: "DOM Manipulation",
      subtopics: [
        "Accessing DOM elements",
        "Manipulating DOM elements (changing content, styles, attributes)",
        "Event handling",
      ],
    },
    {
      topic: "HTTP Requests",
      subtopics: ["XMLHttpRequest", "Fetch API", "Handling responses"],
    },
    {
      topic: "Advanced JavaScript Patterns",
      subtopics: [
        "Design patterns (Singleton, Factory, Observer, etc.)",
        "Functional programming concepts",
        "Composition vs. inheritance",
      ],
    },
    {
      topic: "Data Structures and Algorithms",
      subtopics: [
        "Implementing common data structures (linked lists, stacks, queues, trees, etc.)",
        "Understanding time complexity and Big O notation",
        "Implementing common algorithms (sorting, searching, graph traversal, etc.)",
      ],
    },
    {
      topic: "Error Handling and Debugging",
      subtopics: [
        "Handling runtime errors effectively",
        "Debugging techniques (using browser tools, console debugging, etc.)",
        "Error logging and reporting strategies",
      ],
    },
  ];

  return (
    <div className="w-screen mr-5 ">
      <div className="flex items-center my-2  justify-between">
        <IoMdArrowBack size={22} />

        <h1 className="text-lg">JavaScript</h1>
        <Image
          src="/languages/js.png"
          alt="logo"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <Separator />

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl mt-5">Beginner Levels</h1>
        {syllabus.map((item, index) => (
          <React.Fragment key={item.topic}>
            {index === 6 && (
              <h1 className="text-2xl mt-5">Intermediate Level</h1>
            )}
            {index === 10 && <h1 className="text-2xl mt-5">Advanced Level</h1>}
            <div className="relative">
              <div className="flex w-1/2 last:mb-5 items-center justify-between  border-2 border-gray-200 rounded-lg px-4 py-2">
                <div>
                  <h1 className="text-2xl font-semibold text-blue-700">
                    Level-{index + 1}
                  </h1>
                  <p className="text-gray-600">{item.topic}</p>
                  <div className="flex gap-1 my-2">
                    {item.subtopics.map((item) => (
                      <div
                        key={item}
                        className="h-2 w-14 bg-slate-400 rounded-xl"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="group ">
                  <div className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-xl rounded-md px-4 py-1 text-gray-100">
                    Start
                  </div>
                  <div className="absolute top-0 right-13 w-1/3 p-6 z-10 rounded-lg bg-green-600 hidden group-hover:block">
                    {item.subtopics.map((item) => (
                      <div key={item}>
                        <li>{item}</li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
