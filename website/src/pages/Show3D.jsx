import * as React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import colors from "@/constants/colors";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const Show3D = () => {
  const [loading, setLoading] = React.useState(true);
  const [foundError, setFoundError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [onHover, setOnHover] = React.useState(false);
  // const [onHoverButton, setOnHoverButton] = React.useState(false);
  const router = useRouter();

  let filePath;
  React.useEffect(() => {
    filePath = localStorage.getItem("RoomTone");
    if (
      filePath === "" ||
      filePath === null ||
      filePath === undefined ||
      filePath === " "
    ) {
      setFoundError(true);
      setErrorMessage("An error occured while rendering the file");
      setLoading(false);
      console.error("No file name");
    }
  }, []);

  const handleButtonClick = () => {
    setOnHover(false);
    router.push("/Options");
  };
  const mount = React.useRef(null);
  // const buttonRef = React.useRef(null);

  React.useEffect(() => {
    if (foundError != true) {
      let scene, camera, renderer, controls;

      const init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 2;

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.current.appendChild(renderer.domElement);

        controls = new OrbitControls(camera, renderer.domElement);

        const loader = new GLTFLoader();
        if (
          filePath != null &&
          filePath != "" &&
          filePath != " " &&
          filePath != undefined
        ) {
          loader.load(
            filePath,
            (gltf) => {
              scene.add(gltf.scene);
              setLoading(false);
              const light = new THREE.DirectionalLight(0xffffff, 1);
              light.position.set(1, 1, 1);
              scene.add(light);
              // Add ambient light to the scene
              const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
              scene.add(ambientLight);

              // Add directional light to the scene
              const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
              directionalLight.position.set(0, 1, 1).normalize();
              scene.add(directionalLight);

              const secondLoader = new GLTFLoader();

              secondLoader.load(
                "/TOF_holder_RoomTone.glb",
                (gltf2) => {
                  const model2 = gltf2.scene;
                  model2.scale.set(0.009, 0.009, 0.009);
                  model2.rotation.x += 180.7;
                  scene.add(model2);
                },
                (error) => {
                  console.error(error);
                }
              );
              const button = document.createElement("button");
              button.innerHTML = "Check Acoustics";
              button.style.position = "absolute";
              button.style.top = "10px";
              button.style.left = "10px";
              (button.style.backgroundColor = colors.cloudyWhite),
                (button.style.width = "20vw"),
                (button.style.maxWidth = "70px"),
                (button.style.height = "7vh"),
                (button.style.padding = 10),
                (button.style.minWidth = "20px"),
                (button.style.color = colors.midnightBlack),
                (button.style.borderRadius = 20),
                (button.style.cursor = "pointer"),
                (button.style.marginTop = "2vh"),
                (button.style.fontSize = 20),
                (button.style.opacity = 0.4),
                button.addEventListener("click", () => {
                  console.log("Button clicked!");
                });
              let container = mount.current;
              container.appendChild(button);
            },
            undefined,
            (error) => {
              setFoundError(true);
              setErrorMessage("An error occured while rendering the file");
              setLoading(false);
              console.error(error);
            }
          );
        }
      };

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.setClearColor(colors.cloudyWhite); // set the background color
        renderer.render(scene, camera);
      };

      init();
      animate();

      return () => {
        // Clean up code goes here
        // scene.dispose();
        renderer.dispose();
      };
    }
  }, [filePath]);

  if (foundError) {
    return (
      <div ref={mount} style={styles.loadingBackground}>
        <div style={styles.loadingContainer}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "900",
              color: colors.midnightBlack,
            }}
          >
            {errorMessage}
          </h1>
          <div
            style={
              onHover ? styles.hoverButtonContainer : styles.buttonContainer
            }
            onMouseEnter={() => {
              setOnHover(true);
            }}
            onMouseLeave={() => {
              setOnHover(false);
            }}
            onClick={handleButtonClick}
          >
            <b>Try Again</b>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={mount} style={styles.loadingBackground}>
      {loading && (
        <div ref={mount}>
          <div style={styles.loadingContainer}>
            <Image
              src={logo}
              className="Load-logo"
              alt="logo"
              width={500}
              height={500}
            />
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "900",
                color: colors.midnightBlack,
              }}
            >
              Rendering 3D Model....
            </h1>
          </div>
          <div style={{ height: "10vh", width: "100vw" }} />
        </div>
      )}
    </div>
  );
};

const styles = {
  appContainer: {
    backgroundColor: colors.metallicBlue,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    flexDirection: "column",
    height: "90vh",
    width: "100vw",
  },
  loadingBackground: {
    backgroundColor: colors.cloudyWhite,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
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

export default Show3D;