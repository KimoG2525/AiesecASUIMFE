import imageCompression from 'browser-image-compression';
const image2base64 = require('image-to-base64')

export function imageCompress (picture) {
 
	var imageFile = picture;
	console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
	console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
   
	var options = {
	  maxSizeMB: 1,
	  maxWidthOrHeight: 1920,
	  minWidthAndHeight: 130,
	  useWebWorker: true
	}
	imageCompression(imageFile, options)
	  .then(function (compressedFile) {
		console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
		console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
   

		return imageEncoder(URL.createObjectURL(imageFile))
	  })
	  .catch(function (error) {
		console.log(error.message);
	  });
  }

  function imageEncoder (picture)
{
    image2base64(picture) // you can also to use url
    .then(
        (response) => {
			console.log(response); //cGF0aC90by9maWxlLmpwZw==
			return response
        }
    )
    .catch(
        (error) => {
            console.log(error); //Exepection error....
        }
    )
}

