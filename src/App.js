import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
// import AddBookForm from "./components/AddBookForm";
// import RemoveBookButton from "./components/RemoveBookButton";
import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books">
            {/* <BookList />
          <AddBookForm />
        <RemoveBookButton /> */}
          </Route>
          <Route path="/categories">
            {/* render categories or under construction message */}
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
