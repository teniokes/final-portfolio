
import './App.css';
import homepage from "./pages/homepage";
import navbar from "./component/navbar";
import footer from "./component/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Piggyvest () {
  return (
    <Router>
    <Switch>
    <Route path='/' exact component={homepage}/>
    </Switch>
  </Router>
  )
}
export default Piggyvest;