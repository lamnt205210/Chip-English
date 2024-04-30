import React from "react";
import {
  Dialog,
  TextField,
  Button,
  Checkbox,
  DialogTitle,
  Box,
  DialogContent,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Login = (props) => {
  const { openLogin, setOpenLogin, setOpenSignUp } = props;
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };
  const handleChangePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <Dialog
      open={openLogin}
      fullWidth={true}
      onClose={handleCloseLogin}
      sx={{
        backdropFilter: "blur(5px) sepia(5%)",
        "& .MuiDialog-paper": {
          borderRadius: "35px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "24px",
            fontFamily: "Cabin, sans-serif",
            fontWeight: "bold",
            marginLeft: "180px",
          }}
        >
          Đăng nhập
        </DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#e9f8f9",
              marginRight: "30px",
            }}
            onClick={handleCloseLogin}
          >
            <CloseIcon sx={{ cursor: "pointer", color: "#21BDC6" }} />
          </IconButton>
        </Box>
      </Box>
      <DialogContent>
        <Box sx={{ marginBottom: "20px" }}>
          <TextField label="Tên đăng nhập" fullWidth={true} />
        </Box>
        <Box
          sx={{
            marginBottom: "20px",
            alignItems: "center",
            display: "flex",
            position: "relative",
          }}
        >
          <TextField label="Mật khẩu" fullWidth={true} />
          <IconButton
            sx={{ position: "absolute", right: "0" }}
            onClick={handleChangePasswordVisible}
          >
            <img
              src={
                passwordVisible ? "images/eye_hide.png" : "images/eye_show.svg"
              }
              alt="eye"
            />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Checkbox label={"Lưu mật khẩu"} />
          <Typography
            sx={{
              alignContent: "center",
              fontFamily: "Cabin, sans-serif",
            }}
          >
            Lưu mật khẩu
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#21BDC6",
              fontFamily: "SVN-Poppins, sans-serif",
              borderRadius: "15px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Đăng nhập
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e9f8f9",
              fontFamily: "SVN-Poppins, sans-serif",
              borderRadius: "15px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#21BDC6",
            }}
          >
            Đăng nhập với Google
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              alignContent: "center",
              fontFamily: "Cabin, sans-serif",
            }}
          >
            ---Chưa có tài khoản?
          </Typography>
          <Typography
            sx={{
              alignContent: "center",
              fontFamily: "Cabin, sans-serif",
              color: "#21BDC6",
              textDecoration: "underline",
            }}
            onClick={() => {
              setOpenLogin(false);
              setOpenSignUp(true);
            }}
          >
            Đăng ký ngay
          </Typography>
          <Typography
            sx={{
              alignContent: "center",
              fontFamily: "Cabin, sans-serif",
            }}
          >
            ---
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
