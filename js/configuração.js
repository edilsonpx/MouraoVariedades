var  firebaseConfig = {
        apiKey: "AIzaSyAlyKAt0Eg57cb8GZDalCaEwIALPWPAEds",
        authDomain: "painel-loguin.firebaseapp.com",
        projectId: "painel-loguin",
        storageBucket: "painel-loguin.appspot.com",
        messagingSenderId: "24549930727",
        appId: "1:24549930727:web:98a17c160e55172c4bd442"
      };
        firebase.initializeApp(firebaseConfig);

        const storage = firebase.storage();
        const db = firebase.firestore();
        const auth = firebase.auth();

        const provider = new firebase.auth.GoogleAuthProvider();


    
                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('caixa').onSnapshot((data) => {
            let list = document.querySelector('.container-pedidos');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                 //PUXAR PEDIDOS DO FIRESTORE
                db.collection('carregador').onSnapshot((data) => {
            let list = document.querySelector('.container-carregador');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


              //PUXAR PEDIDOS DO FIRESTORE
                db.collection('variedades').onSnapshot((data) => {
            let list = document.querySelector('.container-variedades');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo1').onSnapshot((data) => {
            let titulo1 = document.querySelector('.container-titulo1');
            titulo1.innerHTML = "";
            data.docs.map((val) => {
                titulo1.innerHTML += `

                <div id="central-ID-titulo" class="central"></div>
                    <div id="container-titulo-ID" class="container-titulo1">
                        <div id="card-ID-titulo" class="card-titulo">
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })

                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo2').onSnapshot((data) => {
            let titulo2 = document.querySelector('.container-titulo2');
            titulo2.innerHTML = "";
            data.docs.map((val) => {
                titulo2.innerHTML += `

                <div id="central-ID-titulo" class="central"></div>
                    <div id="container-titulo-ID" class="container-titulo2">
                        <div id="card-ID-titulo" class="card-titulo">
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })



            //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo3').onSnapshot((data) => {
            let titulo3 = document.querySelector('.container-titulo3');
            titulo3.innerHTML = "";
            data.docs.map((val) => {
                titulo3.innerHTML += `
                <div id="central-ID-titulo" class="central"></div>
                    <div id="container-titulo-ID" class="container-titulo3">
                        <div id="card-ID-titulo" class="card-titulo">
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })





