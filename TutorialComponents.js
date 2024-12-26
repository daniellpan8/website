// TutorialComponents.js


export function Microcontrollers() {
    return `
        <div class="block-item">
            <div class="block-header">Introduction to the ESP32 Microcontroller</div>
            <div class="block-content">
                <p>The ESP32 is a powerful and versatile microcontroller designed by Espressif Systems, 
                widely used in Internet of Things (IoT) applications. It has a dual-core processor with built-in 
                Wi-Fi and Bluetooth capabilities, unlike its predecessor, the ESP8266. This microcontroller features 
                a wide range of interfaces, including GPIO, PWM, ADC, I2C, SPI, and UART. To learn more about these interfaces, 
                visit the Microcontroller Modules section.</p>
                <p>The ESP32 is energy efficient, with deep sleep modes and low-power consumption. Making it suitable for battery-operated 
                devices. It has extensive development support, including the Arduino IDE, ESP-IDF (Espressif IoT Development Framework), 
                and third-party libraries, making it suitable to both beginners and experienced developers.</p>
                <p>In the following tutorials, the PlatformIO extension will be used instead of Arduino IDE. Other 
                than personal preference, PlatformIO also offers advantages, like multi-platform support, integrated development 
                environment, advanced configuration options, and file management. </p>
            </div>
        </div>
    `;
}

export function MicrocontrollerModules() {
    return `
        <div class="block-item">
            <div class="block-header">Microcontroller Modules</div>
            <div class="block-content">
                <p>I2C, SPI, and UART are communication protocols for data transfer between microcontrollers 
                and peripheral devices like sensors, displays, and modules. The ESP32 supports natively supports these 
                protocols, making it versatile for embedded systems projects.</p>

                <h2>I2C Interface</h2>
                <p>I2C is commonly used when connecting multiple slave devices, such as displays and sensors, to one or more master 
                devices. It is a two-wire serial communication protocol, requiring minimal wiring using the data line (SDA) for 
                transmitting/receiving data and a clock line (SCL) for synchronization.
                </p>
                <ul>
                    <li>
                        <a id="link-color" href="esp32modules/MAX17043.html">MAX17043</a> - Learn about gathering voltage and battery percentage data
                    </li>
                </ul>

                <h2>SPI Interface</h2>
                <p>SPI (Serial Peripheral Interface) is a high-speed communication protocol used for interfacing microcontrollers with 
                peripherals like displays, SD cards, and sensors. This protocol enables full-duplex communication meaning data can be 
                transmitted and received simultaneously. Unlike I2C, SPI operates using four wires: MOSI (Master Out Slave In), MISO 
                (Master In Slave Out), SCLK (Clock), and CS (Chip Select).
                </p>
                <ul>
                    <li>
                        <a id="link-color" href="esp32modules/LoRa.html">LoRa</a> - Learn about long range communication modules
                    </li>
                </ul>

                <h2>UART Interface</h2>
                <p>UART (Universal Asynchronous Receiver-Transmitter) is a simple and widely used protocol for serial communication between 
                microcontrollers and peripheral devices, like GPS modules, Bluetooth modules, and more. Unlike SPI, UART operates asynchronously 
                without relying on a shared clock signal. It only requires two wires: TX (Transmit) and RX (Receive) to enable half-duplex communication, 
                where data is sent and received one direction at a time.
                    <li>
                        <a id="link-color" href="esp32modules/GPS.html">GPS Module (NEO-M8N)</a> - Learn how to track satellites and retrieve precise location data
                    </li>
            </div>
        </div>
    `;
}
