import { Box, Button, TextField, Typography } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { minHeight } from "@mui/system";

function MainBodyBox() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ border: "1px solid #999999", width: "50rem", p: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            첫 번째 제품 목록 시작하기
          </Typography>
          <Typography sx={{ pt: 3 }}>
            제품 목록 안내서는 첫 번째 목록을 작성하기 위한 모든 요구 사항을
            안내합니다.
          </Typography>
          <Button variant="contained" sx={{ mt: 5 }}>
            스타팅
          </Button>
        </Box>
        <Box
          sx={{ width: "400px", height: "250px", border: "1px solid #999999" }}
        >
          <img
            src={"./images/mainbodypic.jpg"}
            width="100%"
            height="100%"
            alt="none"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, width: "1000px", pt: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 6, md: 12 }}
        >
          {["page1", "page2", "page3", "page4"].map((one, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Item>{one}aaaaaaaaaaaaaaaaaassssssssssssssssssssss</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default MainBodyBox;
