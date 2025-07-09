import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GuessScreen from "./screens/GuessScreen";
import ResultScreen from "./screens/ResultScreen";

import { StatusBar } from "expo-status-bar";

export default function App() {
  const [step, setStep] = useState(1);
  const [userNumber, setUserNumber] = useState(null);
  return (
    <>
      {step == 1 && (
        <StartGameScreen
          userNumber={userNumber}
          setUserNumber={setUserNumber}
          step={step}
          setStep={setStep}
        />
      )}
      {step == 2 && <GuessScreen userNumber={userNumber} setStep={setStep} />}
      <StatusBar hidden />

      {step == 3 && <ResultScreen setStep={setStep} />}

    </>
  );
}

const styles = StyleSheet.create({});