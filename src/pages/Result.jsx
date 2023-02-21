import React, { useEffect, useState } from "react";
import Axios from "axios";
import Styles from "./BatteryTools.module.css";

function Result() {
  const [dataList, setDataList] = useState([]);
  console.log(dataList);
  const getFilterData = async (e) => {
    // const bodyFormData = new FormData();
    const objectData = {
      outdoor: "Y",
      family: "NiMH",
    };
    try {
      const { data } = await Axios.post("/api/bateries/filter", objectData, {
        headers: { "Content-Type": "application/json" },
      });
      for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
      }
      console.log("Response : ", data);
      console.log(data.data.length);
      setDataList(data.data);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    console.log("callback");
    getFilterData();
    return () => {
      setDataList({});
    };
  }, []);

  return (
    <div className="mybox">
      <h2 className={Styles.sectionTitle}>Battery selection guide</h2>{" "}
      <h6 className={Styles.sectionTitle}>Our suggestion</h6>
      <div className="container-infor">
        <div className="res-info">
          <p>
            Down below are different suggestion reflecting the selection you
            have made. If you are unsure of any of the details, don't hesitate
            to <span className="hide-contact">contact us</span>
            <span className="contact-us">
              <a href="">Contact us</a>
            </span>
          </p>
        </div>
        <div>
          <button className="big-button-contact">
            Contact us <br /> &rarr;
          </button>
        </div>
      </div>
      {dataList.map((datalist, idx) => {
        return (
          <div className="container-suggestion">
            <div className="container-wrapper-suggestion">
              <div className="image-suggestion-container">
                <img className="imgresult" src={datalist.image} alt="imgone" />
              </div>

              <div className="suggestion-card">
                <div className="sugestion-card-wrapper">
                  <div className="sugestion1">
                    <h5>{`Sugesstion ${idx + 1}`}</h5>
                    <hr />
                  </div>
                  <div className="battery-solution-wrapper">
                    <div className="battery-solution">
                      <h5>Battery Solution</h5>
                      <p>{datalist.name}</p>
                    </div>
                    <div className="chemistry">
                      <h5>Chemistry</h5>
                      <p>{datalist.family}</p>
                    </div>
                    <div className="expected-life-time">
                      <h5>Expected life time</h5>
                      <p>{datalist.supplier}</p>
                    </div>
                  </div>

                  <div className="battery-solution-wrapper-2">
                    <div className="temp-range">
                      <h5>Working Temperature Range</h5>
                      <p>{datalist.type}</p>
                    </div>

                    <div className="discharge-current">
                      <h5>Maximum Discharge Current</h5>
                      <p>{datalist.capacity}</p>
                    </div>
                    <div className="enquiry">
                      <button className="big-button-enq">
                        Send enquiry &#9993;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* {/* <div className="container-suggestion">
      <div className="container-wrapper-suggestion">
        <div className="image-suggestion-container">
        <img className="imgresult" src="images/battery.jpeg" alt="imgtwo" />
        </div>

        <div className="suggestion-card">
          <div className="sugestion-card-wrapper">
            <div className="sugestion1">
              <h3>Suggestion 2</h3>
              <hr />
            </div>
            <div className="battery-solution-wrapper">
              <div className="battery-solution">
                <h3>Battery Solution</h3>
                <p>
                CR17450 1S1P with BMS
                </p>
              </div>
              <div className="chemistry">
              <h3>Chemistry</h3>
                <p>
                Lithium manganese dioxide
                </p>
              </div>
              <div className="expected-life-time">
              <h3>Expected life time</h3>
                <p>
                6-8 years
                </p>
              
              </div>
                          </div>

            <div className="battery-solution-wrapper-2">
              <div className="temp-range">
              <h5>Working Temperature Range</h5>
                <p>
                20 - 38  &deg;C
                </p>
              </div>

              <div className="discharge-current">
              <h5>Maximum Discharge Current</h5>
                <p>
                1500mAh
                </p>
              </div>
              <div className="enquiry">
                <button className="big-button-enq">Send enquiry &#9993;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      {/* <div className="container-suggestion">
      <div className="container-wrapper-suggestion">
        <div className="image-suggestion-container">
        <img className="imgresult" src="images/vector.jpeg" alt="imgtree" />
                </div>

        <div className="suggestion-card">
          <div className="sugestion-card-wrapper">
            <div className="sugestion1">
              <h3>Suggestion 3</h3>
              <hr />
            </div>
            <div className="battery-solution-wrapper">
              <div className="battery-solution">
                <h3>Battery Solution</h3>
                <p>
                CR17450 1S1P with BMS
                </p>
              </div>
              <div className="chemistry">
              <h3>Chemistry</h3>
                <p>
                Lithium manganese dioxide
                </p>
              </div>
              <div className="expected-life-time">
              <h3>Expected life time</h3>
                <p>
                6-8 years
                </p>
              
              </div>
                          </div>

            <div className="battery-solution-wrapper-2">
              <div className="temp-range">
              <h5>Working Temperature Range</h5>
                <p>
                20 - 38  &deg;C
                </p>
              </div>

              <div className="discharge-current">
              <h5>Maximum Discharge Current</h5>
                <p>
                1500mAh
                </p>
              </div>
              <div className="enquiry">
                <button className="big-button-enq">Send enquiry &#9993;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="container-suggestion">
      <div className="container-wrapper-suggestion">
        <div className="image-suggestion-container">
        <img className="imgresult" src="images/bateri.jpeg" alt="imgone" /> 
        </div>

        <div className="suggestion-card">
          <div className="sugestion-card-wrapper">
            <div className="sugestion1">
            

              <h3>Suggestion 3</h3>
              <hr />
            </div>
            <div className="battery-solution-wrapper">
              <div className="battery-solution">
                <h3>Battery Solution</h3>
                <p>
                CR17450 1S1P with BMS and Charger
                </p>
              </div>
              <div className="chemistry">
              <h3>Chemistry</h3>
                <p>
                Lithium manganese dioxide
                </p>
              </div>
              <div className="expected-life-time">
              <h3>Expected life time</h3>
                <p>
                6-8 years
                </p>
              
              </div>
                          </div>

            <div className="battery-solution-wrapper-2">
              <div className="temp-range">
              <h5>Working Temperature Range</h5>
                <p>
                20 - 38  &deg;C
                </p>
              </div>

              <div className="discharge-current">
              <h5>Maximum Discharge Current</h5>
                <p>
                1500mAh
                </p>
              </div>
              <div className="enquiry">
                <button className="big-button-enq">Send enquiry &#9993;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  */}
      {/* <div className="container-info-wrapper">
      <div className="container-info">
        <div>
          
        </div>
        <div className="res-searc">
          <h3 className="new-title">Suggestion No. 1</h3>
          <div>
            <div className="result-searc-one">
              <p>
                <b>Battery solution</b>
                <br />
                CR17450 1S1P with BMS
              </p>
              <p className="special">
                <b>Chemistry</b>
                <br />
                Lithium manganese dioxide
              </p>
              <p className="special-two">
                <b>Expected life time</b>
                <br />
                6-8 years
              </p>
            </div>
            <div className="result-searc">
              <p>
                <b>Working temperature range</b>
                <br />
                22-38 °C
              </p>
              <p className="special-one">
                <b>Maximum discharge current</b>
                <br />
                1500mAh
              </p>
            </div>
          </div>
          <button className="big-button-enq">Send enquiry &#9993;</button>
        </div>
      </div>
      </div> */}
      {/* 
      <div className="container-info-wrapper">
      <div className="container-info">
        <div className="imgresult-div">
          <img className="imgresult" src="images/battery.jpeg" alt="imgtwo" />
        </div>
        <div className="res-searc">
          <h3 className="new-title">Suggestion No. 2</h3>
          <div>
            <div className="result-searc-one">
              <p>
                <b>Battery solution</b>
                <br />
                CR17450 1S1P with BMS
              </p>
              <p className="special">
                <b>Chemistry</b>
                <br />
                Lithium manganese dioxide
              </p>
              <p className="special-two">
                <b>Expected life time</b>
                <br />
                6-8 years
              </p>
            </div>
            <div className="result-searc">
              <p>
                <b>Working temperature range</b>
                <br />
                22-38 °C
              </p>
              <p className="special-one">
                <b>Maximum discharge current</b>
                <br />
                1500mAh
              </p>
            </div>
          </div>
          <button className="big-button-enq">Send enquiry &#9993;</button>
        </div>
      </div>
      </div> */}
      {/* <div className="container-info-wrapper">
      <div className="container-info">
        <div className="imgresult-div">
          <img className="imgresult" src="images/vector.jpeg" alt="imgtree" />
        </div>
        <div className="res-searc">
          <h3 className="new-title">Suggestion No. 3</h3>
          <div>
            <div className="result-searc-one">
              <div className="solution">

              <p className="temp-range">
              <p>
                <b>Battery solution</b>
                <br />
                CR17450 1S1P with BMS

              </p>

                <b>Working temperature range</b>
                <br />
                22-38 °C
              </p>
              </div>
              <div className="special-wrapper">
              <p className="special">
                <b>Chemistry</b>
                <br />
                Lithium manganese dioxide
              </p>

              <p className="special-one">
                <b>Maximum discharge current</b>
                <br />
                1500mAh
              </p>
              </div>
              <p className="special-two">
                <b>Expected life time</b>
                <br />
                10 years
              </p>
              <div className="result-searc">
              
              
              
              <button className="big-button-enq">Send enquiry &#9993;</button>
              
         
            </div>
            </div>
            
          </div>
          
        </div>
      </div>
      </div> */}
    </div>
  );
}

export default Result;
