
require(['famous/core/Engine', 'famous/core/Surface',  'famous/core/Transform', 'famous/core/Modifier', 'famous/transitions/Easing', 'famous/surfaces/ImageSurface' ], function(Engine, Surface, Transform, Modifier, Easing, ImageSurface) {
    var mainContext = Engine.createContext();
    var surfaces = [];
    // for (var i = 0; i <200; i++) {
    //     surfaces[i] = new Surface({
    //         size: [30, 30],
    //         properties: {
    //             color: 'white',
    //             textAlign: 'center',
    //             backgroundColor: '#FA5C4F'
    //         }
    //     });

    //     // Define Matrix transforms for start/end positions
    //     // and an easing curve to transition between them
    //     var startPos = Transform.translate(20 + (15 * i), 20, 0);
    //     var endPos = Transform.translate(20 + (15 * i), 400, 0);
    //     var transform = new Modifier({ transform: startPos });
    //     var easeTransition = { duration: 600, curve: Easing.inOutCubic };

    //     bindClicks(surfaces[i], transform, startPos, endPos, easeTransition, i * 40);
        


    //     mainContext.add(transform).add(surfaces[i]);
    // }

    // function bindClicks(surface, transform, startPos, endPos, easeTransition, delay) {
    //     setTimeout(function() {
    //     // Apply the transition on click and switch start/end
    //     setInterval(function() {
    //     //surface.on("click", function (e) {
    //       transform.setTransform(endPos, easeTransition);
    //       startPos = [endPos, endPos = startPos][0];
    //     //});
    //     }, 600);
    // }, delay);
    // }

    var image = new ImageSurface({
        size: [400, 400],
        properties: {
            color: 'white',
            textAlign: 'center',
         },
         content: 'sloth.jpg'
    });

    var translate = Transform.translate(200, 200, 0);
    var transformMove = new Modifier({transform: translate});

    var transformMRotate = new Modifier({transform: rotator});
    mainContext.add(transformMove).add(transformMRotate).add(image);

    var easeTransition = { duration: 600, curve: Easing.inOutCubic };

    var rotator = Transform.rotateY(700);

    transformMRotate.setTransform(rotator, easeTransition);


    

});
