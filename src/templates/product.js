import * as React from "react"

// markup
export default ({ pageContext: { product } }) => (
    <main>
		<link href="https://www.homeserve.com/bundles/fontawesomeCss?v=7UTxwuuuI0KZ1zfdj6WCdFUeHxTGmCg9LjotC1wztcY1" rel="stylesheet"/>
		<link href="https://www.homeserve.com/bundles/homeservebase?v=Z42YBAe4_NV-bNM-P9MWtqJZY8ABTLSqxsXNbrFl_GM1" rel="stylesheet"/>
		<link rel="stylesheet" href="https://www.homeserve.com/-/media/uk/css/2021.css?la=en"/>
		<link href="https://www.homeserve.com/bundles/bootstrapstyle?v=I5U-QO3-XPuQAgG_r_o04fZerP1yM51aFDPnV4DQuYY1" rel="stylesheet"/>
      <title>{product.DisplayTitle}</title>	  
    <div id="CL1_cookiewrap">
    <div id="CL1_lsPopup" className="cookie-wrap c-display">
        <div className="cookie-banner">
            <p>
                HomeServe.com uses cookies to make sure you get the best browsing experience. By continuing to use this website you are consenting to our use of cookies.<br />For further information and to manage your cookie preferences, view HomeServe's 
                <a href="/uk/about/cookies" >cookies policy</a>
            </p>
            <input type="hidden" name="CL1$lcAuto" id="CL1_lcAuto" />
            <input type="hidden" name="CL1$lcTimer" id="CL1_lcTimer" value="10000" />
            <input type="hidden" name="CL1$lcLength" id="CL1_lcLength" value="365" />
        </div>
        <div className="btn-close">
            <div className="btn-sml">
                <a id="hidels">Close <span className="fa fa-times-circle"></span></a>
            </div>
        </div>
    </div>
    <div id="CL1_disabledPopup" className="cookie-content c-display">
        <div className="cookie-banner">
            <div>
                In order to purchase a policy from our website, you will need to enable cookies in your internet browser. 
                <a href="/uk/about/cookies" >cookies policy</a>
            </div>
            <input type="hidden" name="CL1$dcAuto" id="CL1_dcAuto" />
            <input type="hidden" name="CL1$dcTimer" id="CL1_dcTimer" value="10000" />
        </div>
        <div className="btn-close">
            <div className="btn-sml">
                <a id="hided">Close <span className="fa fa-times-circle"></span></a>
            </div>
        </div>
    </div>
</div>


        <div id="header-block" className="">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="navbar-header">

                            <div id="homeserve-logo" className="pull-left">
                                <a href="/uk" className="navbar-brand" ></a>
                            </div>

                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span><i className="icon-hs-nav-bars" aria-hidden="true"></i></span>
                            </button>

                            <div className="header-nav-item hidden-xs hidden-ms hidden-sm pull-right" style={{ width:'auto'}}>
                                
        <p className="navbar-title visible-xs visible-sm hidden-md"><strong>Menu</strong></p>
    <a href="/uk/loggedin/my-homeserve" className="btn btn-success">
        Log in
    </a>



<button type="button" className="btn dropdown-toggle hidden-xs hidden-sm " data-toggle="dropdown">
    <img src="/-/media/flags/uk.jpg?h=18&amp;w=25&amp;la=en&amp;hash=1728779BA7AB83A8829DC0EE7977B593" className="flag" alt="UK flag" />
    UK <span className="caret"></span>
</button>
<ul className="dropdown-menu country-chooser hidden-xs" role="menu">
        <li>
<a href="https://www.homeserve.com/?ncr=true" ><img src="/-/media/flags/usa.jpg?h=18&amp;w=25&amp;la=en&amp;hash=9EB681D4F8F62DD54104BA0ED78580D8" className="flag" alt="USA flag" />HomeServe USA</a>        </li>
        <li>
<a href="http://www.homeserve.es " ><img src="/-/media/flags/spain.jpg?h=18&amp;w=25&amp;la=en&amp;hash=C580D93C7B77AC869BF6FB84E3D88222" className="flag" alt="Spanish flag" />HomeServe Spain</a>        </li>
        <li>
<a href="https://www.homeserve.fr/" ><img src="/-/media/flags/france.jpg?h=18&amp;w=25&amp;la=en&amp;hash=90A69C70B37E4AC760938B9F4D8E3629" className="flag" alt="French flag" />HomeServe France</a>        </li>
</ul>

                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">

                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        
                        <div className="header-nav-item">
                            <div className="link-search hidden-md hidden-lg">
                                
<form action="/uk/search" method="GET">
    <div id="search-panel" className="search">
        <div className="col-md-12">
            <label for="txtSearch">Search:</label>
            <input name="q" type="text" id="txtSearch" placeholder="Search" className="form-control" />
         
            <input type="hidden" value="/uk/search" id="search-results-url" />
            
            <button type="submit" className="icon icon-search icon-search-font" value="Search">
                <span className="sr-only glyphicon glyphicon-search form-control-feedback lead" style={{ color:'red'}}>Search</span>
            </button>
        </div>
    </div>


</form>

                            </div>
                        </div>
                        

                        <ul className="nav navbar-nav navbar-left">
                            






        <li className="visible-md visible-lg">
<a href="/uk" ><img src="/-/media/uk/menuicons/homenavicon.png?h=24&amp;w=24&amp;la=en&amp;hash=0EFCE93F113B76A6182DB8D824D08CBA" alt="Home" /></a>
        </li>
        <li className="dropdown visible-md visible-lg">
                    <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" data-hover="dropdown" data-delay="0" aria-expanded="false" href="#">Home Cover & Services <span className="caret"></span></a>

                <ul className="dropdown-menu two-col">
                    <li>
                            <ul>
                                
                                        <li>
<a href="/uk/insurance-cover" >Products and services                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="/uk/insurance-cover/gas-and-boiler-comparison" >Boiler cover                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="/uk/insurance-cover/plumbing-and-drainage-comparison" >Plumbing and drainage cover                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="/uk/insurance-cover/electrical-comparison" >Electrics cover                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="/uk/insurance-cover/landlords-comparison" >Landlord boiler & plumbing cover                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="/uk/appliance-insurance" >Kitchen appliance insurance                                                <span className="caret"></span>
</a>                                        </li>
                            </ul>
                            <ul>
                                
                                        <li>
<a href="/uk/heating/new-boiler/" target="_blank" rel="noopener noreferrer" >Boiler Install                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="/uk/repairs" >Repairs and services                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="https://www.leakbot.io/" target="_blank" rel="noopener noreferrer" >Leak detection                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="/uk/insurance/offers" >Offers                                                <span className="caret"></span>
</a>                                        </li>
                            </ul>
                    </li>

                </ul>
        </li>
        <li className="dropdown visible-md visible-lg">
                    <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" data-hover="dropdown" data-delay="0" aria-expanded="false" href="#">Help & advice <span className="caret"></span></a>

                <ul className="dropdown-menu">
                    <li>
                            <ul>
                                
                                        <li>
<a href="/uk/help-and-advice" >I have an issue                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="/uk/LoggedIn/my-homeserve" >I'm a customer and need to claim                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="/uk/repairs" >I'm not a customer and need a repair                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="https://www.homeserve.com/uk/living/category/how-to/" >I want to fix it myself                                                <span className="caret"></span>
</a>                                        </li>
                            </ul>
                    </li>

                </ul>
        </li>
        <li className="dropdown visible-md visible-lg">
                    <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" data-hover="dropdown" data-delay="0" aria-expanded="false" href="#">ABOUT HOMESERVE <span className="caret"></span></a>

                <ul className="dropdown-menu">
                    <li>
                            <ul>
                                
                                        <li>
<a href="/uk/about/about-us" >Why trust HomeServe                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="https://www.homeserveplc.com/investors/" target="_blank" rel="noopener noreferrer" >Investor centre                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="/uk/careers-hub" >Careers                                                <span className="caret"></span>
</a>                                        </li>
                                        <li>
<a href="https://www.homeserve.com/uk/living/" >Living - for your home                                                <span className="caret"></span>
</a>                                        </li>
                            </ul>
                    </li>

                </ul>
        </li>
        <li className="dropdown visible-md visible-lg">
<a href="/uk/contact-us" >Contact Us</a>
                <ul className="dropdown-menu">
                    <li>
                            <ul>
                                
                            </ul>
                    </li>

                </ul>
        </li>



                            


        <li className="dropdown visible-xs visible-ms visible-sm">

<a href="javascript:;" data-toggle="dropdown" aria-expanded="false" role="button" className="dropdown-toggle" aria-haspopup="true" >Home Cover                        <span className="caret"></span>
</a>
                <ul className="dropdown-menu">
                    <li>
                        <ul>
                                <li>
<a href="/uk/insurance-cover" >Our products and services                                            <span className="caret"></span>
</a>                                </li>
                                <li>
<a href="/uk/insurance-cover/gas-and-boiler-comparison" >Boiler cover                                            <span className="caret"></span>
</a>                                </li>
                                <li>
<a href="/uk/insurance/annual-boiler-service" >Annual Boiler Service                                            <span className="caret"></span>
</a>                                </li>
                                <li>
<a href="/uk/insurance-cover/electrical-comparison" >Electrics cover                                            <span className="caret"></span>
</a>                                </li>
                                <li>
<a href="/uk/insurance-cover/plumbing-and-drainage-comparison" >Plumbing and drainage cover                                            <span className="caret"></span>
</a>                                </li>
                                <li>
<a href="/uk/insurance-cover/landlords-comparison" >Landlord boiler & plumbing cover                                            <span className="caret"></span>
</a>                                </li>
                                <li>
<a href="/uk/appliance-insurance" >Kitchen appliance insurance                                            <span className="caret"></span>
</a>                                </li>
                                <li>
<a href="/uk/insurance/offers" >Offers                                            <span className="caret"></span>
</a>                                </li>
                        </ul>
                    </li>
                </ul>
        </li>
        <li className="visible-xs visible-ms visible-sm">

<a href="/uk/loggedin/my-homeserve" data-toggle="" aria-expanded="" role="" className="" aria-haspopup="" >Login or Register                        <span className="caret"></span>
</a>
        </li>
        <li className="visible-xs visible-ms visible-sm">

<a href="/uk/contact-us" data-toggle="" aria-expanded="" role="" className="" aria-haspopup="" >Contact                        <span className="caret"></span>
</a>
        </li>
        <li className="visible-xs visible-ms visible-sm">

<a href="/uk/repairs" data-toggle="" aria-expanded="" role="" className="" aria-haspopup="" >Repairs and Services                        <span className="caret"></span>
</a>
        </li>
        <li className="visible-xs visible-ms visible-sm">

<a href="/uk/heating/new-boiler/" data-toggle="" aria-expanded="" role="" className="" aria-haspopup="" >New Boiler                        <span className="caret"></span>
</a>
        </li>
        <li className="visible-xs visible-ms visible-sm">

<a href="/uk/help-and-advice" data-toggle="" aria-expanded="" role="" className="" aria-haspopup="" >Help and Advice                        <span className="caret"></span>
</a>
        </li>



                        </ul>



                        
                        <div className="navbar-form navbar-right link-search hidden-xs hidden-ms hidden-sm">
                            
<form action="/uk/search" method="GET">
    <div id="search-panel" className="search">
        <div className="col-md-12">
            <label for="txtSearch">Search:</label>
            <input name="q" type="text" id="txtSearch" placeholder="Search" className="form-control" />
         
            <input type="hidden" value="/uk/search" id="search-results-url" />
            
            <button type="submit" className="icon icon-search icon-search-font" value="Search">
                <span className="sr-only glyphicon glyphicon-search form-control-feedback lead" style={{ color:'red'}}>Search</span>
            </button>
        </div>
    </div>


</form>

                        </div>
                        

                        <div className="hidden-md hidden-lg quick-links">
                                <div className="col-xs-6 col-sm-6">
<a href="tel:08006944167" >            <div className="margin-bottom-5">
                <i className="icon-hs-4x icon-hs-contact-us"></i>
            </div>
            <div>Contact us</div>
</a>    </div>
    <div className="col-xs-6 col-sm-6">
<a href="/uk/loggedin/my-homeserve" >            <div className="margin-bottom-5">
                <i className="icon-hs-4x icon-hs-claim2"></i>
            </div>
            <div>Make a claim</div>
</a>    </div>

  

                        </div>
                    </div>
                </div>
            </nav>
			
			<div className="container"><div className="page page--product page--plumbing">
<div className="row hero-banner is-blue">
    <div className="hero-banner__content with-sticky">
        <h1 className="with-sticky">{product.DisplayTitle}</h1>

        <span className="margin-bottom-20 inline-block xs-width-full"> I need this for a:<br className="hidden-lg hidden-md"/>
           <p className="margin-bottom-10 hidden-lg"></p>
          <input type="radio" id="house" name="houseflat" value="house" checked className="hidden"></input>
<label className="btn" for="house" onclick="ForHouse();"><span className="house-btn">House</span>
<span className="toggle-circle"><img className="icon toggle-tick house" src="/-/media/uk/insurance/productpages/tick-teal.svg" alt=""/></span></label>
          <input type="radio" id="flat" name="houseflat" value="flat" className="hidden"></input><label className="btn" for="flat" onclick="ForFlat();">
<span className="flat-btn">Flat</span> 
<span className="toggle-circle"><img className="icon toggle-tick flat" src="/-/media/uk/insurance/productpages/tick-teal.svg" alt=""/></span></label>
<span className="icon-hs-info-circle-o icon-hs-2x toggle-info" data-popup="info-house-flat"></span>
</span>

<div data-popup-id="info-house-flat">
<div > 
<div className="popup__copy"><b>Not sure which cover is right for your property?</b>
<br/>
<p className="margin-bottom-10"></p>
Select <b>"House"</b> if you live in a detached, semi-detached, terrace or town house, or bungalow.<br/>Select <b>"Flat"</b> if you live in a flat, apartment or maisonette.
<br/>
<p className="margin-bottom-10"></p>
We don't cover mobile homes, park homes or commercial business premises. For more details, take a look at our <a href='#faq-documents'>Terms & Conditions.</a></div>
<span className="btn--close">close</span>
</div>
</div>             




        <p className="intro">Cover your home for blocked sinks, drains and toilets, water leaks and leaking overflow pipes</p>
    </div>
    <div className="hero-banner__side with-sticky">
        <div className="bubble bubble--left with-sticky">
            <div className="price-info with-sticky">
                <div className="h1 gold with-sticky">£1</div>
                <span className="small with-sticky">per month in your first year</span>
            </div>
            <table className="mini-table">
                <tr>
                    <td>Annual price : </td>
                    <td>£12</td>
                </tr>
                <tr>
                    <td>Your excess<sup><span className="icon icon--info" data-popup="info-excess"></span></sup> : </td>
                    <td>£30</td>
                </tr>
            </table>
            <div data-popup-id="info-excess">Your excess is the amount you’ll have to pay upfront each time you make a claim. This insurance is also available with a <a href='/uk/insurance/plumbing-drainage-cover-xs1'>£0 excess</a> for £5 a month.</div>
                
            <div className="small">The price of your cover will increase after the first year. Customers in their second year who choose to renew now pay £10 a month (£120) provided no claims have been made.</div>
        </div>
		<a className="house btn--rounded with-sticky is-sticky-only" href='/uk/Checkout/sales?id={26311196-5D4D-4AED-8AB4-317671CC9CC1}&referrerpageid=e3230511-c7b3-48bf-af86-e2d33565066d'>Apply now</a>
		<a className="flat btn--rounded with-sticky is-sticky-only" href='/uk/Checkout/sales?id=595C3921-DAF0-4B0D-BA46-99F498FE7D2D&referrerpageid=e3230511-c7b3-48bf-af86-e2d33565066d'>Apply now</a>
    </div>
</div>
<div className="row">
    <h3 className="text-align-center h3">This insurance is for</h3>
    <ul className="flat-list">
        <li><img className="icon" src="/-/media/uk/insurance/productpages/tick.svg?la=en&amp;hash=5C966B0A593C4D3874DE693D33E8492E" alt=""/>
            <strong>Homeowners</strong>
        </li>
        <li><img className="icon" src="/-/media/uk/insurance/productpages/tick.svg?la=en&amp;hash=5C966B0A593C4D3874DE693D33E8492E" alt=""/>
            <strong>People who only want cover for their home's plumbing and drainage</strong>
        </li>
    </ul>
</div>
<div className="grid grid-50x2">
<div className="bubble bubble--left">
    <div className="icon icon--tick corner-icon"></div>
    <p className="h3">What's covered</p>
    <p className="intro">The main things you can claim for</p>
    <ul className="bubble__list">
        <li>Leaking pipes within your home</li>
        <li>Blocked drains</li>
        <li>Blockages to sinks and toilets</li>
        <li>Leaks or blockages to your water supply pipe</li>
        <li>Dripping or seized taps</li>
        <li>Unlimited number of claims</li>
    </ul>
</div>
<div className="bubble bubble--left">
    <div className="icon icon--cross corner-icon"></div>
    <p className="h3">What isn't covered</p>
    <p className="intro">The main exclusions</p>
    <ul className="bubble__list">
        <li>A boiler breakdown that leaves you without heating or hot water</li>
        <li>Guttering</li>
        <li>Soakaways</li>
        <li>Shared drains, or drains or pipes you’re not responsible for</li>
        <li>Mixer and digital showers</li>
    </ul>
</div>
</div>
<div className="row has-bg-teal">
    <div className="col-lg-8 col-lg-offset-2">
        <h3 className="text-align-center"><strong>Let’s get started</strong></h3>
        <ul>
            <li><b>First</b>, check that you aren’t already covered by other policies, and that you’re <a href='#faq-eligible'>eligible</a> to buy this cover.</li>
            <li><b>Don’t forget:</b> it’s important to read all <a href='#faq-documents'>product documents</a> and the <a href='#faq-documents'>full terms and conditions</a> of your policy before you buy.</li>
            
        </ul>
    </div>
    <div className="col-xs-12 text-align-center">
        <a className="house btn--rounded" href='/uk/Checkout/sales?id={26311196-5D4D-4AED-8AB4-317671CC9CC1}&referrerpageid=e3230511-c7b3-48bf-af86-e2d33565066d'>Apply now</a>
       <a className="flat btn--rounded" href='/uk/Checkout/sales?id=595C3921-DAF0-4B0D-BA46-99F498FE7D2D&referrerpageid=e3230511-c7b3-48bf-af86-e2d33565066d'>Apply now</a>
    </div>
</div>
<div className="row text-align-center">
    <h3>Frequently asked questions</h3>
    <ul className="accordion">
<li id='faq-eligible'><p>Am I eligible for this insurance?</p>
    <ul className="house">
        <li><p>This insurance is only for homeowners.</p>
            <p>It doesn’t include protection for flats, apartments, mobile homes or park homes. Business premises and council and housing association properties cannot be covered.</p></li>
    </ul>
     <ul className="flat">
        <li><p>This insurance is only for homeowners.</p>
            <p>It doesn’t include protection for houses, bungalows, mobile homes or park homes. Business premises and council and housing association properties cannot be covered.</p>
        </li>
    </ul>
</li>
        <li><p>What information will I need to buy this insurance?</p>
    <ul>
        <li><p>To make buying your cover as simple as possible, please make sure you have the following information to hand:</p>
                <ul>
                <li>Details of the house, bungalow or flat you want to cover</li>
                <li>A valid email address</li>
                <li>The bank details of whoever will pay for the insurance.</li>
                </ul></li>
    </ul>
</li>
        <li><p>What happens if I change my mind?</p>
    <ul>
        <li><p>There is a cancellation period that begins at the same time as your cover. This is shown in your Policy Schedule as the Cancellation Period.</p>
                <p>If you cancel your cover during the cancellation period and have not made a claim, you will receive a full refund.</p>
                <p>If you have made a claim, you will receive a refund less an amount for the number of days which you have been on cover.</p>
                <p>If you cancel after the cancellation period and have not made a claim, you will receive a refund less an amount for the number of days you have been on cover.</p>
                <p>If you have made a claim, you will be required to pay any remaining payments due for the term of your policy.</p>
                <p>See the <a href="#faq-documents">terms and conditions</a> of your policy for more information on cancellation.</p></li>
    </ul>
</li>
        <li><p>When will I be able to make my first claim?</p>
    <ul>
        <li><p>Once your policy is set up, there’ll be an initial 28 day exclusion period during which you will not be able to claim.</p>
              <p>After that, you can make an <a href="/uk/account/login">unlimited number of claims a year</a>.</p></li>
    </ul>
</li>
        <li><p>When and how will I have to pay my excess?</p>
    <ul>
        <li><p>You will have to pay £30 for each claim you make.
        We’ll need this payment before your claim can be progressed.</p>
        <p>We can only accept payment using the following cards: MasterCard, Maestro, Visa or Visa Delta.</p>
        <p>Please read the <a href='#faq-documents'>terms and conditions</a> of your policy for full details.</p></li>
    </ul>
</li>
        <li><p>What if I need a repair that isn’t covered by my insurance?</p>
    <ul>
        <li><p>Don’t worry. HomeServe’s one off repairs team can help!</p>
                <p>We offer a range of fixed price services that will help keep your home running smoothly.
                All our repairs are carried out by HomeServe approved experts, and it’s simple and quick to <a href='/uk/repairs'>book your repair online</a>.</p></li>
    </ul>
</li>
        <li><p>Won’t my local water company help if there’s a problem with my supply pipe?</p>
    <ul>
        <li><p>Your local water company may provide assistance if your external underground water supply pipe is leaking.
            Please contact them directly for details.</p></li>
    </ul>
</li>
        <li><p>What happens after I’ve had my cover for a year?</p>
    <ul>
        <li><p>The price of your insurance will increase when it’s renewed for a second year.</p>
        <p>Customers in their second year who choose to renew now pay £10 a month (£120) for {product.DisplayTitle}, provided they have made no claims.</p>
        <p>Your cover will automatically renew after a year unless you tell us you don’t want it to.</p></li>
    </ul>
</li>
        <li><p>Will I have to pay any extra fees or charges?</p>
    <ul>
        <li><p>No. You only have to pay your insurance premium and - in the event you make a claim - your excess.</p>
                <p>Our prices include all fees and Insurance Premium Tax (IPT).</p></li>
    </ul>
</li>
        <li><p>Who provides this insurance?</p>
    <ul>
        <li><p>This cover is sold, arranged and administered by HomeServe and underwritten by Aviva Insurance Limited. Aviva Insurance Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority.</p>
		<p>Aviva Insurance Limited is registered in Scotland as company number 2116. Its registered address is:</p>
                <p>Pitheavlis,<br/>
                    Perth,<br/>
                    Scotland<br/>
                    PH2 0NH.</p>
                <p>HomeServe is an insurance intermediary and arranges and administers cover on behalf of the underwriter. HomeServe is a trading name of HomeServe Membership Limited, which is authorised and regulated by the Financial Conduct Authority for general insurance and credit broking activities, under firm reference number 312518.</p>
                <p>Our registered address is:</p>
                <p>Cable Drive,<br/>
                    Walsall,<br/>
                    West Midlands,<br/>
                    WS2 7BN.</p>
                <p>HomeServe Membership Limited is registered in England as company number 2770612. Our VAT registration number is GB559669669.</p>
                <p>The regulatory status of Aviva Insurance Limited and HomeServe can be checked on the Financial Conduct Authority’s <a href='https://www.fca.org.uk/firms/financial-services-register' target='_blank'>Financial Services Register</a>.</p></li>
    </ul>
</li>
        <li id='faq-documents'><p>Where can I find the product documents and terms and conditions that relate to my cover?</p>
    <ul>
        <li><p>The full terms and conditions of your policy, plus other important documents about your cover and HomeServe’s services, can be downloaded here.</p>
        <ul className="house">
            <li><a href="/-/media/uk/documents/viewpolicy/k/q8c_20210601_ipid_v1.pdf" target="_blank">Insurance Product Information Document</a></li>
            <li><a href="/-/media/uk/documents/termsandconditions/k/q8c_20210401_tac_v1.pdf" target="_blank">Terms and Conditions</a></li>
            <li><a href="/-/media/uk/documents/about-homeserves-services-ensura-20201111.pdf" target="_blank">About HomeServe&rsquo;s services</a></li>
        </ul>
        <ul className="flat">
            <li><a href='/-/media/uk/documents/viewpolicy/k/q8d_20210601_ipid_v1.pdf' target='_blank'>Insurance Product Information Document</a></li>
            <li><a href='/-/media/uk/documents/termsandconditions/k/q8d_20210401_tac_v1.pdf' target='_blank'>Terms and Conditions</a></li>
            <li><a href="/-/media/uk/documents/about-homeserves-services-ensura-20201111.pdf" target="_blank">About HomeServe&rsquo;s services</a></li>
        </ul></li>
    </ul>
</li>
    </ul>
</div>
<div className="flex flex-33x3">
    <div className="promo-box">
    <h3>Change your excess</h3>
    <p>This insurance is also available with a £0 excess for £5 per month</p>
    <a href="/uk/insurance/plumbing-drainage-cover-xs1" className="btn--rounded">Find out more</a>
</div>
    <div className="promo-box">
    <h3>Looking for something different?</h3>
    <p>We offer a range of options, so you can pick the one that works for you</p>
    <a href="/uk/insurance/cover" className="btn--rounded">Find the right cover</a>
</div>
    <div className="promo-box">
    <h3>Unsure about something?</h3>
    <p>No problem! We’re always happy to help</p>
    <a href="/uk/contact-us" className="btn--rounded">Get in touch</a>
</div>
</div>
</div>
</div><footer>
    <div className="container">
        <div className="footer-links">
            <div className="row">
                <div className="col-md-12">
                    <div id="logo-svg">
                        
<svg className="logo" width="55" height="55" aria-labelledby="HomeServe-Logo" focusable="false" data-name="Loading Wording" fill="none" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 55 55">
<title id="HomeServe-Logo">Logo</title>
<path className="house" d="M52.76,26c-2.87-2.87-23-22.31-23-22.31a2.89,2.89,0,0,0-4.08,0L17,12.1V10.89A2.89,2.89,0,0,0,14.11,8H10.89A2.89,2.89,0,0,0,8,10.89V21L2.78,26.1a2.86,2.86,0,0,0-.84,2.22A3,3,0,0,0,5,31H8V50.11A2.89,2.89,0,0,0,10.9,53H45.1A2.88,2.88,0,0,0,48,50.15L48,31h3.29a2.72,2.72,0,0,0,2.89-2.89C54.2,27,53.21,26.44,52.76,26Z"></path>
<path className="smile" d="M43.93,39.73a20.4,20.4,0,0,1-15.86,7.33A20.39,20.39,0,0,1,12.19,39.7a1.7,1.7,0,1,1,2.66-2.12,16.92,16.92,0,0,0,13.22,6.08,16.92,16.92,0,0,0,13.2-6.05,1.7,1.7,0,1,1,2.66,2.13"></path>
</svg>


                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8 col-md-8">
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="links-col">
                                <div className="links-header">
                                    <a className="collapsed" data-toggle="collapse" data-target="#footer-link-column-1" aria-expanded="false" aria-controls="footer-link-column-1">
                                        Products and Services
                                    </a>
                                </div>
                                    <div className="links-body collapse dont-collapse-sm" id="footer-link-column-1">
                                        <ul>
                                                <li><a href="/uk/insurance-cover" role="link" title="What we do" >What we do</a></li>
                                                <li><a href="/uk/insurance-cover/plumbing-and-drainage-comparison" role="link" title="Plumbing and Drainage Cover" >Plumbing and Drainage Cover</a></li>
                                                <li><a href="/uk/insurance-cover/gas-and-boiler-comparison" role="link" title="Gas Boiler and Heating Cover" >Gas Boiler and Heating Cover</a></li>
                                                <li><a href="/uk/insurance-cover/landlords-comparison" role="link" title="Landlord Cover" >Landlord Cover</a></li>
                                                <li><a href="/uk/insurance/annual-boiler-service" role="link" title="Boiler Service" >Boiler Service</a></li>
                                                <li><a href="/uk/heating/new-boiler/" rel="noopener noreferrer" target="_blank" role="link" title="New Boilers" >New Boilers</a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-8">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="links-col">
                                        <div className="links-header">
                                            <a className="collapsed" data-toggle="collapse" data-target="#footer-link-column-2" aria-expanded="false" aria-controls="footer-link-column-2">
                                                About Us
                                            </a>
                                        </div>
                                            <div className="links-body collapse dont-collapse-sm" id="footer-link-column-2">
                                                <ul>
                                                        <li><a href="/uk/about/about-us" role="link" title="About HomeServe" >About HomeServe</a></li>
                                                        <li><a href="/uk/careers-hub" role="link" title="Careers at HomeServe" >Careers at HomeServe</a></li>
                                                        <li><a href="/uk/about/become-a-tradesperson" role="link" title="Become a Tradesperson" >Become a Tradesperson</a></li>
                                                        <li><a href="https://www.homeserveplc.com/investors/" rel="noopener noreferrer" target="_blank" role="link" title="Our Investment Proposition" >Our Investment Proposition</a></li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="links-col">
                                        <div className="links-header">
                                            <a className="collapsed" data-toggle="collapse" data-target="#footer-link-column-3" aria-expanded="false" aria-controls="footer-link-column-3">
                                                More from HomeServe
                                            </a>
                                        </div>
                                            <div className="links-body collapse dont-collapse-sm" id="footer-link-column-3">
                                                <ul>
                                                        <li><a href="/uk/about/frequently-asked-questions" role="link" title="Help Centre" >Help Centre</a></li>
                                                        <li><a href="https://www.homeserve.com/uk/living/" role="link" title="HomeServe Living" >HomeServe Living</a></li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <div className="links-col">
                        <div id="social-icons">

<a href="https://www.facebook.com/HomeServeUK" rel="noopener noreferrer" target="_blank" role="link" aria-label="HomeServe on Facebook" title="Visit HomeServe on Facebook?" >                                        <i aria-hidden="true" className="icon-hs-facebook"></i>
</a><a href="https://www.twitter.com/HomeServeUK" rel="noopener noreferrer" target="_blank" role="link" aria-label="HomeServe on Twitter" title="Visit HomeServe on Twitter?" >                                        <i aria-hidden="true" className="icon-hs-twitter"></i>
</a><a href="https://www.youtube.com/user/homeserve" rel="noopener noreferrer" target="_blank" role="link" aria-label="HomeServe on Youtube" title="Visit HomeServe on Youtube?" >                                        <i aria-hidden="true" className="icon-hs-youtube"></i>
</a><a href="https://www.instagram.com/homeserve_uk" rel="noopener noreferrer" target="_blank" role="link" aria-label="HomeServe on Instagram" title="Visit HomeServe on Instagram?" >                                        <i aria-hidden="true" className="icon-hs-instagram"></i>
</a><a href="https://www.linkedin.com/company/homeserve" rel="noopener noreferrer" target="_blank" role="link" aria-label="HomeServe on Linked-In" title="Visit HomeServe on Linked-In?" >                                        <i aria-hidden="true" className="icon-hs-linked-in"></i>
</a>                        </div>
                        <div className="links-header">
                            
                        </div>

                    </div>
                </div>
            </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="inline-links">
<a href="/uk/about/privacy-policy" role="link" title="Privacy Policy" >Privacy Policy</a><a href="/uk/about/cookies" role="link" title="Cookies Policy" >Cookies Policy</a><a href="/uk/about/terms-of-use" role="link" title="Terms of Use" >Terms of Use</a><a href="/uk/about/anti-slavery-statement" role="link" title="Anti-Slavery Statement" >Anti-Slavery Statement</a><a href="/uk/about/gender-pay" role="link" title="Gender Pay" >Gender Pay</a><a href="/uk/about/covid-19-declaration" role="link" title="COVID-19 Declaration" >COVID-19 Declaration</a>                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
            <hr className="red-line" />
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-push-6">
                <div className="footer-base-content right">
                    <img src="https://www.homeserve.com/-/media/uk/logos/walsall-football-logo-50x50.png?h=50&amp;w=50&amp;la=en&amp;hash=912645D437335FE0579C7C3664544D9E" alt="Walsall Football Club Badge" /> Proud to support Walsall FC
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-sm-pull-6">
                <div className="footer-base-content left">
<span>© HomeServe Membership Ltd. 2021.</span>
                </div>
            </div>
        </div>
    </div>

        <div className="container-fluid footer-baseline">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>HomeServe Membership Limited is authorised and regulated by the Financial Conduct Authority for general insurance and credit broking activities under firm reference 312518.</p>
                    </div>
                </div>
            </div>
        </div>

</footer>
    </main>
);
