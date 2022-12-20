function multiplicar(){
    var valor1 = document.getElementById('txtv1')
    var tab = document.getElementById ('seltab')
    if (valor1.value.length == 0){
        window.alert('Por favor, digite um numero!')
    } else {
        let n = Number(valor1.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}