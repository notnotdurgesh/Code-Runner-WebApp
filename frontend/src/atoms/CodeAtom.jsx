import { atom } from 'recoil';

export const CodeAtom = atom({
    key: 'CodeAtom', 
    default: `console.log("Hello World")`, 
  });

export const OutputAtom = atom({
  key:'OutputAtom',
  default:{stdout:'Your Code Output Occurs Here'}
})

export const OutputIsSuccesfullAtom = atom({
  key:"OutputIsSuccesfullAtom",
  default:true
})

export const ErrorDataAtom = atom({
  key:'ErrorDataAtom',
  default:'Your Errors Occur here'
})

export const LoadingAtom = atom({
  key:'LoadingAtom',
  default:false
})

export const LanguageAtom = atom({
  key:"LanguageAtom",
  default:'python'
})