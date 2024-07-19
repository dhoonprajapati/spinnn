let prticles;
function setup() {
  
  createCanvas(500, 500, WEBGL); 
  particles = buildGeometry(createParticles);
}
  function draw() {
  background(60,34,65);
    
     orbitControl(400,20,10);
    lights(18,99,37);
    
     noStroke();
  fill(25,55.25);
model(particles);
    let bbox = particles.calculateBoundingBox();
    translate(bbox.offset.x, bbox.offset.y, bbox.offset.z);
     stroke(255);
  noFill();
    
     box(bbox.size.x, bbox.size.y, bbox.size.z);
}

function createParticles() {
  for (let i = 0; i < 10; i += 1) {
    let x = randomGaussian(0, 15);
    let y = randomGaussian(0, 15);
    let z = randomGaussian(0, 15);
     push();
   
    translate(x, y, z);
   
    sphere(3);
    pop();
  }
}