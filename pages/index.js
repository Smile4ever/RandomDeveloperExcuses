import { useEffect, useState } from 'react';

export default function Home() {
  const [excuse, setExcuse] = useState('');

  useEffect(() => {
    // Fetch the JSON data from the API route
    fetch('/api/excuses')
      .then((response) => response.json())
      .then((data) => {
        // Pick a random excuse from the data
        const randomExcuse = data.excuses[Math.floor(Math.random() * data.excuses.length)].excuse;
        setExcuse(randomExcuse);
      });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.excuse}>{excuse}</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
  },
  excuse: {
    fontSize: '24px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
};
