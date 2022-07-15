import React, { useState } from "react";
import "../Style/Footer.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(249,249,249,0.8)",
  boxShadow: 24,
  p: 4,
};

function Footer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState("");
  const [appintmentDate, setAppintmentDate] = useState();
  const [error, setError] = useState(false);
  return (
    <div className="footer">
      <button onClick={handleOpen} className="button">
        Book Now
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <div className="modalContainer">
            <div className="modalHeader">
              <h1>Book Now</h1>
              <div onClick={handleClose}>
                <CloseIcon />
              </div>
            </div>
            <div className="modalInputs">
              <div className="input">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="input">
                <input
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                  type="text"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="input">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <div className="input">
                <input
                  onChange={(e) => {
                    setAppintmentDate(e.target.value);
                  }}
                  type="date"
                  placeholder="Appointment Date"
                />
              </div>
            </div>
          </div>
          <button>Submit</button>
        </Box>
      </Modal>
    </div>
  );
}

export default Footer;
