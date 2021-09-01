let xmlContent = '';
 fetch("record.xml").then((response)=>{
   
    response.text().then((xml)=>{
        xmlContent = xml;
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let info = xmlDOM.querySelectorAll('row');
        console.log( info[0].children[0].innerHTML);
          const first = document.querySelector('.first'); 
          const firstpara =document.querySelector('.parafirst'); 
          const second = document.querySelector('.second'); 
          const secondpara =document.querySelector('.parasecond'); 

           first.src= info[0].children[0].innerHTML;
          first.alt =info[0].children[2].innerHTML;
          firstpara.innerHTML=info[0].children[1].innerHTML;
          second.src= info[1].children[0].innerHTML;
          second.alt =info[1].children[2].innerHTML;
          secondpara.innerHTML=info[1].children[1].innerHTML;


      

          
    })
 })

const button=document.getElementById('imbtn');

button.addEventListener("click",()=>{

    location.href = "https://www.google.com/";
  })
  const button2=document.getElementById('imbtn2');

button2.addEventListener("click",()=>{
 
    location.href = "https://www.google.com/";
  })