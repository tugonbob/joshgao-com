import React from "react";
import { RowDiv, MyIcon, FaIcon } from "../../commonComponents";
import {
  faGoogleDrive,
  faGithub,
  faJs,
  faYoutube,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  firebase,
  typescript,
  react,
  googleDrive,
  javascript,
  python,
  sql,
  youtube,
  github,
  css,
  figma,
} from "../../../assets/customIcons";
import "./styles.css";

export function ContentHeader({
  date,
  skills,
  projectComponents,
  sources,
}: {
  date: string;
  skills?: string[];
  projectComponents?: string;
  sources?: { [key: string]: string };
}) {
  let skillsObj: { [key: string]: any } = {
    css: <MyIcon icon={css} />,
    figma: <MyIcon icon={figma} />,
    firebase: <MyIcon icon={firebase} />,
    googleDrive: <MyIcon icon={googleDrive} />,
    js: <MyIcon icon={javascript} />,
    javascript: <MyIcon icon={javascript} />,
    python: <MyIcon icon={python} />,
    react: <MyIcon icon={react} />,
    sql: <MyIcon icon={sql} />,
    typescript: <MyIcon icon={typescript} />,
  };

  let sourcesObj: { [key: string]: any } = {
    googleDrive: <MyIcon className="icon" icon={googleDrive} />,
    github: <MyIcon className="icon" icon={github} />,
    youtube: <MyIcon className="icon" icon={youtube} />,
  };

  return (
    <>
      <RowDiv style={{ alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <RowDiv>
            {/* NAME DATE */}
            <p style={{ marginTop: 0, marginBottom: 0 }}>Joshua Gao: {date}</p>

            {/* SKILLS */}
            {skills ? (
              <RowDiv>
                {skills.map((skill) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        marginLeft: 4,
                      }}
                    >
                      {skillsObj[skill]}
                    </div>
                  );
                })}
              </RowDiv>
            ) : null}
          </RowDiv>

          {/* MAIN IDEAS */}
          {projectComponents ? (
            <div>
              <p style={styles.bold}>{projectComponents}</p>
            </div>
          ) : null}
        </div>

        {/* SOURCE LINKS */}
        {sources ? (
          <RowDiv>
            {Object.keys(sources).map((source) => (
              <a
                href={sources[source]} // get object value with its own key
                target="_blank"
                rel="nopener noreferrer"
                style={{ marginRight: 4 }}
              >
                {sourcesObj[source]}
              </a>
            ))}
          </RowDiv>
        ) : null}
      </RowDiv>
      <hr />
    </>
  );
}

type StyleSheet = {
  [key: string]: React.CSSProperties;
};

const styles: StyleSheet = {
  bold: {
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: 0,
  },
  icon: {
    zIndex: 1,
  },
};
