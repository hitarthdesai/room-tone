import React from "react";
import colors from "@/constants/colors";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/assets/logo.svg"

function Home() {
  const [onHover, setOnHover] = React.useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setOnHover(false)
    router.push('/Options');
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={{ color: colors.midnightBlack, fontSize: 40 }}>
        Welcome to RoomTone!
      </h1>
      <Image
        src={logo}
        className="App-logo"
        alt="logo"
        width={500}
        height={500}
      />
      <div
        style={onHover ? styles.hoverButtonContainer : styles.buttonContainer}
        onMouseEnter={() => {
          setOnHover(true);
        }}
        onMouseLeave={() => {
          setOnHover(false);
        }}
        onClick={handleButtonClick}
      >
        <b>Get Started</b>
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
    height: "7vh",
    padding: 10,
    minWidth: "20px",
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
  },
  hoverButtonContainer: {
    backgroundColor: colors.midnightBlack,
    width: "30vw",
    height: "7vh",
    padding: 10,
    minWidth: "20px",
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
  },
};

export default Home;