import { useState } from 'react';
import styles from './SearchForm.module.css';

interface Props {
  onSearch: (city: string) => void;
}

export const SearchForm = ({ onSearch }: Props) => {
  const [input, setInput] = useState('');
  return (
    <div className={styles.wrapper}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => { onSearch(input); setInput(''); }}>Пошук</button>
    </div>
  );
};