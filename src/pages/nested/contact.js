import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image"; 
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

const contact = () => {
  return (
    <Box
      sx={{
        paddingTop: 15,
        height: "100%",
        backgroundColor: "#eaedf2",
        paddingBottom: 15,
      }}
    >
      <Container>
        <Typography variant="h2" className="header_text">
          GET IN TOUCH
        </Typography>
        <Typography className="parah">
          A LEAD UX & UI DESIGNER BASED IN CANADA
        </Typography>
        <Box sx={{ marginTop: 5 }}>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="contact_form">
                <Typography className="contact_form_head">
                  SAY SOMETHING
                </Typography>
                <Box sx={{ display: "flex" }} className="mod_col">
                  <div class="form-group col-lg-6 col-md-12 col-sm-12">
                    <input
                      placeholder="Name "
                      type="text "
                      className="form_control_col"
                    />
                  </div>
                  <div class="form-group  col-lg-6 col-md-12 col-sm-12">
                    <input
                      type="email"
                      placeholder="Email "
                      className="form_control"
                    />
                  </div>
                </Box>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Subject *"
                    className="form_control"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    className="form_control"
                    placeholder="Your message *"
                    rows="3"
                  />
                </div>
                <Button variant="contained" className="My_btn">
                  SEND MESSAGE
                </Button>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <Stack>
                <div className="form_info">
                  <LocationOnIcon className="form_icon" />
                  <Box>
                    <Typography className="h6">Our Address</Typography>
                    <Typography className="p">
                      123 Stree New York City , United States Of America 750065.
                    </Typography>
                  </Box>
                </div>
                <div className="form_info">
                  <LocationOnIcon className="form_icon" />
                  <Box>
                    <Typography className="h6">Our Address</Typography>
                    <Typography className="p">
                      123 Stree New York City , United States Of America 750065.
                    </Typography>
                  </Box>
                </div>
                <div className="form_info">
                  <LocationOnIcon className="form_icon" />
                  <Box>
                    <Typography className="h6">Our Address</Typography>
                    <Typography className="p">
                      123 Stree New York City , United States Of America 750065.
                    </Typography>
                  </Box>
                </div>
              </Stack>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default contact;
