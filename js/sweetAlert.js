

(async() => {
    const {value: Operaciones} = await Swal.fire({
        title: 'Bienvenido a mi pagina de Operaciones Basicas', 
        text: 'Te saluda Kiko',
        icon: '',
        confirmButtonText: 'Seleciona tu Escolaridad',
        footer: 'Te presento una pequeña guia basica de practicar operaciones',
        imageUrl: './img/multi.jpg',
        imageWidth: '400px',
        imageAlt: 'Operaciones',
        input:"select",
        inputPlacehoolder:'Ingresa Grado de Escolaridad',
        inputValue: '',
        inputOptions: {
            Kinder: 'Kinder',
            Primaria: 'Primaria',
            Secundaria: 'Secundaria',
            Preparatoria: 'Preparatoria'
        }
        });
        if (Operaciones){
            Swal.fire({
                title: `Selecionaste ${Operaciones}`
            });
        
        
        }

})()




