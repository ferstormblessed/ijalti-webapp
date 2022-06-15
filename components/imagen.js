import {Cloudinary} from "@cloudinary/url-gen";  
export default function Imagen() {   
  const photo = document.querySlector('file-upload');   
  let widgetCld = new Cloudinary({       
    cloud: {       
      cloudName: 'jairobar',       
      uploadPreset: 'preset_jbh',       
    }   
  }, (err, result) =>{       
    if(!err & result.event === 'success'){           
      console.log('Imagen subida con exito', result.info);       
    }}   
    );    
    photo.addEventListener('click', () => {       
      widgetCld.open();   
    }, false) 
}