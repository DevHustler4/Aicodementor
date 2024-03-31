import { Button } from "@/components/ui/button";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
const page = () => {
  const subscriptionPlans = [
    {
      name: "Free Plan",
      price: "$0",
      features: [
        { name: "Contain ads", icon: TiDelete },
        { name: "Free for 7 Days", icon: FaCircleCheck },
        { name: "Get Custom Chatbot", icon: TiDelete },
        { name: "weekly challanges", icon: TiDelete },
        { name: "Only For to try this", icon: TiDelete },
      ],
    },
    {
      name: "Pro Plan",
      price: "$29.99",
      features: [
        { name: "Ad-free experience", icon: FaCircleCheck },
        { name: "Continue for 1 Language ", icon: FaCircleCheck },
        { name: "Get Custom Chatbot", icon: FaCircleCheck },
        { name: "weekly challanges", icon: FaCircleCheck },
        { name: "Best for learn 1 Language", icon: TiDelete },
      ],
    },
    {
      name: "Premium Plan",
      price: "$49.99",
      features: [
        { name: "Ad-free experience", icon: FaCircleCheck },
        { name: "Life time Access ", icon: FaCircleCheck },
        { name: "Get Custom Chatbot", icon: FaCircleCheck },
        { name: "weekly challanges", icon: FaCircleCheck },
        { name: "Learn multiple Language", icon: FaCircleCheck },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8 mx-auto items-center justify-center">
      <div>
        <h2 className="text-4xl text-center pb-2">Choose Your Plan</h2>
        <p className="text-gray-400">
          Unlock Your Coding Potential with AI Code Mentor: Where Learning Meets
          Innovation
        </p>
      </div>
      <div className="flex gap-5 items-center  ">
        {subscriptionPlans.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center gap-3 group p-5 rounded-2xl bg-blue-100 even:bg-slate-800 even:text-gray-100 hover:shadow-2xl"
          >
            <h1 className="text-2xl text-blue-400 ">{item.name}</h1>
            <p>
              {" "}
              <span className="text-3xl text-blue-900 group-even:text-blue-500 group-even:font-semibold">
                {item.price}
              </span>{" "}
              /month
            </p>
            <p>Top Feauters</p>
            <div className="flex flex-col gap-2 mb-3">
              {item.features.map((item) => (
                <div key={item.name} className="flex gap-2 items-center">
                  {item.icon === TiDelete ? (
                    <TiDelete className="size-6" />
                  ) : (
                    <item.icon size={16} />
                  )}
                  {item.name}
                </div>
              ))}
            </div>
            <Button className="w-48 py-4 border-none">Continue</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
