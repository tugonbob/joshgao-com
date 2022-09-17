import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function TitleCard({
  children,
  d,
  backgroundImage,
  backgroundColor,
  textLocation = ["top", "left"],
  to = "/",
  toFullscreen = false,
}: {
  children?: any;
  d?: boolean;
  backgroundImage?: string;
  backgroundColor?: string;
  textLocation?: [string, string] | [string];
  to?: string;
  toFullscreen?: boolean;
}) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // parse textLocation
  let alignItems = "";
  let justifyContent = "";

  // deal with all locations except center, because center could be meant for alignItems and justifyContent
  if (textLocation.includes("left")) justifyContent = "flex-start";
  else if (textLocation.includes("right")) justifyContent = "flex-end";
  if (textLocation.includes("top")) alignItems = "flex-start";
  else if (textLocation.includes("bottom")) alignItems = "flex-end";

  // deal with center. If either alignItems and justifyContent is empty, assume center is meant for that variable
  if (textLocation.includes("center")) {
    if (alignItems === "" && justifyContent === "") {
      alignItems = "center";
      justifyContent = "center";
    } else if (alignItems === "") alignItems = "center";
    else if (justifyContent === "") justifyContent = "center";
  }

  return (
    <div
      style={{
        ...styles.projectContainer,
        ...{
          border: d ? "1px solid black" : undefined,
          marginBottom: toFullscreen ? "10vh" : "40vh",
        },
      }}
      className={`title-card-container`}
    >
      <Link
        to={to}
        style={{
          ...styles.titleCard,
          ...{
            border: d ? "1px solid black" : undefined,
            pointerEvents: toFullscreen ? "none" : undefined,
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor,
            alignItems,
            justifyContent,
          },
        }}
        className={
          toFullscreen
            ? "enlarge-fullscreen"
            : "enlarge-fullscreen-reverse link"
        }
      >
        <div
          style={{ transform: `translateY(${scrollPosition / 8}px)` }}
          className={toFullscreen ? "fade-in-out" : ""}
        >
          {children}
        </div>
      </Link>
    </div>
  );
}

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
  projectContainer: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  },
  titleCard: {
    display: "flex",
    height: "calc(80vh - 80px)",
    width: "calc(70vw + 80px)",
    boxSizing: "border-box",
    paddingTop: "calc(10vh + 16px)",
    paddingBottom: "calc(8vh + 16px)",
    paddingRight: "calc(8vw + 16px)",
    paddingLeft: "calc(8vw + 16px)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    textDecorationLine: "none",
  },
};
