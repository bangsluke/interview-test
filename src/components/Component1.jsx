import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { CheckboxData } from "../data/CheckboxData";

const headerSX = {
  "& .MuiCardHeader-action": { mr: 0 },
};

export default function MainCard() {
  return (
    <Card
      sx={{
        minHeight: "65vh",
        color: "#FFFFFF",
        backgroundColor: "#282c34",
        border: "1px solid",
        borderColor: "#61dafb",
        ":hover": {
          boxShadow: "0 2px 14px 0 rgb(33 150 243 / 10%)",
        },
      }}
    >
      {/* Card header and action */}
      <CardHeader sx={headerSX} title={"Component 1"} />

      {/* Header divider */}
      <Divider style={{ backgroundColor: "#FFF" }} />

      {/* Component content */}
      <CardContent>
        <Grid container direction="column">
          <Grid item xs={6}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                {CheckboxData.checkboxes.map((checkbox) => (
                  <FormControlLabel
                    key={checkbox.id.toString()}
                    control={
                      <Checkbox
                        id={checkbox.id.toString()}
                        name={checkbox.name}
                        checked={true}
                        sx={{
                          color: "#FFF",
                          "&.Mui-checked": {
                            color: "#61dafb",
                          },
                        }}
                      />
                    }
                    label={checkbox.name}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#61dafb", color: "#FFF" }}
            >
              Pass Data
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
