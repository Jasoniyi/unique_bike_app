import React from "react";
import { BarlowCon600 } from "../Fonts/fonts";
import TextField from "@mui/material/TextField";
import Btn from "../components/bikeBtn/Btn";

const ContactPage = () => {
  return (
    <div className={`${BarlowCon600.className} pb-10 overflow-x-hidden`}>
      <div className="py-8 md:p-28 flex flex-col items-center md:items-start">
        <h1 className={` uppercase text-4xl`}>message</h1>
        <div className="pt-20 pb-12">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
            <div className="">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                sx={{ width: "350px" }}
              />
            </div>
            <div className="">
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                sx={{ width: "350px" }}
              />
            </div>
          </div>
          <div className="py-7 md:py-16">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </div>
          <div className="">
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              sx={{ width: "100%" }}
              multiline
              rows={9}
            />
          </div>
        </div>
        <div className="">
          <Btn
            title="send"
            color="bg-black"
            textColor="text-white"
            classname="px-8 tracking-widest"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
