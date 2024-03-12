// gsap.to(".box",{
//     x:700,
//     y:400,
//     duration: 3,
//     backgroundColor:"red",
//     rotate:360,
//     scale:0.5
// })
// var tl = gsap.timeline()

// tl.to("h1",{
//     x:400,
//     duration:2

// })
// tl.to("h2",{
//     x:450,
//     duration:2
// })
var tl = gsap.timeline()
tl.from(".main-part img,.main-part .second a,.main-part .third h1,.main-part .third button",{
    y:-100,
    opacity:0,
    stagger:1,
    // repeat:Infinity
})
tl.from(".headings h1",{
    y:-200,
    opacity:0,
    stagger:1,
    // repeat:Infinity
})
tl.from(".headings img",{
    scale:0,
    y:-200,
    duration:1

})
tl.from(".headings img2",{
    scale:0,
    y:200,
    duration:1.5

})
tl.from("h5",{
    scale:0,
    opacity:0
})
tl.to("h5",{
    y:30,
    yoyo:true,
    repeat:Infinity,
    duration:0.5
})

    


    



