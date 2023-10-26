import { useState, useEffect } from 'react';
import { DiaryEntry, NewDiary, Visibility, Weather } from './types';
import { createDiary, getAllDiaries } from './DiaryServices';

const App = () => {
  const [newDiary, setNewDiary] = useState<NewDiary>({
    weather: Weather.Sunny,
    visibility: Visibility.Great,
    date: '',
    comment: '',
  });
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  useEffect(() => {
    getAllDiaries().then(data => {
      setDiaries(data)
    })
  }, [])
  const diaryCreation = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(newDiary)
    createDiary(newDiary)
      .then(data => {
        setDiaries(diaries.concat(data));
      })
      .catch(error => {
        console.error("Error creating diary:", error);
      });
    setNewDiary({
      weather: Weather.Sunny,
      visibility: Visibility.Great,
      date: '',
      comment: '',
    });
  };

  return (
    <div>
      <h1>Diaries from backend</h1>
      <form onSubmit={diaryCreation}>
        <div>
          <label>Weather:</label>
          <select
            value={newDiary.weather}
            onChange={(event) => setNewDiary({ ...newDiary, weather: event.target.value as Weather })}
          >
            {Object.values(Weather).map((weather) => (
              <option key={weather} value={weather}>
                {weather}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Visibility:</label>
          <select
            value={newDiary.visibility}
            onChange={(event) => setNewDiary({ ...newDiary, visibility: event.target.value as Visibility })}
          >
            {Object.values(Visibility).map((visibility) => (
              <option key={visibility} value={visibility}>
                {visibility}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input
            type="text"
            value={newDiary.date}
            onChange={(event) => setNewDiary({ ...newDiary, date: event.target.value })}
          />
        </div>
        <div>
          <label>Comment:</label>
          <input
            type="text"
            value={newDiary.comment}
            onChange={(event) => setNewDiary({ ...newDiary, comment: event.target.value })}
          />
        </div>
        <button type="submit">Add</button>
      </form>
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