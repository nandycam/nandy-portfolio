import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/Service.module.css";
import Image from "next/image";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import ConstructionIcon from "@mui/icons-material/Construction";

const service = () => {
  return (
    <Box sx={{ paddingTop: 12, paddingBottom: 12, backgroundColor: "#eaedf2" }}>
      <Container>
        <Typography className={styles.h3}>MY SERVICES</Typography>
        <Typography className={styles.p}>
          A LEAD UX & UI DESIGNER BASED IN CANADA
        </Typography>
        <Box sx={{ marginTop: 5 }}>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div className={styles.card}>
                <div className={styles.card_icon}>
                  <DesktopWindowsOutlinedIcon
                    className={styles.card_icon_item}
                  />
                </div>

                <Typography variant="h5" className={styles.card_head}>
                  Unique design
                </Typography>
                <Typography className={styles.card_parah}>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </Typography>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div className={styles.card}>
                <div className={styles.card_icon}>
                  <LocalOfferOutlinedIcon className={styles.card_icon_item} />
                </div>

                <Typography variant="h5" className={styles.card_head}>
                  Different Layout
                </Typography>
                <Typography className={styles.card_parah}>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </Typography>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div className={styles.card}>
                <div className={styles.card_icon}>
                  <QuestionAnswerOutlinedIcon
                    className={styles.card_icon_item}
                  />
                </div>

                <Typography variant="h5" className={styles.card_head}>
                  Make it Simple
                </Typography>
                <Typography className={styles.card_parah}>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </Typography>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div className={styles.card}>
                <div className={styles.card_icon}>
                  <PhonelinkIcon className={styles.card_icon_item} />
                </div>

                <Typography variant="h5 mt-5" className={styles.card_head}>
                  Responsiveness
                </Typography>
                <Typography className={styles.card_parah}>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </Typography>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div className={styles.card}>
                <div className={styles.card_icon}>
                  <AdsClickIcon className={styles.card_icon_item} />
                </div>

                <Typography variant="h5" className={styles.card_head}>
                  Testing for Perfection
                </Typography>
                <Typography className={styles.card_parah}>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </Typography>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div className={styles.card}>
                <div className={styles.card_icon}>
                  <ConstructionIcon className={styles.card_icon_item} />
                </div>

                <Typography variant="h5" className={styles.card_head}>
                  Advanced Options
                </Typography>
                <Typography className={styles.card_parah}>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default service;
