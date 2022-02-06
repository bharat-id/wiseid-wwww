import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useAuth } from "../context/authcontext";

//views - main
import Main from '../viewsxz/main';
import UserView from "../viewsxx/user-view";
import DaoView from "../viewsxx/dao-view";

import Task from "../viewswo/task";
import TaskView from "../viewswo/task-view";

import Events from "../viewsev/events";
import EventsView from "../viewsev/events-view";

// views - auth - onbd


const routes = [

  { path:'/', component: Main, auth:false },

  { path:'/u/:id', component: UserView, auth:false },
  { path:'/c/:id', component: DaoView, auth:false },
  
  { path:'/w', component: Task, auth:false },
  { path:'/w/:id', component: TaskView, auth:false },

  { path:'/e', component: Events, auth:false },
  { path:'/e/:id', component: EventsView, auth:false },
]

const PrivateRoute = (props) => {
  const location = useLocation();
  //console.log (location.pathname)
  const { user } = useAuth();
  return user 
  ? ( <Route { ...props } /> ) 
  : ( <Redirect to={{ pathname: "/", state: { from: location } }} /> )
};

export default function Routes() {

  return (
    <Switch>
      {routes.map ((item,i)=>(item.auth
      ? <PrivateRoute
          key={i}
          path={item.path}
          component={item.component}
          exact
        />
      : <Route
          key={i}
          path={item.path}
          component={item.component}
          exact
        />
      ))}
    </Switch>
  );
}