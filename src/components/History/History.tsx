import styles from './History.module.css';

export const History = ({ list, onSelect }: { list: string[], onSelect: (city: string) => void }) => (
  <div className={styles.history}>
    <h3>Історія:</h3>
    {list.map(city => <button key={city} onClick={() => onSelect(city)}>{city}</button>)}
  </div>
);