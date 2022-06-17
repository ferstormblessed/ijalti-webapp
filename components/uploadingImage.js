import React, {useState} from "react";

export default function UploadingImage({setImageUri}) {

    const [image, setImage]    = useState("")
    const [loading, setLoading]    = useState(false)
    
    const UploadImage = async (e ) =>{
        const files    = e.target.files;
        const data  = new FormData();
        
        data.append("file", files[0]);
        data.append("upload_preset", "dvcbdc2n");
        setLoading(true); //esto talvez se comente
        const dataPhoto    = await fetch(
            "https://api.cloudinary.com/v1_1/jairobar/image/upload", {
                method: "POST",
                body: data,
            }).then(r => r.json());
        setImageUri(dataPhoto.secure_url)
        setLoading(false)
    }

    return ( 

            <input
            type="file"
            name="file"
            placeholder="Upload image here"
            onChange={UploadImage}
            />
    );
}
