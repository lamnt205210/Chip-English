import React, { useState } from "react";
import { useMutationHook } from "../hooks/useMutationHook";
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
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as UserService from "../services/UserService";
import LoadingComponent from "../ui/LoadingComponent";
const Login = (props) => {
  const { openLogin, setOpenLogin, setOpenSignUp } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };
  const handleChangePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const mutation = useMutationHook((data) => UserService.loginUser(data));
  const { data, error, isPending } = mutation;
  const handleLogin = () => {
    mutation.mutate({
      userName,
      password,
    });
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
      <LoadingComponent open={isPending} />
      {(data?.status === "ERR" || error) && (
        <Alert severity="error">{data?.message}</Alert>
      )}
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
          <TextField
            label="Tên đăng nhập"
            fullWidth={true}
            value={userName}
            onChange={handleChangeUserName}
          />
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
            onChange={handleChangePassword}
            type={passwordVisible ? "text" : "password"}
            value={password}
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
            onClick={handleLogin}
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
