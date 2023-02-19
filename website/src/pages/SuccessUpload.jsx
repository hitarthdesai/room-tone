import React from "react";
import colors from "@/constants/colors";
import Image from "next/image";
import { useRouter } from "next/router";
import rendering from "@/assets/rendering.png";
import rendering2 from "@/assets/rendering-2.png";
import back from "@/assets/back.png";
import back2 from "@/assets/back-2.png";
import success from "@/assets/success.png";

function OptionButton(props) {
  const [onHover, setOnHover] = React.useState(false);

  return (
    <div
      style={onHover ? styles.hoverButtonContainer : styles.buttonContainer}
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
      onClick={() => {
        props.clickButton();
      }}
    >
      <Image
        src={onHover ? props.src2 : props.src}
        alt={props.title}
        width={40}
        height={40}
        style={{ marginBottom: "2vh" }}
      />
      <b>{props.title}</b>
    </div>
  );
}

function SuccessUpload() {
  const router = useRouter();

  return (
    <div style={styles.appContainer}>
      <Image
        src={success}
        alt={"successfully uploaded"}
        width={100}
        height={100}
        style={{ marginBottom: "2vh" }}
      />
      <h1 style={{ color: colors.midnightBlack }}>Successfully Uploaded!</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <OptionButton
          title="Back to options"
          src={back}
          src2={back2}
          clickButton={() => {
            router.replace("/Options");
          }}
        />
        <OptionButton
          title="Render the file"
          src={rendering}
          src2={rendering2}
          clickButton={() => {
            router.replace("/Show3D");
          }}
        />
      </div>
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

export default SuccessUpload;