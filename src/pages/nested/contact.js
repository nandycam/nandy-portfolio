import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/Contact.module.css";
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
        <Typography variant="h2" className={styles.header_text}>
          GET IN TOUCH
        </Typography>
        <Typography className={styles.parah}>
          A LEAD UX & UI DESIGNER BASED IN CANADA
        </Typography>
        <Box sx={{ marginTop: 5 }}>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className={styles.contact_form}>
                <Typography className={styles.contact_form_head}>
                  SAY SOMETHING
                </Typography>
                <Box sx={{ display: "flex" }} className={styles.mod_col}>
                  <div class="form-group col-lg-6 col-md-12 col-sm-12">
                    <input
                      placeholder="Name "
                      type="text "
                      className={styles.form_control_col}
                    />
                  </div>
                  <div class="form-group  col-lg-6 col-md-12 col-sm-12">
                    <input
                      type="email"
                      placeholder="Email "
                      className={styles.form_control}
                    />
                  </div>
                </Box>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Subject *"
                    className={styles.form_control}
                  />
                </div>
                <div class="form-group">
                  <textarea
                    className={styles.form_control}
                    placeholder="Your message *"
                    rows="3"
                  />
                </div>
                <Button variant="contained" className={styles.My_btn}>
                  SEND MESSAGE
                </Button>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <Stack>
                <div className={styles.form_info}>
                  <LocationOnIcon className={styles.form_icon} />
                  <Box>
                    <Typography className={styles.h6}>Our Address</Typography>
                    <Typography className={styles.p}>
                      123 Stree New York City , United States Of America 750065.
                    </Typography>
                  </Box>
                </div>
                <div className={styles.form_info}>
                  <LocationOnIcon className={styles.form_icon} />
                  <Box>
                    <Typography className={styles.h6}>Our Address</Typography>
                    <Typography className={styles.p}>
                      123 Stree New York City , United States Of America 750065.
                    </Typography>
                  </Box>
                </div>
                <div className={styles.form_info}>
                  <LocationOnIcon className={styles.form_icon} />
                  <Box>
                    <Typography className={styles.h6}>Our Address</Typography>
                    <Typography className={styles.p}>
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
