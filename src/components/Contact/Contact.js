import './Contact.css'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className="upperpart">
                <div className="uperWrapper">

                    <h1>
                        Get In Touch
                    </h1>
                    <p>
                        FeeL free to contact
                    </p>
                </div>
            </div>
            <div className="lowerpart">
                <div className="contactList">
                    <div className="contactbox">
                        <div className="cicon">
                            <ul>
                                <li>
                                    <div className="cntct">

                                        <AlternateEmailIcon className='cic' />
                                        <h4>singhritwik9@gmail.com</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="cntct">

                                        <WhatsAppIcon className='cic' />
                                        <h4>+91 9009264562</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="cntct">

                                        <PlaceIcon className='cic' />
                                        <h4>India</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="cntct" style={{justifyContent:'center'}}>
                                    <a href='https://github.com/ritwik069' target='_blank'>
                                    <GitHubIcon className='cic'  /></a>
                                    <a href='https://linkedin.com/in/ritwik-singh-yadav-518756102' target='_blank'>
                                    <LinkedInIcon className='cic' style={{marginLeft:'20px'}}/>
                                    </a>

                                </div>
                            </li>


                        </ul>
                    </div>

                </div>

            </div>
            <div className="about">
                <div className="aboutWrapper">
                    <h2 className='abt'>About</h2>
                    <p className='content'>Hi there , I am Ritwik Singh Yadav a self taught Frontend Developer .
                        <br />
                        I fell in Love with react and frontend in pandemic since its a great way to be creative and help others.
                        <br />
                        I have been freelancing and  trying to help startup to built efficient websites using reactjs and other tools .
                        <br />

                        <br />

                        Feel free to contact
                        <br />
                        Thankyou</p>
                </div>

            </div>
        </div>
        </div >
    )
}

export default Contact
