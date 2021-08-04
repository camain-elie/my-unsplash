import { useEffect, useState } from 'react';
import { addImage, deleteImage, getImages } from './services/image';

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
  const [imageList, setImageList] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  
  useEffect(() => {
    if(!dataIsLoaded){getImages()
      .then(res => {
        setImageList(res.data.imageList)
        setDataIsLoaded(true)
      })
      .catch(error => console.log(error));}
  });

  const handleDelete = (id) => {
    console.log('delete ' + id);
    deleteImage(id)
      .then(res => {
        setImageList(res.data.imageList);
        setUserMessage('');
      })
      .catch(error => setUserMessage(error));
  }

  return (
    <div className="App">

      {dataIsLoaded && 
        <>
          <Header 
            logoIMG={logo}
            searchValue={searchValue}
            handleSearch={(e) => setSearchValue(e.target.value)}
            handleAddElement={(e) => console.log(e.target.value)}
          />

          <Layout 
            handleDelete={handleDelete}
            imgArray={imageList}
            searchLabel={searchValue}
          />
        </>
      }
    </div>
  );
}

export default App;