const ideas = {
    all: [
      { title: "Smart Traffic Light System using AI", difficulty: "intermediate" },
      { title: "Blockchain-based Voting System", difficulty: "advanced" },
      { title: "IoT-based Smart Agriculture System", difficulty: "intermediate" },
      { title: "AI-powered Resume Screening System", difficulty: "advanced" },
      { title: "Cybersecurity Threat Detection Tool", difficulty: "advanced" },
      { title: "Mobile Health Monitoring App", difficulty: "beginner" },
      { title: "Online Learning Management System", difficulty: "beginner" },
      { title: "VR Language Learning App", difficulty: "intermediate" }
    ],
    web: [
      { title: "Online Marketplace for Local Artisans", difficulty: "beginner" },
      { title: "Crowdsourced Fundraising Platform", difficulty: "intermediate" },
      { title: "Real-time Collaboration Tool for Students", difficulty: "advanced" },
      { title: "AI-powered Resume Builder Website", difficulty: "intermediate" }
    ],
    mobile: [
      { title: "Personal Finance Tracker App", difficulty: "beginner" },
      { title: "AR-based Virtual Home Design App", difficulty: "intermediate" },
      { title: "AI-powered Fitness Coach App", difficulty: "advanced" },
      { title: "Emergency Assistance App for Women’s Safety", difficulty: "beginner" }
    ],
    ai: [
      { title: "Chatbot for Customer Support", difficulty: "beginner" },
      { title: "AI-powered Fake News Detector", difficulty: "intermediate" },
      { title: "Automated Essay Grading System", difficulty: "advanced" },
      { title: "AI-based Medical Diagnosis System", difficulty: "advanced" }
    ],
    iot: [
      { title: "Smart Home Automation System", difficulty: "beginner" },
      { title: "IoT-based Water Quality Monitoring System", difficulty: "intermediate" },
      { title: "Smart Parking System using IoT", difficulty: "intermediate" },
      { title: "IoT-enabled Waste Management System", difficulty: "advanced" }
    ],
    security: [
      { title: "Biometric Authentication System", difficulty: "beginner" },
      { title: "AI-based Phishing Detection Tool", difficulty: "intermediate" },
      { title: "Encrypted Cloud Storage System", difficulty: "advanced" },
      { title: "Intrusion Detection System for Networks", difficulty: "advanced" }
    ]
  };
  
  let selectedDifficulty = "all";
  
  function setDifficulty(level) {
    selectedDifficulty = level;
  
    // Remove active class from all buttons
    document.querySelectorAll(".difficulty button").forEach(btn => {
      btn.classList.remove("active");
    });
  
    // Add active class to the clicked button
    event.target.classList.add("active");
  }
  
  function generateIdea() {
    let category = document.getElementById("category").value;
    let selectedIdeas = ideas[category] || ideas["all"];
  
    // Filter based on difficulty
    if (selectedDifficulty !== "all") {
      selectedIdeas = selectedIdeas.filter(idea => idea.difficulty === selectedDifficulty);
    }
  
    if (selectedIdeas.length === 0) {
      document.getElementById("idea").innerText = "No ideas found for the selected category and difficulty.";
      return;
    }
  
    let randomIdea = selectedIdeas[Math.floor(Math.random() * selectedIdeas.length)];
    document.getElementById("idea").innerText = randomIdea.title;
  }
  function logoutUser() {
    localStorage.removeItem("isValid")
    window.location.href = "login.html";
  }