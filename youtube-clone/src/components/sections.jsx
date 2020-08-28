import React, {useEffect, useState} from 'react';
import Youtube from 'simple-youtube-api';
import config from '../config';

import {Row, Col} from 'react-bootstrap';

import Single from './singe';
import Suggestions from './suggestions';

const youtube = new Youtube(config.apikey);
function Sections() {
    const apiCall = async()=>{
        const result = await youtube.search('dev ed', 5);
        console.log(result);
        setVideoList(result)
    }
    const [videoList, setVideoList] = useState([]);
    useEffect(()=>{
        apiCall();
    }, [])

    return (
        <React.Fragment>
        <Row>
            <Col style={{border: "2px solid red"}} xs={12} lg={8}> 
                <Single detail={videoList}/> 
            </Col>
            <Col style={{border: "2px solid red"}} xs={12} lg={4}>
                <Suggestions/>
            </Col>
        </Row>
        </React.Fragment>
    )
}

export default Sections;
