import React from "react";
import Link from "next/link"
import Slider from "@components/client/slider/slider";
import BigSlider from "@components/client/slider/bigSlider/bigSlider";
const Home = () => {
    return (
        <>

            <div className="flex gap-5">
                <BigSlider />

                <div className="rounded-lg w-3/5  ">
                    <h1 className="text-4xl font-yekan-bold text-gray-900 text-center">فروشگاه آنلاین شهروند مهاجر</h1>
                    <p className="text-slate-600 text-justify text-sm my-4 leading-7 font-yekan-bold">شهروند مهاجر جهت تسریع و تسهیل فرایند خرید اینترنتی و خدمت‌رسانی به همشهریان عزیز شهر مهاجران، بیش از ۵۰۰۰ کالای متنوع در دسته‌بند‌ی‌های گوناگون نظیر لبنیات، خواربار، میوه و سبزیجات تازه، نان، مواد پروتئینی، لوازم بهداشتی و آرایشی ... را به صورت آنلاین عرضه می‌کند </p>
                    <p className="text-sm text-gray-600 mt-5 flex  items-center">
                        <span className="bg-white p-2 rounded-md ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path>
                            </svg>
                        </span>
                        شهرمهاجران، خیابان ملاصدرا، بازارچه شرقی، پاساژ تبارک، طبقه اول، فروشگاه شهروند مهاجر
                    </p>
                    <p className="text-sm text-gray-600 mt-5 flex items-center">
                        <span className="bg-white p-2 rounded-md ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg"  class="h-6 w-6 text-slate-400 " xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={256} height={256} viewBox="0 0 256 256" xmlSpace="preserve">
                                <desc>Created with Fabric.js 1.7.22</desc>
                                <defs>
                                </defs>
                                <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                                    <g style={{ "stroke": "none", "stroke-width": "0", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "none", "fill-rule": "nonzero", "opacity": "1" }} transform="translate(-175.05 -175.05) scale(3.89 3.89)">
                                        <path d="M 16.639 2.864 c 0.071 0 0.142 0.001 0.215 0.003 c 0.131 0.003 0.261 0.011 0.388 0.019 c 0.171 0.011 0.342 0.024 0.513 0.044 c 0.137 0.016 0.273 0.038 0.409 0.059 c 0.162 0.026 0.323 0.051 0.487 0.086 c 0.129 0.027 0.255 0.061 0.425 0.104 l 0.056 0.015 c 0.133 0.034 0.266 0.067 0.398 0.108 c 0.123 0.038 0.244 0.084 0.366 0.128 l 0.076 0.028 l 0.124 0.045 c 0.098 0.035 0.197 0.07 0.294 0.11 c 0.122 0.051 0.242 0.11 0.362 0.168 l 0.094 0.045 l 0.165 0.078 c 0.072 0.034 0.144 0.066 0.215 0.104 c 0.125 0.067 0.246 0.143 0.368 0.217 l 0.099 0.061 l 0.192 0.115 c 0.047 0.028 0.096 0.054 0.143 0.086 c 0.153 0.102 0.3 0.217 0.447 0.33 l 0.054 0.041 c 0.067 0.051 0.135 0.101 0.203 0.15 l 0.059 0.042 c 0.257 0.21 0.499 0.429 0.72 0.649 l 8.159 8.159 c 0.221 0.221 0.439 0.463 0.641 0.709 l 0.053 0.072 c 0.049 0.068 0.098 0.135 0.149 0.202 l 0.046 0.061 c 0.111 0.145 0.223 0.288 0.324 0.44 c 0.032 0.048 0.059 0.098 0.088 0.147 l 0.112 0.188 l 0.063 0.103 c 0.074 0.12 0.149 0.24 0.215 0.365 c 0.038 0.071 0.071 0.144 0.104 0.216 l 0.077 0.163 l 0.046 0.096 c 0.057 0.119 0.116 0.238 0.167 0.36 c 0.04 0.095 0.073 0.192 0.108 0.289 l 0.046 0.127 l 0.028 0.076 c 0.045 0.122 0.09 0.244 0.129 0.37 c 0.04 0.128 0.072 0.258 0.105 0.388 l 0.024 0.095 c 0.034 0.132 0.069 0.264 0.098 0.399 c 0.034 0.159 0.059 0.319 0.084 0.48 c 0.022 0.138 0.044 0.275 0.06 0.415 c 0.02 0.17 0.032 0.34 0.043 0.509 c 0.008 0.13 0.016 0.259 0.019 0.389 c 0.004 0.179 0.003 0.358 -0.002 0.536 c -0.004 0.121 -0.009 0.242 -0.017 0.364 c -0.012 0.187 -0.03 0.373 -0.052 0.555 c -0.014 0.111 -0.03 0.222 -0.048 0.334 c -0.031 0.194 -0.065 0.386 -0.107 0.577 c -0.02 0.09 -0.043 0.178 -0.073 0.297 c -0.05 0.199 -0.104 0.398 -0.166 0.593 c -0.016 0.051 -0.035 0.101 -0.053 0.152 l -0.038 0.106 c -0.072 0.204 -0.146 0.407 -0.231 0.605 l -0.037 0.079 l -0.064 0.137 c -0.096 0.209 -0.194 0.416 -0.316 0.637 l -0.087 0.148 c -0.145 0.253 -0.259 0.439 -0.365 0.597 c -0.034 0.045 -0.067 0.09 -0.099 0.135 c -0.186 0.266 -0.343 0.474 -0.494 0.654 c -0.229 0.274 -0.408 0.473 -0.58 0.645 l -5.52 5.52 c -1.876 1.876 -1.876 4.927 0 6.803 l 23.86 23.86 c 0.909 0.909 2.117 1.409 3.402 1.409 c 1.285 0 2.493 -0.5 3.402 -1.409 l 5.52 -5.52 c 0.172 -0.172 0.371 -0.351 0.645 -0.581 c 0.181 -0.151 0.389 -0.309 0.654 -0.495 c 0.043 -0.03 0.085 -0.061 0.133 -0.097 c 0.16 -0.108 0.348 -0.223 0.604 -0.37 l 0.158 -0.095 c 0.204 -0.112 0.413 -0.21 0.624 -0.307 l 0.135 -0.063 l 0.074 -0.035 c 0.201 -0.086 0.405 -0.161 0.613 -0.234 l 0.106 -0.038 c 0.048 -0.017 0.096 -0.035 0.145 -0.051 c 0.198 -0.063 0.397 -0.117 0.629 -0.176 c 0.087 -0.022 0.174 -0.045 0.262 -0.064 c 0.193 -0.042 0.386 -0.077 0.583 -0.108 c 0.109 -0.017 0.218 -0.034 0.326 -0.047 c 0.187 -0.023 0.373 -0.04 0.565 -0.053 c 0.119 -0.008 0.239 -0.013 0.357 -0.017 c 0.108 -0.003 0.216 -0.005 0.325 -0.005 c 0.071 0 0.142 0.001 0.214 0.003 c 0.13 0.003 0.26 0.011 0.388 0.019 c 0.171 0.011 0.341 0.024 0.513 0.044 c 0.137 0.016 0.273 0.038 0.409 0.059 c 0.162 0.026 0.323 0.051 0.486 0.086 c 0.128 0.027 0.255 0.061 0.425 0.104 l 0.056 0.014 c 0.133 0.034 0.266 0.067 0.398 0.108 c 0.123 0.038 0.244 0.084 0.366 0.128 l 0.076 0.028 l 0.124 0.045 c 0.098 0.035 0.197 0.07 0.295 0.11 c 0.122 0.051 0.241 0.11 0.361 0.167 l 0.095 0.045 l 0.165 0.078 c 0.072 0.034 0.144 0.066 0.215 0.104 c 0.125 0.067 0.246 0.143 0.368 0.217 l 0.099 0.061 l 0.192 0.115 c 0.047 0.028 0.096 0.054 0.143 0.086 c 0.153 0.102 0.3 0.217 0.448 0.33 l 0.054 0.041 c 0.067 0.051 0.135 0.101 0.203 0.15 l 0.059 0.042 c 0.257 0.21 0.499 0.429 0.72 0.649 l 8.159 8.159 c 0.221 0.221 0.439 0.463 0.641 0.709 l 0.053 0.072 c 0.049 0.068 0.098 0.135 0.149 0.202 l 0.045 0.06 c 0.111 0.145 0.224 0.289 0.325 0.441 c 0.032 0.048 0.059 0.098 0.088 0.147 l 0.112 0.188 l 0.063 0.103 c 0.074 0.12 0.149 0.24 0.215 0.365 c 0.038 0.071 0.071 0.144 0.105 0.216 l 0.077 0.163 l 0.047 0.097 c 0.057 0.119 0.115 0.237 0.166 0.358 c 0.04 0.095 0.073 0.192 0.108 0.288 l 0.046 0.127 l 0.028 0.078 c 0.044 0.122 0.09 0.243 0.129 0.368 c 0.04 0.128 0.072 0.257 0.105 0.386 l 0.024 0.095 c 0.034 0.133 0.069 0.265 0.098 0.401 c 0.034 0.159 0.059 0.319 0.084 0.479 c 0.022 0.138 0.044 0.275 0.06 0.415 c 0.02 0.17 0.032 0.34 0.043 0.509 c 0.008 0.129 0.016 0.259 0.019 0.389 c 0.004 0.179 0.003 0.358 -0.002 0.535 c -0.004 0.121 -0.009 0.242 -0.017 0.364 c -0.012 0.187 -0.03 0.373 -0.052 0.555 c -0.014 0.111 -0.03 0.222 -0.048 0.334 c -0.031 0.194 -0.065 0.386 -0.107 0.577 c -0.02 0.09 -0.043 0.178 -0.073 0.297 c -0.05 0.2 -0.104 0.398 -0.166 0.593 c -0.016 0.051 -0.035 0.102 -0.053 0.152 l -0.038 0.106 c -0.072 0.204 -0.146 0.407 -0.231 0.605 l -0.037 0.079 l -0.064 0.137 c -0.096 0.209 -0.194 0.416 -0.316 0.637 l -0.087 0.148 c -0.145 0.253 -0.259 0.439 -0.365 0.597 c -0.034 0.045 -0.067 0.09 -0.099 0.135 c -0.186 0.266 -0.343 0.474 -0.494 0.653 c -0.229 0.274 -0.408 0.473 -0.58 0.645 l -0.026 0.026 l -0.026 0.027 c -3.996 4.199 -10.029 6.512 -16.988 6.512 c -12.981 0 -27.91 -7.839 -42.053 -22.089 C 10.839 50.511 3 35.464 3.138 22.403 C 3.21 15.59 5.522 9.675 9.649 5.749 l 0.027 -0.026 l 0.026 -0.026 c 0.172 -0.172 0.371 -0.351 0.645 -0.581 c 0.181 -0.151 0.389 -0.309 0.655 -0.495 c 0.043 -0.03 0.085 -0.061 0.133 -0.097 c 0.16 -0.108 0.348 -0.223 0.605 -0.37 l 0.158 -0.095 c 0.204 -0.112 0.413 -0.21 0.624 -0.307 l 0.135 -0.063 l 0.074 -0.035 c 0.201 -0.086 0.406 -0.161 0.613 -0.234 l 0.106 -0.038 c 0.049 -0.017 0.097 -0.035 0.145 -0.051 c 0.198 -0.063 0.397 -0.117 0.629 -0.176 c 0.087 -0.022 0.174 -0.045 0.262 -0.064 c 0.193 -0.042 0.386 -0.077 0.583 -0.108 c 0.109 -0.017 0.218 -0.034 0.325 -0.047 c 0.187 -0.023 0.373 -0.04 0.565 -0.053 c 0.119 -0.008 0.239 -0.013 0.357 -0.017 C 16.423 2.865 16.531 2.864 16.639 2.864 M 16.639 -0.136 c -0.138 0 -0.275 0.002 -0.413 0.006 c -0.157 0.005 -0.313 0.012 -0.469 0.022 c -0.244 0.016 -0.488 0.039 -0.731 0.069 C 14.883 -0.021 14.741 0 14.599 0.022 c -0.254 0.04 -0.506 0.086 -0.758 0.141 c -0.128 0.028 -0.255 0.061 -0.382 0.093 c -0.262 0.066 -0.522 0.137 -0.781 0.22 c -0.111 0.036 -0.221 0.077 -0.331 0.115 c -0.269 0.095 -0.536 0.194 -0.8 0.307 c -0.093 0.04 -0.184 0.085 -0.276 0.128 c -0.275 0.126 -0.548 0.257 -0.815 0.403 c -0.072 0.04 -0.142 0.084 -0.213 0.126 c -0.282 0.162 -0.56 0.329 -0.831 0.514 c -0.044 0.03 -0.086 0.065 -0.13 0.095 C 8.989 2.369 8.701 2.582 8.423 2.815 l 0 0 c -0.288 0.241 -0.572 0.49 -0.842 0.76 C -3.732 14.34 -4.744 39.272 23.096 66.904 c 16.498 16.622 32.035 22.96 44.167 22.96 c 8.188 0 14.824 -2.886 19.162 -7.444 c 0.27 -0.27 0.52 -0.554 0.76 -0.842 c 0 0 0 0 0 0 c 0.232 -0.277 0.444 -0.564 0.649 -0.855 c 0.032 -0.045 0.067 -0.088 0.098 -0.134 c 0.184 -0.27 0.35 -0.547 0.511 -0.827 c 0.042 -0.073 0.088 -0.144 0.128 -0.218 c 0.146 -0.266 0.276 -0.537 0.401 -0.811 c 0.043 -0.094 0.089 -0.186 0.13 -0.28 c 0.113 -0.262 0.211 -0.528 0.305 -0.796 c 0.039 -0.112 0.081 -0.223 0.117 -0.336 c 0.082 -0.257 0.153 -0.516 0.219 -0.777 c 0.033 -0.129 0.065 -0.257 0.094 -0.386 c 0.055 -0.25 0.1 -0.501 0.14 -0.754 c 0.023 -0.144 0.044 -0.287 0.062 -0.432 c 0.03 -0.242 0.052 -0.484 0.068 -0.727 c 0.01 -0.158 0.018 -0.315 0.022 -0.473 c 0.007 -0.233 0.008 -0.465 0.003 -0.698 c -0.004 -0.169 -0.013 -0.338 -0.024 -0.507 c -0.014 -0.222 -0.031 -0.444 -0.057 -0.665 c -0.021 -0.18 -0.049 -0.359 -0.077 -0.539 c -0.033 -0.21 -0.067 -0.419 -0.111 -0.627 c -0.04 -0.189 -0.089 -0.376 -0.137 -0.564 c -0.051 -0.197 -0.1 -0.393 -0.161 -0.587 c -0.061 -0.196 -0.133 -0.389 -0.203 -0.583 c -0.066 -0.182 -0.129 -0.365 -0.204 -0.545 c -0.084 -0.202 -0.181 -0.398 -0.276 -0.596 c -0.08 -0.167 -0.154 -0.335 -0.242 -0.498 c -0.111 -0.209 -0.238 -0.41 -0.361 -0.614 c -0.089 -0.146 -0.171 -0.296 -0.267 -0.439 c -0.15 -0.225 -0.317 -0.441 -0.483 -0.658 c -0.087 -0.114 -0.165 -0.232 -0.256 -0.343 c -0.265 -0.324 -0.548 -0.639 -0.85 -0.941 l -8.159 -8.159 c -0.302 -0.302 -0.617 -0.584 -0.941 -0.85 c -0.111 -0.091 -0.228 -0.168 -0.341 -0.255 c -0.218 -0.166 -0.434 -0.334 -0.66 -0.484 c -0.143 -0.095 -0.291 -0.176 -0.437 -0.265 c -0.204 -0.124 -0.406 -0.251 -0.615 -0.362 c -0.163 -0.087 -0.331 -0.162 -0.497 -0.241 c -0.198 -0.095 -0.396 -0.192 -0.598 -0.276 c -0.18 -0.075 -0.364 -0.138 -0.547 -0.205 c -0.193 -0.07 -0.384 -0.141 -0.58 -0.202 c -0.196 -0.061 -0.394 -0.111 -0.592 -0.162 c -0.186 -0.048 -0.372 -0.096 -0.559 -0.136 c -0.21 -0.044 -0.42 -0.079 -0.631 -0.112 c -0.178 -0.028 -0.356 -0.056 -0.535 -0.077 c -0.222 -0.026 -0.444 -0.043 -0.667 -0.057 c -0.169 -0.011 -0.337 -0.02 -0.506 -0.024 c -0.096 -0.002 -0.192 -0.003 -0.287 -0.003 c -0.138 0 -0.275 0.002 -0.413 0.006 c -0.157 0.005 -0.313 0.012 -0.469 0.022 c -0.244 0.016 -0.488 0.039 -0.731 0.069 c -0.143 0.018 -0.285 0.039 -0.428 0.061 c -0.254 0.04 -0.506 0.086 -0.758 0.141 c -0.128 0.028 -0.255 0.061 -0.382 0.093 c -0.262 0.066 -0.522 0.137 -0.781 0.22 c -0.111 0.036 -0.221 0.077 -0.331 0.115 c -0.269 0.095 -0.536 0.194 -0.8 0.307 c -0.093 0.04 -0.184 0.085 -0.276 0.128 c -0.275 0.126 -0.548 0.257 -0.815 0.403 c -0.072 0.04 -0.142 0.084 -0.213 0.126 c -0.282 0.162 -0.56 0.329 -0.831 0.514 c -0.044 0.03 -0.086 0.065 -0.13 0.095 c -0.293 0.205 -0.581 0.418 -0.859 0.651 l 0 0 c -0.288 0.241 -0.572 0.49 -0.842 0.76 l -5.52 5.52 c -0.354 0.354 -0.817 0.53 -1.28 0.53 c -0.463 0 -0.927 -0.177 -1.28 -0.53 L 28.272 37.867 c -0.707 -0.707 -0.707 -1.854 0 -2.561 l 5.52 -5.52 c 0.27 -0.27 0.52 -0.554 0.761 -0.842 c 0 0 0 0 0 0 c 0.232 -0.277 0.444 -0.564 0.649 -0.855 c 0.032 -0.045 0.067 -0.088 0.098 -0.134 c 0.184 -0.27 0.35 -0.547 0.511 -0.827 c 0.042 -0.073 0.088 -0.144 0.128 -0.218 c 0.146 -0.266 0.276 -0.537 0.401 -0.811 c 0.043 -0.094 0.089 -0.186 0.13 -0.28 c 0.113 -0.262 0.211 -0.528 0.305 -0.796 c 0.039 -0.112 0.081 -0.223 0.117 -0.336 c 0.082 -0.257 0.153 -0.516 0.219 -0.777 c 0.033 -0.129 0.065 -0.257 0.094 -0.386 c 0.055 -0.25 0.1 -0.501 0.14 -0.754 c 0.023 -0.144 0.044 -0.287 0.062 -0.432 c 0.03 -0.242 0.052 -0.484 0.068 -0.727 c 0.011 -0.158 0.018 -0.315 0.022 -0.473 c 0.007 -0.233 0.008 -0.465 0.003 -0.698 c -0.004 -0.169 -0.013 -0.338 -0.024 -0.507 c -0.014 -0.222 -0.031 -0.444 -0.057 -0.665 c -0.021 -0.18 -0.049 -0.359 -0.077 -0.539 c -0.033 -0.21 -0.068 -0.419 -0.111 -0.627 c -0.04 -0.189 -0.089 -0.376 -0.137 -0.564 c -0.051 -0.197 -0.1 -0.393 -0.161 -0.587 c -0.061 -0.196 -0.133 -0.389 -0.203 -0.583 c -0.066 -0.182 -0.129 -0.365 -0.204 -0.545 c -0.084 -0.202 -0.181 -0.398 -0.276 -0.596 c -0.08 -0.167 -0.154 -0.335 -0.242 -0.498 c -0.111 -0.209 -0.238 -0.41 -0.361 -0.614 c -0.089 -0.146 -0.171 -0.296 -0.267 -0.439 c -0.15 -0.225 -0.317 -0.441 -0.483 -0.658 c -0.087 -0.114 -0.165 -0.232 -0.256 -0.343 c -0.265 -0.324 -0.548 -0.639 -0.85 -0.941 l -8.159 -8.159 c -0.302 -0.302 -0.617 -0.584 -0.941 -0.85 c -0.111 -0.091 -0.228 -0.168 -0.342 -0.255 c -0.218 -0.166 -0.434 -0.334 -0.66 -0.484 c -0.143 -0.095 -0.291 -0.176 -0.437 -0.265 c -0.204 -0.124 -0.406 -0.251 -0.615 -0.362 c -0.163 -0.087 -0.331 -0.162 -0.497 -0.241 c -0.198 -0.095 -0.396 -0.192 -0.598 -0.276 c -0.18 -0.075 -0.364 -0.138 -0.547 -0.205 c -0.193 -0.07 -0.384 -0.141 -0.58 -0.202 c -0.196 -0.061 -0.394 -0.111 -0.592 -0.162 c -0.186 -0.048 -0.372 -0.096 -0.559 -0.136 c -0.21 -0.044 -0.42 -0.079 -0.631 -0.112 c -0.178 -0.028 -0.356 -0.056 -0.535 -0.077 c -0.222 -0.026 -0.444 -0.043 -0.667 -0.057 c -0.169 -0.011 -0.337 -0.02 -0.506 -0.024 C 16.831 -0.135 16.735 -0.136 16.639 -0.136 L 16.639 -0.136 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "rgb(0,0,0)", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                    </g>
                                </g>
                            </svg>

                        </span>
                        08638623001
                    </p>
                    <div className="flex justify-between border-t-[1px] border-b-[1px] border-slate-200 py-4 mt-5">
                        <div className="flex items-center">
                            <div>
                                <h4 className="text-sm text-blue-600 font-yekan-bold">
                                    تو اپلیکیشن چه خبره ؟

                                </h4>
                                <p className="text-slate-400 text-xs mt-2">اپلیکیشن را نصب کنید</p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-2">
                            <Link href={'cart/checkout'}>
                                <a>
                                    <span class="text-gray-700 font-yekan-bold bg-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  p-2 text-center inline-flex items-center text-xs">
                                        <svg class="w-10 h-10 ml-2 text-pink-600 stroke-current" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="-.01 -.01 391.98 158.75" xmlns="http://www.w3.org/2000/svg">
                                            <g transform="translate(-46.809 -1654.1)" fill="none" fill-rule="nonzero">
                                                <path d="m426.28 1707.2c-2.2157-1.6031-6.5162-3.7861-14.78-5.7553-2.4717-0.5894-5.3055-1.1549-8.5364-1.6614-4.0693-0.6636-8.7909-1.253-14.245-1.7435l-0.7665-0.068c-1.1039-2.6328-2.25-5.323-3.4599-8.156-0.6429-1.5194-1.261-3.0467-1.9118-4.6666-0.074-0.1914-0.1571-0.3908-0.2393-0.5822-2.3807-5.9539-4.9433-12.068-9.2614-17.499-4.8278-6.0217-11.172-9.3348-17.853-9.3348-6.6829 0-13.019 3.3211-17.854 9.3348-4.35 5.4228-6.8711 11.535-9.2519 17.482l-0.248 0.599c-0.6413 1.6199-1.2602 3.1472-1.9102 4.6666-1.2124 2.833-2.3489 5.5232-3.4607 8.156l-0.7585 0.068c-5.4706 0.4897-10.192 1.0799-14.27 1.7523-3.2301 0.5144-6.048 1.0871-8.5117 1.6613-8.239 1.9677-12.573 4.1522-14.782 5.7554-0.39 0.2855-0.6947 0.6739-0.8829 1.1206a2.7124 2.7124 0 0 0-0.1866 1.4196l0.717 5.3733c1.0871 8.0404 2.2484 17.483 4.1602 27.217 1.4093 7.4932 3.3833 14.868 5.9076 22.059 1.0129 2.8314 2.1415 5.6141 3.4033 8.3051 5.3916 10.959 13.733 20.169 24.07 26.576 10.337 6.4085 22.254 9.7575 34.388 9.6634 12.136-0.093 24-3.625 34.238-10.192 10.238-6.5673 18.439-15.904 23.663-26.944 0.973-2.1599 1.8703-4.3692 2.695-6.6447 5.8821-15.947 8.148-33.545 10.018-47.522l1.0377-7.9646a2.6838 2.6838 0 0 0-0.2273-1.3942 2.653 2.653 0 0 0-0.9013-1.0815zm-71.104-10.481c-6.706 0-12.811 0.1245-18.356 0.3478 0.2959-0.7051 0.6013-1.4117 0.914-2.1415 0.7003-1.6614 1.3758-3.3227 2.0274-4.9841 1.3551-3.6186 2.9423-7.1455 4.7544-10.556a31.095 31.095 0 0 1 2.817-4.2184c1.3511-1.6613 4.1777-4.527 7.8426-4.527 3.6672 0 6.4931 2.833 7.8529 4.527 1.0512 1.3264 1.994 2.7381 2.8171 4.2184 1.8073 3.412 3.3952 6.9389 4.7543 10.556 0.6508 1.6614 1.3184 3.3227 2.0259 4.9841 0.3142 0.7298 0.6109 1.4364 0.9156 2.1415-5.5464-0.2233-11.651-0.3478-18.367-0.3478z" stroke-width="7.567"></path>
                                                <g transform="matrix(.079758 0 0 .079758 50.588 1657.7)" stroke-width="94.875">
                                                    <path d="m912.23 1042.8v-784.34c0-116.52 165.35-196.6 266.46-88.26 23.79 25.74 40.03 64.48 40.03 113.2v730.89c0 57.41-16.09 90.7-42.8 121.16-91.13 104.02-263.69 28.59-263.69-92.65zm912.3 167.7v-801.79l0.49 0.08c0.93-20.38 6.48-40.29 16.25-58.22 35.56-67.08 135.46-109.15 218.04-55.23 73.88 48.24 73.03 121.3 72.03 207.26v0.05c-0.11 10.13-0.23 20.42-0.23 30.89 0 7.9-0.11 29.32-0.28 59.7v0.26c-0.83 154.86-2.88 541.31 2.54 557.79a45.03 45.03 0 0 0 10.34 16.4 44.763 44.763 0 0 0 16.31 10.48c15.81 6.61 64.57 5.26 121.12 3.71 82.54-2.28 181.7-5 219.14 15.87 110.29 61.3 101.68 194.17 35.66 250.13a154.35 154.35 0 0 1-105.57 40.61h-310.64a320.22 320.22 0 0 1-118.64-27.45c-32.07-13.73-60.09-36.71-85.1-57.5a150.65 150.65 0 0 1-16.25-19.24 223.75 223.75 0 0 1-16.25-18.92c-28.17-37.37-58.95-104.2-58.95-154.87z"></path>
                                                    <path d="m966.72 1605c-43.47-36.57-54.46-75.01-54.49-130.61 0.05-47.62 32.99-88.91 60.99-109.93 39.32-29.37 64.94-29.25 123.11-28.98 5.99 0.03 12.36 0.06 19.08 0.06 19.15 0 38.25-0.03 57.29-0.08h0.08c38.01-0.1 75.89-0.18 113.74 0.08 68.61 0.41 81.86-17.13 81.86-85.59-0.28-75.17-0.18-150.37-0.1-225.59v-0.08c0.05-37.63 0.1-75.26 0.1-112.89l-0.02-8.58c-0.11-55.78-0.16-86.52 44.92-131.83 66.51-66.99 176.47-52.72 222.43 8.52 27.61 36.71 39.14 60.6 39.14 124.75v406.05c0 200.01-131.96 331.42-331.41 331.42h-253.04c-54.57 0-93.31-11.14-123.69-36.71zm-966.72-437.11c0.03 66.7 21.47 123.26 85.51 153.12a134.16 134.16 0 0 0 60.58 14.22h327.85c147.15 0 288.61-140 288.61-306.49v-448.84c0.32-39.95-14.61-78.53-41.75-107.85-66.18-68.95-174.52-63.51-228.68 4.95-33.38 42.31-36.06 58.38-36.06 131.4v338.57c0 4 0.05 7.75 0.08 11.27 0.25 26.02 0.38 39.27-15.01 55.73-15.56 16.79-27.32 16.31-50.32 15.43-5.95-0.24-12.63-0.49-20.34-0.49h-170.95c-79.01 0-136.91 8.11-178 74.96-8.12 12.49-21.51 44.53-21.53 64.02zm1671.3 463.1c0 94.61 64.39 160.4 156.82 160.4 164.85 0 201.07-228.62 62.68-290.81-116.85-52.47-219.25 41.66-219.25 130.41zm-259.39-1098.3c-33.78-33.78-43.52-68.14-43.52-116.86v0.08c0-79.17 74.15-146.17 153.24-146.17 79.1 0 152.18 70.01 152.18 153.15-0.24 141.55-170.38 201.25-261.89 109.8z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                        دریافت از بازار
                                    </span>
                                </a>
                            </Link>
                            <Link href={'cart/checkout'}>
                                <a>
                                    <span class="text-gray-700 font-yekan-bold bg-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs p-2 text-center inline-flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 ml-2 text-pink-600 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                        </svg>
                                        دریافت مستقیم
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="min-h-96  w-full">
                <Slider label="محصولات ویژه" sort={3} count={15} />
            </div>
            <div className="min-h-96  w-full">
                <Slider label="پرفروش ترین" sort={2} count={15} />
            </div>
            <div className="min-h-96  w-full">
                <Slider label="پربازدیدترین" sort={1} count={15} />
            </div>

        </>
    )
}
export default Home
