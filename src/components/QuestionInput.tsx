import { memo } from "react";

export const QuestionInput = memo(({ question, value, onChange }) => {
  return (
    <div className="flex flex-col items-start gap-2 my-2">
      <label
        className="text-[#252625] font-medium text-[13px] my-2 leading-3"
        htmlFor={`question-${question.id}`}
      >
        {question.index + 1}. {question.question}
      </label>
      <textarea
        name={question.id}
        value={value}
        onChange={onChange}
        maxLength={100}
        className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
      />
      <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
        Maximum of 100 words
      </small>
    </div>
  );
});
