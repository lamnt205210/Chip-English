import React, { useState } from "react";
import {
  Dialog,
  TextField,
  Button,
  DialogTitle,
  Box,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SignUp = (props) => {
  const { openSignUp, setOpenSignUp, setOpenLogin } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passWord, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };
  const handleChangePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleChangeConfirmPasswordVisible = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <Dialog
      open={openSignUp}
      onClose={handleCloseSignUp}
      fullWidth={true}
      sx={{
        backdropFilter: "blur(2px) sepia(5%)",
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
            marginLeft: "150px",
          }}
        >
          Đăng ký tài khoản
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
            onClick={handleCloseSignUp}
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
          <TextField
            label="Mật khẩu"
            fullWidth={true}
            type={passwordVisible ? "text" : "password"}
            onChange={handleOnChangePassword}
            value={passWord}
          />

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
        <Box
          sx={{
            marginBottom: "20px",
            alignItems: "center",
            display: "flex",
            position: "relative",
          }}
        >
          <TextField
            label="Nhập lại mật khẩu"
            fullWidth={true}
            value={confirmPassword}
            type={confirmPasswordVisible ? "text" : "password"}
            onChange={handleOnChangeConfirmPassword}
          />

          <IconButton
            sx={{ position: "absolute", right: "0" }}
            onClick={handleChangeConfirmPasswordVisible}
          >
            <img
              src={
                confirmPasswordVisible
                  ? "images/eye_hide.png"
                  : "images/eye_show.svg"
              }
              alt="eye"
            />
          </IconButton>
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
            Đăng ký
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              alignContent: "center",
              fontFamily: "Cabin, sans-serif",
            }}
          >
            ---Đã có tài khoản?
          </Typography>
          <Typography
            sx={{
              alignContent: "center",
              fontFamily: "Cabin, sans-serif",
              color: "#21BDC6",
              textDecoration: "underline",
            }}
            onClick={() => {
              setOpenLogin(true);
              setOpenSignUp(false);
            }}
          >
            Đăng nhập ngay
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

export default SignUp;
