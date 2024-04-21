import React from "react";
import { Button, Stack, Typography, Box, IconButton } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SendIcon from "@mui/icons-material/Send";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import LoadingButton from "@mui/lab/LoadingButton";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";

function MuiButton() {
  const [loading, setLoading] = React.useState(false);
  return (
    <>
      <Box p="10px" mb="20px">
        <Typography variant="h5" mb="10px">
          button type
        </Typography>
        <Stack spacing={3} direction="row" mb="10px">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outline">Outline</Button>
        </Stack>
      </Box>

      <Box p="10px" mb="20px">
        <Typography variant="h5" mb="10px">
          button color
        </Typography>
        <Stack spacing={3} direction="row" mb="10px">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>
      </Box>
      <Box p="10px" mb="20px">
        <Typography variant="h5" mb="10px">
          button size
        </Typography>
        <Stack spacing={3} direction="row" mb="10px" display="block">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>
      </Box>
      <Box p="10px" mb="20px">
        <Typography variant="h5" mb="10px">
          button with icon and label
        </Typography>
        <Stack spacing={3} direction="row" mb="10px">
          <Button variant="contained" startIcon={<AccessAlarmIcon />}>
            Alarm
          </Button>
          <Button endIcon={<SendIcon />}>Send</Button>
        </Stack>
      </Box>
      <Box p="10px" mb="20px">
        <Typography variant="h5" mb="10px">
          Icon button
        </Typography>
        <Stack spacing={3} direction="row" mb="10px">
          <IconButton aria-label="audio-track">
            <AudiotrackIcon color="success" />
          </IconButton>
        </Stack>
      </Box>
      <Box p="10px" mb="20px">
        <Typography variant="h5" mb="10px">
          Loading button
        </Typography>
        <Stack
          spacing={1}
          direction="row"
          mb="10px"
          display="flex"
          alignItems="center"
        >
          <Switch
            size="large"
            checked={loading}
            loadingPosition="start"
            onChange={(e) => setLoading(e.target.checked)}
          />
          <label htmlFor="load">loading</label>
        </Stack>

        <Stack spacing={3} direction="row" mb="10px">
          <LoadingButton loading={loading} variant="outlined" size="large">
            Submit
          </LoadingButton>
          <LoadingButton
            loading={loading}
            loadingIndicator="loading..."
            variant="contained"
            size="large"
          >
            Upload
          </LoadingButton>
          <LoadingButton
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            size="large"
          >
            Save
          </LoadingButton>
        </Stack>
      </Box>
    </>
  );
}

export default MuiButton;
