import { Grid } from "@mui/material";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

function App() {
  return (
    <div className="App">
      <header className="App-header">Interview Challenge</header>
      <Grid container direction="row">
        <Grid item xs={6} sx={{ padding: "1rem" }}>
          <Component1 />
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="row">
            <Grid item xs={12} sx={{ padding: "1rem" }}>
              <Component2 />
            </Grid>
            <Grid item xs={12} sx={{ padding: "1rem" }}>
              <Component3 />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
