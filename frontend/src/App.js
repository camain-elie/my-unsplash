import Layout from './components/layout/layout';
import Header from './components/header/header';

import './App.scss';

import testFile from './json_test_file.json';
import logo from './assets/my_unsplash_logo.svg';

const handleDelete = (url) => {
  console.log('delete ' + url);
}

function App() {

  return (
    <div className="App">

      <Header 
        logoIMG={logo}
        handleSearch={(e) => console.log(e)}
        handleAddElement={(e) => console.log(e)}
      />

      <Layout 
        handleDelete={handleDelete}
        imgArray={testFile}
        searchLabel=""
      />

    </div>
  );
}

export default App;