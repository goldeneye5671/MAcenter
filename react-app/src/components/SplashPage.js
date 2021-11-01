import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
export default function SplashPage() {
    const user = useSelector(state => state.session)
    return (
        <div className={"splash-page-container"}>
            <div className={"splash-card-v1"}>
                <h1>Welcome to MAcenter</h1>
                <p>
                    MAcenter is a site designed to help those interested in finding
                    a new martial art to practice, but don't know about the art itself.
                    MAcenter makes it easy to find an art, and find a studio that practices
                    that art.
                </p>
                <div className={"splash-logged-in"}>
                    {
                        user?.user && (
                            <Link className={"link-button"} to={`/users/${user?.user?.id}`}>
                                see your profile
                            </Link>
                        )
                    }
                    <Link className={"link-button"} to='/search'>
                        Find a studio today
                    </Link>
                </div>
            </div>
                <div className={"splash-card-v2"}>
                    <img className={"splash-img"} src={'/images/korean-yin-yang.svg'}></img>
                    <div className={"sub-splash-card-v2"}>
                        <h2>Find your next Martial Art</h2>
                        <p>
                            By using our search feature, you are sure to find a martial art that
                            suits your needs.
                        </p>
                    </div>
                </div>
            <div className={"splash-card-v3"}>
                <img className={"splash-img"} src={'/images/belts.jpg'}></img>
                <div className={"sub-splash-card-v2"}>
                    <h2>Leave a Review</h2>
                    <p>
                        Practiced at a studio before? Leave a review to let others know about
                        what the studio is like.
                    </p>
                </div>
            </div>
            <div className={"splash-card-v2"}>
                <img className={"splash-img"} src={'/images/Martial-Arts.jpg'}></img>
                <div className={"sub-splash-card-v2"}>
                    <h2>Bring your studio to more people</h2>
                    <p>
                        By signing up for an account, you can create a studio that will
                        instantly appear in our search feature. Doing this could increase the
                        amount of people who want to practice at your studio!
                    </p>
                </div>
            </div>
            <div className={"contact-info"}>
                <div className={"contact-info-container"}><AiFillGithub /> <a href={"https://github.com/goldeneye5671"} target="_blank" rel="noreferrer"> @goldeneye5671</a></div> |
                <div className={"contact-info-container"}><AiFillGithub /> <a href={"https://github.com/goldeneye5671/MAcenter.git"} target="_blank" rel="noreferrer"> MAcenter</a></div> |
                <div className={"contact-info-container"}><AiFillLinkedin /><a href={"https://www.linkedin.com/in/anthony-seefried-9233751a6/"} target="_blank" rel="noreferrer"> @Anthony Seefried</a></div> 
            </div>
        </div>
    )
}
