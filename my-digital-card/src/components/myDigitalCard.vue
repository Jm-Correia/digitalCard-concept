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


<style scoped>
.card {
    width: 504px;
    height: 360px;
    color: #fff;
    cursor: pointer;
    perspective: 1000px;
}

.card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;

}

.round-corner {
    border-radius: 25px;
}

.front,
.back {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 30px;
    overflow: hidden;
    z-index: 1;
    backface-visibility: hidden;
}

.line {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.number {
    font-size: 35px;
    margin-top: 60px;
    max-width: 60%;
}

.name {
    font-size: 25px;
    margin-top: 20px;
    max-width: 60%;
}

.dates {
    max-width: 65%;
}

.text {
    font-size: 20px;
}

.color-label {
    color: #efe589;
    font-weight: bolder;
}

.logo {
    display: flex;
    z-index: 100;
    width: 250px;
}

.background {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .7;
    z-index: -1;
}

.bar {
    display: flex;
    justify-content: center;
    background: #222;
    margin-left: -30px;
    margin-right: -30px;
    height: 60px;
    margin-top: 30px;
    align-items: flex-end;
}

.qr-code {
    display: flex;
    justify-content: center;
}

.back {
    transform: rotateY(180deg);
}

.card:hover .card-inner {
    transform: rotateY(-180deg);
}
</style>