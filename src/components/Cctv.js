import React, { Component } from "react";
import Webcam from "react-webcam";
import fire from "../scripts/fire";
import pixelmatch from "pixelmatch";
import "text-encoding";

import "pngjs";

var img1 = null;
class Cctv extends Component {
  state = {
    imageSrc: ""
  };

  componentDidMount() {
    var storageRef = fire
      .storage()
      .ref()
      .child("images");
    storageRef.getDownloadURL().then(url => {
      var img = document.getElementById("myimg");
      img.src = url;
      img1 = url;
      console.log(img1);
      // fetch(url).then(res => {
      //   res.json().then(data => {
      //     console.log(data);
      //   });
      // });
    });
  }
  _setBaseImage() {
    var storageRef = fire
      .storage()
      .ref()
      .child("images/");
    storageRef.putString(this.state.imageSrc, "data_url").then(snapshot => {
      console.log("uploaded a image url string");
    });
  }
  _compare() {
    console.log("hello");
    img1 = new TextEncoder().encode(img1);
    var img2 = this.state.imageSrc;
    img2 = new TextEncoder().encode(img2);
    var diff = null;
    const numDiffPixels = pixelmatch(img1, img2, diff, 640, 480, {
      threshold: 0.05
    });
    console.log(numDiffPixels);
  }
  setRef = webcam => {
    this.webcam = webcam;
  };
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();

    console.log(imageSrc);
    this.setState({
      imageSrc
    });
  };
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat='image/jpeg'
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
        <button onClick={() => this._setBaseImage()}>Set Base Image</button>
        <button onClick={() => this._compare()}>compare images</button>
        <div>
          <img id='myimg' />
        </div>
        <div>
          <img src={this.state.imageSrc} />
        </div>
      </div>
    );
  }
}

export default Cctv;
