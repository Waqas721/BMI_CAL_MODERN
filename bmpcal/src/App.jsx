import React, { useState } from "react";
import './App.css'
function App() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");

    const calculateBMI = (e) => {
        e.preventDefault();

        // Convert height to meters
        const heightInMeters = height / 100;
        const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        let bmiCategory = "";
        if (calculatedBMI < 18.5) bmiCategory = "Underweight";
        else if (calculatedBMI < 24.9) bmiCategory = "Normal weight";
        else if (calculatedBMI < 29.9) bmiCategory = "Overweight";
        else bmiCategory = "Obese";

        setBmi(calculatedBMI);
        setCategory(bmiCategory);
    };

    return (
        <div className="container">
            <h2>BMI Calculator</h2>
            <form onSubmit={calculateBMI}>
                <label htmlFor="weight">Weight (kg):</label>
                <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                />

                <label htmlFor="height">Height (cm):</label>
                <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                />

                <button type="submit">Calculate BMI</button>
            </form>

            {bmi && (
                <div className="result">
                    <h3>Your BMI is {bmi}</h3>
                    <p>{category}</p>
                </div>
            )}
        </div>
    );
}

export default App;

