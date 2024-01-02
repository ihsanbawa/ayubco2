// const swup = new Swup();
// swup.use(new SwupPreloadPlugin());
// swup.use(new SwupHeadPlugin());
// swup.use(new SwupBodyClassPlugin());
// swup.use(new SwupScrollPlugin());

// // $(window).scroll(function() {
// //     var scroll = $(window).scrollTop();
// //     var s1 = 3;
// //     var s2 = 1.5
// //     $("#1 img").css({
// //         transform: 'translate3d(0, +'+(scroll*s1/100)+'%, 0) scale('+(100 - scroll*s2/100)/100+')'
// //     });
// // });

// var timeout;
// window.addEventListener('scroll', function ( event ) {
// 	if (timeout) {
// 		window.cancelAnimationFrame(timeout);
// 	}
// 	timeout = window.requestAnimationFrame(function () {
// 		var scroll = $(window).scrollTop();
//         var s1 = 3;
//         var s2 = 1.5
//         $("#1 img").css({
//             transform: 'translate3d(0, +'+(scroll*s1/100)+'%, 0) scale('+(100 - scroll*s2/100)/100+')'
//         });

// 	});

// }, false);



// // var request = new XMLHttpRequest()

// // request.open('GET', 'https://sheet.best/api/sheet/deecc55a-3763-46a7-bb0c-230a710d3606', true)
// // request.onload = function() {
// //   var data = JSON.parse(this.response)
// //   if (request.status >= 200 && request.status < 400) {
// //     document.getElementById('1').innerHTML = data[0].About;
// //     document.getElementById('2').innerHTML = data[0].Projects;
// //   } else {
// //     console.log('JSON API error')
// //   }
// // }

// // request.send()

// pagemap(document.querySelector('#map'), {
//     viewport: null,
//     // styles: {
//     //     'header,footer,section,article': rgba(0,0,0,0.08),
//     //     'h1,a': rgba(0,0,0,0.10),
//     //     'h2,h3,h4': rgba(0,0,0,0.08)
//     // },
//     // back: rgba(0,0,0,0.02),
//     // view: rgba(0,0,0,0.05),
//     // drag: rgba(0,0,0,0.10),
//     interval: null
// });