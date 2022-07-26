import GlobalState from "./GlobalStateContext/GlobalState";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
// import Router from "./routes/Routes";
import Layout from "./screens/Layout";


function App() {
  return (
    <div>
      <GlobalState>
        {/* <Router /> */}
        <Layout/>
        <GlobalStyles/>
      </GlobalState>
    </div>
  );
}

export default App;
