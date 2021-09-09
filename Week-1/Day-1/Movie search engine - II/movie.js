async function searchMovie() {

    try {

        let movie_name = document.getElementById("name").value
        let upload_movie = document.getElementById("box")


        let res = await fetch(`http://www.omdbapi.com/?apikey=efd7bf97&t=${movie_name}`)
        //console.log(res)
        let data = await res.json();
 if (data.Response == "True") {

            let div = document.createElement("div")

            let img = document.createElement("img")
            img.src = data.Poster

            let h3 = document.createElement("h3")
            h3.innerHTML = `<span>Title: </span>${data.Title}`

            let p1 = document.createElement("p")
            p1.innerHTML = `<span>Released: </span>${data.Released}`

            let p2 = document.createElement("p")
            p2.innerHTML = `<span>Year: </span>${data.Year}`

            let p3 = document.createElement("p")
            p3.innerHTML = `<span>imdbRating: </span>${data.imdbRating}`

            let p4 = document.createElement("p")
            p4.innerHTML = `<span>Language: </span>${data.Language}`

            div.append(img)
            div.append(h3)
            div.append(p1)
            div.append(p2)
            div.append(p3)
            div.append(p4)
            upload_movie.append(div)

        } else {

            let div = document.createElement("div")

            let img = document.createElement("img")
            img.src = "https://unbxd.com/wp-content/uploads/2014/02/No-results-found-300x137.jpg"

            

            div.append(img)
            upload_movie.append(div)
        }

        document.getElementById("name").value = null

    } catch (error) {
        console.log('err:', error)
    }

}