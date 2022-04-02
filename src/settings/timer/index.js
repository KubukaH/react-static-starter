import * as React from "react";

// MUI Imports
import Box from "@mui/material/Box";

const CountdownTimer = () => {
  const [countdown, setCountdown] = React.useState("");

  React.useEffect(() => {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2024 06:37:25").getTime();

    const timer = setInterval(() => {
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(days + "d " + hours + "h " + minutes + "m " + seconds + "s " + "left!");

      if (distance < 0) {
        clearInterval(timer)
      }

    }, 1000);

  }, [countdown, setCountdown]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: 320,
        height: 84,
        bgcolor: "background.basilwiziTransparent",
        color: "text.base"
      }}
    >
      <Box
        sx={{ color: "inherit", fontSize: ["1.7rem"], fontWeight: "medium", m: "auto" }}
      >
        {countdown}
      </Box>
    </Box>
  );
}

export default CountdownTimer;