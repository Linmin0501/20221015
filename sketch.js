function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255,235,205); //背景黑色
  noFill() //不要充滿顏色
  rectMode(CENTER)

  for(var j=0;j<(height/50);j++){
    for(var i=0;i<(width/50);i++){
      stroke(0,51,255,120)
      rect((25+50*i),(25+50*j),50+mouseX/20,50+mouseY/10) //在座標(25,25)畫一個邊長50的方形
      stroke("#E680FF")
      triangle((25+50*i),(0+50*j-mouseX/20),(0+50*i-mouseX/20),(50+50*j),(50+50*i+mouseX/20),(50+50*j)) //讓三角形各個頂點隨著滑鼠X座標的移動，有趨離中心的感覺，如三角形最上面的頂點，就讓它隨著滑鼠移動，越來越往上，形成離開三角形中心點的感覺。
      stroke("#FFA07A")
      triangle((0+50*i-mouseX/20),(0+50*j),(50+50*i+mouseX/20),(0+50*j),(25+50*i),(50+50*j+mouseX/20)) //同上
    }
  }
}