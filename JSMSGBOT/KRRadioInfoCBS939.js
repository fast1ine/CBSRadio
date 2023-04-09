const scriptName = "KRRadioInfoCBS939";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  /*Provided By Fast1ine, Radio info Provided by Brodacast*/

  /*변수셋팅*/
  let hour= new Date();
  let url939 = "https://appradio.cbs.co.kr/40/infoCache_OnAirSongAll.asp";
  let htmlsource939 = Utils.getWebText(url939);
  let m3ulink939="aac.cbs.co.kr/mweb_cbs939/_definst_/cbs939.stream/playlist.m3u8";
  let progname939="";
  let proginfo939="";
  let songname939_trim="";
  let vibesearch="https://www.melon.com/search/total/index.htm?q=";
  switch939=0;
  /*현재시간 불러오기*/
  hour=hour.getHours();
  
  /*현재프로그램정보 알아내기*/
  if (hour==0 || hour==1){
    progname939="시작하는 밤 이지민입니다";
    proginfo939="오늘과 내일 사이, 당신을 위해 준비한 시와 음악";
  }
  else if (hour==2 || hour==3){
    progname939="김정원의 아름다운 당신에게 (재)";
    proginfo939="아름다운 클래식 선율에 흐르는 아침의 여유와 편안한 휴식";
  }
  else if (hour==4 || hour==5){
    progname939="이명희의 내가 매일 기쁘게 (JOU4U)";
    proginfo939="영혼을 울리는 찬양으로 크리스천의 아침을 여는 프로그램";
  }
  else if (hour==6){
    progname939="정민아의 Amazing grace (JOY4U)";
    proginfo939="찬양으로 여는 아침, 영성이 묻어나는 영어찬송 프로그램";
  }
  else if (hour==7 || hour==8){
    progname939="김용신의 그대와 여는 아침";
    proginfo939="오늘 하루도 당신 거에요. 친근한 팝과 어우러지는 기분 좋은 하루";
  }
  else if (hour==9 || hour==10){
    progname939="김정원의 아름다운 당신에게";
    proginfo939="아름다운 클래식 선율에 흐르는 아침의 여유와 편안한 휴식";
  }
  else if (hour==11){
    progname939="신지혜의 영화음악";
    proginfo939="당신이 상상하는 영화, 그리고 그 이상의 음악";
  }
  else if (hour==12 || hour==13){
    progname939="이수영의 12시에 만납시다";
    proginfo939="상큼톡톡! 정오의 비타민! 한낮의 피로를 씻어주는 가요 프로그램";
  }
  else if (hour==14 || hour==15){
    progname939="한동준의 FM POPS";
    proginfo939="보석처럼 빛나는 유쾌한 오후의 팝퍼레이드";
  }
  else if (hour==16 || hour==17){
    progname939="박승화의 가요속으로";
    proginfo939="삶의 진솔한 이야기와 아련한 추억을 떠올리게 하는 가요 프로그램";
  }
  else if (hour==18 || hour==19){
    progname939="배미향의 저녁스케치";
    progname939="노을 속에 흐르는 추억의 팝송. 감미로운 목소리에 물들어 보시죠";
  }
  else if (hour==20 || hour==21){
    progname939="김현주의 행복한 동행";
    proginfo939="지친 하루를 달래주는 퇴근길 피로회복제, 촉촉한 감성과 음악이 위로가 됩니다";
  }
  else if (hour==22 || hour==23){
    progname939="허윤희의 꿈과 음악사이에";
    proginfo939="음악이 별빛으로 물드는 시간, 감성충만한 음악과 위로";
  }
  /*곡DB 가공*/
  tagdel939 = htmlsource939.replace(/<[^>]+>/g, "");
  songname939 = tagdel939.split("\"TITLE\":\"")[1].replace("{", "").replace("}", "").split("\",\"ChangeTC\":")[0].replace("amp;", "");
  
  /*곡없음 문구*/
  if (songname939==""){
    switch939=0;
    songname939="현재 광고중이거나 DJ가 말하고 있습니다";
  }
  else{
    switch939=1;
  }
  songname939_trim=songname939.replace(/(\s*)/g,'').replace("LP ORIGINAL VER.", "");
  /*호출과 응답*/
  if (msg=="/cbs음악"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/CBS음악"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/cbs음악fm"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/cbs음악FM"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/CBS음악fm"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/CBS음악FM"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/라디오 cbs음악"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/라디오 CBS음악"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/라디오 cbs음악fm"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/라디오 cbs음악FM"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/라디오 CBS음악fm"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/라디오 CBS음악FM"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/cbs음악 라디오"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/CBS음악 라디오"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/cbs음악fm 라디오"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/cbs음악FM 라디오"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/CBS음악fm 라디오"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
  else if (msg=="/CBS음악FM 라디오"){
    if (switch939==0){
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939);
    }
    else {
        replier.reply("현재 진행중인 프로그램 제목: "+progname939+"\n"+"\n"+"현재 진행중인 프로그램 소개: "+proginfo939+"\n"+"\n"+"곡제목: "+songname939+"\n"+"\n"+"\n"+"라디오 청취하기: "+m3ulink939+"\n"+"\n"+"\n"+"\n"+"현재곡 네이버 바이브 검색: "+vibesearch+songname939_trim);
    }
  }
}