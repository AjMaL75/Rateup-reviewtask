import React, { useEffect, useState } from "react";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import Slider from "@mui/material/Slider";
import { useFormik } from "formik";
import inputSchema from "../validation";
import axios from "axios";
import { message, Select } from "antd";
import { Link } from "react-router-dom";

function Review() {
  const [range, setRange] = useState("");
  const [rangevalues, setRangevalues] = useState("");

  const valuetext = (value) => {
    return `${value}`;
  };
  const rangeResults = {
    1: "Very Bad",
    2: "Bad",
    3: "Not Good",
    4: "Okay",
    5: "Good",
    6: "Very Good",
    7: "Excellent",
    8: "Outstanding",
    9: "Exceptional",
    10: "Perfect ",
  };

  const formik = useFormik({
    initialValues: {
      appuse: "",
      goal: [],
      rateuser: "",
      improve: "",
      dob: "",
    },
    validationSchema: inputSchema,
    onSubmit: async () => {
      try {
        const body = {
          appuse: formik.values.appuse,
          goal: formik.values.goal,
          rateuser: rangevalues,
          improve: formik.values.improve,
          dob: formik.values.dob,
        };
        console.log(body);
        const response = await axios.post(
          "http://localhost:8000/reviewroute/addpost",
          body
        );
        if (response.data.success) {
          message.success("review has added successfully");
        } else {
          message.error("something went wrong");
        }
      } catch (error) {
        console.log(error);
      }

      // console.log(formik.values.goal);
    },
  });

  useEffect(() => {
    setRange(formik.values.rateuser);
    setRangevalues(rangeResults[range]);
  }, [formik.values.rateuser, range]);

  return (
    <div className="bg-info">
      <section className=" w-75 pt-2" style={{ paddingLeft: "450px" }}>
        <h5 style={{ marginLeft: "190px" }} className="fw-bold">
          <WavingHandIcon className="text-warning fs-5" /> Help us improve
        </h5>
        <Link to={"/getreview"}>
          <button className="btn btn-success" style={{ marginLeft: "950px" }}>
            Results
          </button>
        </Link>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="bg-light p-3 rounded"
        >
          <label htmlFor="">1. How often do you use this app?</label>
          <br />
          <select
            className="required form-control  mt-2"
            name="appuse"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="default">select</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="rarely">Rarely</option>
            <option value="firsttime">First Time</option>
          </select>
          {formik.errors.appuse || formik.touched.appuse ? (<p className="text-danger">{formik.errors.appuse}</p>) : null}
          <br />
          <br />
          <label htmlFor="">2. Main app goal?</label>
          <div className="card  flex justify-content-center">
            <select
              className="required form-control mt-2"
              multiple
              name="goal"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.goal}
            >
              <option value="information">Information</option>
              <option value="chat">Chat</option>
              <option value="entertainment">Entertainment</option>
              <option value="buy">Buy</option>
              <option value="socialize">Socialize</option>
              <option value="others">Others</option>
            </select>
          </div>
          {formik.errors.goal || formik.touched.goal ? ( <p className="text-danger">{formik.errors.goal}</p>) : null}
          <br />
          <label htmlFor="">3. Rate User Experience</label>
          <br />
          <Slider
            aria-label="UserExperience"
            defaultValue={0}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            value={formik.values.rateuser}
            onChange={formik.handleChange}
            className=" form-control mt-2"
            name="rateuser"
          />
          {formik.errors.rateuser || formik.touched.rateuser ? (<p className="text-danger">{formik.errors.rateuser}</p>) : null}
          <br />
          <br />
          <label htmlFor="improvementid">4. Suggest any improvements</label>
          <br />
          <textarea
            name="improve"
            id="improve"
            cols="30"
            rows="10"
            className=" form-control mt-2"
            value={formik.values.improve}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.improve || formik.touched.improve ? ( <p className="text-danger">{formik.errors.improve}</p>) : null}
          <br />
          <br />
          <label htmlFor="">5. Enter Your birthday</label>
          <br />
          <input
            type="date"
            name="dob"
            id="dob"
            placeholder="enter your dob"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control  mt-2"
          />
          {formik.errors.dob || formik.touched.dob ? ( <p className="text-danger">{formik.errors.dob}</p>) : null}
          <br />
          <br />
          <div className="text-center ">
            <button type="submit" className="btn btn-dark text-center">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Review;
