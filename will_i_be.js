
require(['famous/core/Engine', 'famous/core/Surface',  'famous/core/Transform', 'famous/core/Modifier', 'famous/transitions/Easing' ], function(Engine, Surface, Transform, Modifier, Easing) {
    var mainContext = Engine.createContext();
    var surfaces = [];
    for (var i = 0; i <100; i++) {
        surfaces[i] = new Surface({
            size: [10, 10],
            content: 'Drop',
            properties: {
                color: 'white',
                textAlign: 'center',
                backgroundColor: '#FA5C4F'
            }
        });

        // Define Matrix transforms for start/end positions
        // and an easing curve to transition between them
        var startPos = Transform.translate(20 + (15 * i), 20, 0);
        var endPos = Transform.translate(150 + (2 * i), 200 + (2 * i), 0);
        var transform = new Modifier({ transform: startPos });
        var easeTransition = { duration: 500, curve: Easing.inOutCubic };

        bindClicks(surfaces[i], transform, startPos, endPos, easeTransition);
        


        mainContext.add(transform).add(surfaces[i]);
    }

    function bindClicks(surface, transform, startPos, endPos, easeTransition) {
        // Apply the transition on click and switch start/end
        surface.on("click", function (e) {
          transform.setTransform(endPos, easeTransition);
          startPos = [endPos, endPos = startPos][0];
        });
    }
});
