let form = document.querySelectorAll('input')
let btn = document.querySelector(' form button')

btn.addEventListener('click',() => {
	for(n of form){
        if(n.value != ''){
    	    swal({title: `ok, thanks.`,})
        }
    }


})


