var worker = new Worker('worker.js');

window.addEventListener('mousemove',function(e){
    worker.postMessage ([e.clientX,e.clientY]);
});