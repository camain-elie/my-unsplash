import { useState } from 'react';

import Layout from './components/layout/layout';
import Header from './components/header/header';

import './App.scss';

import testFile from './json_test_file.json';
import logo from './assets/my_unsplash_logo.svg';

const handleDelete = (id) => {
  console.log('delete ' + id);
}

function App() {

  const [searchValue, setSearchValue] = useState('');


  return (
    <div className="App">

      <Header 
        logoIMG={logo}
        handleSearch={(e) => setSearchValue(e.target.value)}
        handleAddElement={(e) => console.log(e.target.value)}
      />

      <Layout 
        handleDelete={handleDelete}
        imgArray={testFile}
        searchLabel={searchValue}
      />

    </div>
  );
}

export default App;