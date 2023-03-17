import "../src/style/mainStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import routes from "./config/routes";
import AppDetails from "./components/Projects/AppDetails";
import Calculator from "./components/Projects/Calculator/Calculator";
import Music from "./components/Projects/MusicApp/Music";
import Dice from "./components/Projects/DiceGame/Dice";
import FootBall from "./components/Projects/FootBall/FootBall";
import JavaScript from "./components/JavaScript/JavaScript";
import Html from "./components/Html/Html";
import ShoppingCart from "./components/Projects/Shopping/ShoppingCart";
import AddItem from "./components/Projects/Shopping/AddItem";
import HomePage from "./components/Projects/Publicator/HomePage";
import UserName from "./components/Projects/Publicator/Dashboard/UserName";
import ArraysInJavaScript from "./components/JavaScript/ArraysInJavaScript";
import UniversityForm from "./components/Projects/CustomHooks/RegistertaionForm/University/UniversityForm";
import Layout from "./Layout/Layout";
import ReactJs from "./components/ReactJs/React js";
import Signup from "./components/Authentication/Signup/Signup";
import Login from "./components/Authentication/Login/Login";
import FetchMultipleApi from "./components/Projects/FetchMultipleApi/FetchMultipleApi";
import Navbar from "./container/Navbar";
import ForgetPassword from "./components/Authentication/ForgetPassword/ForgetPassword";
import Weather from "./components/Projects/Weahther/Weather";

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route
            path={routes.default.path}
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          {/* Authentication  */}
          <Route path={routes.authentication.signup} element={<Signup/>}/>
          <Route path={routes.authentication.login} element={<Login/>}/>
          <Route path={routes.authentication.forgetPassword} element={<ForgetPassword/>}/>
               {/* Projects */}
          <Route path={routes.projects.appDetail} element={<Layout><AppDetails /></Layout>} />
          <Route path={routes.projects.calculator} element={<Calculator />} />
          <Route path={routes.projects.musicApp} element={<Music />} />
          <Route path={routes.projects.diceGame} element={<Dice />} />
          <Route path={routes.projects.footBall} element={<FootBall />} />
          <Route
            path={routes.projects.formValidation}
            element={<UniversityForm />}
          />
          <Route path={routes.projects.shopping} element={<ShoppingCart />} />
          <Route path={routes.projects.addCart} element={<AddItem />} />
          <Route path={routes.projects.kompond} element={<HomePage />} />
          <Route path={routes.projects.username} element={<UserName />} />
          <Route path={routes.projects.thunk} element={<Layout><FetchMultipleApi/></Layout>}/>
          <Route path={routes.projects.weather} element={<Weather/>}/>
          {/* Subjects  */}
          <Route path={routes.subjects.javaScript} element={<Layout><JavaScript /></Layout>} />
          <Route path={routes.subjects.html} element={<Layout> <Html /> </Layout> }/>
          <Route
            path={routes.subjects.arrayJavaScript}
            element={<Layout><ArraysInJavaScript /></Layout>}
          />
          <Route
            path={routes.subjects.reactjs}
            element={ <Layout><ReactJs /></Layout>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
