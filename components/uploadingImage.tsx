import React, { useState } from "react";

type UploadingProps = {
  setImageUri: (imageUri: string) => void;
};

export default function UploadingImage({ setImageUri }: UploadingProps) {
  const [image, setImage]: any = useState("");
  const [loading, setLoading]: any = useState(false);

  const UploadImage = async (e: any) => {
    const files: any = e.target.files;
    const data: any = new FormData();

    data.append("file", files[0]);
    data.append("upload_preset", "dvcbdc2n");
    setLoading(true); //esto talvez se comente
    const dataPhoto: any = await fetch(
      "https://api.cloudinary.com/v1_1/jairobar/image/upload",
      {
        method: "POST",
        body: data,
      }
    ).then((r) => r.json());
    setImageUri(dataPhoto.secure_url);
    setLoading(false);
  };

  return (
    <input
      type="file"
      name="file"
      placeholder="Upload image here"
      onChange={UploadImage}
    />
  );
}
