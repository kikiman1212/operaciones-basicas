

(async() => {
    const {value: Operaciones} = await Swal.fire({
        title: 'Bienvenido a mi página de operaciones básicas', 
        text: 'Te saluda Kiko',
        icon: '',
        confirmButtonText: 'Selecciona tu Escolaridad',
        footer: 'Te presento una pequeña guía básica  de practicar operaciones',
        imageUrl: './img/multi.jpg',
        imageWidth: '400px',
        imageAlt: 'Operaciones',
        inputPlacehoolder:'Ingresa Grado de Escolaridad',
        input:"select",
        inputValue: '',
        inputOptions: {
            Kinder: 'Kinder',
            Primaria: 'Primaria',
            Secundaria: 'Secundaria',
        }
        });
        if (Operaciones){
            Swal.fire({
                title: `Selecionaste ${Operaciones}`
            });
        
        
        }

})()







