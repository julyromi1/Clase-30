class link {

    constructor (bodyA, bodyB){
        //let lastlink =bodyA.body.bodies.length-2;
        this.link = Constraint.create ({  //Constraint es para hacer la restricción de cuerpos (Un cuerpo limita a otro cuerpo).
            bodyA:bodyA.body.bodies [6],  //El cuerpo A (la ultima parte de la cuerda) se une a la ultima parte de la cuerda
            pointA: {x:0, y:0},
            bodyB:bodyB,
            pointB: {x:0, y:0},
            stiffness:0.01, //Stiffness es la regides permitida al cuerpo y el 0.01 es un valor sugerido de la libreriía de matter.
            lenght:-10 //Que tanto se puede extender el cuerpo (en este caso un poco arriba y a la izquierda).
        });
    World.add(engine.world,this.link);
    }



}