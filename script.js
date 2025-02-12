
:root{
  --primary: #fff;
  --bg-color: #FFC0CB;
  --bg-envelope-color: #f5edd1;
  --envelope-tab: #ecdeb8;
  --envelope-cover: #e6cfa7;
  --shadow-color: rgba(0, 0, 0, 0.2);
  --txt-color: #444;
  --heart-color: rgb(252, 8, 231);
}
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  height: 100vh;
  display: grid;
  place-items: center;
}
.container > .envelope-wrapper {
  background: var(--bg-envelope-color);
  box-shadow: 0 0 40px var(--shadow-color);
}
.envelope-wrapper > .envelope {
  position: relative;
  width: 300px;
  height: 230px;
}
.envelope-wrapper > .envelope::before {
  content: "";
  position: absolute;
  top: 0;
  z-index: 2;
  border-top: 130px solid var(--envelope-tab);
  border-right: 150px solid transparent;
  border-left: 150px solid transparent;
  transform-origin: top;
  transition: all 0.5s ease-in-out 0.7s;
}
.envelope-wrapper > .envelope::after {
  content: "";
  position: absolute;
  z-index: 2;
  width: 0px;
  height: 0px;
  border-top: 130px solid transparent;
  border-right: 150px solid var(--envelope-cover);
  border-bottom: 100px solid var(--envelope-cover);
  border-left: 150px solid var(--envelope-cover);
}
.envelope > .letter {
  position: absolute;
  right: 20%;
  bottom: 0;
  width: 54%;
  height: 80%;
  background: var(--primary);
  text-align: center;
  transition: all 1s ease-in-out;
  box-shadow: 0 0 5px var(--shadow-color);
  padding: 20px 10px;
}

.envelope > .letter > .text {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: var(--txt-color);
  text-align: left;
  font-size: 10px;
}
.heart {
  position: absolute;
  top: 51%;
  left: 50%;
  width: 18px;
  height: 18px;
  background: var(--heart-color);
  z-index: 4;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: transform 0.5s ease-in-out 1s;
  box-shadow: 0 1px 6px var(--shadow-color);
  cursor: pointer;
}
.heart:before, 
.heart:after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: var(--heart-color);
  border-radius: 50%;
}
.heart:before {
  top: -7.5px;
}
.heart:after {
  right: 7.5px;
}
.flap > .envelope:before {
  transform: rotateX(180deg);
  z-index: 0;
}
.flap > .envelope > .letter {
  bottom: 100px;
  transform: scale(1.5);
  transition-delay: 1s;
}
.flap > .heart {
  transform: rotate(90deg);
  transition-delay: 0.4s;
}

/* 🌟 Background Hearts Animation */
@keyframes bounce {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  50% { transform: translateY(-50px) scale(1.2); opacity: 0.8; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
@keyframes float {
  0% { transform: translateY(50vh) translateX(-20px) scale(0.8); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-20vh) translateX(20px) scale(1.2); opacity: 0; }
}



/* Floating Hearts */
.background-hearts {
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
}

/* Base Heart Design */
.heart-shape {
  position: absolute;
  width: 17px;
  height: 18px;
  background: var(--heart-color);
  transform: rotate(45deg);
  animation: fall 5s linear infinite;
  opacity: 0.9;
}

.heart-shape::before,
.heart-shape::after {
  content: "";
  position: absolute;
  width: 14px;
  height: 15px;
  background: var (--heart-color);
  border-radius: 50%;
}

.heart-shape::before {
  top: -10px;
  left: 0;
}

.heart-shape::after {
  top: 0;
  left: -10px;
}



/* 🌟 Falling Hearts Animation */
@keyframes fall {
  0% { transform: translateY(-100%) rotate(45deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(45deg); opacity: 0; }
}

/* Floating Hearts */
.background-hearts {
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
}

/* Base Heart Design */
.heart-shape {
  position: absolute;
  width: 12px; /* Smaller hearts */
  height: 13px;
  background: rgb(252, 8, 231);
  transform: rotate(45deg);
  animation: fall 5s linear infinite; /* Apply falling animation */
  opacity: 0.7; /* Slightly transparent */
}

.heart-shape::before,
.heart-shape::after {
  content: "";
  position: absolute;
  width: 13px;
  height: 13px;
  background: rgb(252, 8, 231);
  border-radius: 50%;
}

.heart-shape::before {
  top: -7.5px;
  left: 0;
}

.heart-shape::after {
  top: 0;
  left: -7.5px;
}
.background-images {
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: -2;
}

.background-images img {
    position: absolute;
    width: 120px; /* Adjust size as needed */
    height: auto;
    opacity: 0.8; /* Slight transparency */
    border-radius: 10px; /* Slightly rounded corners */
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}
