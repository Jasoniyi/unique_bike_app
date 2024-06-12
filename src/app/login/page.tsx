import React from "react";
import { BarlowCon600, BarlowCon200 } from "../Fonts/fonts";
import { TextField, Checkbox } from "@mui/material";
import Btn from "../components/bikeBtn/Btn";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const LoginPage = () => {
  return (
    <div className="flex flex-col space-y-12 items-center justify-center w-full h-screen">
      <span className={`${BarlowCon600.className}`}>
        <h1 className={` uppercase text-4xl`}>login</h1>
      </span>
      <div className="flex flex-col">
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          sx={{ width: "350px" }}
        />
        <div className="pt-8">
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{ width: "350px" }}
          />
        </div>
        <div
          className={`${BarlowCon200.className} py-3 flex justify-between text-xs uppercase tracking-wider font-semibold`}
        >
          <span className="flex space-x-0">
            <span className="">
              <Checkbox
                {...label}
                size="small"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 14,
                    marginTop: -1,
                    marginLeft: -1,
                  },
                }}
              />
            </span>
            <span className="">Remember me</span>
          </span>
          <span className="cursor-pointer">FORGOT PASSWORD?</span>
        </div>
        <div className="py-4">
          <Btn
            title="Login"
            color="bg-black"
            classname="text-white text-center font-semibold text-2xl"
          />
        </div>
        <div
          className={`${BarlowCon600.className} py-8 text-xl uppercase text-center font-semibold`}
        >
          create account
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
