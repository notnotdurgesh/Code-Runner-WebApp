import { CodeSnippet } from './CodeSnippet';

export function ProblemDisplay({ title, para, codeArray }) {
  return (
    <div className="flex flex-col justify-items-start shadow-md bg-gray-800 min-h-[98vh] rounded-md m-2 text-white overflow-hidden">
      <div className="px-4 py-3">
        <h2 className="text-2xl font-medium col-span-1 mx-0">
          {title}
        </h2>
        <p className="text-md mt-2">
          {para}
        </p>
      </div>
      <div className="px-4 py-2 mb-2 flex flex-wrap">
        {codeArray.map((code) => (
          <CodeSnippet key={code} code={code} className="w-full" />
        ))}
      </div>
    </div>
  );
}
