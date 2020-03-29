import {combineReducers, createStore} from "redux";
import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";
import navBarReduser from "./navBar-reduser";



let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navBarPage:  navBarReduser
})

let store = createStore(reducers);

export default store