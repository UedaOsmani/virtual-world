import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";

/* Change debug to `true` to see the invisible Buttons */
export const debug = false;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image="/link.png">
              <Button to="/intro-1" x="145" y="330" w="110" h="45" />
              <Button to="/connectvr" x="290" y="330" w="170" h="45" />
            </Screen>
          }
        />
         <Route
          path="/connectvr"
          element={
            <Screen image="/vr.jpg">
              <Button to="/create-avatar" x="290" y="330" w="270" h="245" />
            </Screen>
          }
        />
        <Route
          path="/create-avatar"
          element={
            <Screen image="/Create-avatar.png" back="/">
              <Button to="/sampleVR" x="215" y="360" w="170" h="40" />
            </Screen>
          }
        />
      
        <Route
          path="/sampleVR"
          element={
            <iframe
              title="sampleVR"
              width="600"
              height="400"
              allow="autoplay"
              src="https://www.youtube.com/embed/7LX6GPRL5-4?autoplay=1"
            ></iframe>

          }
        />
        {/* <Route
          path="/intro-4"
          element={
            <Screen image="/image3.png" back="/intro-3">
              <Button to="/intro-5" x="230" y="275" w="150" h="55" />
            </Screen>
          }
        />

        <Route
          path="/intro-5"
          element={
            <Screen image="/image 5.png" back="/intro-4">
              <Button to="/intro-6" x="165" y="300" w="250" h="55" />
            </Screen>
          }
        />
        <Route
          path="/intro-6"
          element={
            <Screen image="/image 6.png" back="/intro-5">
              <Button to="/intro-7" x="105" y="200" w="220" h="145" />
            </Screen>
          }
        />
        <Route
          path="/intro-7"
          element={
            <Screen image="/image 7.png" back="/intro-6">
              <Button to="/intro-8" x="155" y="130" w="400" h="125" />
            </Screen>
          }
        />
        <Route
          path="/intro-8"
          element={
            <Screen image="/image 8.png" back="/intro-7">
              <Button to="/intro-9" x="65" y="270" w="200" h="125" />
            </Screen>
          }
        />
        <Route
          path="/intro-9"
          element={
            <Screen image="/image 9.jpg" back="/intro-8">
              <Button to="/intro-10" x="385" y="340" w="180" h="55" />
            </Screen>
          }
        />
        <Route
          path="/intro-10"
          element={
            <Screen image="/image 10.png" back="/intro-9">
              <Button to="/intro-11" x="5" y="40" w="580" h="355" />
            </Screen>
          }
        />
        <Route
          path="/intro-11"
          element={
            <Screen image="/image 11.png" back="/intro-10">
              <Button to="/intro-12" x="5" y="40" w="380" h="305" />
            </Screen>
          }
        />
        <Route
          path="/intro-12"
          element={
            <Screen image="/image 12.png" back="/intro-11">
              <Button to="/intro-13" x="265" y="270" w="100" h="55" />
            </Screen>
          }
        />
        <Route
          path="/intro-13"
          element={
            <Screen image="/image 13.png" back="/intro-12">
              <Button to="/intro-14" x="145" y="20" w="300" h="55" />
            </Screen>
          }
        />
        <Route
          path="/intro-14"
          element={
            <Screen image="/image 14.jpg" back="/intro-13">
              <Button to="/" x="45" y="20" w="500" h="555" />
            </Screen>
          }
        /> */}
      </Routes>
    </div>
  );
}
