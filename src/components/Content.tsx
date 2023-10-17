type ContentProps = {
  contentParts: ContentPart[];
};

type ContentPart = {
  name: string;
  exerciseCount: number;
};

const Content: React.FC<ContentProps> = ({ contentParts }) => {
  return (
    <div>
      {contentParts.map((part, index) => (
        <div key={index}>
          <p>Name: {part.name}</p>
          <p>Exercise Count: {part.exerciseCount}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;
