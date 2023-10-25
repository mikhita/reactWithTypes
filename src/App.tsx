import { useState, useEffect } from 'react';
import { DiaryEntry } from './types';
import { getAllDiaries } from './DiaryServices';

const App = () => {

  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  useEffect(() => {
    getAllDiaries().then(data => {
      setDiaries(data)
    })
  }, [])

  return (
    <div>
      <h1>Diaries from backend</h1>
        {diaries.map(diary =>
          <ul key={diary.id}>
            <li>{diary.date}</li>
            <li>{diary.visibility}</li>
            <li>{diary.weather}</li>
            <li>{diary.comment}</li>
          </ul>
        )}
    </div>
  
  );
};

export default App;