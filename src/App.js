
import React,{useState} from 'react'
import supervisor from './images/icon-supervisor.svg';
import calculator from './images/icon-calculator.svg';
import karma from './images/icon-karma.svg';
import builder from './images/icon-team-builder.svg';
import './App.css'

function App() {

  return (
    <div className="App bg-white h-screen w-screen overflow-x-hidden">
      <header className="flex flex-col items-center justify-center">
        <div className="my-10 md:my-6 text-center mx-2">
        <h1 className="text-2xl text-grayishblue font-thin tracking-wide">Reliable,efficient delivery</h1>
        <h1 className="text-verydarkblue text-2xl font-bold ">Powered by Technology</h1>
        <p className="text-grayishblue text-sm tracking-wide font-normal max-w-md mx-auto leading-normal p-2 font-semibold">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successfull</p>
        </div>
      </header>
      <section className="grid grid-cols-1 grid-rows-4 gap-6 px-4 md:px-0  w-full md:grid-cols-3 md:grid-rows-4 md:gap-4 mx-auto mb-12 max-w-sm md:max-w-7xl">
        <div className="relative shadow-xl h-60 max-w-sm border-t-4 border-cyan rounded-md mx-2 overflow-hidden p-6 md:row-start-2 md:row-end-4 ">
          <h1 className="text-left  text-verydarkblue text-2xl font-bold">Superior</h1>
          <p className="text-left text-grayishblue text-md py-2 max-w-sm">Monitors activity to identify project roadblocks</p>
          <div className="absolute bottom-4 right-6">
            <img src={supervisor} alt="Supervisor"/>
          </div>
        </div>
        <div className="relative shadow-xl h-60 max-w-sm border-t-4 border-red rounded-md mx-2 overflow-hidden p-6 md:row-start-1 md:row-end-3 md:col-start-2">
          <h1 className="text-left  text-verydarkblue text-2xl font-bold ">Team builder</h1>
          <p className="text-left text-grayishblue text-md py-2 max-w-sm">Scans our talent network to create the optimal team for your project</p>
          <div className="absolute bottom-4 right-6">
            <img src={builder} alt="Builder"/>
          </div>
        </div>
        <div className="relative shadow-xl h-60 max-w-sm border-t-4 border-orange rounded-md mx-2 overflow-hidden p-6 md:row-start-3 md:row-end-5 md:col-start-2">
          <h1 className="text-left  text-verydarkblue text-2xl font-bold">Karma</h1>
          <p className="text-left text-grayishblue text-md py-2 max-w-sm">Regularly evaluates out talent to ensure quality</p>
          <div className="absolute bottom-4 right-6">
            <img src={karma} alt="Karma"/>
          </div>
        </div>
        <div className="relative shadow-xl h-60 max-w-sm border-t-4 border-blue rounded-md mx-2 overflow-hidden p-6 md:row-start-2 md:row-end-4 md:col-start-3">
          <h1 className="text-left  text-verydarkblue text-2xl font-bold">Calculator</h1>
          <p className="text-left text-grayishblue text-md py-2">Uses data from past projects to provide better delivery estimates</p>
          <div className="absolute bottom-4 right-6">
            <img src={calculator} alt="Calculator"/>
          </div>
        </div>

      </section>
    </div>
  );
}
 
export default App;
/*  <header>
      <Navbar/>
      <img className="w-screen h-screen object-cover" src={header} alt="sunnyside image"/>
      </header>
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-6/12 h-auto p-10 text-center md:text-left md:my-10 md:mt-32 ">
          <h1 className="text-3xl font-fraunces  text-black m-2">Transform your brand</h1>
          <p className="text-darkgrayblue text-sm font-barlow m-2 ">
            We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you:
          </p>
          <h3 className=" font-fraunces text-lg text-black m-2 z-40">Learn more</h3>
          <div className="border-4 rounded-full w-28 ml-1 -mt-5 border-yellow z-0"></div>

        </div>
        <div className="w-full md:w-6/12 h-auto">
          <img src={transform} className="w-full h-full" alt="dfc"/>
        </div>
      </section>
      <section className="flex flex-col  md:flex-row-reverse">
        <div className="w-full md:w-6/12 h-auto p-10 text-center md:text-left md:my-10 md:mt-32 ">
          <h1 className="text-3xl font-fraunces  text-black m-2">Stand out to the right audience</h1>
          <p className="text-darkgrayblue text-sm font-barlow m-2 ">
            Using a collaborative formula of designers,researchers,photographers,videographers and copywriters.We'll build and extend your brand in digital places.
          </p>
          <h3 className=" font-fraunces text-lg text-black m-2 z-40">Learn more</h3>
          <div className="border-4 rounded-full w-28 ml-1 -mt-5 border-softred z-0"></div>

        </div>
        <div className="w-full md:w-6/12 h-auto">
          <img src={stand} className="w-full h-full" alt="dfc"/>
        </div>
      </section>
      <section className="flex flex-col md:flex-row">
        <div className="relative w-screen md:w-6/12 ">
          <img src={graphic} className="w-full" alt="cdfss"/>
          <div className="absolute bottom-5 text-center ">
            <h1 className="text-xl font-fraunces text-darkcyan ">Graphic Design</h1>
            <p className="text-md font-barlow text-moderatecyan ">Great design makes you memorable.We deliver artwork that underscores your brand message and captures potential clients attention.</p>
          </div>
        </div>
        <div className="relative w-screen md:w-6/12 ">
        <img src={photography} className="w-full" alt="cdfss"/>
        <div className="absolute bottom-5 text-center">
          <h1 className="text-xl font-fraunces text-darkcyan ">Photography</h1>
          <p className="text-md font-barlow text-moderatecyan ">Increase your credibly by getting the most stunning,high-quality images that improve your business image.</p>
        </div>
        </div>

      </section>
      
       <Navbar setToggle={()=>setToggle(!toggle)}/>
      {toggle && <Modal/>}
      <header className=" bg-verylightgray flex flex-col-reverse md:flex-row justify-between  items-center w-screen h-full ">
        <div className="w-full pt-4">
          <div className="pt-96 md:pt-0 text-center sm:text-left max-w-xs mx-auto md:ml-48   tracking-wider leading-snug">
          <h1 className="md:mt-12 text-4xl text-black opacity-80 py-4 ">Next generation digital banking</h1>
          <p className="text-grayishblue  font-public text-sm  py-4 ">Take your financial life online.Your Easybank account will be a one-stop shop for spending,saving,budgeting,investing and much more.</p>
          <button className="my-3 bg-gradient-to-r from-limegreen text-md to-brightcyan py-2 px-8 rounded-full text-white  hover:opacity-80">
                Request Invite
          </button>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img src={dintro} className={toggle?"invisible":"absolute z-0"} alt="Desktop Intro"/>
          <img src={mockup} className={toggle?"invisible":"absolute z-10"} alt="Mockup"/>
        </div>
      </header>
      <section className="bg-white md:mt-20 flex flex-col justify-between">
        <div className="mx-auto md:ml-48  max-w-xs md:max-w-md text-center md:text-left">
        <h1 className="mt-12 text-4xl text-black opacity-80 py-4 font-public">Why choose Easybank?</h1>
        <p className="text-grayishblue max-w-lg  font-public text-sm  py-4 ">We leverage Open Banking to turn your account into your financial hub.Control your finances like never before.</p>
        </div>
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-12">
          <div className="max-w-xs m-4 text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <img src={online} alt="Online banking" />
            <h1 className="text-lg text-black opacity-80 py-4 ">Online Banking</h1>
            <p className="text-grayishblue font-public text-sm leading-normal tracking-wide  py-2">On modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </div>
          <div className="max-w-xs m-4 text-center md:text-left  flex flex-col justify-center items-center md:items-start">
            <img src={budgeting} alt="Online banking"/>
            <h1 className="text-lg text-black opacity-80 py-4">Simple Budgeting</h1>
            <p className="text-grayishblue font-public text-sm leading-normal tracking-wide  py-2">See exactly where your money goes each month.Receive notifications when you're close to your hitting limits.</p>
          </div>
          <div className="max-w-xs m-4 text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <img src={onboarding} alt="Online banking"/>
            <h1 className="text-lg text-black opacity-80 py-4">Fast Onboarding</h1>
            <p className="text-grayishblue font-public text-sm leading-normal tracking-wide  py-2">You don't do branches.Open your account in minutes online and start taking control of your finances right away.</p>
          </div>
          <div className="max-w-xs m-4  text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <img src={api} alt="Online banking"/>
            <h1 className="text-lg text-black opacity-80 py-4">Open API</h1>
            <p className="text-grayishblue font-public text-sm leading-normal tracking-wide  py-2">Manange your savings,investments,pension and much more from one account.Tracking your money has never been easier.</p>
          </div>
        </div>
      </section>
      <section className="bg-verylightgray  flex flex-col justify-between py-12">
      <div className="md:max-w-md text-center md:text-left">
        <h1 className="mx-auto md:ml-48  text-4xl text-black opacity-80 py-4 font-public">Latest Articles</h1>
      </div>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
      <div className="max-w-xs m-5 flex flex-col justify-center items-start rounded-md overflow-hidden">
            <img src={currency} className="w-full h-36 object-cover" alt="Currency" />
            <p className="text-xs text-grayishblue font-public leading-tight tracking-wide px-4 pt-4">By Claire Robinson</p>
            <h1 className="text-lg text-black opacity-80 px-4 py-1">Receive money in any currency with no fees</h1>
            <p className="px-4 py-2 text-grayishblue font-public text-sm leading-normal tracking-wide ">The world is getting smaller and we're becoming more mobile.So why should you be forced to only receive money in a single ...</p>
          </div>
          <div className="max-w-xs m-5  flex flex-col justify-center  items-start rounded-md overflow-hidden">
            <img src={restaurant} className="w-full h-36 object-cover" alt="Restaurant" />
            <p className="text-xs text-grayishblue font-public leading-tight tracking-wide px-4 pt-4">By Wilson Hutton</p>
            <h1 className="text-lg text-black opacity-80 px-4 py-1">Treat yourself without worrying about money</h1>
            <p className="px-4 py-2 text-grayishblue font-public text-sm leading-normal tracking-wide ">Our simple budgeting feature allows you to separate out your  spending and set realistic limits each month.That means you ...</p>
          </div>
          <div className="max-w-xs m-5  flex flex-col justify-center items-start rounded-md overflow-hidden">
            <img src={plane} className="w-full h-36 object-cover" alt="Plane" />
            <p className="text-xs text-grayishblue font-public leading-tight tracking-wide px-4 pt-4">By Wilson Hutton</p>
            <h1 className="text-lg text-black opacity-80 px-4 py-1">Take  your Easybank card wherever you go</h1>
            <p className="px-4 py-2 text-grayishblue font-public text-sm leading-normal tracking-wide ">We want you to enjoy your travels.This is why we don't charge any fees on purchases while you're aboard.We'll even show you ...</p>
          </div>
          <div className="max-w-xs m-5  flex flex-col justify-center  items-start rounded-md overflow-hidden">
            <img src={confetti} className="w-full h-36 object-cover" alt="Confetti" />
            <p className="text-xs text-grayishblue font-public leading-tight tracking-wide px-4 pt-4">By Claire Robinson</p>
            <h1 className="text-lg text-black opacity-80 px-4 py-1">Our invite-only Beta accounts are now live!</h1>
            <p className="px-4 py-2 text-grayishblue font-public text-sm leading-normal tracking-wide ">After a lot of hard work by the whole team,we're excited to launch our closed beta.It's easy to request an invite through the site ...</p>
          </div>
      </div>
      </section>
      <section className="w-full flex flex-col md:flex-row justify-between items-center bg-darkblue py-16 px-autonpm md:px-48">
        <div className="flex flex-col justify-between items-center">
          <img src={logo} className="text-white my-5" alt="Logo"/>
          <div className="flex flex-row justify-between items-center space-x-3 py-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-current text-white hover:fill-current hover:text-limegreen" ><path  d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" className="fill-current text-white hover:fill-current hover:text-limegreen"><path  d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" className="fill-current text-white hover:fill-current hover:text-limegreen"><path d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-current text-white hover:fill-current hover:text-limegreen"><path  d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" className="fill-current text-white hover:fill-current hover:text-limegreen"><path  d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"/></svg>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center md:items-start space-y-4 my-1">
          <p className="text-sm font-public text-white hover:text-limegreen">About Us</p>
          <p className="text-sm font-public text-white hover:text-limegreen">Contact</p>
          <p className="text-sm font-public text-white hover:text-limegreen">Blog</p>
        </div>
        <div className="flex flex-col justify-between items-center md:items-start space-y-4 my-1">
          <p className="text-sm font-public text-white hover:text-limegreen">Careers</p>
          <p className="text-sm font-public text-white hover:text-limegreen">Support</p>
          <p className="text-sm font-public text-white hover:text-limegreen">Privacy Policy</p>
        </div>
        <div className="flex flex-col justify-between items-center  space-y-4">
        <button className="my-3 bg-gradient-to-r from-limegreen text-md to-brightcyan py-2 px-8 rounded-full text-white  hover:opacity-80">
                Request Invite
        </button>
        <p className="text-sm font-public text-grayishblue hover:text-limegreen"><span className="p-1 text-sm font-public  text-grayishblue hover:text-limegreen border-2 border-grayishblue hover:border-limegreen rounded-full">c</span> Easybank.All Rights Reserved</p>

        </div>


      </section>*/