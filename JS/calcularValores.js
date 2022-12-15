/*
VALOR - VALOR DA PREFEITURA
TIPO SERV - TIPO DE SERVIÇO - 1- Somente estetica, 2- Somente Performance, 3- Ambos (1 e 2), 4- full Tunning

//LOGIN: lossantos
//SENHA: venice




engines = { 0, 12250, 22250, 32250, 42250, 52250 },
    brakes = { 0, 22250, 32250, 42250, 52250, 62250 },
    transmission = { 0, 17250, 27250, 37250, 47250, 57250 },
    suspension = { 0, 12250, 22250, 32250, 42250, 52250 },
    shield = { 0, 27250, 42250, 57250, 72250, 87250 },
*/
//VARIAVEIS PARA ADICIONAR VALORES AOS ITENS:
var valor = 0, tipoServ = 0;

//VARIAVEIS PARA ADICIONAR QUANTIDADE NOS ITENS:
var itemAddEst = 0,itemAddAcc=0, itemAddPerf = 0, itemAddPintura = 0, itemADDPerfFull = false, itemPerfFullEng = false, itemPerfFullFreio = false;
var itemPerfFullBlind = false, itemPerfFullSusp = false, itemPerfFullTrans = false, turbofull=false;
var ckturbo= false, ckturbo= false;

//PREÇOS DE CUSTO DE CADA CATEGORIA:
precoCusto = {
    cosmetics: 1000,
    respray: 1000,
    turbo: 7250,
    wheels: 950,
    customwheels: 950,
    wheelsmoke: 550,
    windowtint: 550,
    neonside: 1000,
    neoncolours: 550,
    headlights: 250,
    xenoncolours: 550,
    policelivery: 125,
    plateindex: 1000,
    engines : [ 0, 6125, 11125, 16125, 21125, 26125 ],
    brakes : [ 0, 11125, 16125, 21125, 26125, 31125 ],
    transmission : [ 0, 8625, 13625, 18625, 23625, 28625 ],
    suspension : [ 0, 6125, 11125, 16125, 21125, 26125 ],
    shield: [0, 27250, 42250, 57250, 72250, 87250],
}


function calcularValores(servico, opc, calculo) {//tipo de serviço, calculo = adição ou subtração, opc=numero do motor

    //PASSANDO OS PARAMETROS PARA INTEIRO, NA CASA DECIMAL!
    parseInt(document.getElementById("precoCusto").value, 10);
    parseInt(document.getElementById("txAcessorios").value, 10);
    parseInt(document.getElementById("txnPintura").value, 10);
    //PASSANDO OS VALORES EM REAL:
    parseFloat(document.getElementById("precoVenda").value, 10);


    //INICIANDO CONDIÇOES PARA OS DIFERENTES SERVIÇOS:
    switch (servico) {
        case 1:
            if (calculo == 1) {
                valor = precoCusto.cosmetics + valor;
                itemAddEst++;
                itemAddAcc++;

            } else {
                if (itemAddEst > 0) {
                    valor -= precoCusto.cosmetics;
                    itemAddEst--;
                    itemAddAcc--;

                } else {
                    alert("Valor Zerado");
                }

            }

            break;
        case 2:
            if (calculo == 1) {
                valor += precoCusto.respray;
                itemAddPintura++;
                itemAddEst++;
            } else {
                if (itemAddPintura > 0) {
                    valor -= precoCusto.respray;
                    itemAddPintura--;
                    itemAddEst--;
                }else{
                    alert("Valor Zerado");
                }
            }

            break;
        case 3:
            ckturbo=document.getElementById("turbo");
            if (ckturbo.checked) {
                valor += precoCusto.turbo;
                itemAddPerf++;
                turbofull=true;
            } else {
                valor -= precoCusto.turbo;
                turbofull=false;
                itemAddPerf--;
            }

            break;
        case 4:
            let ckroda=document.getElementById("Rodas");
            if (ckroda.checked) {
                valor += precoCusto.wheels;
                itemAddEst++;
            } else {
                valor -= precoCusto.wheels;
                itemAddEst--;
            }
            break;
        case 5:
            let ckrodaC=document.getElementById("RodasC");
            if (ckrodaC.checked) {
                itemAddEst++;
                valor += precoCusto.customwheels;
            } else {
                valor -= precoCusto.customwheels;
                itemAddEst--;
            }
            break;

        case 6:
            let ckrodaS=document.getElementById("RodasF");
            if (ckrodaS.checked) 
            {
                itemAddEst++;
                valor += precoCusto.wheelsmoke;
            } else {
                valor -= precoCusto.wheelsmoke;
                itemAddEst--;
            }

            break;
        case 7:
            let ckcorJ=document.getElementById("pelicula");
            if (ckcorJ.checked) {
                itemAddEst++;
                valor += precoCusto.windowtint;
            } else {
                valor -= precoCusto.windowtint;
                itemAddEst--;
            }

            break;
        case 8:
            let ckneon=document.getElementById("neon");
            if (ckneon.checked) {
                itemAddEst++;
                valor += precoCusto.neonside;
            } else {
                valor -= precoCusto.neonside;
                itemAddEst--;
            }

            break;
        case 9:
            let ckneonC=document.getElementById("neonC");
            if (ckneonC.checked) {
                itemAddEst++;
                valor += precoCusto.neoncolours;
            } else {
                valor -= precoCusto.neoncolours;
                itemAddEst--;
            }
            break;
        case 10:
            let ckxenon=document.getElementById("Xenon");
            if (ckxenon.checked) {
                itemAddEst++;
                valor += precoCusto.headlights;
            } else {
                valor -= precoCusto.headlights;
                itemAddEst--;
            }

            break;
        case 11:
            let ckxenonc=document.getElementById("XenonC");
            if (ckxenonc.checked) {
                itemAddEst++;
                valor += precoCusto.xenoncolours;
            } else {
                valor -= precoCusto.xenoncolours;
                itemAddEst--;
            }


            break;
        case 12:
            let ckadesivo=document.getElementById("Adesivo");
            if (ckadesivo.checked) {
                valor += precoCusto.policelivery;
                itemAddEst++;
            } else {
                valor -= precoCusto.policelivery;
                itemAddEst--;
            }
            break;
        case 13:
            let ckplaca=document.getElementById("Placa");
            if (ckplaca.checked) {
                valor += precoCusto.plateindex;
                itemAddEst++;
            } else {
                valor -= precoCusto.plateindex;
                itemAddEst--;
            }

            break;

        case 14:
            
            if (calculo == 1) {
                opc = document.getElementById("nMotor").value;
                document.getElementById("limparVlMotor").disabled = false;
                document.getElementById("addVlMotor").disabled = true;
                document.getElementById("nMotor").disabled = true;
                valor += precoCusto.engines[opc];
                itemAddPerf++;
                
            } else {
                opc = document.getElementById("nMotor").value;
                document.getElementById("limparVlMotor").disabled = true;
                document.getElementById("addVlMotor").disabled = false;
                document.getElementById("nMotor").disabled = false;
                valor -= precoCusto.engines[opc];
                itemAddPerf--;
               
            }

            break;
        case 15:
            if (calculo == 1) {
                opc = document.getElementById("nFreio").value;
                document.getElementById("limparVlFreio").disabled = false;
                document.getElementById("addVlFreio").disabled = true;
                document.getElementById("nFreio").disabled = true;
                valor += precoCusto.brakes[opc];
                itemAddPerf++
                
            } else {
                opc = document.getElementById("nFreio").value;
                document.getElementById("limparVlFreio").disabled = true;
                document.getElementById("addVlFreio").disabled = false;
                document.getElementById("nFreio").disabled = false;
                valor -= precoCusto.brakes[opc];
                itemAddPerf--;
                
            }
            break;

        case 16:
            if (calculo == 1) {
                opc = document.getElementById("nTrans").value;
                document.getElementById("limparVlTrans").disabled = false;
                document.getElementById("addVlTrans").disabled = true;
                document.getElementById("nTrans").disabled = true;
                valor += precoCusto.transmission[opc];
                itemAddPerf++;
               

            } else {
                opc = document.getElementById("nTrans").value;
                document.getElementById("limparVlTrans").disabled = true;
                document.getElementById("addVlTrans").disabled = false;
                document.getElementById("nTrans").disabled = false;
                valor -= precoCusto.transmission[opc];
                itemAddPerf--;
               
            }

            break;
        case 17:
            if (calculo == 1) {
                opc = document.getElementById("nSusp").value;
                document.getElementById("limparVlSusp").disabled = false;
                document.getElementById("addVlSusp").disabled = true;
                document.getElementById("nSusp").disabled = true;
                valor += precoCusto.suspension[opc];
                itemAddPerf++
                
            } else {
                opc = document.getElementById("nSusp").value;
                document.getElementById("limparVlSusp").disabled = true;
                document.getElementById("addVlSusp").disabled = false;
                document.getElementById("nSusp").disabled = false;
                valor -= precoCusto.suspension[opc];
                itemAddPerf--
               
            }

            break;

        case 18:
            if (calculo == 1) {
                opc = document.getElementById("nBlind").value;
                document.getElementById("limparVlBlind").disabled = false;
                document.getElementById("addVlBlind").disabled = true;
                document.getElementById("nBlind").disabled = true;
                valor += precoCusto.shield[opc];
                itemAddPerf++;
               
            } else {
                opc = document.getElementById("nBlind").value;
                document.getElementById("limparVlBlind").disabled = true;
                document.getElementById("addVlBlind").disabled = false;
                document.getElementById("nBlind").disabled = false;
                valor -= precoCusto.shield[opc];
                itemAddPerf--;
                
            }

            break;

            case 19:
            let ckbuzina=document.getElementById("Buzina");
            if (ckbuzina.checked) {
                valor += precoCusto.respray;
                itemAddEst++;
            } else {
                valor -= precoCusto.respray;
                itemAddEst--;
            }

            break;

    }

    PerformanceFull();

    
}


function PerformanceFull(){
    let ckmotorFull=document.getElementById("MotorFull");
    let ckfreioFull=document.getElementById("FreioFull");
    let cksuspFull=document.getElementById("SuspensaoFull");
    let cktransFull=document.getElementById("TransmissaoFull");

   

    if(ckmotorFull.checked){
        itemPerfFullEng = true;
      
    }else{
        itemPerfFullEng = false;
    }

    if(ckfreioFull.checked){
        itemPerfFullFreio = true;
    }else{
        itemPerfFullFreio = false;
    }

    if(cksuspFull.checked){
        itemPerfFullSusp = true;
    }else{
        itemPerfFullSusp = false;
    }

    if(cktransFull.checked){
        itemPerfFullTrans = true;
    }else{
        itemPerfFullTrans = false;
    }

    document.getElementById("precoCusto").value = valor;
    document.getElementById("txAcessorios").value = itemAddAcc;
    document.getElementById("txnPintura").value = itemAddPintura;

    // SETAR CONDIÇOES PARA ENTRAR NAS PORCENTAGENS":
    if (itemAddEst > 0 && itemAddPerf > 0) {
        tipoServ = 3;
        
    } else {
        if (itemAddEst > 0 && itemAddPerf==0) {
            tipoServ = 1;
        }else{
            if(itemAddEst==0 && itemAddPerf>0){
                tipoServ=2;
            }
            
        }
    }
    

    if(itemPerfFullEng&&itemPerfFullFreio&&itemPerfFullSusp&&itemPerfFullTrans&&turbofull){
        tipoServ=4
    }
    

        


   
    console.log(tipoServ)
    

    calcularPerc();
}

function calcularPerc() { //calcular percentual dos tipos de Serviço
    let valorFinal = 0, valorLucro = 0;

    switch (tipoServ) {

        case 1:
            valorFinal = valor + valor * 0.40;
            valorLucro = valor * 0.40;
            break;

        case 2:
            valorFinal = valor + valor * 0.30;
            valorLucro = valor * 0.30;
            break;

        case 3:
            valorFinal = valor + valor * 0.18;
            valorLucro = valor * 0.18;
            break;

        case 4:
            valorFinal = valor + valor * 0.20;
            valorLucro = valor * 0.20;

            break;

    }

   /* Somente Estética ......................................................... 40% em cima do valor.
    Somente Performance ................................................ 30% em cima do valor.
    Variedade Estética/Performance ............................ 18% em cima do valor.
    Full Tunning  .................................................................. 20% em cima do valor.
*/
    document.getElementById("precoVenda").value = valorFinal;
    document.getElementById("lucro").value = valorLucro;
}