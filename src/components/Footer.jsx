import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="for-footer">
                <div className="row m-0">
                    <div className="col-lg-4 col-sm-4 f-foot">
                        <h3 className='f-head pt-2'> Connect With Us</h3>
                        <div className='f-icons fs-4'>
                            <i class="fa fa-facebook-square" aria-hidden="true"></i>
                            <i class="fa fa-instagram ps-2" aria-hidden="true"></i>
                            <i class="fa fa-twitter-square ps-2" aria-hidden="true"></i>
                            <i class="fa fa-snapchat-square ps-2" aria-hidden="true"></i>
                            <i class="fa fa-youtube-play px-2" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-4">
                        <h3 className='f-head pt-2'> Trending Now</h3>
                        <ul className='f-headcontent'>
                            <li >Snowflake Siren Styles</li>
                            <li >Frosty Bloom Boutique</li>
                            <li>Winter Whimsy Wardrobe</li>
                            <li>Crystal Couture Collection</li>
                        </ul>
                    </div>


                    <div className="col-lg-4 col-sm-4">
                        <h3 className='f-head pt-2 pb-3'>Help And Contact</h3>
                        <p className='f-headcontent2 '> Contact Us: 9474748499</p>
                        <p className='f-headcontent2'> Help center is there for you</p>
                    </div>

                    <div className="col-lg-4 col-sm-4">
                        <h3 className='f-head pt-5'>Community Guidelines</h3>
                        <p className='f-headcontent3'>Helplines for you</p>
                        <p className='f-headcontent3'> Policies for you</p>
                    </div>

                    <div className="col-lg-4 col-sm-4">
                        <h3 className='f-head pt-5'>Links to communicate</h3>
                        <a className='f-headcontent4 d-flex' href="#">https://snowstore.com</a>
                        <a href='#' className='f-headcontent4'>https://snowshop432.com</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer