window.addEventListener('load',()=>{

    const x=(new URL(document.location)).searchParams;
    const firstname=x.get('firstname');
    const lastname=x.get('lastname');
    document.getElementById('res-firstname').innerHTML=firstname;
    document.getElementById('res-lastname').innerHTML=lastname;

})

