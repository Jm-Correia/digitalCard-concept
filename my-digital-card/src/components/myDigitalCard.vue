<script setup lang="ts">
import { reactive } from 'vue';
import background from '../assets/background.jpg';
import logo from '../assets/logo.png';

interface Card {
    cardNumber: String;
    name: String;
    birth: String;
    gender: String;
    donorStatus: String;
    effectiveDt: String;
    expiryDt: String;
}

const cardInfo = reactive<Card>(
    {
        cardNumber: "<p>4312</p> <p>122</p> <p>331</p>",
        name: "BABY NAME HERE",
        birth: "2011FEB01",
        gender: "F",
        donorStatus: "DONOR 2",
        effectiveDt: "2011FEB15",
        expiryDt: "2017MAR31"
    } as Card);


</script>

<template>
    <div class="card">
        <div class="card-inner">
            <div class="front round-corner">
                <img :src="background" class="background">
                <div class="line">
                    <img />
                    <img :src="logo" alt="LOGO" class="logo">
                </div>
                <div class="line number" v-html="cardInfo.cardNumber"></div>
                <div class="line name">
                    <p>{{ cardInfo.name }}</p>
                </div>
                <div class="line text">
                    <label class="color-label">Birth</label>
                    <p>{{ cardInfo.gender }}</p>
                    <p>{{ cardInfo.birth }}</p>
                    <p>{{ cardInfo.donorStatus }}</p>
                </div>
                <div class="line text dates">
                    <label class="color-label">Effective</label>
                    <p>{{ cardInfo.effectiveDt }}</p>
                </div>

                <div class="line text dates">
                    <label class="color-label">Expiry</label>
                    <p>{{ cardInfo.expiryDt }}</p>
                </div>
            </div>
            <div class="back round-corner">
                <img :src="background" class="background" />
                <div class="bar">
                    <p>Scan me</p>
                </div>
                <div class="qr-code">

                </div>
                <div class="row">

                    <p>Some extra text here.</p>
                </div>
            </div>
        </div>
    </div>
</template>
