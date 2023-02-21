import React from "react";
import { useState, useRef } from "react";
import $ from "jquery";
import "./Slider.scss";

function Slider(props) {
  const currentSliderRef = useRef();
  const [currentValue, setCurrentValue] = useState(props.value);

  const options = [
    {
      label: "Year",

      value: "1",
    },

    {
      label: "Year",

      value: "2",
    },

    {
      label: "Year",

      value: "3",
    },

    {
      label: "Year",

      value: "4",
    },
    {
      label: "Year",

      value: "5",
    },
    {
      label: "Year",

      value: "6",
    },
    {
      label: "Year",

      value: "7",
    },
    {
      label: "Year",

      value: "8",
    },
    {
      label: "Year",

      value: "9",
    },
    {
      label: "Year",

      value: "10",
    },
  ];
  // const [SelectedOption, setSelectedOption] = useState(null)
  const changeBg=useRef(null)
  const option_drop_down = useRef(null)
  const change = useRef(null)
  const [open, setopen] = useState(false)
  
  const opening=()=>{
    setopen(!open)
    changeBg.current.classList.remove('bg')
  }
  // const toggling=()=>{
  //   // option_drop_down.current.classList.toggle("display")
    
    
  // }
  const quitdropdown=()=>{
    option_drop_down.current.classList.add("display")
    changeBg.current.classList.add('bg')
      // changeBg.current.classList.add('bg')
    console.log(open)
    
  }
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(currentSliderRef.current.value);
  };
  const onChangeHandler = (e) => {
    setCurrentValue(e.target.value);
  };
  const onOptionClicked = value => () => {
    setCurrentValue(value);
    // setIsOpen(false);
    change.current.innerHTML=`${value} Year`
    console.log(currentValue);
    };

  let sheet = document.createElement("style"),
    $rangeInput = $(".range input"),
    prefs = ["webkit-slider-runnable-track", "moz-range-track", "ms-track"];

  document.body.appendChild(sheet);

  let getTrackStyle = function (el) {
    let curVal = el.value,
      val = (curVal - 1) * 11,
      style = "";

    // Set active label
    $(".range-labels li").removeClass("active selected");

    let curLabel = $(".range-labels").find("li:nth-child(" + curVal + ")");

    curLabel.addClass("active selected");
    curLabel.prevAll().addClass("selected");

    // Change background gradient
    for (let i = 0; i < prefs.length; i++) {
      style +=
        ".range {background: linear-gradient(to right, 0%,  " +
        val +
        "%, #fff " +
        val +
        "%, #fff 100%)}";
      style +=
        ".range input::-" +
        prefs[i] +
        "{background: linear-gradient(to right,  0%,  " +
        val +
        "%, #b2b2b2 " +
        val +
        "%, #b2b2b2 100%)}";
    }

    return style;
  };

  $rangeInput.on("input", function () {
    sheet.textContent = getTrackStyle(this);
  });

  // Change input value on label click
  $(".range-labels li").on("click", function () {
    let index = $(this).index();

    $rangeInput.val(index + 1).trigger("input");
  });

  return (
    <div className="stepper-one">
      <form className="stepper-form" onSubmit={submitHandler} id={props.id}>
        <div className="stepper-form-wrapper">
          <div class="range">
            <input onChange={onChangeHandler}
            type="range"
            min={props.min}
            step={props.step}
            max={props.max}
            value={currentValue}
            ref={currentSliderRef}/>
          </div>

          <ul class="range-labels">
            <li class="active selected">1 Year</li>
            <li>2 year</li>
            <li>3 year</li>
            <li>4 year</li>
            <li>5 year</li>
            <li>6 year</li>
            <li>7 year</li>
            <li>8 year</li>
            <li>9 year</li>
            <li>10 year</li>
            
          </ul>
        </div>

        <div className="drop-down-wrapper" >
        <div className="custom-droop-down" onClick={opening} ref={changeBg}>
          <div className="heading-dropdown" ref={change}>{`Select Service life of Year`}</div>
          {/* <div>^</div> */}
          
        </div>
        {open&&(
          <div className="option-drop-down"  ref={option_drop_down}>
          <ul onClick={quitdropdown}>
            {options.map((elem)=>{
              return(
                <li key={elem.value} onClick={onOptionClicked(elem.value) } >{elem.value} {elem.label}</li>
              )
            })}
          </ul>
        </div>
        )}
        
        </div>
        {/* <div className="range">
          <input
            onChange={onChangeHandler}
            type="range"
            min={props.min}
            step={props.step}
            max={props.max}
            value={currentValue}
            ref={currentSliderRef}
          />
        </div>
        <ul className="range-labels">
          <li className="active selected">1 year</li>
          <li>2 years</li>
          <li>3 years</li>
          <li>4 years</li>
          <li>5 years</li>
          <li>6 years</li>
          <li>7 years</li>
          <li>8 years</li>
          <li>9 years</li>
          <li>10 years</li>
        </ul> */}
       
        
        
        
      </form>
    </div>
  );
}

export default Slider;
