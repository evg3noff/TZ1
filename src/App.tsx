import React, { useEffect, useState } from 'react';
import styles from './app.module.css'
import Header from './components/Header/Header';
import Users from './components/Users/Users';
const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');


  return <div className={styles.App}>
    <Header searchQuery={searchQuery} onSearchChange={setSearchQuery}></Header>
    <Users searchQuery={searchQuery}></Users>
  </div>;
};

export default App;