import React, { useState, useEffect } from 'react';
import { CodeAtom, OutputAtom, OutputIsSuccesfullAtom, ErrorDataAtom, LoadingAtom, LanguageAtom } from '../atoms/CodeAtom';
import axios from 'axios';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';

export const ButtonGroup = () => {

  const [isLoading, setIsLoading] = useRecoilState(LoadingAtom);
  const [errorMessage, setErrorMessage] = useState(null);
  const codeValue = useRecoilValue(CodeAtom);
  const setOutput = useSetRecoilState(OutputAtom);
  const setSuccess = useSetRecoilState(OutputIsSuccesfullAtom)
  const setErrorData = useSetRecoilState(ErrorDataAtom)
  const presentLanguage = useRecoilValue(LanguageAtom)

  const handleRunCode = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.post('http://localhost:3000/', 
      { content: codeValue,
        language: presentLanguage,
       });
      console.log(response)
      const isSuccess = response.data.exception
      if (isSuccess == null) {
        setSuccess(true)
        setOutput(response.data); 
      }
      else{
        setSuccess(false)
        const errorDataTemp =  response.data.stderr + response.data.exception 
        setErrorData(errorDataTemp)
      }
    } catch (error) {
      setSuccess(false)
      console.error('Error submitting code:', error);
      setErrorMessage(error.message || 'An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-2 mx-2 w-[98vw]">
      {errorMessage && (
        <div className="text-red-500 font-bold text-sm">{errorMessage}</div>
      )}
      <button
        type="button"
        disabled={isLoading}
        onClick={handleRunCode}
        className={
          isLoading
            ? "px-4 py-2 rounded-md text-sm font-medium bg-gray-200 text-gray-400 cursor-not-allowed"
            : "px-4 py-2 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-700"
        }
      >
        {isLoading ? 'Submitting...' : 'Run Code'}
      </button>
    </div>
  );
};
