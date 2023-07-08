import { Box, Button, Container, List, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import img from "../../../public/about-us.jpg";
import AlbumIcon from "@mui/icons-material/Album";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import FlagIcon from "@mui/icons-material/Flag";
import { Line, Circle } from "rc-progress";


const About = () => {
  return (
    <div className="about_section">
      <Head>
        <title>PORTFOLIO | ABOUT</title>
      </Head>
      <Box sx={{ paddingTop: 15 }}>
        <Container>
          <Typography variant="h2" className="about_header_h3">
            ABOUT ME
          </Typography>
          <Typography className="about_section_p">
            A LEAD UX & UI DESIGNER BASED IN INDIA
          </Typography>
          <div className="row">
            <div className="col-lg-6">
              <div>
                <Image className="about_section_img" src={img} height={400} />
              </div>
            </div>
            <div className="col-lg-6">
              <Typography className="h4">I'M Nanthakumar M</Typography>
              <Typography className="h6">
                A Lead <span className="color">UX & UI</span> designer based in
                india
              </Typography>
              <Typography variant="subtitle1" className="text-dark">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores. My passion is to design digital user
                experiences through the bold interface and meaningful
                interactions. Check out my Portfolio
              </Typography>
              <Box sx={{ paddingTop: 2 }}>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="media">
                      <Typography className="media_label">Birthday</Typography>
                      <Typography className="media_mute_label">
                        10th Dec 2001
                      </Typography>
                    </div>
                    <div className="media">
                      <Typography className="media_label">Age</Typography>
                      <Typography className="media_mute_label">21yr</Typography>
                    </div>
                    <div className="media">
                      <Typography className="media_label">Residence</Typography>
                      <Typography className="media_mute_label">
                        Coimbature
                      </Typography>
                    </div>
                    <div className="media">
                      <Typography className="media_label">Address</Typography>
                      <Typography className="media_mute_label">
                        Peelamedu,Coimbature
                      </Typography>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="media">
                      <Typography className="media_label">E-mail</Typography>
                      <Typography className="media_mute_label">
                        nandycamfsd0210@gmail.com
                      </Typography>
                    </div>
                    <div className="media">
                      <Typography className="media_label">Phone</Typography>
                      <Typography className="media_mute_label">
                        770-845-9198
                      </Typography>
                    </div>
                    <div className="media">
                      <Typography className="media_label">Skype</Typography>
                      <Typography className="media_mute_label">
                        skype.0404
                      </Typography>
                    </div>
                    <div className="media">
                      <Typography className="media_label">Freelance</Typography>
                      <Typography className="media_mute_label">
                        Available
                      </Typography>
                    </div>
                  </div>
                </div>
              </Box>
              <button variant="text" className="button">
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "White", marginTop: 8 }}>
        <Container sx={{ paddingTop: 10 }}>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Typography className="about_header_h3">MY SKILLS</Typography>
              <Typography variant="subtitle1" className="about_section_p">
                A LEAD UX & UI DESIGNER BASED IN CANADA
              </Typography>
              <Box>
                <div className="skills">
                  <div className="skills_bar">
                    <div className="bar">
                      <div className="info">
                        <span>HTML</span>
                      </div>
                      <div className="progress_line">
                        <span class="html"></span>
                      </div>
                      <div className="info">
                        <span>CSS</span>
                      </div>
                      <div className="progress_line">
                        <span class="css"></span>
                      </div>
                      <div className="info">
                        <span>MATERIAL-UI</span>
                      </div>
                      <div className="progress_line">
                        <span class="bootstrap"></span>
                      </div>
                      <div className="info">
                        <span>REACT JS</span>
                      </div>
                      <div className="progress_line">
                        <span class="javascript"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Box className="Mob_skill_card">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12  mt-5">
                    <div className="media_row">
                      <AlbumIcon className="icons" />
                      <Typography className="media_text">
                        80 Albumes Listened
                      </Typography>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12  mt-5">
                    <div className="media_row">
                      <EmojiEventsIcon className="icons" />
                      <Typography className="media_text">
                        80 Albumes Listened
                      </Typography>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                    <div className="media_row">
                      <EmojiFoodBeverageIcon className="icons" />
                      <Typography className="media_text">
                        80 Albumes Listened
                      </Typography>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                    <div className="media_row">
                      <FlagIcon className="icons" />
                      <Typography className="media_text">
                        80 Albumes Listened
                      </Typography>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default About;
