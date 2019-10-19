/*
පළකිරීමක් = post
තීරුවේ = profile/timeline
*/ 
var lang ={
  ownPostOnOwnTimeline:(header)=> header.emitter.name,
  ownPostOnOtrTimeline:(header)=> header.emitter.name +" විසින් "+ header.location.name +"ගේ තීරුවේ පලකරන ලදී",
  ownPostOnPage:(header)=> header.emitter.name +" විසින් "+ header.location.name +" පිටුවේ පලකරන ලදී",

  otrPostOnOwnTimeline:(header)=>  header.emitter.name +" විසින් "+ header.location.name +"ගේ පළකිරීමක් බෙදා ගන්නා ලදී.",
  otrPostOnOtrTimeline:(header)=> header.emitter.name +" විසින්   පළකිරීම ගෙන "+ header.location.name +"ගේ තීරුවේ පලකරන ලදී.",
  otrPostOnPage:(header)=> header.emitter.name +" විසින් පළකිරීම ගෙන "+ header.location.name +" පිටුවට එකතු කරන ලදී.",

  updateProfImg:(header)=>  header.emitter.name +"විසින් ප්‍රධාන රුපය යාවත්කාලින කරන ලදී.",
  updateBgfImg:(header)=> header.emitter.name +" විසින් පසුබිම් රුපය යාවත්කාලින කරන ලදී.",
  updateStatus:(header)=> header.emitter.name +" විසින් තේමාව යාවත්කාලින කරන ලදී.",

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
