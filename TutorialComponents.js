// TutorialComponents.js


export function Microcontrollers() {
    return `
        <div class="tutorial-item">
            <div class="tutorial-header">Introduction to the ESP32 Microcontroller</div>
            <div class="tutorial-content">
                <p>Machine learning is a subset of artificial intelligence that focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.</p>
                <p>Key components include:</p>
                <ul>
                    <li>
                        <a id="link-color" href="data.html">Data Collection</a> - Learn about gathering and preprocessing data
                    </li>
                    <li>
                        <a id="link-color" href="feature-engineering.html">Feature Engineering</a> - Understand how to create meaningful features
                    </li>
                    <li>
                        <a id="link-color" href="model-selection.html">Model Selection</a> - Explore different ML models and their applications
                    </li>
                </ul>
                <p>Click on any topic to learn more!</p>
            </div>
        </div>
    `;
}

export function MicrocontrollerModules() {
    return `
        <div class="tutorial-item">
            <div class="tutorial-header">Microcontroller Modules</div>
            <div class="tutorial-content">
                <p>Neural networks are computing systems vaguely inspired by biological neural networks. They consist of:</p>
                <ul>
                    <li>
                        <a id="link-color" href="MAX17043.html">MAX17043</a> - Learn about gathering voltage and battery percentage data
                    </li>
                    <li id="link-color" href="data.html">LoRa Module</li>
                    <li id="link-color" href="data.html">GPS Module (NEO-M8N)</li>
                    <li id="link-color" href="data.html"></li>
                    <li id="link-color" href="data.html">Weights and Biases</li>
                </ul>
                <p>They're particularly powerful for complex pattern recognition tasks.</p>
            </div>
        </div>
    `;
}

// Example of how to add a new tutorial component
export function NewTutorialTopic() {
    return `
        <div class="tutorial-item">
            <div class="tutorial-header">New Tutorial Topic</div>
            <div class="tutorial-content">
                <p>Description of a new tutorial topic.</p>
                <ul>
                    <li>First key point</li>
                    <li>Second key point</li>
                </ul>
            </div>
        </div>
    `;
}