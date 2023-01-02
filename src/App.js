import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './features/gallerySlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.gallery.photos);
  //gallery from reducer name in store.js and photos come from initial state in reducer

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  console.log(photos);
  return (
    <div className="App">
      <h1>Redux Photo Gallery</h1>
    </div>
  );
}

export default App;
