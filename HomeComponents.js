// TutorialComponents.js


export function About() {
    return `
        <div class="block-item">
            <div class="block-header">About Me</div>
            <div class="block-content">
                <p>I am Daniell and am a 4th year computer engineering student at Queen's University. Outside of school, my hobbies include 
                swimming, bowling, 3D printing, and working with microcontrollers. </p>
            </div>
        </div>
    `;
}

export function Experiences() {
    return `
        <div class="block-item">
            <div class="block-header">Experiences</div>
            <div class="block-content">
                <p>Over the past 4 years at university, I have gained experience in both software development and hardware implementation. 
                Through academic projects and professional work, I have utilized a variety of programming languages, including: </p>
                <ul>
                    <li><p>Python, Java, and C for general-purpose programming</p></li>
                    <li><p>C++ for microcontroller development</p></li>
                    <li><p>C# and the .NET framework for web application development</p></li>
                    <li><p>HTML, CSS, and Javascript for creating and designing websites like this one</p></li>
                </ul>
                <p>In addition to programming, I have gained hands-on experience with cloud services and development tools during my two 
                co-op terms at <b>Ontario Health</b> as a <b>Junior Systems Engineer</b>. I leveraged <b>Docker</b> to create test environments for applications 
                prior to deployment. I developed Python <b>Lambda Functions</b> in <b>AWS</b> to automate tasks and optimize workflows. On <b>Microsoft 
                Azure</b>, I hosted <b>.NET</b> web applications, implementing third-party identity and access management platforms, such as <b>Auth0</b>, 
                to enhance security. For the .NET application, I also enabled <b>Continuous Integration and Continuous Deployment (CI/CD)</b> to allow seamless 
                updates by automatically deploying new changes pushed to the GitHub repository.
                </p>
            </div>
        </div>
    `;
}
