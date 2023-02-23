const boxAllComments = document.getElementById("allComments");

const sec = document.getElementById("sectionMainDiv")
const btnNav = document.getElementById("navBtn")
const title = document.getElementById("titleTop")
let dark = false

const cardMaker = (user, comment, date, like, dislike, reply) => {

   let cardModel = `<div class="px-10 cardd">
<div class="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500 carddMain">

    <div class="mt-4">
        <p class="mt-4 text-md text-gray-600">${comment}</p>
        <div class="flex justify-between items-center">
            <div class="mt-4 flex items-center space-x-4 py-6">

                <div class="text-sm font-semibold">
                    <div>${user} <span class="font-normal">${moment(date).fromNow()}</span></div>
                    <div class="like"><span><i class="fa-solid fa-thumbs-up"></i> ${like ? like : 0}</span><span><i class="fa-regular fa-thumbs-down"></i> ${dislike ? dislike : 0}</span><span><i class="fa-solid fa-reply"></i></span></span></div>

                </div>
            </div>
            
        </div>
            ${reply.map(res =>
                `<div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                <div class="relative flex gap-4">
                    <div class="flex flex-col w-full">
                        <div class="flex flex-row justify-between">
                            <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">${res.text}</p>
                            <a class="text-gray-500 text-xl" href="#"><i class="fa-solid fa-trash"></i></a>
                        </div>
                        <p class="text-gray-400 text-sm">${moment(date).fromNow()}</p>
                    </div>
                </div>
                <p class="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Maxime quisquam vero adipisci beatae voluptas dolor ame.</p>
            </div>`
            )}
        </div>
    </div>
</div>`



    
    boxAllComments.innerHTML += cardModel;
};
const comments = () => {
    console.log("okeye");
    document.getElementById("myModal").showModal();
    $.ajax({
        type: "GET",
        url: "https://lmzmj.wiremockapi.cloud/data/comments",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With",
        },

        success: (res) => {
            console.log("Data is coming...");
            const result = JSON.parse(res);
            console.log(result);
            result.map((item) => {
                cardMaker(
                    item.user,
                    item.comment,
                    item.create_at,
                    item.likes,
                    item.dis_like,
                    item.replies
                );
            });
        },

        error: (err) => {
            console.log("Fk");
            console.log(err);
        },
    });

    // fetch("https://brity.ir/comments/8", {
    //     method : "GET"
    // })
    //     .then((res) => res.json())
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((err) => console.log(err));
};



const darkMode = () => {
    dark = !dark
    if (dark) {
        document.body.style.backgroundColor = "black";
        sec.style.backgroundColor = "black"
        sec.style.color = "white"
        title.style.color = "black"
    } else {
        document.body.style.backgroundColor = "white";
        sec.style.backgroundColor = "white"
        sec.style.color = "black"
        title.style.color = "white"
    }
}