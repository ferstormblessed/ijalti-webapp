import React, {useState} from "react";

export default function UploadingFile({setFileUri}:any){

    const [file, setFile] : any = useState("")
    const [loading, setLoading] : any = useState(false)

    const UploadFile = async (e:any) =>{
        const files : any = e.target.files;
        const data: any = new FormData();
        
        data.append("file", files[0]);
        data.append("upload_preset", "dvcbdc2n");
        setLoading(true); //esto talvez se comente
        const dataFile : any = await fetch(
            "https://api.cloudinary.com/v1_1/jairobar/image/upload", {
                method: "POST",
                body: data,
            }).then(r => r.json());
        setFileUri(dataFile.secure_url)
        setLoading(false)
    }

    return ( 

            <input
            type="file"
            name="file"
            placeholder="Upload file here"
            onChange={UploadFile}
            />
    );
}