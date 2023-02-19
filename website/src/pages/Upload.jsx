import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from "react";
import { storage } from "../firebase";
import colors from "@/constants/colors";
import upload from "@/assets/upload.png";
import Image from "next/image";
import { useRouter } from "next/router";

function UploadForm() {
  const [file, setFile] = React.useState(null);
  const [onHover, setOnHover] = React.useState(false);
  const [checkFile, setCheck] = React.useState(false);
  const router = useRouter();

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
    setCheck(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const imageRef = ref(storage, `${file.name}`);
    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            localStorage.setItem("RoomTone", url);
            router.push("/SuccessUpload");
          })
          .catch((error) => {
            console.error("Error in getting url", error);
          });
      })
      .catch((error) => {
        console.error("Error in file upload", error);
      });
  };

  return (
    <div style={styles.appContainer}>
      <Image
        src={upload}
        alt={"upload a file"}
        width={100}
        height={100}
        style={{ marginBottom: "2vh" }}
      />
      <h1 style={{ color: colors.midnightBlack }}>Upload a File</h1>

      <form onSubmit={handleFormSubmit} style={styles.formContainer}>
        <label
          htmlFor="file"
          style={{
            cursor: "pointer",
            borderColor: colors.midnightBlack,
            border: "2px solid #000",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          Choose File
          {file?.name != undefined && (
            <>
              <span>: </span>
              <span
                style={{
                  color: colors.metallicBlue,
                  textDecoration: "underline",
                }}
              >
                {file.name}
              </span>
            </>
          )}
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileInputChange}
            style={{ display: "none" }}
          />
        </label>
        {checkFile ? (
          <button
            type="submit"
            style={
              onHover ? styles.hoverButtonContainer : styles.buttonContainer
            }
            onMouseEnter={() => {
              setOnHover(true);
            }}
            onMouseLeave={() => {
              setOnHover(false);
            }}
          >
            {"Upload"}
          </button>
        ) : (
          <div
            style={styles.disabledButton}
            onMouseEnter={() => {
              setOnHover(true);
            }}
            onMouseLeave={() => {
              setOnHover(false);
            }}
          >
            {"Submit"}
          </div>
        )}
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
    minHeight: "7vh",
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
    marginLeft: "5vw",
    marginRight: "5vw",
    flexDirection: "column",
  },
  hoverButtonContainer: {
    backgroundColor: colors.midnightBlack,
    width: "30vw",
    minHeight: "7vh",
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
    marginLeft: "5vw",
    marginRight: "5vw",
    flexDirection: "column",
  },
  disabledButton: {
    backgroundColor: colors.smokeGrey,
    width: "30vw",
    minHeight: "7vh",
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
    cursor: "not-allowed",
    marginTop: "5vh",
    fontSize: 22,
    marginLeft: "5vw",
    marginRight: "5vw",
    flexDirection: "column",
  },
  formContainer: {
    color: colors.midnightBlack,
    marginTop: "5vh",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
  },
};

export default UploadForm;
