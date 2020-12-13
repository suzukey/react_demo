import './assets/styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/index'
import { auth, firestore, db } from './plugins/firebase';

auth.signInAnonymously()

auth.onAuthStateChanged(async user => {
  if (user) {
    const docRef = db.collection('users').doc(user.uid)

    docRef.get().then(docSnapshot => {
      if (!docSnapshot.exists) {
        docRef.set({
          name: 'User',
          createdAt: firestore.FieldValue.serverTimestamp(),
          updatedAt: firestore.FieldValue.serverTimestamp(),
        })
      }
    })
  }
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
