const groups = [
   {
      img: "https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/332853949_922095985674949_7063668939876754079_n.jpg?stp=c23.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=106&ccb=1-7&_nc_sid=70495d&_nc_eui2=AeGBUCZNSPykJzszk7VYWjDjQXxJX4KEMzlBfElfgoQzOR2AWwm80uiiLMEF2zdF8YcPBXqZAERmk0goIbbfR8NQ&_nc_ohc=l-_GIPvhZM0AX-9_TuA&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfALw8SCKipq3f9qGzmkwXGHyp-9khBaY7rAhX7S1hjPFQ&oe=6407DFBC",
      name: "Complete Web Development Batch 7"
   },
   {
      img: "https://scontent.fjsr1-1.fna.fbcdn.net/v/t1.6435-9/181527301_778783929692428_2909346539053106638_n.jpg?stp=c22.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=110&ccb=1-7&_nc_sid=70495d&_nc_eui2=AeHJF8pOXjEQn6bfS-eeb1NI1GFViQjoxCXUYVWJCOjEJQNvnHv1dD9YTxltBIl4AHdoJudh76YLvbmOABYoHKgj&_nc_ohc=SeieAnC-aNgAX_qqLn2&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfAsaXM5vCuSi8vtWNr6-i1pZ5MwuAOg8Ro2vey-6gAOiQ&oe=642A9AB9",
      name: "ফ্রি কোর্স ও ফ্রি পিডিএফ (Free Course & Free PDF)"
   },
   {
      img: "https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/329453129_6231623070230835_924888415103630431_n.jpg?stp=c23.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=103&ccb=1-7&_nc_sid=70495d&_nc_eui2=AeHojYXAZrCLsdowBfD-m25QHdj6hy4g9lMd2PqHLiD2U1hDkmdb5h7FnJnki6GzJnY6LMULwU_HQwF6Zp1RDo-A&_nc_ohc=HkxdBJci5XoAX_cfl9r&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfDMecqjzRqa2d6vtX2fealoCbgDz5XMk0FnZHxi9s3x6w&oe=640788A4",
      name: "Learn Freelancing With Fun (SoroBindu)"
   },
   {
      img: "../images/icon/groups-all.png",
      name: "See all groups"
   }

]
const groupsAll = document.getElementById("groups-all")
groups.map(group => {
   groupsAll.innerHTML += `
   <a href="#" class="flex items-center py-2 px-2 rounded-md hover:bg-[#E4E6E9] duration-500">
      <li class="list-none w-7 h-7">
         <img class="w-5 h-5 rounded-lg" src="${group.img}" alt="">
      </li>
      <li class="list-none">
         <p class="font-semibold text-base text-black">${group.name.length >= 14 ? group.name.slice(0, 20) : ""}...</p>
      </li>
   </a>
   `
});