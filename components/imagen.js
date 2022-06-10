export default function Imagen(req,res)
{
        document.getElementById("upload").onchange = function(e) {
            var file = document.getElementById("upload").files[0];
            var reader = new FileReader();
            reader.onload = function() {
              
              console.log("Resuldato: \n\n");
              console.log(reader.result);
              
              document.getElementById("display").src = reader.result;
              var blob = window.dataURLtoBlob(reader.result);
              console.log(blob, new File([blob], "image.png", {
                type: "image/png"
              }));
              
            };
            return res=reader.readAsDataURL(file).toString();
          };

}