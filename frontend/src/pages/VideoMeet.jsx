// import React, { useState } from 'react'
import React, { useEffect, useRef, useState } from 'react';
import "../styles/videoComponent.css"
import { TextField } from '@mui/material';
import {Button} from '@mui/material/'
import { connectToSocket } from './connectToSocket';
import { io } from "socket.io-client"

const server_url = "http://localhost:8000";

var connections = {};

const peerConfigurations = {
    "iceServers": [
        { "urls": "stun:stun.l.google.com:19302" }
    ]
}

export default function VideoMeetComponent() {

    const socketRef = useRef();
    const socketIdRef = useRef();

    const localVideoRef = useRef();

    let [videoAvaliable, setVideoAvaliable] = useState(true);
    let [audioAvaliable, setAudioAvaliable] = useState(true);
    let [video, setVideo] = useState();
    let [audio, setAudio] = useState();
    let [screen, setScreen] = useState();
    let [showModal, setModal] = useState();
    let [screenAvaliable, setScreenAvaliable] = useState();
    let [messages, setMessages] = useState();
    let [message, setMessage] = useState();
    let[newMessages, setNewMessages] = useState();
    let[askForUsername, setAskForUsername] = useState();
    let [username, setUsername] = useState();

    const videoRef = useRef([])

    let [videos, setVideos] = useState([]);
    
    const getPermissions = async() => {
        try{
            const videoPermission = await navigator.mediaDevices.getUserMedia({video:true});
            if(videoPermission) {
                setVideoAvaliable(true);
            }else{
                setVideoAvaliable(false);
            }
             const audioPermission = await navigator.mediaDevices.getUserMedia({audio:true});
            if(audioPermission) {
                setAudioAvaliable(true);
            }else{
                setAudioAvaliable(false);
            }
            if(navigator.mediaDevices.getDisplayMedia) {
                setScreenAvaliable(true);
            }else{
                setScreenAvaliable(false);
            }

            if(videoAvaliable || audioAvaliable) {
                const userMediaStream = await navigator.mediaDevices.getUserMedia({video: videoAvaliable, audio:audioAvaliable});
                if(userMediaStream) {
                    window.locationStream = userMediaStream;
                    if(localVideoRef.current) {
                        localVideoRef.current.srcObject = userMediaStream;
                    }
                }
            }
        }catch (err){
         console.log(err)
        }
    }

    let getUserMedia = () => {
        if((video && videoAvaliable) || (audio && audioAvaliable)){
            navigator.mediaDevices.getUserMedia({video:video,audio:audio})
            .then(() => {})
            .then((stream) => {})
            .catch((e) => console.log(e))
        } else {
            try{
                let tracks = localVideoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop())
            } catch (e) { }
        }
    }

    useEffect(() => {
        getPermissions();
    },[])
    
    useEffect(() => {
        if(video !== undefined && audio !== undefined){
            getUserMedia();
        }
    },[audio, video])
    let getMedia = () => {
        setVideo(videoAvaliable);
        setAudio(audioAvaliable);
        connectToSocketServer();
    }

    let connect = () => {
        setAskForUsername(false);
        getMedia();
    }

    return (
        <div>
            {askForUsername === true ?
             <div>
               </div>
               :<> <h2>Enter into Lobby</h2> 
               <TextField id="outlined-basic" label="Username" value={username} on Change={e => setUsername(e.target.value)} />
                <Button variant = "contained" onClick={connect}>Connect</Button>
                 <div>
                    <video ref= {localVideoRef} autoPlay muted></video>
                 </div>
                </>  
                
               
        }
        </div>
    )
}
