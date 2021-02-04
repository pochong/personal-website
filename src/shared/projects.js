export const PROJECTS = 
[
    {
        id:0,
        name: "Website",
        image: '/pika.jpg',
        description: {
            1: "firstPoint",
            2: "secondPoint"
        },
        github: "git hub"
    },
    {
        id:1,
        name: "Automatic Cat Litter Box",
        image: '/pika.jpg',
        description: {
            1: "Designed and programmed a self-cleaning cat litter box using python",
            2: "Detected motion to start automatic cleaning by using Raspberry Pi with PIR and force sensors",
            3: "Leveraged gpiozero library for signal detection and adafruit_servokit library for motor control",
            4: "Collaborated with the team to identify and analyze requirements",
            5: "Led team to produce schedule and create test scripts"
        },
        github: "https://github.com/pochong/AutomaticCatLitterBox"
    },
    {
        id:2,
        name: "CampusFoodBuddy",
        image: '/pika.jpg',
        description: {
            1: "Designed and developed a Java based mobile app with Android Studio to display the daily changing menus of multiple dining halls",
            2: "Used web scraping and Google Map API to direct users to the dining halls",
            3: "Operated as Scrum Master: delegating tasks, facilitating meetings, and addressing team dynamics"
        },
        github: "git hub"
    },
    {
        id:3,
        name: "Osicllscope",
        image: '/pika.jpg',
        description: {
            1: "Simulated an oscilloscope using C with OpenVG for signal processing and displaying the resulted waveforms",
            2: "Set up I2C and USB communication between PsoC and Raspberry Pi with wiringPi and libusb library respectively",
            3: "Resolved data transfer issues between the two hardware components such as data losses, voltage differences, wire connections, etc."
        },
        github: "git hub"
    },
    {
        id:4,
        name: "Slug Cross",
        image: '/pika.jpg',
        description: {
            1: "Created a simple road cross game utilizing a FPGA as the controller and configuration",
            2: "Designed the state machine for the scores and obstacles"
        },
        github: "git hub"
    }
];