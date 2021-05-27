import React,{useState} from 'react';
import ProgressBar from './ProgressBar';


export default function Upload() {
    
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    function handleChange(e){
        let selectedImage = e.target.files[0];

        if(selectedImage && types.includes(selectedImage.type)) 
        {
            setFile(selectedImage);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    
    };

    return (
        <form>
            <label>
                <input type="file" onChange={handleChange}/>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
