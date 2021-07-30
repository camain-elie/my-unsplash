import ImageCell from './components/imageCell/imageCell';
import Layout from './components/layout/layout';

import './App.scss';

import testFile from './json_test_file.json';

const handleDelete = (url) => {
  console.log('delete ' + url);
}

function App() {

  return (
    <div className="App">


      <Layout 
        handleDelete={handleDelete}
        imgArray={testFile}
        searchLabel="nature book amazon ye"
      />


    </div>
  );
}

export default App;