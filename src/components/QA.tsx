import React from "react";

const QA = ({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) => {
  return (
    <section className="pr-6 ml-[5%] mb-8">
      <div className="text-[18px] font-medium my-4 leading-7">
        Question and Answers
      </div>
      <div className="flex flex-row gap-4 overflow-x-scroll">
        {questions.map((qa, index) => (
          <div
            key={index}
            className="bg-black min-w-[30vw] w-[30vw] sm:min-w-[80vw]  sm:w-[80vw] text-white p-4 rounded-xl"
          >
            <div className="text-[14px] leading-6 font-medium mb-2 ">
              {qa.questionId.question}
            </div>
            <p className="text-[13px] font-normal leading-6">{qa.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QA;
