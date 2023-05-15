// @ts-nocheck
import './theme.css'

import React from 'react';
import { useState, useEffect, useRef } from "react";
// import { canUseDOM } from 'vtex.render-runtime';

var manifest = require('../../manifest.json');
var style = require('../../styles/configs/style.json');

export default function Theme() {
    console.log("%c " + manifest.name + "@" + manifest.version + " custom theme is running", "color: " + style.semanticColors['active-background'].success + "; font-size: 20px;")
    useEffect(() => {

    }, []);


    return <></>;
}