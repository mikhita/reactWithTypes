import React from "react";

type ContentProps = {
  contentParts: CoursePart[];
};

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartDescription {
  description: string;
}

interface CoursePartBasic extends CoursePartBase, CoursePartDescription {
  kind: "basic";
}

interface CoursePartGroup extends CoursePartBase {
  kind: "group";
  groupProjectCount: number;
}

interface CoursePartBackground extends CoursePartBase {
  kind: "background";
  backgroundMaterial: string;
}

interface CoursePartSpecial extends CoursePartBase, CoursePartDescription {
  kind: "special";
  requirements: string[];
}


const Content: React.FC<ContentProps> = ({ contentParts }) => {
  return (
    <div>
      {contentParts.map((part, index) => (
        <div key={index}>
          <p>Name: {part.name}</p>
          <p>Exercise Count: {part.exerciseCount}</p>
          {part.kind === "basic" && (
            <>
              <p>Description: {part.description}</p>
            </>
          )}
          {part.kind === "group" && (
            <>
              <p>Group Project Count: {part.groupProjectCount}</p>
            </>
          )}
          {part.kind === "background" && (
            <>
              <p>Background Material: {part.backgroundMaterial}</p>
            </>
          )}
          {part.kind === "special" && (
            <>
              <p>Special Description: {part.description}</p>
              <p>Special Requirements: {part.requirements.join(", ")}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Content;
