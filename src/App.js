import './App.css';
import React, { useState } from "react";
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';

export default function App() {

  const [language, setLanguage] = useState('it');
  const [text, setText] = useState('');

  return (
    <div>
      <Field label="Enter Text" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />

    </div>
  );
}