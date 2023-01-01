import {Route , Switch } from 'react-router-dom';
import ALLMeetupPage from './pages/AllMEETUP';
import NEWMeetupPage from './pages/Newmeetups';
import FavoiratePage from './pages/Favoirates';
import layout from './components/layout/layout';
function App() {
return
<layout>
  
  <Switch>
    <Route path='./'>
      <ALLMeetupPage />
    </Route>
    <Route path='/New meet ups'>
      <NEWMeetupPage />
    </Route>
    <Route path='/Favoirate'>
      <FavoiratePage />
    </Route>
  </Switch>


</layout>;

}

export default App;
