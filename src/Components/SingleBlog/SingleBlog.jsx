/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { author, banner_3, blog1, c1, c2 } from "../../constants/imgs";
import Contact from "../Contact/Contact";

const SingleBlog = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      {/* <!-- START SECTION TOP --> */}
      <section id="section_home" className="section-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div className="section-top-title">
                <h1>Blog Single Page Post</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END SECTION TOP -->		 */}

      {/* <!-- START BLOG --> */}
      <section className="blog-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12 col-xs-12">
              <motion.div
                whileInView={{ opacity: [0, 1], y: [50, 0] }}
                className="post-slide-blog"
              >
                <div className="blog-img bc_bottom">
                  <img src={blog1} className="img-fluid" alt="images" />
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using is that it has a more-or-less normal
                  distribution of letters, as opposed to using here making it
                  look like readable English. Many desktop publishing packages.{" "}
                  <br />
                  <br />
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using is that it has a more-or-less normal
                  distribution of letters, as opposed to using here making it
                  look like readable English. Many desktop publishing packages.
                </p>
                <p className="bc_left">
                  The point of using is that it has a more-or-less normal
                  distribution of letters, as opposed to using here making it
                  look like readable English.
                </p>
              </motion.div>
              <div className="author_part">
                <h3 className="blog_head_title">About the author</h3>
                <div className="single_author">
                  <img src={author} alt="" />
                  <h4>Marina Mojo</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ultricies quam nisi, vel gravida enim accumsan id.
                    Praesent justo quam, auctor et lorem in, pulvinar ornare
                    orci.
                  </p>
                </div>
              </div>
              <div className="comments_part">
                <h3 className="blog_head_title">Comments</h3>
                <div className="single_comment">
                  <img src={c1} alt="images" />
                  <h4>Ayoub Fennouni</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ultricies quam nisi, vel gravida enim accumsan id.
                    Praesent justo quam, auctor et lorem in, pulvinar ornare
                    orci.
                  </p>
                </div>
                <div className="single_comment single_comment_mbnone">
                  <img src={c2} alt="" />
                  <h4>Mark Linomi</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ultricies quam nisi, vel gravida enim accumsan id.
                    Praesent justo quam, auctor et lorem in, pulvinar ornare
                    orci.
                  </p>
                </div>
              </div>
              <div className="comment_form">
                <h3 className="blog_head_title">Add a Comment</h3>
                <div className="contact comment-box">
                  <form
                    id="contact-form"
                    method="post"
                    enctype="multipart/form-data"
                  >
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="first-name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="first-email"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          rows="6"
                          name="message"
                          className="form-control"
                          id="description"
                          placeholder="Your Message"
                          required="required"
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <div className="actions">
                          <button
                            type="submit"
                            value="Send message"
                            name="submit"
                            id="submitButton"
                            className="btn btn-lg contact_btn"
                            title="Submit Your Message!"
                          >
                            Submit Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <motion.div
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              className="col-lg-4 col-sm-12 col-xs-12"
            >
              <div className="blog_search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type & Press Enter"
                />
              </div>
              <div className="latest_blog wow fadeInRight">
                <h4 className="blog_sidebar_title">Latest Blog</h4>
                <div className="single_latest_blog">
                  <a href="#">
                    <h4>
                      Successful analysis can become the key to your business
                      success.
                    </h4>
                  </a>
                </div>
                <div className="single_latest_blog">
                  <a href="#">
                    <h4>
                      How a good team can positively influence your business.
                    </h4>
                  </a>
                </div>
                <div className="single_latest_blog">
                  <a href="#">
                    <h4>
                      Good partnerships can help your company achieve better
                      results.
                    </h4>
                  </a>
                </div>
              </div>
              <div className="categories">
                <h4 className="blog_sidebar_title">Categories</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti-arrow-right"></i> Photography
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-arrow-right"></i> Business
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-arrow-right"></i> Responsive Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-arrow-right"></i> Web Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-arrow-right"></i> Branding
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-arrow-right"></i> Marketing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="video_post wow fadeInRight">
                <h4 className="blog_sidebar_title">Video Widget</h4>
                <iframe
                  src="https://player.vimeo.com/video/62022718"
                  title="blog"
                ></iframe>
              </div>
              <div className="tag">
                <h4 className="blog_sidebar_title">Tag cloud</h4>
                <a href="#">Design</a>
                <a href="#">Development</a>
                <a href="#">Seo</a>
                <a href="#">Responsive</a>
                <a href="#">Photopgraphy</a>
                <a href="#">How to build</a>
                <a href="#">All project</a>
                <a href="#">Clean Design</a>
              </div>
              <div className="banner">
                <a href="#">
                  <img src={banner_3} className="img-fluid" alt="" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <!-- START CONTACT --> */}
      {<Contact />}
    </>
  );
};

export default SingleBlog;
