import React, { useState } from 'react'
import Menu from '../menu/Menu'
import './layout.css'

function Layout({ title, tasks }) {
    const [description, setdescription] = useState(true);

    return (
        <div className="layout">
            <Menu tasks={tasks} />
            <div className="layout_task">
                <h1>{title}</h1>
                <button type='button' className='submit_task'>Submit Task</button>
                <div className="task_container">
                    {
                        tasks.map((e) => {
                            const { task_id, task_title, task_description, assets } = e
                            return (
                                <div className="task" key={task_id}>
                                    <div className="box_layout">
                                        <h2>{task_title}</h2>
                                        <div className="p_layout">{task_description}</div>
                                    </div>
                                    <div className="container_layout">
                                        {
                                            assets.map((ei) => {
                                                const { asset_id, asset_title, asset_description, asset_content, } = ei;
                                                return (
                                                    <div className="card" key={asset_id}>
                                                        <div className="card_title">{asset_title}</div>
                                                        <div className="card_icon"><button type='button' className='card_btn' onClick={() => { setdescription((oldState) => oldState = !oldState) }} ><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="11" cy="11" r="11" fill="white" />
                                                            <path d="M9.752 16L9.656 15.376C10.1787 15.2693 10.4933 15.1627 10.6 15.056C10.7173 14.9387 10.776 14.7413 10.776 14.464V9.872C10.776 9.648 10.6907 9.488 10.52 9.392C10.3493 9.28533 10.0293 9.184 9.56 9.088L9.656 8.576C10.7973 8.42667 11.592 8.352 12.04 8.352L12.216 8.512V14.848C12.216 14.976 12.2427 15.0613 12.296 15.104C12.36 15.136 12.44 15.1627 12.536 15.184L13.32 15.376L13.256 16H9.752ZM12.232 5.504C12.232 5.77067 12.1467 5.99467 11.976 6.176C11.816 6.35733 11.5973 6.448 11.32 6.448C11.0533 6.448 10.8293 6.368 10.648 6.208C10.4773 6.048 10.392 5.82933 10.392 5.552C10.392 5.264 10.472 5.03467 10.632 4.864C10.8027 4.69333 11.032 4.608 11.32 4.608C11.928 4.608 12.232 4.90667 12.232 5.504Z" fill="black" />
                                                        </svg>
                                                        </button></div>
                                                        <div className={(description) ? (`card_description`) : (`none`)}>
                                                            <b>Description :</b> {`${asset_description}`}
                                                        </div>
                                                        <iframe src={asset_content} frameborder="ifrema"></iframe>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className="left_side_layout">
                <div className="notice">
                    <svg width="99" height="340" viewBox="0 0 99 410" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_dd_25242_19)">
                            <path d="M4.00003 38C4.00003 21.4315 17.4315 8 34 8H99V402H34C17.4315 402 4.00003 388.569 4.00003 372V38Z" fill="white" />
                        </g>
                        <path d="M34 402C17.4315 402 4.00003 388.569 4.00003 372L4.00001 38C4.00001 21.4315 17.4315 8 34 8L54 8L54 402L34 402Z" fill="black" />
                        <path d="M35 102H33.544L27.688 93.12V102H26.232V90.832H27.688L33.544 99.696V90.832H35V102ZM30.056 126.144C29.2347 126.144 28.488 125.957 27.816 125.584C27.1547 125.211 26.632 124.683 26.248 124C25.8747 123.307 25.688 122.507 25.688 121.6C25.688 120.704 25.88 119.915 26.264 119.232C26.6587 118.539 27.192 118.011 27.864 117.648C28.536 117.275 29.288 117.088 30.12 117.088C30.952 117.088 31.704 117.275 32.376 117.648C33.048 118.011 33.576 118.533 33.96 119.216C34.3547 119.899 34.552 120.693 34.552 121.6C34.552 122.507 34.3494 123.307 33.944 124C33.5494 124.683 33.0107 125.211 32.328 125.584C31.6454 125.957 30.888 126.144 30.056 126.144ZM30.056 124.864C30.5787 124.864 31.0694 124.741 31.528 124.496C31.9867 124.251 32.3547 123.883 32.632 123.392C32.92 122.901 33.064 122.304 33.064 121.6C33.064 120.896 32.9254 120.299 32.648 119.808C32.3707 119.317 32.008 118.955 31.56 118.72C31.112 118.475 30.6267 118.352 30.104 118.352C29.5707 118.352 29.08 118.475 28.632 118.72C28.1947 118.955 27.8427 119.317 27.576 119.808C27.3094 120.299 27.176 120.896 27.176 121.6C27.176 122.315 27.304 122.917 27.56 123.408C27.8267 123.899 28.1787 124.267 28.616 124.512C29.0534 124.747 29.5334 124.864 30.056 124.864ZM28.008 142.432V147.6C28.008 148.027 28.0987 148.331 28.28 148.512C28.4614 148.683 28.776 148.768 29.224 148.768H30.296V150H28.984C28.1734 150 27.5654 149.813 27.16 149.44C26.7547 149.067 26.552 148.453 26.552 147.6V142.432H25.416V141.232H26.552V139.024H28.008V141.232H30.296V142.432H28.008ZM26.984 163.808C26.7067 163.808 26.472 163.712 26.28 163.52C26.088 163.328 25.992 163.093 25.992 162.816C25.992 162.539 26.088 162.304 26.28 162.112C26.472 161.92 26.7067 161.824 26.984 161.824C27.2507 161.824 27.4747 161.92 27.656 162.112C27.848 162.304 27.944 162.539 27.944 162.816C27.944 163.093 27.848 163.328 27.656 163.52C27.4747 163.712 27.2507 163.808 26.984 163.808ZM27.688 165.232V174H26.232V165.232H27.688ZM25.688 193.6C25.688 192.693 25.8694 191.904 26.232 191.232C26.5947 190.549 27.096 190.021 27.736 189.648C28.3867 189.275 29.128 189.088 29.96 189.088C31.0374 189.088 31.9227 189.349 32.616 189.872C33.32 190.395 33.784 191.12 34.008 192.048H32.44C32.2907 191.515 31.9974 191.093 31.56 190.784C31.1334 190.475 30.6 190.32 29.96 190.32C29.128 190.32 28.456 190.608 27.944 191.184C27.432 191.749 27.176 192.555 27.176 193.6C27.176 194.656 27.432 195.472 27.944 196.048C28.456 196.624 29.128 196.912 29.96 196.912C30.6 196.912 31.1334 196.763 31.56 196.464C31.9867 196.165 32.28 195.739 32.44 195.184H34.008C33.7734 196.08 33.304 196.8 32.6 197.344C31.896 197.877 31.016 198.144 29.96 198.144C29.128 198.144 28.3867 197.957 27.736 197.584C27.096 197.211 26.5947 196.683 26.232 196C25.8694 195.317 25.688 194.517 25.688 193.6ZM34.232 217.28C34.232 217.557 34.216 217.851 34.184 218.16H27.176C27.2294 219.024 27.5227 219.701 28.056 220.192C28.6 220.672 29.256 220.912 30.024 220.912C30.6534 220.912 31.176 220.768 31.592 220.48C32.0187 220.181 32.3174 219.787 32.488 219.296H34.056C33.8214 220.139 33.352 220.827 32.648 221.36C31.944 221.883 31.0694 222.144 30.024 222.144C29.192 222.144 28.4454 221.957 27.784 221.584C27.1334 221.211 26.6214 220.683 26.248 220C25.8747 219.307 25.688 218.507 25.688 217.6C25.688 216.693 25.8694 215.899 26.232 215.216C26.5947 214.533 27.1014 214.011 27.752 213.648C28.4134 213.275 29.1707 213.088 30.024 213.088C30.856 213.088 31.592 213.269 32.232 213.632C32.872 213.995 33.3627 214.496 33.704 215.136C34.056 215.765 34.232 216.48 34.232 217.28ZM32.728 216.976C32.728 216.421 32.6054 215.947 32.36 215.552C32.1147 215.147 31.7787 214.843 31.352 214.64C30.936 214.427 30.472 214.32 29.96 214.32C29.224 214.32 28.5947 214.555 28.072 215.024C27.56 215.493 27.2667 216.144 27.192 216.976H32.728ZM31.816 264.256C32.2214 264.32 32.5894 264.485 32.92 264.752C33.2614 265.019 33.528 265.349 33.72 265.744C33.9227 266.139 34.024 266.56 34.024 267.008C34.024 267.573 33.88 268.085 33.592 268.544C33.304 268.992 32.8827 269.349 32.328 269.616C31.784 269.872 31.1387 270 30.392 270H26.232V258.848H30.232C30.9894 258.848 31.6347 258.976 32.168 259.232C32.7014 259.477 33.1014 259.813 33.368 260.24C33.6347 260.667 33.768 261.147 33.768 261.68C33.768 262.341 33.5867 262.891 33.224 263.328C32.872 263.755 32.4027 264.064 31.816 264.256ZM27.688 263.664H30.136C30.8187 263.664 31.3467 263.504 31.72 263.184C32.0934 262.864 32.28 262.421 32.28 261.856C32.28 261.291 32.0934 260.848 31.72 260.528C31.3467 260.208 30.808 260.048 30.104 260.048H27.688V263.664ZM30.264 268.8C30.9894 268.8 31.5547 268.629 31.96 268.288C32.3654 267.947 32.568 267.472 32.568 266.864C32.568 266.245 32.3547 265.76 31.928 265.408C31.5014 265.045 30.9307 264.864 30.216 264.864H27.688V268.8H30.264ZM30.056 294.144C29.2347 294.144 28.488 293.957 27.816 293.584C27.1547 293.211 26.632 292.683 26.248 292C25.8747 291.307 25.688 290.507 25.688 289.6C25.688 288.704 25.88 287.915 26.264 287.232C26.6587 286.539 27.192 286.011 27.864 285.648C28.536 285.275 29.288 285.088 30.12 285.088C30.952 285.088 31.704 285.275 32.376 285.648C33.048 286.011 33.576 286.533 33.96 287.216C34.3547 287.899 34.552 288.693 34.552 289.6C34.552 290.507 34.3494 291.307 33.944 292C33.5494 292.683 33.0107 293.211 32.328 293.584C31.6454 293.957 30.888 294.144 30.056 294.144ZM30.056 292.864C30.5787 292.864 31.0694 292.741 31.528 292.496C31.9867 292.251 32.3547 291.883 32.632 291.392C32.92 290.901 33.064 290.304 33.064 289.6C33.064 288.896 32.9254 288.299 32.648 287.808C32.3707 287.317 32.008 286.955 31.56 286.72C31.112 286.475 30.6267 286.352 30.104 286.352C29.5707 286.352 29.08 286.475 28.632 286.72C28.1947 286.955 27.8427 287.317 27.576 287.808C27.3094 288.299 27.176 288.896 27.176 289.6C27.176 290.315 27.304 290.917 27.56 291.408C27.8267 291.899 28.1787 292.267 28.616 292.512C29.0534 292.747 29.5334 292.864 30.056 292.864ZM25.688 313.584C25.688 312.688 25.8694 311.904 26.232 311.232C26.5947 310.549 27.0907 310.021 27.72 309.648C28.36 309.275 29.0694 309.088 29.848 309.088C30.616 309.088 31.2827 309.253 31.848 309.584C32.4134 309.915 32.8347 310.331 33.112 310.832V309.232H34.584V318H33.112V316.368C32.824 316.88 32.392 317.307 31.816 317.648C31.2507 317.979 30.5894 318.144 29.832 318.144C29.0534 318.144 28.3494 317.952 27.72 317.568C27.0907 317.184 26.5947 316.645 26.232 315.952C25.8694 315.259 25.688 314.469 25.688 313.584ZM33.112 313.6C33.112 312.939 32.9787 312.363 32.712 311.872C32.4454 311.381 32.0827 311.008 31.624 310.752C31.176 310.485 30.68 310.352 30.136 310.352C29.592 310.352 29.096 310.48 28.648 310.736C28.2 310.992 27.8427 311.365 27.576 311.856C27.3094 312.347 27.176 312.923 27.176 313.584C27.176 314.256 27.3094 314.843 27.576 315.344C27.8427 315.835 28.2 316.213 28.648 316.48C29.096 316.736 29.592 316.864 30.136 316.864C30.68 316.864 31.176 316.736 31.624 316.48C32.0827 316.213 32.4454 315.835 32.712 315.344C32.9787 314.843 33.112 314.261 33.112 313.6ZM27.688 334.656C27.944 334.155 28.3067 333.765 28.776 333.488C29.256 333.211 29.8374 333.072 30.52 333.072V334.576H30.136C28.504 334.576 27.688 335.461 27.688 337.232V342H26.232V333.232H27.688V334.656ZM25.688 361.584C25.688 360.688 25.8694 359.904 26.232 359.232C26.5947 358.549 27.0907 358.021 27.72 357.648C28.36 357.275 29.0747 357.088 29.864 357.088C30.5467 357.088 31.1814 357.248 31.768 357.568C32.3547 357.877 32.8027 358.288 33.112 358.8V354.16H34.584V366H33.112V364.352C32.824 364.875 32.3974 365.307 31.832 365.648C31.2667 365.979 30.6054 366.144 29.848 366.144C29.0694 366.144 28.36 365.952 27.72 365.568C27.0907 365.184 26.5947 364.645 26.232 363.952C25.8694 363.259 25.688 362.469 25.688 361.584ZM33.112 361.6C33.112 360.939 32.9787 360.363 32.712 359.872C32.4454 359.381 32.0827 359.008 31.624 358.752C31.176 358.485 30.68 358.352 30.136 358.352C29.592 358.352 29.096 358.48 28.648 358.736C28.2 358.992 27.8427 359.365 27.576 359.856C27.3094 360.347 27.176 360.923 27.176 361.584C27.176 362.256 27.3094 362.843 27.576 363.344C27.8427 363.835 28.2 364.213 28.648 364.48C29.096 364.736 29.592 364.864 30.136 364.864C30.68 364.864 31.176 364.736 31.624 364.48C32.0827 364.213 32.4454 363.835 32.712 363.344C32.9787 362.843 33.112 362.261 33.112 361.6Z" fill="white" />
                        <path d="M40.8333 37L21 56.8333M40.8333 56.8333L21 37" stroke="white" stroke-width="2" stroke-linecap="round" />
                        <defs>
                            <filter id="filter0_dd_25242_19" x="3.05176e-05" y="0" width="103" height="410" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25242_19" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_dropShadow_25242_19" result="effect2_dropShadow_25242_19" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_25242_19" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                </div>
                <div className="right_icons"></div>
            </div>
        </div>
    )
}

export default Layout