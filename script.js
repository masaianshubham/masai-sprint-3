function jobSearch(){
    var xhr = new XMLHttpRequest()
    var description = document.getElementById('description').value
    var location  = document.getElementById('location').value
    var fullTime = document.getElementById('fulltime').value
    console.log(fullTime)


    var url = 'https://jobs.github.com/positions.json?' + 'description=' + description + '&location=' + location + '&full_time=' + fullTime
    console.log(url)
    xhr.open('GET', url)

    xhr.send()
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        // console.log(data.length)
        console.log(data)
        displayDetail(data)
    }

    function displayDetail(data){
        var res = document.getElementById("res")
        res.innerHTML = ""

        var count = data.length 
        
        var total = document.createElement('h3')
        total.innerText = count + " " + 'results found'
        total.style.marginLeft = "20%"
        total.style.marginBottom= "10px"

        // res.append(total)
        var ul = document.createElement('ul')
        ul.style.listStyle = "none"

        for(var i=0; i<data.length; i++){
            var li = document.createElement('li')
            li.style.border = "1px solid black"
            li.style.padding= "5px"
            li.style.marginLeft = "18%"
            li.style.width = "60%"
            li.style.background = "white"


            var title = document.createElement('h4')
            title.innerText = data[i].title
            title.style.marginBottom = "5px"

            var compan = document.createElement('p')
            compan.innerText = data[i].company + "-" + data[i].type
            compan.style.margin= '5px'

            var location = document.createElement('p')
            location.innerText = data[i].location
            location.style.margin = "5px"

            li.append(title, compan, location)
            ul.append(li)
            // console.log(new date(data[1].created_at) - new date(data[2].created_at))
        }
        res.append(total, ul)
    }


}

var search = document.getElementById('search')
search.addEventListener('click', jobSearch)