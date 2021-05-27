import React, { useState } from 'react';
import Grid from './Components/Grid';
import Title from './Components/Title';
import Upload from './Components/Upload';
import Modal from './Components/Modal';


function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Title/>
      <Upload/>
      <Grid setSelectedImage={setSelectedImage}/>
      {selectedImage && (
        <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
      )}
    </div>
  );
}

export default App;
