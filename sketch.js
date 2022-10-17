function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER)
  background(0);//背景顏色
  noFill()//不充滿顏色
  stroke(255)//框線

  for(var i=0;i<width;i++)
 { 
  ellipse(25+50*i,25,50)//座標，產生一個直徑50的圓
  rect(25+50*i,25,50)
  ellipse(50+50*i,50,25)//右下小圓
}



}
