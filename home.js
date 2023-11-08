
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

// var listContent = [
//     {
//         id: 1,
//         img: "../img/home/Layer16.png",
//         title: "Software Development",
//         content: "Blockchain & DLT ApplicationsMobile & Web Applications Solution Architecture Agile Delivery Management"
//     },
//     {
//         id: 2,
//         img: "../img/home/Layer17.png",
//         title: "Product Innovation",
//         content: "Product Ownership & Product Discovery & Research Micro & Macro Analysis Data Driven UX Design"
//     },
//     {
//         id: 3,
//         img: "../img/home/Layer18.png",
//         title: "Enterprise Consulting",
//         content: "Digital Transformation Blockchain Strategy Prototyping & Proof of Concepts Technology & Product Roadmaps"
//     },
//     {
//         id: 4,
//         img: "../img/home/Layer19.png",
//         title: "Infrastructure and Security",
//         content: "Turnkey Cloud Infrastructure DevOps as a Service Scalability, Reliability, Security"
//     },
//     {
//         id: 5,
//         img: "../img/home/Layer20.png",
//         title: "Economics",
//         content: "Game Theory & Incentive Design Network Effect Design Economic Modelling"
//     },
//     {
//         id: 6,
//         img: "../img/home/Layer21.png",
//         title: "Blockchain System Design",
//         content: "Trustless System Design Defining & Tokenising Value Public & Private Smart Contracts"
//     },
// ]
// for (let i = 0; i < listContent.length; i++) {
//     var view = `<div class="col-md-4">
//                 <div class="card" style="width: 100%; border: none;">
//                     <img src="${listContent[i].img}" class="card-img-top ps-3" style="width: 100px;" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${listContent[i].title}</h5>
//                         <p class="card-text">${listContent[i].content}</p>
//                     </div>
//                 </div>
//             </div>`;
//     $('.listContent').append(view)
// }