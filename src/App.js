import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from './redux/ducks/characterSlice';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import Loader from './components/Loader';

const App = () => {
  const dispatch = useDispatch();

  const { results, isLoading, next, prev } = useSelector(
    (state) => state.characters,
  );
  useEffect(() => {
    if (results.length < 1) {
      dispatch(fetchCharacters());
    }
  }, []);

  return (
    <main className="min-h-screen w-full flex justify-center items-center bg-gray-200">
      <Router>
        <section className="flex-1">
          <Switch>
            <Route exact path="/">
              {isLoading ? (
                <Loader />
              ) : (
                <CharacterList
                  charData={results}
                  prevPage={prev}
                  nextPage={next}
                />
              )}
            </Route>
            <Route path="/characters/:charId">
              <CharacterDetails />
            </Route>
          </Switch>
        </section>
      </Router>
    </main>
  );
};

export default App;
