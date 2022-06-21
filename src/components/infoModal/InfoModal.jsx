import './InfoModal.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineCodepen } from 'react-icons/ai';

export const InfoModal = ({setShowInfo}) => {
  return (
    <div className='info-modal'>
        <div className="info-container">
                <div className="info-header">
                        <AiFillCloseCircle  className='close-bt' onClick={() => {setShowInfo(false)}}/>
                </div>
                <div className="content-div">
                        <h1 className="dev-name">About the Developer</h1>
                        <p className="dev-info">
                                This Game is Designed & Developed by <strong>Mohit Agarwal (Front-end-Developer)</strong>. This game is Developed in <strong> ReactJS Library</strong>, with using
                                ReactJS Hooks like : useState, useRef, useEffect, useReducer and also very famous and most usable State-Managment Library <strong>Redux</strong>.
                                This is a Single Page Web Application, fully working also fully Responsible. If you like this app or if you facing any bug or any problem, or you think
                                there might be a problem in this app or this app might be need some improvments, you can freely reach out to me on my social media handles, which are mentioned below.
                        </p>
                        <h2 className="how-to-play">How to Play this Game ?</h2>
                        <ul className='how-to-text'>
                            <li>Player Need to enter their name and age (name & age are compulsory).</li>
                            <li>Player can enter Difficulty number, which means that computer cannot guess above that number, but can guess near that no.</li>
                            <li>Difficulty number is not mandatory. But default highest guessable number is 10.</li>
                            <li>After filling every required field, player need to click on <strong>"Yeh! Sure"</strong> button to play game.</li>
                            <li>Player have 15 chances for guessing, after that player need to click on <strong>"Re-Start"</strong> button or can Re-fresh webpage.</li>
                            <li>There is a setting button on Home-screen page of the game, player can change their information even in running game.</li>
                            <li>This is a free to use, and free for everyone game. If you like it you can like my Social-media handles.</li>
                            <li>If you have any query related to this game or if you want to contact me you can reach out to me on my social media handles.</li>
                        </ul>
                        <footer className='footer-sec'>
                           <a href="https://github.com/25mohit" target="_blank"> <BsGithub className='social-icon'/></a>
                           <a href="https://www.linkedin.com/in/agarwal24/" target="_blank"> <BsLinkedin className='social-icon'/></a>
                           <a href="https://twitter.com/mo_hit24" target="_blank"> <BsTwitter className='social-icon'/></a>
                           <a href="https://codepen.io/mohit24" target="_blank"> <AiOutlineCodepen className='social-icon'/></a>
                           <a href="https://www.facebook.com/mohit724agarwal" target="_blank">   <GrFacebook className='social-icon'/></a>
                           <a href="https://www.instagram.com/im_hit_/" target="_blank"> <BsInstagram className='social-icon'/></a>
                        </footer>
                </div>
        </div>
    </div>
  )
}
