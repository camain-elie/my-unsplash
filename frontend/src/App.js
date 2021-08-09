import { useEffect, useState } from 'react';
import { addImage, deleteImage, getImages } from './services/image';

import Layout from './components/layout/layout';
import Header from './components/header/header';
import AddElement from './components/addElement/addElement';

import './App.scss';

import logo from './assets/my_unsplash_logo.svg';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [imageList, setImageList] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [addElement, setAddElement] = useState(false);
  
  useEffect(() => {
    if(!dataIsLoaded){getImages()
      .then(res => {
        setImageList(res.data.imageList)
        setDataIsLoaded(true)
      })
      .catch(error => console.log(error));}
  });


  const handleDelete = (id) => {
    deleteImage(id)
      .then(res => {
        setImageList(res.data.imageList);
        setUserMessage('');
      })
      .catch(error => setUserMessage(error));
  }


  const handleAddElement = () => {
    setAddElement(true);
  }


  const handleSubmit = (label, photoURL) => {
    addImage(photoURL, label)
      .then(res => {
        console.log(res);
        setImageList(res.data.imageList);
        setAddElement(false);
      })
      .catch(error => setUserMessage(error));
  }



  const handleExit = (e) => {
    e.preventDefault();
    setAddElement(false);
  }


  return (
    <div className="App">

      {dataIsLoaded && 
        <>
          <Header 
            logoIMG={logo}
            searchValue={searchValue}
            handleSearch={(e) => setSearchValue(e.target.value)}
            handleAddElement={handleAddElement}
          />

          <Layout 
            handleDelete={handleDelete}
            imgArray={imageList}
            searchLabel={searchValue}
          />

          {addElement && <AddElement 
            display={addElement}
            handleSubmit={handleSubmit}
            handleExit={handleExit}
          />}

        </>
      }
    </div>
  );
}

export default App;