import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { DrinkList } from './components/DrinkList';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <DrinkList />
      )}
    </>
  );
}

export default App;