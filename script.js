const modal = document.getElementById("modal");
const modalbutton = document.getElementById("modalbutton");
const modalcontent = document.getElementById("modalcontent");
const closebtn = document.getElementById("closebtn");
const modalimages = document.getElementById("modalimages");

console.log("hello world");
console.log("modal:", modal);
console.log("modalimages:", modalimages);
console.log("closebtn:", closebtn);


const projectImages = {
    project1: [
        "projectimages/projectimages1/puffshroomrender00.png",
        "projectimages/projectimages1/puffshroomrender03.png"
    ],
    project2: [
        "projectimages/projectimages2/shalnarkrender01fangleviewed01.png",
        "projectimages/projectimages2/shalnarkrender01frontviewnobg.png"
    ],
    project3: [
        "projectimages/projectimages3/feitanrender02frontview01.png",
        "projectimages/projectimages3/feitanrender02topview01.png"
    ],
    project4: [
        "projectimages/projectimages4/gloomyrenderplaceholder.png",
        "projectimages/projectimages4/gloomyrenderplaceholder01.png"
    ],
    project5: [
        "projectimages/projectimages5/yugiohcard renderp03.png",
        "projectimages/projectimages5/yugiohcard00render01.png"
    ],
    project6: [
        "projectimages/projectimages6/alien thingy .png",
        "projectimages/projectimages6/alien-man render.png"
    ]
}

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card =>{
    card.addEventListener("click", () => {
        const projectId = card.dataset.project;
        openModal(projectId);
    });
});

console.log("projectCards:", projectCards);



function openModal(projectId){
    console.log("clicked:", projectId);
    modalimages.innerHTML = "";


    
    projectImages[projectId].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        modalimages.appendChild(img);
    });

    modal.classList.add("open");
}



function closeModal() {
    modal.classList.remove("open");
}

closebtn.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
    if (e.target === modal) closeModal ()
});