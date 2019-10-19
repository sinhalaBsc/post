/*
පළකිරීමක් = post
තීරුවේ = profile/timeline
*/ 

var headerFunc ={
   alink : (link,inner)=> "<a target='_blank'href=http://mutx.ru/"+link+">"+inner+"</a>" ,
   info : (txt)=>"<div class='post-header-info-middleware' > "+txt+" </div>",
   onelinkHeader : (header,text) => headerFunc.alink("id="+header.emitter.id,header.emitter.name)+ headerFunc.info(" විසින් ")+headerFunc.alink("post="+header.emitter.id,header.location.name)+headerFunc.info(text),
   twolinkHeader : (header,text) => headerFunc.alink("id="+header.emitter.id,header.emitter.name)+ headerFunc.info(" විසින් ")+headerFunc.alink("post="+header.source.id,"  පළකිරීම ")+headerFunc.info(" ගෙන ")+headerFunc.alink("post="+header.emitter.id,header.location.name)+headerFunc.info(text),
   updateHeader : (header,text) =>  headerFunc.alink("id="+header.emitter.id,header.emitter.name)+ headerFunc.info(text)
};

var lang ={
  ownPostOnOwnTimeline:(header)=> headerFunc.alink("id="+header.emitter.id, header.emitter.name),
  //ownPostOnOtrTimeline:(header)=> headerFunc.alink("post="+header.emitter.id,header.emitter.name)+ headerFunc.info(" විසින් ")+headerFunc.alink("post="+header.emitter.id,header.location.name)+headerFunc.info("  ගේ තීරුවේ පලකරන ලදී  "),
  ownPostOnOtrTimeline : (header)=> headerFunc.onelinkHeader(header, " ගේ තීරුවේ පලකරන ලදී"),
  //ownPostOnPage:(header)=> headerFunc.alink("post="+header.emitter.id,header.emitter.name)+ headerFunc.info(" විසින් ")+headerFunc.alink("post="+header.emitter.id,header.location.name)+headerFunc.info(" පිටුවේ පලකරන ලදී"),
  ownPostOnPage : (header)=> headerFunc.onelinkHeader(header, " පිටුවේ පලකරන ලදී "),

  //otrPostOnOwnTimeline:(header)=>  header.emitter.name +" විසින් "+ header.location.name +"ගේ පළකිරීමක් බෙදා ගන්නා ලදී.",
  otrPostOnOwnTimeline : (header)=> headerFunc.onelinkHeader(header," ගේ පළකිරීමක් බෙදා ගන්නා ලදී."),
  //otrPostOnOtrTimeline:(header)=> header.emitter.name +" විසින්   පළකිරීම ගෙන "+ header.location.name +"ගේ තීරුවේ පලකරන ලදී.",
  otrPostOnOtrTimeline:(header)=>headerFunc.twolinkHeader(header,"ගේ තීරුවේ පලකරන ලදී."),
  //otrPostOnPage:(header)=> header.emitter.name +" විසින් පළකිරීම ගෙන "+ header.location.name +" පිටුවට එකතු කරන ලදී.",
  otrPostOnPage:(header)=>headerFunc.twolinkHeader(header," පිටුවට එකතු කරන ලදී."),

  updateProfImg:(header)=> headerFunc.updateHeader(header," විසින් ප්‍රධාන රුපය යාවත්කාලින කරන ලදී." ), 
  updateBgfImg:(header)=> headerFunc.updateHeader(header," විසින් පසුබිම් රුපය යාවත්කාලින කරන ලදී." ),
  updateStatus:(header)=> headerFunc.updateHeader(header," විසින් තේමාව යාවත්කාලින කරන ලදී." ), 

};

var header={
  emitter:{ 
    id:1,   
    name:"සමාධි ලක්සහන්",
    profImg:"newuser.png",
    state:0 
  },
  source:{ // original source
    id:1,   
    name:"සමාධි ලක්සහන්",
    profImg:"newuser.png",
    state:0
  },
  location:{ // where did this emit
    id:1,   
    name:"ලංකා",
    profImg:"newuser.png",
    state:0
  }
};

console.log(lang.otrPostOnPage(header));
//console.log(lang.tt(header));
/*
console.log(lang.ownPostOnOwnTimeline(header));
console.log(lang.ownPostOnOtrTimeline(header));
console.log(lang.ownPostOnPage(header));
*/

/*
console.log(lang.otrPostOnOwnTimeline(header));
console.log(lang.otrPostOnOtrTimeline(header));
console.log(lang.otrPostOnPage(header));
*/

/*
console.log(lang.updateProfImg(header));
console.log(lang.updateBgfImg(header));
console.log(lang.updateStatus(header));
*/






