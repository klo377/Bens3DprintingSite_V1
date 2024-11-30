import { Tutorial } from '../types/tutorial';

export const tutorials: Tutorial[] = [
  {
    id: "getting-started-bambu-p1s",
    title: "Getting Started with Bambu P1S",
    difficulty: "Beginner",
    duration: "30 minutes",
    description: "Complete guide to setting up your Bambu P1S printer for the first time",
    topics: ["Unboxing", "Initial Setup", "First Print"],
    free: true,
    videoUrl: "https://www.youtube.com/embed/example1",
    requirements: [
      "Bambu P1S Printer",
      "PLA Filament",
      "Clean build plate",
      "Basic tools (included with printer)"
    ],
    steps: [
      {
        number: 1,
        title: "Unboxing and Assembly",
        description: "Carefully remove all components from the box and verify all parts are present. Remove all packaging materials and protective films.",
        tips: [
          "Keep the packaging for future transport",
          "Check for any shipping damage",
          "Document any missing parts"
        ]
      },
      {
        number: 2,
        title: "Initial Power Up",
        description: "Connect the power cable and turn on the printer. The touchscreen should light up and guide you through the initial setup process.",
        tips: [
          "Ensure stable power source",
          "Follow on-screen instructions",
          "Don't skip calibration steps"
        ]
      },
      {
        number: 3,
        title: "Bed Leveling",
        description: "Run the automatic bed leveling sequence. This will create a mesh of your build plate and ensure proper first layer adhesion.",
        tips: [
          "Clean build plate before leveling",
          "Wait for plate to reach room temperature",
          "Follow the on-screen prompts carefully"
        ]
      },
      {
        number: 4,
        title: "Loading Filament",
        description: "Insert the filament into the extruder and use the touchscreen to load it. Watch for filament to extrude from the nozzle.",
        tips: [
          "Cut filament end at 45° angle",
          "Ensure filament is dry",
          "Watch for smooth extrusion"
        ]
      },
      {
        number: 5,
        title: "First Test Print",
        description: "Select one of the pre-loaded test files and start your first print. Monitor the first few layers carefully.",
        tips: [
          "Use included test file",
          "Watch first layer adhesion",
          "Monitor entire first print"
        ]
      }
    ]
  }
];