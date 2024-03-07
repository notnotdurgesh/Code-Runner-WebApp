import { Dropdown } from 'flowbite-react';
import { FaPython, FaJava, FaSwift } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp, TbLetterCSmall } from "react-icons/tb";
import { SiKotlin, SiGnubash, SiApachegroovy } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { useRecoilState } from 'recoil';
import { LanguageAtom } from '../atoms/CodeAtom';

export function CustomDropdown() {
  const languageIcons = {
    python: FaPython,
    javascript: IoLogoJavascript,
    java: FaJava,
    c: TbLetterCSmall,
    cpp: TbBrandCpp,
    swift: FaSwift,
    kotlin: SiKotlin,
    bash: SiGnubash,
    typescript: BiLogoTypescript,
    groovy: SiApachegroovy,
  };

  const languages = [
    { name: 'Python' },
    { name: 'JavaScript' },
    { name: 'Java' },
    { name: 'C' },
    { name: 'Cpp' },
    { name: 'Swift' },
    { name: 'Kotlin' },
    { name: 'Bash' },
    { name: 'TypeScript' },
    { name: 'Groovy' },
  ];


  const [languageName, setLanguageName] = useRecoilState(LanguageAtom)

  return (
    <Dropdown label={languageName.toUpperCase()} className='text-white rounded-md z-50 bg-gray-700'>
      <Dropdown.Header>
        <span className="block text-sm">Made with ❤️</span>
      </Dropdown.Header>
      {languages.map(language => (
        <Dropdown.Item
          key={language.name}
          icon={languageIcons[language.name.toLowerCase()]}
          onClick={() => {
            const languageValue = language.name.toLowerCase();
            setLanguageName(languageValue);
            console.log(languageValue);
          }}          
        >
          &nbsp; {language.name} 

        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}
