import React from 'react';
import { OutputAtom, OutputIsSuccesfullAtom, ErrorDataAtom } from '../atoms/CodeAtom';
import { useRecoilValue } from 'recoil';

export const Output = () => {
  const data = useRecoilValue(OutputAtom)
  const isSuccess = useRecoilValue(OutputIsSuccesfullAtom);
  const errorData = useRecoilValue(ErrorDataAtom) 
  const passes = isSuccess;
  const statusIcon = passes ? (
    <img
      src="https://cdn-icons-png.flaticon.com/512/5299/5299035.png"
      alt="Correct"
      width="20"
      height="20"
      className="inline-block ml-2"
    />
  ) : (
    <img
      src="https://cdn-icons-png.flaticon.com/512/7698/7698976.png"
      alt="Incorrect"
      width="20"
      height="20"
      className="inline-block ml-2"
    />
  );

  const resultDataStyle = {
    color: isSuccess ? 'green' : 'red', 
    maxHeight: '200px',
    overflowAuto: 'auto',
    whitespace: 'pre',
  };

  return (
    <div className="w-[98vw] flex flex-col rounded-lg shadow-md p-4 text-white bg-gray-800 m-2 h-[26vh]">
      <h3 className={`text-lg font-medium text-white mb-1 flex items-center`}>
        Your Output
        {statusIcon}
      </h3>
      <pre className="rounded-md p-4 bg-gray-950 text-sm" style={resultDataStyle}>
        {data.stdout}
      </pre>
      {errorData && (
        <>
          <h3 className="text-lg font-medium text-white mt-2 mb-1">
            Error Ocurred</h3>
          <pre
            className="rounded-md p-4 bg-gray-950 h-20 text-sm overflow-auto whitespace-pre"
            style={{ maxHeight: '500px' }}
          >{console.log(errorData)}
            {errorData}
          </pre>
        </>
      )}
    </div>
  );
};
