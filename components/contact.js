import React from "react";
function Contact()
{
    return(
        <>
        
            <section id="section1">
            <div className="edit-3" id="con">
            <div className="contact-contact">
                <div className="contact-map">
                    <img
                        src="Map Illustration 3 (1).png"
                        alt="MapIllustration31525"
                        className="contact-map-illustration3" />
                    <div className="contact-map-social-media">
                        <div className="contact-facebook">
                            <span className="contact-text headingsBold16px">
                                <span>Facebook</span>
                            </span>
                            <img
                                src="Icon Placeholder.png"
                                alt="IconPlaceholder1525"
                                className="contact-icon-placeholder" />
                        </div>
                        <div className="contact-behance">
                            <span className="contact-text02 headingsBold16px">
                                <span>Behance</span>
                            </span>
                            <img
                                src="Icon Placeholder.png"
                                alt="IconPlaceholder1525"
                                className="contact-icon-placeholder1" />
                        </div>
                        <div className="contact-dribbble">
                            <span className="contact-text04 headingsBold16px">
                                <span>Dribbble</span>
                            </span>
                            <img
                                src="Icon Placeholder.png"
                                alt="IconPlaceholder1525"
                                className="contact-icon-placeholder2" />
                        </div>
                        <div className="contact-instagram">
                            <span className="contact-text06 headingsBold16px">
                                <span>Instagram</span>
                            </span>
                            <img
                                src="Icon Placeholder.png"
                                alt="IconPlaceholder1525"
                                className="contact-icon-placeholder3" />
                        </div>
                        <span className="contact-text08 headingsBold24px">
                            <span>John Bucarest St. 199</span>
                        </span>
                        <span className="contact-text10 paragraphRegular16px">
                            <span>Map Street</span>
                        </span>
                    </div>
                    <div className="contact-communicationlocationon">
                        <div className="contact-two-tone-communicationlocationon">
                        </div>
                    </div>
                </div>
                <div className="contact-communicationlocationon1">
                    <div className="contact-two-tone-communicationlocationon1">
                        <img
                            src="location_on.png"
                            alt="SVGSecondaryColorI1525"
                            className="contact-s-v-g-secondary-color1" />
                    </div>
                </div>
            </div>
        </div><div>
                <div className="contact-large-normal-justify-active">
                    <span className="contact-text12 paragraphMedium14px">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button className="txt12-bttn">Send</button></a>
                    </span>
                </div>
                <div className="contact-form-message">
                    <label className="contact-text16">Message</label>
                    <textarea name="same" id="one" cols="30" rows="10" className="text16-txt" placeholder="Message here..."></textarea>
                </div>
                <div className="contact-radio-button">
                    <input type="radio" id="two" name="same1" className="contact-text18 headingsBold16px" /><p className="text18-txt">Others</p>
                    <div className="contact-radio-button01">
                    </div>
                </div>
                <div className="contact-radio-button03">
                    <input type="radio" id="three" name="same1" className="contact-text20 headingsBold16px" /><p className="text20-txt">Development</p>

                    <div className="contact-radio-button04">

                    </div>
                </div>
                <div className="contact-radio-button06">
                    <label ></label>
                    <input type="radio" id="fr" name="same1" className="contact-text22 headingsBold16px" /><p className="text22-txt">Development1</p>
                    <div className="contact-radio-button07">

                    </div>
                </div>
            </div><div className="contact-radio-button09">
                <input type="radio" id="fv"  name="same1" className="contact-text24 headingsBold16px" /><span className="text24-txt">Illustration</span>
                <div className="contact-radio-button10">

                </div>
            </div><div className="contact-radio-button12">
                <input type="radio" id="sx" name="same1" className="contact-text26 headingsBold16px" /><span className="text26-txt"> Motion graphc</span>

                <div className="contact-radio-button13">
                </div>
            </div><div className="contact-radio-button15">
                <input type="radio" id="svn" name="same1" className="contact-text28 headingsBold16px" /> <span className="text28-text">Mobile-Design</span>

            </div><label className='maillbl'>Email</label><input className="contact-form1 paragraphRegular16px" placeholder="Enter your E-mail" /><div className="contact-form-last-name">

                <label className='cntact-lbl2'>Lastname</label>
                <input placeholder="Enter Your Last name" className="contact-text34-1" />

            </div><div className="contact-form-first-name">
                <span><label className='contact-text38'>Firstname</label>
                </span>
                <span className="contact-text40 paragraphRegular16px">
                    <input className="contact-text40-1" placeholder="Firstname" />
                </span>
            </div><span className="contact-text42 headingsBold48px">
                <span>Contact Us</span>
            </span>

            </section>

        
        </>
    )
}
export default Contact