export function createToken() {
    const clientId = "aa93d4dc547f426c888a2e2a2151af9e";
    const ClientSecret = "447bb8233e9f4f9493bcca636ad31f39";

    return fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(clientId + ":" + ClientSecret)
        },
        body: "grant_type=client_credentials"
    })
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem('token', `Bearer ${data.access_token}`)
            return `Bearer ${data.access_token}`
        })
}



export function getToken() {
    return new Promise(resolve => {
        let token = sessionStorage.getItem("token");
        if (!token || token === undefined) {
            resolve(token = createToken())
        }
        resolve(token)
    })

}

export function fetchToJSON(url, mytoken) {
    return fetch(url, { headers: { "Authorization": mytoken } })
        .then(response => {
            if (!response.ok) { throw response }
            return response;
        })
        .then(response => response.json())
        .catch(result => {
            console.log("from Catch")
            if (result.status === 401) {
                console.log("from Catch in if")
                console.log("token expired! Reloading page!")
                console.log("Wait for it...!")
                createToken()
                    .then(TOKEN => {
                        console.log(TOKEN)
                        fetchToJSON(url, TOKEN)
                    })


            } else {

                console.log("from Catch in else")
                console.log(result)
            }
            return result.json();
        })
}