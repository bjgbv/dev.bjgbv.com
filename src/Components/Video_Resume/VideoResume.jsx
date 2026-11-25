import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { motion } from "framer-motion";

const VideoResume = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  return (
    <motion.section
      whileInView={{ y: [50, 0] , opacity:[0 , 1] }}
      className="video_area section-padding"
    >
      <div className="container">
        <div className="section-title text-center">
          <h4>Take a look</h4>
          <h1>Video Resume</h1>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div
              className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12 "
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              data-wow-offset="0"
            >
              <div className="video_bg">
                <ModalVideo
                  channel="youtube"
                  isOpen={isVideoOpen}
                  videoId="alswD2tCc_Q"
                  onClose={() => setVideoOpen(false)}
                />
                <a
                  className="video-play play_btn_two"
                  href="#alswD2tCc_Q"
                  onClick={() => setVideoOpen(true)}
                >
                  <i className="ti-video-clapper"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default VideoResume;
