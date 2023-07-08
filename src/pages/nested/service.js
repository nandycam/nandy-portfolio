import { Box, Container, Typography } from "@mui/material";
import React from "react";
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
        <Typography className="h3">MY SERVICES</Typography>
        <Typography className="p">
          A LEAD UX & UI DESIGNER BASED IN CANADA
        </Typography>
        <Box sx={{ marginTop: 5 }}>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div className="card">
                <div className="card_icon">
                  <DesktopWindowsOutlinedIcon
                    className="card_icon_item"
                  />
                </div>

                <Typography variant="h5" className="card_head">
                  Unique design
                </Typography>
                <Typography className="card_parah">
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </Typography>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div className="card">
                <div className="card_icon">
                  <LocalOfferOutlinedIcon className="card_icon_item" />
                </div>

                <Typography variant="h5" className="card_head">
                  Different Layout
                </Typography>
                <Typography className="card_parah">
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </Typography>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div className="card">
                <div className="card_icon">
                  <QuestionAnswerOutlinedIcon
                    className="card_icon_item"
                  />
                </div>

                <Typography variant="h5" className="card_head">
                  Make it Simple
                </Typography>
                <Typography className="card_parah">
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </Typography>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div className="card">
                <div className="card_icon">
                  <PhonelinkIcon className="card_icon_item" />
                </div>

                <Typography variant="h5 mt-5" className="card_head">
                  Responsiveness
                </Typography>
                <Typography className="card_parah">
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </Typography>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div className="card">
                <div className="card_icon">
                  <AdsClickIcon className="card_icon_item" />
                </div>

                <Typography variant="h5" className="card_head">
                  Testing for Perfection
                </Typography>
                <Typography className="card_parah">
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </Typography>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div className="card">
                <div className="card_icon">
                  <ConstructionIcon className="card_icon_item" />
                </div>

                <Typography variant="h5" className="card_head">
                  Advanced Options
                </Typography>
                <Typography className="card_parah">
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
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
