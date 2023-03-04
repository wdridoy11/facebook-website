const features = [
   {
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IDuJShpKhav.png?_nc_eui2=AeH_FAzpY7yWw16XzRllTI9loK9i4__oYxegr2Lj_-hjFyCLMYexRTqZtR0Hn7qex_4aI_OnkuonHE7XvQ4PTTH8",
      name: "Friends"
   },
   {
      img: "../images/icon/watch.png",
      name: "Watch"
   },
   {
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/rTVX_wf2IPb.png?_nc_eui2=AeEcBmSnmBAzsEQ8RlbUoqZZwsujTyll0hbCy6NPKWXSFtqPsn7LDHUf7iDxTSmHisth8lXDLeuyrXtRNOgzguor",
      name: "Saved"
   },
   {
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/dCdhgcZwziT.png?_nc_eui2=AeFpnyaJo4JTFsQGCBaXqDudofEEMBSWRQih8QQwFJZFCIFea0J6tA2HS5mmj1WM1O4_lxqvhWzMUDwM8RCe13z8",
      name: "Most Recent"
   },
   {
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mvqbBw3d0Zv.png?_nc_eui2=AeHWSvIf4M9T6rCMt-aklTKF6oGu_ih-Wxbqga7-KH5bFqPzrG3JLH6d0XD8MK8HWNI2j01g0Pk7n8T6LcysEZln",
      name: "Memories"
   },
   {
      img: "../images/icon/see-all.png",
      name: "See all"
   }
]
const featuresAll = document.getElementById("features-all")
features.map(feature => {
   featuresAll.innerHTML += `
   <a href="#" class="flex items-center py-2 px-2 rounded-md hover:bg-[#E4E6E9] duration-500">
      <li class="list-none w-7 h-7">
         <img class="w-5 h-5 rounded-full" src="${feature.img}" alt="">
      </li>
      <li class="list-none">
         <p class="font-semibold text-base text-black">${feature.name}</p>
      </li>
   </a>
   `
});