import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

const headerSX = {
  "& .MuiCardHeader-action": { mr: 0 },
};

export default function MainCard() {
  return (
    <Card
      sx={{
        minHeight: "30vh",
        color: "#FFFFFF",
        backgroundColor: "#282c34",
        border: "3px solid",
        borderColor: "#61dafb",
        ":hover": {
          boxShadow: "0 2px 14px 0 rgb(33 150 243 / 10%)",
        },
      }}
    >
      {/* Card header and action */}
      <CardHeader sx={headerSX} title={"Component 2"} />

      {/* Header divider */}
      <Divider style={{ backgroundColor: "#FFF" }} />

      {/* Component content */}
      <CardContent>
        <Typography
          sx={{
            fontSize: "1.4rem",
            fontWeight: 500,
            color: "#61dafb",
          }}
        >
          Selected checkboxes (state)
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 500,
            color: "#FFF",
            marginTop: "3rem",
          }}
        >
          Selected name array to be shown here
        </Typography>
      </CardContent>
    </Card>
  );
}
