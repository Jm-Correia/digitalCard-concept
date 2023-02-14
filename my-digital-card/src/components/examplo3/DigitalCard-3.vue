<script setup lang="ts">
import { reactive, ref } from 'vue';
import background from '../../assets/background.jpg';
import logo from '../../assets/logo.png';
import QRCodeVue3 from "qrcode-vue3";

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

const cssback = ref<boolean>(true)
const landscape = ref<boolean>(true)
const printed = ref<boolean>(false)

const clickBack = () => {
    console.log("call")
    cssback.value = !cssback.value
}

const changeDiretional = () => {
    landscape.value = !landscape.value
}

const print = () => {
    printed.value = true;
    setTimeout(() => {
        window.print();
    }, 300)


    setTimeout(() => {
        printed.value = false;
        cssback.value = true;
    }, 3000)

}


</script>

<template>

    <div class="page">

        <Transition mode="out-in" name="spin">
            <div class="card" v-if="cssback && !printed" :class="[landscape ? '' : 'portrait']">
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
                </div>
            </div>
            <div class="card" v-else-if="!cssback && !printed" :class="[landscape ? '' : 'portrait']">
                <div class="card-inner">
                    <div class="back round-corner">
                        <img :src="background" class="background" />
                        <div class="bar">
                            <p>Scan me</p>
                        </div>
                        <div class="qr-code">

                            <QRCodeVue3 :width="150" :height="150" value="name:joao;status:donor1;birth:1900JAN21;"
                                :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                                :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 30 }" :dotsOptions="{
                                    type: 'square',
                                    color: '#26249a',
                                    gradient: {
                                        type: 'linear',
                                        rotation: 0,
                                        colorStops: [
                                            { offset: 0, color: '#000' },
                                            { offset: 1, color: '#000' },
                                        ],
                                    },
                                }" :backgroundOptions="{ color: '#ffffff' }"
                                :cornersSquareOptions="{ type: 'square', color: '#000000' }"
                                :cornersDotOptions="{ type: undefined, color: '#000000' }" myclass="my-qur"
                                imgclass="img-qr" />
                        </div>
                        <div class="row">
                            <p>Some extra text here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
        <div v-if="printed">

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
                </div>
            </div>

            <div class="card printed">
                <div class="card-inner">
                    <div class="back round-corner">
                        <img :src="background" class="background" />
                        <div class="bar">
                            <p>Scan me</p>
                        </div>
                        <div class="qr-code">
                            <QRCodeVue3 :width="150" :height="150" value="name:joao;status:donor1;birth:1900JAN21;"
                                :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                                :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 30 }" :dotsOptions="{
                                    type: 'square',
                                    color: '#26249a',
                                    gradient: {
                                        type: 'linear',
                                        rotation: 0,
                                        colorStops: [
                                            { offset: 0, color: '#000' },
                                            { offset: 1, color: '#000' },
                                        ],
                                    },
                                }" :backgroundOptions="{ color: '#ffffff' }"
                                :cornersSquareOptions="{ type: 'square', color: '#000000' }"
                                :cornersDotOptions="{ type: undefined, color: '#000000' }" myclass="my-qur"
                                imgclass="img-qr" />
                        </div>
                        <div class="row">

                            <p>Some extra text here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="button">
            <button @click="print()">PRINT HERE</button>
            <button @click="clickBack()">Spin the Card</button>
            <button @click="changeDiretional">Change Dire</button>
        </div>
    </div>
</template>





































































































<style scoped src="./css/digitalcard-3.css"/>