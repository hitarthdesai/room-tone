import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from "react";
import {storage} from '../firebase'
import colors from "@/constants/colors";

function OptionButton(props){
    const [onHover, setOnHover] = React.useState(false);
  
    return(
      <div
          style={onHover ? styles.hoverButtonContainer : styles.buttonContainer}
          onMouseEnter={() => {
            setOnHover(true);
          }}
          onMouseLeave={() => {
            setOnHover(false);
          }}
          onClick={()=>{props.clickButton()}}
        >
          <Image
          src={onHover? props.src2 : props.src}
          alt={props.title}
          width={40}
          height={40}
          style={{ marginBottom: '2vh'}}
        />
          <b>{props.title}</b>
      </div>
    )
  }

function UploadForm() {
  const [file, setFile] = React.useState(null);
  const [URL, setURL] = React.useState('');
  
  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const imageRef = ref(storage, `${file.name}`);
    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setURL(url);
            console.log(url)
          })
          .catch((error) => {
            console.log(
              "ERROR IN GETTING DOWNLOAD URL FOR UPLOADED IMAGE",
              error
            );
          });
      })
      .catch((error) => {
        console.log("ERROR IN IMAGE UPLOAD", error);
      });
  };

  return (
    <div style={styles.appContainer}>

        <h1 style={{color: colors.midnightBlack}}>Submit a File</h1>
    
        <form onSubmit={handleFormSubmit}>
        <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileInputChange}
            style={styles.buttonContainer}
        />
        <button type="submit">Upload</button>
        </form>
        </div>
  );
}

const styles = {
    appContainer: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      backgroundColor: colors.cloudyWhite,
      height: "100vh",
      width: "100vw",
      flex: 1,
      flexDirection: "column",
    },
    buttonContainer: {
      backgroundColor: colors.lightMetallicBlue,
      width: "30vw",
      minHeight: "14vh",
      height: "auto",
      padding: 10,
      minWidth: "20vw",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      color: colors.midnightBlack,
      borderRadius: 20,
      cursor: "pointer",
      marginTop: "5vh",
      fontSize: 20,
      marginLeft: '5vw',
      marginRight: '5vw',
      flexDirection: 'column'
    },
    hoverButtonContainer: {
      backgroundColor: colors.midnightBlack,
      width: "30vw",
      minHeight: "14vh",
      height: "auto",
      padding: 10,
      minWidth: "20vw",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      color: colors.cloudyWhite,
      borderRadius: 20,
      cursor: "pointer",
      marginTop: "5vh",
      fontSize: 22,
      marginLeft: '5vw',
      marginRight: '5vw',
      flexDirection: 'column'
    },
  };

export default UploadForm;
