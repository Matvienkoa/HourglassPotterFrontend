//=======================Déclaration token pour headers requêtes==========================//
const token = localStorage.getItem("token");
const jwt = {
    headers: {
        "Authorization": "Bearer " + token,
    },
};

//=======================Affichage des points sur parchemins==========================//
const serpentardPoints = fetch(`https://test-wc.fr/api/maisons/Serpentard`, jwt);
const serdaiglePoints = fetch(`https://test-wc.fr/api/maisons/Serdaigle`, jwt);
const gryffondorPoints = fetch(`https://test-wc.fr/api/maisons/Gryffondor`, jwt);
const poufsouflePoints = fetch(`https://test-wc.fr/api/maisons/Poufsoufle`, jwt);

const avaSerpentard = document.getElementById("avancementSerpentard");
const avaSerdaigle = document.getElementById("avancementSerdaigle");
const avaGryffondor = document.getElementById("avancementGryffondor");
const avaPoufsoufle = document.getElementById("avancementPoufsoufle");

const pointsSerpentard = document.getElementById("serpentardPoints")
const pointsSerdaigle = document.getElementById("serdaiglePoints")
const pointsGryffondor = document.getElementById("gryffondorPoints")
const pointsPoufsoufle = document.getElementById("poufsouflePoints")

//=======================Affichage des points sur parchemins==========================//
// Serpentar
serpentardPoints.catch(() => {alert(error)})
    .then((res) => res.json())
    .then((serpentard) => {
         document.getElementById("serpentardPoints").textContent = serpentard.points;
        avaSerpentard.value = serpentard.points;
    });

// Serdaigle
serdaiglePoints.catch(() => {alert(error)})
    .then((res) => res.json())
    .then((serdaigle) => {
        document.getElementById("serdaiglePoints").textContent = serdaigle.points;
        avaSerdaigle.value = serdaigle.points;
    });

// Gryffondor
gryffondorPoints.catch(() => {alert(error)})
    .then((res) => res.json())
    .then((gryffondor) => {
        document.getElementById("gryffondorPoints").textContent = gryffondor.points;
        avaGryffondor.value = gryffondor.points;
    });

// Poufsoufle
poufsouflePoints.catch(() => {alert(error)})
    .then((res) => res.json())
    .then((poufsoufle) => {
        document.getElementById("poufsouflePoints").textContent = poufsoufle.points;
        avaPoufsoufle.value = poufsoufle.points;
    });

//==================================== Show / Hide Confirm Reset ===============================//
function showConfirm() {
    const div = document.getElementById("confirmReset");
    div.classList.replace("confirmResetHidden", "confirmResetVisible");
}

function hideConfirm() {
    const div = document.getElementById("confirmReset");
    div.classList.replace("confirmResetVisible", "confirmResetHidden");
}

//==================================== Reset Points =====================================//
// All Points
function resetPoints() {
    resetSerpentardPoints();
    resetSerdaiglePoints();
    resetGryffondorPoints();
    resetPoufsouflePoints();
    window.alert("Les points des 4 Maisons ont été réinitialisés à 0")
    window.location.reload(true);
}

// Serpentard
function resetSerpentardPoints() {
    const serpentardPoints = {
        name: "Serpentard"
    }
    const myInit = {
        method: "PUT",
        body: JSON.stringify(serpentardPoints),
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch(`https://test-wc.fr/api/maisons/Serpentard/resetPoints`, myInit)
    .catch(() => {alert(error)})
}

// Serdaigle
function resetSerdaiglePoints() {
    const serdaiglePoints = {
        name: "Serdaigle"
    }
    const myInit = {
        method: "PUT",
        body: JSON.stringify(serdaiglePoints),
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch(`https://test-wc.fr/api/maisons/Serdaigle/resetPoints`, myInit)
    .catch(() => {alert(error)})
}

// Gryffondor
function resetGryffondorPoints() {
    const gryffondorPoints = {
        name: "Gryffondor"
    }
    const myInit = {
        method: "PUT",
        body: JSON.stringify(gryffondorPoints),
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch(`https://test-wc.fr/api/maisons/Gryffondor/resetPoints`, myInit)
    .catch(() => {alert(error)})
}

// Poufsoufle
function resetPoufsouflePoints() {
    const poufsouflePoints = {
        name: "Poufsoufle"
    }
    const myInit = {
        method: "PUT",
        body: JSON.stringify(poufsouflePoints),
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch(`https://test-wc.fr/api/maisons/Poufsoufle/resetPoints`, myInit)
    .catch(() => {alert(error)})
}


//==================================== Animation Remplissage Sabliers ====================================//
function modifSerpentard(val) {
    if((avaSerpentard.value+val)<=avaSerpentard.max && (avaSerpentard.value+val)>0) {
        avaSerpentard.value += val;
    }
}

function modifSerdaigle(val) {
    if((avaSerdaigle.value+val)<=avaSerdaigle.max && (avaSerdaigle.value+val)>0) {
        avaSerdaigle.value += val;
    }
}

function modifGryffondor(val) {
    if((avaGryffondor.value+val)<=avaGryffondor.max && (avaGryffondor.value+val)>0) {
        avaGryffondor.value += val;
    }
}

function modifPoufsoufle(val) {
    if((avaPoufsoufle.value+val)<=avaPoufsoufle.max && (avaPoufsoufle.value+val)>0) {
        avaPoufsoufle.value += val;
    }
}

//==================================== Logout ====================================//
function logOut() {
    localStorage.removeItem("token");
    window.location.href = `https://matvienkoa.github.io/HourglassPotterFrontend`
}

//============================== Gestion des Points ================================//
//===========================Serpentard===========================//
/*//===========================Boutons===========================//
// Ajout d'un point à Serpentard
document.getElementById("serpentardplus1").addEventListener("click", (e) => {
    e.preventDefault();
    serpentardPlus1()
})

function serpentardPlus1() {
    const point = {
        points: 1,
        name: "Serpentard"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Serpentard/givePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}

// Ajout de 10 points à Serpentard
document.getElementById("serpentardplus10").addEventListener("click", (e) => {
    e.preventDefault();
    serpentardPlus10()
})

function serpentardPlus10() {
    const point = {
        points: 10,
        name: "Serpentard"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Serpentard/givePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}

// Retrait d'un point à Serpentard
document.getElementById("serpentardminus1").addEventListener("click", (e) => {
    e.preventDefault();
    serpentardMinus1()
})

function serpentardMinus1() {
    const point = {
        points: 1,
        name: "Serpentard"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Serpentard/losePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}

// Retrait de 10 Points à Serpentard
document.getElementById("serpentardminus10").addEventListener("click", (e) => {
    e.preventDefault();
    serpentardMinus10()
})

function serpentardMinus10() {
    const point = {
        points: 10,
        name: "Serpentard"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Serpentard/losePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}*/

//==============================Input==============================//
function sendpointstoSerpentard() {
    const sendpoints = {
        points: document.getElementById("numberpointsSerpentard").value
    };

    const myInit = {
        method: "PUT",
        body: JSON.stringify(sendpoints),
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Serpentard/givePoints', myInit)
    .catch(() => {alert(error)})
    window.alert("vos points ont été ajoutés")
    document.getElementById("numberpointsSerpentard").value = ""
    window.location.reload(true);
}


//=====================================Serdaigle================================//
/*//===========================Boutons===========================//
// Ajout d'un point à Serdaigle
document.getElementById("serdaigleplus1").addEventListener("click", (e) => {
    e.preventDefault();
    serdaiglePlus1()
})

function serdaiglePlus1() {
    const point = {
        points: 1,
        name: "Serdaigle"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Serdaigle/givePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}

// Ajout de 10 points à Serdaigle
document.getElementById("serdaigleplus10").addEventListener("click", (e) => {
    e.preventDefault();
    serdaiglePlus10()
})

function serdaiglePlus10() {
    const point = {
        points: 10,
        name: "Serdaigle"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Serdaigle/givePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}

// Retrait d'un point à Serdaigle
document.getElementById("serdaigleminus1").addEventListener("click", (e) => {
    e.preventDefault();
    serdaigleMinus1()
})

function serdaigleMinus1() {
    const point = {
        points: 1,
        name: "Serdaigle"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Serdaigle/losePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}

// Retrait de 10 Points à Serdaigle
document.getElementById("serdaigleminus10").addEventListener("click", (e) => {
    e.preventDefault();
    serdaigleMinus10()
})

function serdaigleMinus10() {
    const point = {
        points: 10,
        name: "Serdaigle"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Serdaigle/losePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}*/

//==============================Input==============================//
function sendpointstoSerdaigle() {
    const sendpoints = {
        points: document.getElementById("numberpointsSerdaigle").value,
        name: "Serdaigle"
    };
    
    const myInit = {
        method: "PUT",
        body: JSON.stringify(sendpoints),
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Serdaigle/givePoints', myInit)
    .catch(() => {alert(error)})
    window.alert("vos points ont été ajoutés")
    document.getElementById("numberpointsSerdaigle").value = ""
    window.location.reload(true);
}


//=====================================Gryffondor================================//
/*//===========================Boutons===========================//
// Ajout d'un point à Gryffondor
document.getElementById("gryffondorplus1").addEventListener("click", (e) => {
    e.preventDefault();
    gryffondorPlus1()
})

function gryffondorPlus1() {
    const point = {
        points: 1,
        name: "Gryffondor"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Gryffondor/givePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}

// Ajout de 10 points à Gryffondor
document.getElementById("gryffondorplus10").addEventListener("click", (e) => {
    e.preventDefault();
    gryffondorPlus10()
})

function gryffondorPlus10() {
    const point = {
        points: 10,
        name: "Gryffondor"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Gryffondor/givePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}

// Retrait d'un point à Gryffondor
document.getElementById("gryffondorminus1").addEventListener("click", (e) => {
    e.preventDefault();
    gryffondorMinus1()
})

function gryffondorMinus1() {
    const point = {
        points: 1,
        name: "Gryffondor"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Gryffondor/losePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}

// Retrait de 10 Points à Gryffondor
document.getElementById("gryffondorminus10").addEventListener("click", (e) => {
    e.preventDefault();
    gryffondorMinus10()
})

function gryffondorMinus10() {
    const point = {
        points: 10,
        name: "Gryffondor"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Gryffondor/losePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}*/

//==============================Input==============================//
function sendpointstoGryffondor() {
    const sendpoints = {
        points: document.getElementById("numberpointsGryffondor").value,
        name: "Gryffondor"
    };
    
    const myInit = {
        method: "PUT",
        body: JSON.stringify(sendpoints),
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Gryffondor/givePoints', myInit)
    .catch(() => {alert(error)})
    window.alert("vos points ont été ajoutés")
    document.getElementById("numberpointsGryffondor").value = ""
    window.location.reload(true);
}


//=====================================Poufsoufle================================//
/*//===========================Boutons===========================//
// Ajout d'un point à Poufsoufle
document.getElementById("poufsoufleplus1").addEventListener("click", (e) => {
    e.preventDefault();
    poufsouflePlus1()
})

function poufsouflePlus1() {
    const point = {
        points: 1,
        name: "Poufsoufle"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Poufsoufle/givePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}

// Ajout de 10 points à Poufsoufle
document.getElementById("poufsoufleplus10").addEventListener("click", (e) => {
    e.preventDefault();
    poufsouflePlus10()
})

function poufsouflePlus10() {
    const point = {
        points: 10,
        name: "Poufsoufle"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Poufsoufle/givePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}

// Retrait d'un point à Poufsoufle
document.getElementById("poufsoufleminus1").addEventListener("click", (e) => {
    e.preventDefault();
    poufsoufleMinus1()
})

function poufsoufleMinus1() {
    const point = {
        points: 1,
        name: "Poufsoufle"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Poufsoufle/losePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}

// Retrait de 10 Points à Poufsoufle
document.getElementById("poufsoufleminus10").addEventListener("click", (e) => {
    e.preventDefault();
    poufsoufleMinus10()
})

function poufsoufleMinus10() {
    const point = {
        points: 10,
        name: "Poufsoufle"
    };
    const myInit = {
        method: "PUT",
        body: JSON.stringify(point),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Poufsoufle/losePoints', myInit)
    .catch(() => {alert(error)})
    window.location.reload(true);
}*/

//==============================Input==============================//
function sendpointstoPoufsoufle() {
    const sendpoints = {
        points: document.getElementById("numberpointsPoufsoufle").value,
        name: "Poufsoufle"
    };
    
    const myInit = {
        method: "PUT",
        body: JSON.stringify(sendpoints),
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json; charset=utf-8"
        },
    }
    fetch('https://test-wc.fr/api/maisons/Poufsoufle/givePoints', myInit)
    .catch(() => {alert(error)})
    window.alert("vos points ont été ajoutés")
    document.getElementById("numberpointsPoufsoufle").value = ""
    window.location.reload(true);
}

//==============================Show Winner==============================//
function hideWinner() {
    window.location.reload(true);
}

function showWinner() {
    const serpPoints = parseInt(document.getElementById("serpentardPoints").textContent);
    console.log(serpPoints);
    const serdPoints = parseInt(document.getElementById("serdaiglePoints").textContent);
    console.log(serdPoints);
    const gryPoints = parseInt(document.getElementById("gryffondorPoints").textContent);
    console.log(gryPoints);
    const pouPoints = parseInt(document.getElementById("poufsouflePoints").textContent);
    console.log(pouPoints);

    // const serpPoints = 14;
    // const serdPoints = 20;
    // const gryPoints = 23;
    // const pouPoints = 45;


    if(serpPoints > serdPoints && serpPoints > gryPoints && serpPoints > pouPoints) {
        const winnerBox = document.createElement('div');
        winnerBox.className = "winner-serp";
        winnerBox.innerHTML = 
        "<span id='winner-close-serp' onclick='hideWinner();'>X</span>" + 
        "<h1 id='title-serp'>Félicitation</h1>" +
        "<div id='img-box'><img src='images/serpentard.png' id='serp-logo' /><p>Gagne avec<br> <span id='span-points'>" + serpPoints + "</span> points</p></div>";
        document.getElementById("pagePoints").appendChild(winnerBox);
    }
    if(serdPoints > serpPoints && serdPoints > gryPoints && serdPoints > pouPoints) {
        const winnerBox = document.createElement('div');
        winnerBox.className = "winner-serd";
        winnerBox.innerHTML = 
        "<span id='winner-close-serd' onclick='hideWinner();'>X</span>" + 
        "<h1 id='title-serd'>Félicitation</h1>" +
        "<div id='img-box'><img src='images/serdaigle.png' id='serd-logo' /><p>Gagne avec<br> <span id='span-points'>" + serdPoints + "</span> points</p></div>";
        document.getElementById("pagePoints").appendChild(winnerBox);
    }
    if(gryPoints > serpPoints && gryPoints > serdPoints && gryPoints > pouPoints) {
        const winnerBox = document.createElement('div');
        winnerBox.className = "winner-gry";
        winnerBox.innerHTML = 
        "<span id='winner-close-gry' onclick='hideWinner();'>X</span>" + 
        "<h1 id='title-gry'>Félicitation</h1>" +
        "<div id='img-box'><img src='images/gryffondor.png' id='gry-logo' /><p>Gagne avec<br> <span id='span-points'>" + gryPoints + "</span> points</p></div>";
        document.getElementById("pagePoints").appendChild(winnerBox);
    }
    if(pouPoints > serpPoints && pouPoints > serdPoints && pouPoints > gryPoints) {
        const winnerBox = document.createElement('div');
        winnerBox.className = "winner-pou";
        winnerBox.innerHTML = 
        "<span id='winner-close-pou' onclick='hideWinner();'>X</span>" + 
        "<h1 id='title-pou'>Félicitation</h1>" +
        "<div id='img-box'><img src='images/poufsoufle.png' id='pou-logo' /><p>Gagne avec<br> <span id='span-points'>" + pouPoints + "</span> points</p></div>";
        document.getElementById("pagePoints").appendChild(winnerBox);
    }
}