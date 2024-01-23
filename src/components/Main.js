import React from 'react'
import "./Main.css"
import Office from './assests/office.png'
import expect from "./assests/comp.png"
import needto from "./assests/needto.jpg"
import { Link } from 'react-router-dom';
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import Mmaa from './mmaa'



export default function Main() {
    return (
        <div>
            
            < div className='Mainpage'>
                <h1>Calculate Your Footprint</h1>
                <h4>WITH OUR PERSONAL CARBON FOOTPRINT CALCULATOR</h4>
                <p>Knowing your carbon footprint can be the first step to understanding your impact. It empowers you to take action in all areas of your life. Our carbon footprint calculator makes it easy and can take less than ten minutes.</p>
                <ol>
                    <li>Choose the parts of your footprint you want to calculate.</li>
                    <li>Answer simple questions or use easy averages provided.</li>
                    <li>Get hints, tips and hacks along the way and after you calculate.</li>
                    <li>Reduce in the areas you can.</li>
                    <li>Remove what you can't reduce through planting trees here in INDIA.</li>
                </ol>
                <Link to='/CATEGORIES'>
                    <button className='btn'>Calculate</button>
                </Link>
            </div>
            <div className='about'>
                <h2>ABOUT OUR CARBON FOOTPRINT CALCULATOR</h2>
                <div>
                    <img src={Office} />
                    <p>
                        If you're a business, we can also help you through our quick business offsets or a full business calculation. You can learn more about business carbon footprint calculator here.
                    </p>
                </div>
                <div>
                    <p>
                        Everything we do has an impact. From how we commute to work, to what we buy at the grocery store, our lifestyle choices contribute to our personal carbon footprint.
                    </p>
                    <p>
                        Our calculator will help you answer “what is my carbon footprint”, as well as provide you with facts, tips, and practical steps to reduce and offset your individual carbon emissions.
                    </p>
                    <p>
                        Based on Australian emissions factors, this user-friendly version of Australia's first carbon calculator provides a transparent and accurate calculation which you can track over time.
                    </p>

                </div>
            </div>

            <div className='expect'>
                <img src={expect} />
                <h2>WHAT TO EXPECT FROM OUR CALCULATOR</h2>
                <ul>
                    <li>Our Australian Carbon Footprint Calculator is a free step-by-step tool that empowers you to make positive changes to reduce your carbon footprint and combat climate change.</li>
                    <li>Your carbon footprint is calculated retrospectively based on your lifestyle and resource consumption for a specific period. You can calculate your footprint for the past month, 3 months, or year.</li>
                    <li>You’ll be asked to choose which categories you would like to include in your calculation (Travel, Energy, Water, Transport, Food & Drink, and/or Waste). The more categories you include, the more accurate your calculation will be.</li>
                    <li>The calculator includes tooltips designed to guide you through your calculation.</li>
                    <li>It’s also full of “Did You Know?” facts about carbon emissions to put your footprint (and Australia’s!) into perspective.</li>
                    <li>At the end of your calculation, you’ll get an itemised footprint “receipt” with tailored insights to help you reduce your impact over time.</li>
                </ul>
            </div>

            <div className='needto'>
                <h2>WHAT YOU'LL NEED TO CALCULATE</h2>
                <div>
                    <ul>
                        <li> 5 to 10 minutes, and a desktop or mobile device with internet connection.</li>
                        <li>For the most accurate calculation, we recommend using your personal source data (e.g. electricity consumption, water usage); don’t worry, the calculator includes tooltips that will help you find these figures.</li>
                        <li>That said, you should be able to answer most of the calculator questions without needing to access external documents.</li>
                        <li>You can also choose to autofill specific fields with the India or state average for a faster calculation.</li>
                    </ul>

                    <img src={needto} />

                </div>
            </div>

            <footer>
                <h2 className="mb-5">Contact with us</h2>
                <div>
                    <div className=''>
                        <h2 className='row'> <FontAwesomeIcon icon={faLocationPin} /> 1/296 , sarvanampatti,Coimbatore</h2>
                        <h2 className='row'><FontAwesomeIcon icon={faPhone} />  +91 9514492175</h2>
                    </div>
                    <div className=' col'>
                        <FontAwesomeIcon className=' row' icon={faInstagramSquare} />
                        <FontAwesomeIcon className=' row' icon={faFacebookSquare} />
                        <FontAwesomeIcon className=' row' icon={faTwitterSquare} />
                        <FontAwesomeIcon className=' row' icon={faLinkedin} />
                    </div>
                </div>
            </footer>
            

        </div>
    )
}
