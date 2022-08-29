let categories = [];

function courseHTML(course, instructors){
    let li = `
    <li>
        <img src="${course["image"]}" class="courseImage">
            <figcaption class="courseTitle"><b>${course["title"]}</b></figcaption>
            <figcaption class="authors">${instructors}</figcaption>
            <figcaption class="rate"><img src="images/rate4.4.jpg"> (2,923)</figcaption>
            <figcaption class="price"><b>E£${course["price"]}</b></figcaption>
    </li>`;
    return li;
}

function sliderHTML(size){
    let slider = 
    `<div id = "${size}Slider" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-inner">`;
    return slider;
}

function sliderButtonHTML(size){
    let btn = `
    </div>
    <button class="carousel-control-prev" type="button"data-bs-target="#${size}Slider" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#${size}Slider" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>`;
    return btn;
}

// Function to render fetched courses onto the html web page course section.
function render(title){
    let data = {};
    for(let i = 0; i < categories.length; i++){
        if (categories[i]["title"] === title){
            data = categories[i];
            break;
        }
    }
    document.getElementById("header").innerText = data["header"];
    document.getElementById("description").innerText = data["description"];
    document.getElementById("exploreButton").innerHTML = `<b>Explore ${data["title"]}</b>`;
    document.getElementById("coursesList").innerHTML = "";   
    let courses = [];
    for(let i = 0; i < data["courses"].length; i++){
        let instructors = "";
        for(let j = 0; j < data["courses"][i]["instructors"].length; j++){
            instructors += data["courses"][i]["instructors"][j]["name"];
            instructors += j == data["courses"][i]["instructors"].length - 1 ? "" : ", ";
        }
        let li = courseHTML(data["courses"][i], instructors);
        courses.push(li);
    }
    let sizes = ["five", "four", "three", "two", "one"];
    for(let bp = 0; bp < sizes.length; bp++)
    {
        let size = sizes[bp];
        let slider = sliderHTML(size);
        for(let i = 0; i < courses.length;){
            if (i === 0){
                slider += `<div class="carousel-item active">`;
            }
            else{
                slider += `<div class="carousel-item">`;
            }
            let j = 5 - bp;
            while(j > 0 && i < courses.length){
                if (i == courses.length - 1)
                    console.log(courses[i] + "tmam");
                slider += courses[i];
                i++; j--;
            }
            while(j > 0){
                slider += `<li style = "display:none">/<li>`;
                j--;
            }
            slider += `</div>`
        }
        slider += sliderButtonHTML(size);
        document.getElementById("coursesList").innerHTML += slider;
    }
}

onload = function(){
    fetch("http://localhost:3000/categories")
    .then((response) => response.json())
    .then((data) => categories = data)
    .then((data) => render("Python"));
}

function searchCourses(){
    let need = document.forms[0]["search"].value;
    document.getElementById("coursesList").innerHTML = "";
    document.getElementById("header").innerText = "Search Result for " + need;
    need = need.toLowerCase();
    document.getElementById("description").innerText = ``;
    document.getElementById("exploreButton").style.visibility = "hidden";
    
    let courses = [];
    for(let i = 0; i < categories.length; i++){
        let data = categories[i];
        for(let j = 0; j < data["courses"].length; j++){
            let title = data["courses"][j]["title"];
            title = title.toLowerCase();
            if (title.includes(need) === false)
                continue;
            let instructors = "";
            for(let k = 0; k < data["courses"][j]["instructors"].length; k++){
                instructors += data["courses"][j]["instructors"][k]["name"];
                instructors += j == data["courses"][j]["instructors"].length - 1 ? "" : ", ";
            }
            let li = courseHTML(data["courses"][j], instructors);
            courses.push(li);
        }
    }
    document.getElementById("coursesList").innerHTML += courses;
    return true;
} 

document.getElementById("searchButton").onclick = function(e){
    e.preventDefault();
    searchCourses();
    return false;   
}

document.getElementById("python").onclick = () => render("Python");

document.getElementById("excel").onclick = () => render("Excel");

document.getElementById("web").onclick = () => render("Web Development");

document.getElementById("javascript").onclick = () => render("JavaScript");

document.getElementById("data-science").onclick = () => render("Data Science");

document.getElementById("aws").onclick = () => render("AWS Certification");

document.getElementById("drawing").onclick = () => render("Drawing");