import React, { Component } from "react";
import song1 from "./music/song1.mp3";
import song2 from "./music/song2.mp3";
import song3 from "./music/song3.mp3";
import song4 from "./music/song4.mp3";
import song5 from "./music/song5.mp3";
import song6 from "./music/song6.mp3";
import song7 from "./music/song7.mp3";
import song8 from "./music/song8.mp3";
import song9 from "./music/song9.mp3";
import { useState, useRef } from "react";
import Slider from "./components/Slider";
import ControlPanel from "./components/ControlPanel";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {

  const [percentage, setPercentage] = useState(0) 
  const [isPlaying, setIsPlaying] = useState(false) 
  const [duration, setDuration] = useState(0) 
  const [currentTime, setCurrentTime] = useState(0) 

  const audioRef = useRef()
  const audioRef2 = useRef()
  const audioRef3 = useRef()
  const audioRef4 = useRef()
  const audioRef5 = useRef()
  const audioRef6 = useRef()
  const audioRef7 = useRef()
  const audioRef8 = useRef()
  const audioRef9 = useRef()



  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
    const audio2 = audioRef2.current
    audio2.currentTime = (audio2.duration / 100) * e.target.value
    setPercentage(e.target.value)
    const audio3 = audioRef3.current
    audio3.currentTime = (audio3.duration / 100) * e.target.value
    setPercentage(e.target.value)
    const audio4 = audioRef4.current
    audio4.currentTime = (audio4.duration / 100) * e.target.value
    setPercentage(e.target.value)
    const audio5 = audioRef5.current
    audio5.currentTime = (audio5.duration / 100) * e.target.value
    setPercentage(e.target.value)
    const audio6 = audioRef6.current
    audio6.currentTime = (audio6.duration / 100) * e.target.value
    setPercentage(e.target.value)
    const audio7 = audioRef7.current
    audio7.currentTime = (audio7.duration / 100) * e.target.value
    setPercentage(e.target.value)
    const audio8 = audioRef8.current
    audio8.currentTime = (audio8.duration / 100) * e.target.value
    setPercentage(e.target.value)
    const audio9 = audioRef9.current
    audio9.currentTime = (audio9.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const play = () => {
    const audio = audioRef.current 
    audio.volume = 0.1
    audio.play()
    const audio2 = audioRef2.current
    audio2.volume = 0.1
    audio2.play()
    const audio3 = audioRef3.current 
    audio3.volume = 0.1
    audio3.play()
    const audio4 = audioRef4.current 
    audio4.volume = 0.1
    audio4.play()
    const audio5 = audioRef5.current 
    audio5.volume = 0.1
    audio5.play()
    const audio6 = audioRef6.current 
    audio6.volume = 0.1
    audio6.play()
    const audio7 = audioRef7.current 
    audio7.volume = 0.1
    audio7.play()
    const audio8 = audioRef8.current 
    audio8.volume = 0.1
    audio8.play()
    const audio9 = audioRef9.current 
    audio9.volume = 0.1
    audio9.play()
  }
  
  const stop = () => {
    const audio = audioRef.current
    audio.pause()
    const audio2 = audioRef2.current
    audio2.pause()
    const audio3 = audioRef3.current
    audio3.pause()
    const audio4 = audioRef4.current
    audio4.pause()
    const audio5 = audioRef5.current
    audio5.pause()
    const audio6 = audioRef6.current
    audio6.pause()
    const audio7 = audioRef7.current
    audio7.pause()
    const audio8 = audioRef8.current
    audio8.pause()
    const audio9 = audioRef9.current
    audio9.pause()
  }
  
  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

   return (
    <div className="App">

      <Slider onChange={onChange} percentage={percentage} /> 
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        src={song1}
      ></audio>

      <audio ref={audioRef2} src={song2}></audio>
      <audio ref={audioRef3} src={song3}></audio>
      <audio ref={audioRef4} src={song4}></audio>
      <audio ref={audioRef5} src={song5}></audio>
      <audio ref={audioRef6} src={song6}></audio>
      <audio ref={audioRef7} src={song7}></audio>
      <audio ref={audioRef8} src={song8}></audio>
      <audio ref={audioRef9} src={song9}></audio>

      <ControlPanel
        duration={duration}
        currentTime={currentTime}
      />

      <div>
      <React.Fragment>
        <ToggleSwitch label="Channel 1 Mute" />
      </React.Fragment>
      </div>
      <div>
      <React.Fragment>
        <ToggleSwitch label="Channel 2 Mute" />
      </React.Fragment>
      </div>
      <div>
      <React.Fragment>
        <ToggleSwitch label="Channel 3 Mute" />
      </React.Fragment>
      </div>
      <div>
      <React.Fragment>
        <ToggleSwitch label="Channel 4 Mute" />
      </React.Fragment>
      </div>
      <div>
      <React.Fragment>
        <ToggleSwitch label="Channel 5 Mute" />
      </React.Fragment>
      </div>
      <div>
      <React.Fragment>
        <ToggleSwitch label="Channel 6 Mute" />
      </React.Fragment>
      </div>
      <div>
      <React.Fragment>
        <ToggleSwitch label="Channel 7 Mute" />
      </React.Fragment>
      </div>
      <div>
      <React.Fragment>
        <ToggleSwitch label="Channel 8 Mute" />
      </React.Fragment>
      </div>
      <div>
      <React.Fragment>
        <ToggleSwitch label="Channel 9 Mute" />
      </React.Fragment>
      </div>

      <div className="btn-group">        
       <button onClick={play}>Play</button>
       <button onClick={stop}>Stop</button>
       <React.Fragment>
        <ToggleSwitch label="Loop" />
      </React.Fragment>
      </div>

    </div>
    );
  
}

export default App;
