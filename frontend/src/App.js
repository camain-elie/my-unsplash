import './App.scss';
import ImageCell from './components/imageCell/imageCell';

const handleDelete = (url) => {
  console.log('delete ' + url);
}

function App() {
  return (
    <div className="App">
      <ImageCell
        imageURL="https://images.unsplash.com/photo-1622495549609-523be9cc6f32?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        label="Drinking soda"
        handleDelete={handleDelete} 
      />

      <ImageCell
        imageURL="https://images-na.ssl-images-amazon.com/images/I/A1PQFToBqDL.jpg"
        label="Universe cover"
        handleDelete={handleDelete}
      />

      <ImageCell
        imageURL="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
        label="Ultimate banana"
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;