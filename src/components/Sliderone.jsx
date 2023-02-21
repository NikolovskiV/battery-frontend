import React from "react";
import { useState, useRef } from "react";
import $ from "jquery";
import "./Sliderone.scss";

function Sliderone(props) {
  const options = [
    {
      label: "A",

      value: "1",
    },

    {
      label: "A",

      value: "2",
    },

    {
      label: "A",

      value: "3",
    },

    {
      label: "A",

      value: "4",
    },
    {
      label: "A",

      value: "5",
    },
    {
      label: "A",

      value: "6",
    },
    {
      label: "A",

      value: "7",
    },
    {
      label: "A",

      value: "8",
    },
    {
      label: "A",

      value: "9",
    },
    {
      label: "A",

      value: "10",
    },
  ];
  const currentSliderRef = useRef();
  // const hide=useRef(null)

  // const handleclick=()=>{
  //   hide.current.style="display:none"
  // }
  const [currentValue, setCurrentValue] = useState(props.value);
  const changeBg=useRef(null)
  const change=useRef(null)
  const option_drop_down = useRef(null)
  const [open, setopen] = useState(false)
  
  console.log(open)
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
  }

  const onOptionClicked = value => () => {
    
    setCurrentValue(value);
    // setIsOpen(false);
    change.current.innerHTML=`${value} A`
    console.log(value);
    console.log(currentValue)
    };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(currentSliderRef.current.value);
  };
  const onChangeHandler = (e) => {
    setCurrentValue(e.target.value);
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
        ".range {background: linear-gradient(to right, 0%, " +
        val +
        "%, #fff " +
        val +
        "%, #fff 100%)}";
      style +=
        ".range input::-" +
        prefs[i] +
        "{background: linear-gradient(to right, 0%,  " +
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
      <form onSubmit={submitHandler} className="stepper-form" id={props.id}>
        <div className="stepper-form-wrapper-1">
          <div className="range">
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
            <li className="active selected">1A</li>
            <li>2A</li>
            <li>3A</li>
            <li>4A</li>
            <li>5A</li>
            <li>6A</li>
            <li>7A</li>
            <li>8A</li>
            <li>9A</li>
            <li>10A</li>
          </ul>
          
        </div>
        <div className="drop-down-wrapper" >
        <div className="custom-droop-down" onClick={opening} ref={changeBg}>
          <div ref={change} className='power'>{`Power consuption is on Ampere`}</div>
          {/* <button className="big-button-two" type="submit">
          Next&rarr;
        </button> */}
        </div>
        {open &&(
          <div className="option-drop-down" ref={option_drop_down}>
          <ul onClick={quitdropdown}>
            {options.map((elem)=>{
              return(
                <li key={elem.value} onClick={onOptionClicked(elem.value) }>{elem.value} {elem.label}</li>
              )
            })}
          </ul>
        </div>
        )}
        {/* <button className="big-button-two" type="submit">
          Next&rarr;
        </button> */}
        </div>
          {/* <select className="sliderone-select" onfocus='this.size=5;' onblur='this.size=1;' >
            {options.map((optval) => {
              return (
                <option value={optval.value} className="slider-one-option">
                  {optval.value}
                  {optval.label}
                </option>
              );
            })}
          </select> */}
        
       

        
      </form>
    </div>
  );
}

export default Sliderone;
