import React from "react";

const QA = ({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) => {
  return (
    <section className="pr-6 ml-[10%] sm:ml-[5%]">
      <div className="text-[22px] font-medium mt-4 mb-4">
        Question and Answers
      </div>
      <div className="flex flex-row gap-4 overflow-x-scroll">
        {questions.map((qa, index) => (
          <div
            key={index}
            className="bg-black min-w-[30vw] w-[30vw] sm:min-w-[80vw] sm:w-[80vw] text-white p-4 rounded"
          >
            <h3 className="text-[16px] font-medium mb-2">{qa.question}</h3>
            <p className="text-[16px] font-normal">{qa.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QA;
