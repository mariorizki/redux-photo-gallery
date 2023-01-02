import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './features/gallerySlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const { photos, isLoading } = useSelector((state) => state.gallery);
  //gallery from reducer name in store.js and photos & isLoading come from initial state in reducer

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Redux Photo Gallery</h1>
      <p>This is photo gallery made using redux toolkit and redux thunk</p>
      <hr />
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.download_url}
              alt={photo.author}
              width="300"
              height="300"
              loading="lazy"
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
