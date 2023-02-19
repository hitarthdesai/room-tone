import React from "react";
import colors from "@/constants/colors";
import { useRouter } from "next/router";
import rendering from "@/assets/rendering.png"
import rendering2 from "@/assets/rendering-2.png"
import upload from "@/assets/upload.png"
import upload2 from "@/assets/upload-2.png"
import Image from "next/image";

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

function Options() {
  const router = useRouter();
  
  return (
    <div style={styles.appContainer}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
          <OptionButton
            title="Upload"
            src={upload}
            src2={upload2}
            clickButton={()=>{router.push('/Upload')}}
          />
          <OptionButton
            title="Render"
            src={rendering}
            src2={rendering2}
            clickButton={()=>{
              router.push({
                pathname: '/Show3D',
              });
            }}
          />
        </div>
        <>
          <OptionButton
            title="Pre-Loaded Renders"
            src={rendering}
            src2={rendering2}
            clickButton={()=>{router.push('/Show3D')}}
          />
        </>

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

export default Options;
