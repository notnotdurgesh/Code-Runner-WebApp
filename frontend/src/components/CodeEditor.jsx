import React from 'react';
import Editor from '@monaco-editor/react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CodeAtom, LanguageAtom } from '../atoms/CodeAtom'; 
import { CustomDropdown } from './CustomDropdown';


export function CodeEditor() {

  function updateCode(newValue) {
    setCode(newValue); 
    console.log(newValue); 
  }

  const languageComments = [
    { language: "python", comment: "# Write some code in Python" },
    { language: "javascript", comment: "// Write some code in JavaScript" },
    { language: "java", comment: "// Write some code in Java" },
    { language: "c", comment: "// Write some code in C" },
    { language: "cpp", comment: "// Write some code in C++" },
    { language: "swift", comment: "// Write some code in Swift" },
    { language: "kotlin", comment: "// Write some code in Kotlin" },
    { language: "bash", comment: "# Write some code in Bash" },
    { language: "typescript", comment: "// Write some code in TypeScript" },
    { language: "groovy", comment: "// Write some code in Groovy" },
  ];
  
  const setCode = useSetRecoilState(CodeAtom); 
  const presentLanguage = useRecoilValue(LanguageAtom);  
  const languageObject = languageComments.find(obj => obj.language === presentLanguage);
  const tempCode = languageObject ? languageObject.comment : '';
  
  return (

    <div className='w-[98vw] grid grid-cols-1 place-items-center bg-[#1E1E1E] rounded-md m-2 shadow-slate-100'>
      <div className='grid grid-cols-2 items-center m-2 w-full px-4'>
        <div className='text-md font-bold col-span-1 text-white justify-self-start'>Presently Writing in  
          <span className='text-blue-500'>  {presentLanguage.toUpperCase()}</span>
        </div>
        <div className='col-span-1 justify-self-end'> <CustomDropdown /> </div>
      </div>

      <Editor
        height="52vh"
        language= {presentLanguage}
        value={tempCode} 
        onChange={updateCode}
        theme='vs-dark'
        className='m-2 shadow-md'
      />
    </div>

  );
}
